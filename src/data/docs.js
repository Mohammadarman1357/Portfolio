export const DOCS_SECTIONS = [
  {
    id: 'architecture',
    title: 'High-Scale Event-Driven Architecture',
    subtitle: 'Blueprint for Resilient Financial & Telemetry Workloads',
    badge: 'System Design',
    readTime: '6 min read',
    tags: ['Microservices', 'Kafka', 'CQRS', 'Event Sourcing'],
    summary: 'A deep dive into decoupling transaction processing from analytics pipelines using Apache Kafka, Redis caching layers, and outbox pattern to guarantee zero data loss at 50,000 requests/sec.',
    codeSnippet: {
      filename: 'tax-engine.service.ts',
      language: 'typescript',
      code: `// Tax Genius Neural Matching Pipeline
import { LedgerStream, DeductRuleMatcher } from '@tax-genius/core';

export class TaxOptimizationPipeline {
  private matcher: DeductRuleMatcher;

  constructor(private readonly ledgerStream: LedgerStream) {
    this.matcher = new DeductRuleMatcher({
      confidenceThreshold: 0.96,
      jurisdiction: 'US_FEDERAL_AND_STATE',
      enableRealtimeRecalculation: true,
    });
  }

  public async processTransactionBatch(batchId: string): Promise<OptimizationResult> {
    const transactions = await this.ledgerStream.pullBatch(batchId);
    
    // Concurrently evaluate statutory exemptions & credit opportunities
    const writeOffs = await Promise.all(
      transactions.map(tx => this.matcher.evaluateTransaction(tx))
    );

    return {
      batchId,
      totalSaved: writeOffs.reduce((sum, item) => sum + item.deductibleAmount, 0),
      auditDossierReady: true,
      timestamp: new Date().toISOString()
    };
  }
}`
    }
  },
  {
    id: 'rest-api',
    title: 'Tax Genius REST & GraphQL API Specification',
    subtitle: 'Zero-Knowledge Tax Ingestion & Deduction Endpoints',
    badge: 'API Reference',
    readTime: '4 min read',
    tags: ['OpenAPI 3.1', 'GraphQL', 'JWT Auth', 'Rate Limiting'],
    summary: 'Complete API contracts for third-party integrations, webhook callbacks, and encrypted tax ledger verification tokens.',
    codeSnippet: {
      filename: 'api-spec.json',
      language: 'json',
      code: `{
  "openapi": "3.1.0",
  "info": {
    "title": "Tax Genius Autonomous API",
    "version": "2.4.0",
    "description": "High-speed deduction & filing endpoints"
  },
  "paths": {
    "/v2/deductions/evaluate": {
      "post": {
        "summary": "Evaluate expense eligibility",
        "parameters": [],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "amount": { "type": "number", "example": 4250.00 },
                  "category": { "type": "string", "example": "R&D Software Tooling" },
                  "jurisdiction": { "type": "string", "example": "US-CA" }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Eligible deduction estimate and statutory legal basis"
          }
        }
      }
    }
  }
}`
    }
  },
  {
    id: 'performance',
    title: 'Frontend Performance & Skeuomorphic UI Engineering',
    subtitle: '60 FPS Micro-Interactions & GPU Layer Acceleration',
    badge: 'Frontend Engineering',
    readTime: '5 min read',
    tags: ['Framer Motion', 'GSAP', 'Lenis', 'CSS Transforms'],
    summary: 'Best practices for implementing tactile, physics-based UI components without layout thrashing or compositor bottlenecks in React.',
    codeSnippet: {
      filename: 'useTactileMotion.ts',
      language: 'typescript',
      code: `import { useSpring, useTransform, MotionValue } from 'framer-motion';

export function useTactileElevation(dragProgress: MotionValue<number>) {
  const shadowSpread = useTransform(dragProgress, [0, 1], [4, 18]);
  const lightingIntensity = useTransform(dragProgress, [0, 1], [0.8, 1.0]);

  const smoothShadow = useSpring(shadowSpread, {
    stiffness: 400,
    damping: 28,
    mass: 0.8
  });

  return { smoothShadow, lightingIntensity };
}`
    }
  }
];
