---
title: 'Your Monolith Is Already a Distributed System'
description: 'Single deployable unit, multiple failure domains—the network is already in the picture.'
pubDate: 2026-03-15
---

Teams often postpone "real" distributed systems work until they split the monolith. But if your application talks to a database, cache, message broker, and third-party APIs, you are already distributed. The process boundary is just one more hop.

## Failure domains you already have

- **Database connection pool exhaustion** — looks like an app bug, originates in the network path to Postgres
- **Cache stampede** — thundering herd when TTLs align
- **Partial writes** — user created, welcome email failed; now support owns consistency
- **Clock skew** — JWT validation, scheduled jobs, and lease timeouts all assume synchronized time

None of these require microservices. They require the same discipline: timeouts, retries with jitter, idempotency, and observability that spans process boundaries.

## What the monolith still buys you

Refactoring inside one repo is cheaper than coordinating schema migrations across twelve services. Use that leverage. Invest in modular boundaries *within* the monolith—clear package ownership, integration tests at module edges, and feature flags for risky paths.

Split when organizational or scaling constraints demand independent deploy cadence—not because Netflix wrote about microservices.

## The lesson

Distributed systems thinking is not about container count. It is about assuming failure at every boundary—including the one between your function and `localhost:5432`.
