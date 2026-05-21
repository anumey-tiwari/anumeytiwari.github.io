---
title: 'Idempotency Keys in Distributed APIs'
description: 'Why every write path needs a replay strategy—and how to implement idempotency without turning your datastore into a junk drawer.'
pubDate: 2026-05-10
---

Network failures are not edge cases. Clients retry. Load balancers replay. At-least-once delivery is the default assumption in distributed systems, which means your API must tolerate duplicate requests without corrupting state.

## The contract

An idempotent operation produces the same outcome whether you execute it once or many times. For HTTP, `GET` and `PUT` are naturally idempotent; `POST` is not—unless you add an explicit idempotency key.

```http
POST /v1/transfers
Idempotency-Key: 7f3c2a1b-9e4d-4c8a-b2f1-6d0e5a9c3b7f
```

The server stores the key with the response for a TTL window. Duplicate requests with the same key return the cached response instead of re-executing side effects.

## Storage design

Keep the idempotency record lean:

- **Key** — client-provided UUID, scoped per tenant or user
- **Request hash** — optional guard against key reuse with different payloads
- **Response snapshot** — status code and body (or reference ID)
- **Expiry** — 24–72 hours is typical for payment flows

Use a fast KV store (Redis, DynamoDB) with conditional writes. The first writer wins; concurrent duplicates block on the same key or read the committed result.

## Failure modes to watch

1. **Partial execution** — persist the key only after the transaction commits, or mark `processing` states explicitly.
2. **Key collision** — reject mismatched payloads for the same key with `409 Conflict`.
3. **Unbounded growth** — TTL eviction is mandatory; never treat the idempotency table as permanent audit storage.

Idempotency is cheap insurance. The alternative—manual reconciliation after duplicate charges—is never cheap.
