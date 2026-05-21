export const site = {
  name: 'Anumey Tiwari',
  title: 'Anumey Tiwari — Staff Backend Engineer',
  description:
    'Staff Backend Engineer building distributed systems at scale. Writing about systems, backends, and engineering leadership.',
  url: 'https://anumeytiwari.github.io',
  heroTagline: 'Staff Backend Engineer building distributed systems at scale',
  heroSubtitle: 'systems, backends, and reliability at scale. always building.',
  email: 'hello@anumeytiwari.dev',
  social: {
    github: 'https://github.com/anumeytiwari',
    linkedin: 'https://www.linkedin.com/in/anumeytiwari',
    twitter: 'https://twitter.com/anumeytiwari',
  },
} as const;

export const about = `I am a Staff Backend Engineer focused on distributed systems, high-throughput APIs, and platform reliability. I have spent years designing services that survive traffic spikes, partial failures, and evolving product requirements without sacrificing operability.

My work spans event-driven architectures, data pipelines, and the operational glue—observability, SLOs, and graceful degradation—that keeps production calm when things get interesting. I enjoy going deep on trade-offs and sharing what I learn through writing and mentoring.`;

export const experience = [
  {
    company: 'Adobe',
    role: 'Staff Backend Engineer',
    period: '2022 — Present',
    location: 'Remote',
    highlights: [
      'Led design of multi-tenant ingestion pipelines serving millions of events per day.',
      'Reduced p99 latency by 40% through caching strategy and query path optimization.',
      'Established SLOs and error budgets across critical platform services.',
    ],
  },
  {
    company: 'Amazon',
    role: 'Senior Software Engineer',
    period: '2019 — 2022',
    location: 'Seattle, WA',
    highlights: [
      'Built fault-tolerant microservices on AWS for high-volume retail workloads.',
      'Designed cross-region failover patterns for stateful workflow orchestration.',
      'Mentored engineers on distributed systems fundamentals and on-call practices.',
    ],
  },
  {
    company: 'Freecharge',
    role: 'Software Engineer',
    period: '2016 — 2019',
    location: 'Gurugram, India',
    highlights: [
      'Shipped payment and wallet APIs with strict consistency and audit requirements.',
      'Improved checkout reliability during peak sale events through circuit breakers.',
      'Introduced structured logging and tracing across core transaction paths.',
    ],
  },
] as const;

export const projects = [
  {
    name: 'EventMesh',
    description:
      'Lightweight event router with at-least-once delivery, dead-letter queues, and pluggable sinks for Kafka and SQS.',
    tags: ['Go', 'Kafka', 'Distributed Systems'],
    link: 'https://github.com/anumeytiwari',
  },
  {
    name: 'SLO Dashboard',
    description:
      'Open-source toolkit to define SLIs, burn-rate alerts, and error-budget reports from Prometheus metrics.',
    tags: ['TypeScript', 'Prometheus', 'SRE'],
    link: 'https://github.com/anumeytiwari',
  },
  {
    name: 'RateGuard',
    description:
      'Token-bucket rate limiter library with Redis-backed global quotas and per-tenant fairness policies.',
    tags: ['Rust', 'Redis', 'API Gateway'],
    link: 'https://github.com/anumeytiwari',
  },
] as const;
