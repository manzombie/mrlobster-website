window.MISSION_CONFIG = {
  passcode: "dvd4114B!",
  githubRepo: "manzombie/mr_lobster_rebuild",
  gistId: "f438e3b860e2a5fe35e5750e96c4ffca",
  gistToken: "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",
  anthropicKey: "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"
};

window.MISSION_TASKS = [
  {
    phase: "Week 1",
    title: "Accounts, scaffolding, deploy",
    outcome: "A deployed health endpoint at api.mrlobster.co.uk on Render. WABA verification submitted.",
    owner: "Lukasz + Claude Code",
    tasks: [
      "Open Render, Postgres, Clerk, Stripe, Twilio, ElevenLabs, Anthropic, Sentry, Axiom, UptimeRobot, Meta Business Manager.",
      "Submit Meta WABA verification with business documents, privacy policy, and use case statement.",
      "Scaffold Next.js + Fastify TypeScript repo with lint, format, and test setup.",
      "Deploy to Render and wire api.mrlobster.co.uk.",
      "Create BUILD_LOG.md and DOCS/decisions.md."
    ]
  },
  {
    phase: "Week 2",
    title: "Multi-tenant database foundation",
    outcome: "Terry exists as a tenant row. Config-as-data is real.",
    owner: "Claude Code",
    tasks: [
      "Create Render Postgres and migrations infrastructure.",
      "Add tenants, business_profiles, channels, service_catalogue, capture_fields, escalation_rules, agent_events, agent_tool_calls, audit_logs.",
      "Add tenant_id discipline and Row Level Security policies.",
      "Seed Terry from current ElevenLabs SOUL.md content.",
      "Create getTenantConfig(tenantId) helper."
    ]
  },
  {
    phase: "Week 3",
    title: "Provider abstractions + MCP scaffolding",
    outcome: "The five provider interfaces exist. MCP host is scaffolded.",
    owner: "Claude Code",
    tasks: [
      "Create LLM, Voice, Messaging, Telephony, and Calendar provider interfaces.",
      "Implement Anthropic, ElevenLabs, Twilio Messaging, and Twilio Telephony providers.",
      "Scaffold MCP host with official TypeScript SDK.",
      "Create get_business_rules MCP tool.",
      "Create get_service_catalogue MCP tool.",
      "Add telemetry middleware for latency and cost in usage_records."
    ]
  },
  {
    phase: "Week 4",
    title: "Webhook gateway + queue + persist worker",
    outcome: "A real Twilio test call flows end-to-end into Postgres. Owner alert sends.",
    owner: "Claude Code",
    tasks: [
      "Implement TwilioTelephonyProvider (generateTwiml, validateWebhook) and TwilioMessagingProvider (send, sendTemplate).",
      "Create /api/v1/twilio/incoming with signature verification and dedupe.",
      "Create /api/v1/elevenlabs/log_enquiry as signed MCP tool.",
      "Add pg-boss queue.",
      "Create persist worker to write leads.",
      "Create notify worker to send Twilio WhatsApp owner alerts.",
      "Add telemetry middleware — record latency and cost to agent_tool_calls.",
      "Run synthetic test call from ring to owner alert in under 60 seconds.",
      "Wire Sentry, Axiom, and UptimeRobot."
    ]
  },
  {
    phase: "Week 5",
    title: "Reception Agent + MCP tools + Inbox UI",
    outcome: "Reception Agent works on Terry data. Read-only Inbox shows leads.",
    owner: "Claude Code + Codex",
    tasks: [
      "Implement ElevenLabsProvider (createAgent, updateAgent, deleteAgent, getTranscript).",
      "Compose Terry SOUL from database rows.",
      "Provision ElevenLabs agent via API.",
      "Create search_faq MCP tool.",
      "Create check_escalation_triggers MCP tool.",
      "Create estimate_job_value MCP tool.",
      "Create create_lead MCP tool.",
      "Create notify_owner MCP tool.",
      "Create send_sms_fallback MCP tool.",
      "Implement structured-slots and sliding-window context pruning.",
      "Build mobile-friendly read-only Inbox UI with search, filters, and export."
    ]
  },
  {
    phase: "Week 6",
    title: "Golden dataset + eval harness",
    outcome: "50 examples labelled. Eval runs on every captured lead.",
    owner: "Lukasz + Claude Code",
    tasks: [
      "Hand-label 30 examples from Terry recordings.",
      "Generate 20 synthetic adversarial examples.",
      "Create field-level eval runner.",
      "Add block-deploy-on-regression GitHub Action.",
      "Create score_eval MCP tool.",
      "Show eval pass rate in admin dashboard."
    ]
  },
  {
    phase: "Week 7",
    title: "Reliability hardening",
    outcome: "The system pages Lukasz before Terry notices anything is wrong.",
    owner: "Claude Code + Lukasz",
    tasks: [
      "Create nightly reconciliation job against Twilio call logs.",
      "Create synthetic test tenant that runs end-to-end every 5 minutes.",
      "Add P1/P2 alert routes to WhatsApp and SMS.",
      "Implement voice failover from ElevenLabs drop to voicemail to Whisper transcript to lead.",
      "Migrate Terry WhatsApp from Twilio to Meta direct if WABA is ready."
    ]
  },
  {
    phase: "Week 8",
    title: "Pre-go-live, cutover, day 1",
    outcome: "Terry is live on v3 with rollback tested.",
    owner: "Lukasz",
    tasks: [
      "Run all 13 Saturday pre-go-live checks.",
      "Test rollback to old AWS path in under 2 minutes.",
      "Change Terry Twilio number to the new ConvAI bridge.",
      "Run live synthetic enquiry and confirm owner alert.",
      "Confirm the lead appears in Inbox UI.",
      "Write BUILD_LOG cutover entry and capture first live proof."
    ]
  },
  {
    phase: "Deferred",
    title: "Parked by design",
    outcome: "Tasks moved here are intentionally deferred — not forgotten. Use the Move button on any task to send it here, or move it to a specific week.",
    owner: "Claude Code",
    tasks: [
      "Scaffold MCP host with official TypeScript SDK (only needed if moving beyond ElevenLabs webhook pattern to full MCP protocol)."
    ]
  },
  {
    phase: "v3.0a",
    title: "Soft hardening",
    outcome: "Stabilise after Terry traffic and prepare customer #2.",
    owner: "Lukasz + Codex",
    tasks: [
      "Address first real Terry traffic issues.",
      "Polish Inbox UI.",
      "Write customer-facing onboarding script for customer #2.",
      "Manually onboard customers 2-3."
    ]
  },
  {
    phase: "v3.1",
    title: "Self-serve + Owner Assistant",
    outcome: "Customer #4 can provision themselves in under 30 minutes.",
    owner: "Future phase",
    tasks: [
      "Build six-step onboarding wizard.",
      "Add Stripe Billing for setup fee, subscription, and metered overage.",
      "Use Meta Cloud API for new tenants.",
      "Enable inbound WhatsApp customer conversations.",
      "Add customer identity layer across phone and WhatsApp.",
      "Create Owner Assistant Agent on HQ WhatsApp number.",
      "Add optional Google Calendar booking."
    ]
  },
  {
    phase: "v3.2",
    title: "Company Agent",
    outcome: "Mr. Lobster becomes the conversational company agent.",
    owner: "Future phase",
    tasks: [
      "Create Memory Agent with owner-approved updates.",
      "Create Growth Advisor Agent and Monday digest.",
      "Enable conversational config via WhatsApp HQ.",
      "Build self-building onboarding from website, Google Business, and reviews.",
      "Add SOUL auto-calibration and drift detection.",
      "Publish first case study and public uptime page."
    ]
  },
  {
    phase: "v3.3",
    title: "Verticals + scale",
    outcome: "Vertical-specific agents and outcome-based pricing.",
    owner: "Future phase",
    tasks: [
      "Productise Plumber Agent from Terry vertical.",
      "Add Heating Engineer Agent.",
      "Add Clinic Agent.",
      "Evaluate outcome-based pricing tier.",
      "Expose public API.",
      "Add web chat and Instagram DM channels."
    ]
  }
];
