---
title: 'Circuit Breakers — A Practical Primer'
description: 'Stop cascading failures by giving your services permission to fail fast when dependencies are unhealthy.'
pubDate: 2026-04-22
---

When a downstream dependency slows down, every upstream caller waits. Thread pools fill. Memory spikes. What started as one sick service becomes an outage across the fleet. Circuit breakers exist to cut that feedback loop early.

## Three states

A breaker wraps calls to a dependency and tracks recent outcomes:

| State | Behavior |
|-------|----------|
| **Closed** | Requests flow normally; failures increment a counter |
| **Open** | Requests fail immediately; no load on the dependency |
| **Half-open** | A probe request tests recovery before closing again |

The transition from closed → open happens when failures exceed a threshold within a sliding window. After a cooldown, a single probe enters half-open. Success closes the circuit; failure reopens it.

## Tuning matters more than the library

Most breakers ship with defaults that are wrong for your workload. Focus on:

- **Error budget** — distinguish timeouts from 4xx vs 5xx; don't trip on expected client errors
- **Window size** — too short causes flapping; too long keeps you open while users suffer
- **Fallback** — return cached data, degraded responses, or a clear "try again" message

## Where breakers help—and where they don't

Breakers protect **your** service from **their** outage. They do not fix the dependency. Pair them with timeouts, bulkheads, and queue-based isolation for write paths that cannot simply return an error.

If every service in the chain has a breaker but none have backpressure, you have decorated a flood— not contained it.
