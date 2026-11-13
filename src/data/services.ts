export type Service = {
  slug: string
  title: string
  tagline: string
  shortDescription: string
  intro: string
  offerings: string[]
  note?: string
  approach?: string
  insight?: string
  fundingJourney?: string[]
  icon: string
  bentoSpan?: 'default' | 'wide' | 'tall'
}

export const services: Service[] = [
  {
    slug: 'business-registration-incorporation',
    title: 'Business Registration & Incorporation',
    tagline: 'Build the Right Foundation',
    shortDescription: 'Establish the right legal structure for ownership, liability and growth.',
    intro:
      'Choosing and registering the right business structure is the foundation for ownership clarity, compliance readiness and long-term growth. We support entrepreneurs and organisations through documentation and coordination for incorporation and related filings.',
    offerings: [
      'Private Limited Company',
      'LLP',
      'One Person Company (OPC)',
      'Partnership Firm and Proprietorship',
      'Section 8 Company, Trust and Society',
      'Public Limited and Producer Company',
      'DSC/DIN coordination, name approval and incorporation documents',
      'MOA/AOA, registered office, director and shareholding change documentation',
    ],
    note: 'A suitable structure depends on ownership, liability, governance, taxation and operational requirements. Statutory filings and professional sign-offs are handled by appropriately qualified professionals where required.',
    icon: 'Building2',
    bentoSpan: 'wide',
  },
  {
    slug: 'government-registrations-certifications',
    title: 'Government Registrations & Certifications',
    tagline: 'Make Your Business Ready to Operate',
    shortDescription: 'Coordinate key registrations and certifications your operations may require.',
    intro:
      'Operating lawfully often requires a set of registrations and certifications that vary by activity, location and product. We help identify relevant requirements and coordinate documentation for applications.',
    offerings: [
      'Udyam/MSME, GST and Startup India/DPIIT',
      'FSSAI, Import Export Code and Shop & Establishment',
      'Trade Licence, Professional Tax, EPFO and ESIC coordination',
      'ISO 9001, 14001, 27001, 45001 and 22000',
      'ZED, BIS, HACCP and GMP',
      'NSIC, GeM, RCMC and sector-specific registrations',
      'CE-related certification coordination',
    ],
    note: 'Applicability varies by activity, location, product and regulatory requirements. Certification decisions rest with the relevant body or authority.',
    icon: 'BadgeCheck',
  },
  {
    slug: 'funding-grants-subsidy-assistance',
    title: 'Funding, Grants & Subsidy Assistance',
    tagline: 'Prepare Well Before You Apply',
    shortDescription: 'Strengthen documentation and readiness before approaching schemes or lenders.',
    intro:
      'Funding journeys work better when the business case, documentation and eligibility are clear before an application is filed. We support scheme advisory, documentation coordination and structured follow-up.',
    offerings: [
      'Scheme advisory: PMEGP, CGTMSE, MUDRA and Stand-Up India',
      'PMFME and relevant startup programmes',
      'NIDHI programmes, TIDE 2.0 and sector-specific schemes',
      'Agriculture Infrastructure Fund and PM-KUSUM',
      'Bank/NBFC loans, term loans, working capital and project finance',
      'DPRs, business plans, financial projections and CMA coordination',
      'Cash flows, cost estimates, means of finance and feasibility',
    ],
    fundingJourney: [
      'Business Assessment',
      'Scheme Identification',
      'Documentation',
      'Application Support',
      'Follow-up',
    ],
    note: 'Eligibility, funding, subsidy and approval are subject to scheme rules and lender or authority decisions.',
    icon: 'Wallet',
    bentoSpan: 'tall',
  },
  {
    slug: 'startup-innovation-ecosystem',
    title: 'Startup & Innovation Ecosystem',
    tagline: 'Transform Ideas into Scalable Businesses',
    shortDescription: 'Support founders with recognition, readiness and go-to-market clarity.',
    intro:
      'Early-stage ventures need more than an idea — they need a clear proposition, evidence of market need and a realistic execution plan. We support founders across recognition, readiness and ecosystem coordination.',
    offerings: [
      'DPIIT recognition assistance and startup profile development',
      'Business model development and pitch decks',
      'Investor readiness and funding strategy',
      'Incubator and accelerator coordination',
      'Mentorship and advisory coordination',
      'MVP and proof-of-concept planning',
      'Market validation and go-to-market strategy',
    ],
    insight:
      'A clear proposition, evidence of market need and a realistic execution plan can help founders communicate their opportunity more effectively.',
    icon: 'Rocket',
  },
  {
    slug: 'ngo-trust-section-8-consultancy',
    title: 'NGO, Trust & Section 8 Consultancy',
    tagline: 'Supporting Purpose-Driven Organisations',
    shortDescription: 'Registration, governance and funding documentation for non-profits.',
    intro:
      'Purpose-driven organisations need clear registration pathways, governance documentation and funding-ready project materials. We coordinate support for trusts, societies and Section 8 companies.',
    offerings: [
      'Trust, Society and Section 8 Company registration',
      'NGO Darpan, 12A, 80G and CSR-1 assistance',
      'FCRA-related specialist coordination',
      'NGO compliance and governance documentation',
      'Project proposals and CSR funding documentation',
      'Impact, programme and project reports',
    ],
    note: 'Regulatory eligibility and approvals depend on applicable law and the relevant authority. Specialist legal, tax and audit work is coordinated with qualified professionals.',
    icon: 'HeartHandshake',
  },
  {
    slug: 'taxation-accounting-financial-compliance',
    title: 'Taxation, Accounting & Financial Compliance',
    tagline: 'Keep Your Business Financially Organised',
    shortDescription: 'Documentation and coordination for everyday financial compliance.',
    intro:
      'Organised books, timely filings and clear financial documentation support better decisions. We assist with accounting coordination, return documentation and compliance workflows.',
    offerings: [
      'GST registration and return documentation/filing coordination',
      'Income tax return support and TDS compliance',
      'Accounting, bookkeeping and financial statements',
      'Payroll documentation and ROC/MCA compliance coordination',
      'Audit coordination and tax planning support',
      'Financial due diligence and Virtual CFO support',
    ],
    note: 'Consultancy and documentation assistance are distinguished from statutory attestations, audit opinions and other work requiring qualified CA, CS or other professional sign-off.',
    icon: 'Calculator',
  },
  {
    slug: 'legal-contracts-intellectual-property',
    title: 'Legal, Contracts & Intellectual Property',
    tagline: 'Protect Your Business and Its Interests',
    shortDescription: 'IP filing coordination and commercial documentation support.',
    intro:
      'Protecting brand assets, ideas and commercial relationships requires careful documentation. We assist with IP filing coordination and standard commercial agreements, working with qualified professionals where regulated work is required.',
    offerings: [
      'Trademark and copyright registration assistance',
      'Patent filing coordination and design registration',
      'NDAs, MoUs and founder agreements',
      'Shareholder and partnership agreements',
      'Employment, vendor and service agreements',
      'Commercial contract and corporate governance documentation',
    ],
    note: 'Regulated legal work, legal opinions and representation are handled through appropriately qualified legal professionals.',
    icon: 'Scale',
  },
  {
    slug: 'government-tenders-procurement',
    title: 'Government Tenders & Procurement',
    tagline: 'Build Your Route to Government Opportunities',
    shortDescription: 'Vendor registration, bid documentation and tender compliance support.',
    intro:
      'Government procurement can open meaningful opportunities when eligibility, documentation and bid quality are handled carefully. We support vendor registration and tender documentation coordination.',
    offerings: [
      'GeM seller registration and government vendor registration',
      'Tender discovery and eligibility assessment',
      'Technical and financial bid documentation',
      'EMD and security deposit guidance',
      'Bid submission coordination',
      'NSIC registration assistance',
      'Procurement documentation and tender compliance checklist',
    ],
    note: "Tender outcomes depend on the procuring entity's requirements, evaluation process and applicable procurement rules.",
    icon: 'FileSearch',
  },
  {
    slug: 'branding-digital-marketing',
    title: 'Branding & Digital Marketing',
    tagline: 'Make Your Business More Visible',
    shortDescription: 'Brand identity, content and performance marketing aligned to your audience.',
    intro:
      'Visibility matters when it is rooted in a clear brand and channels that match your audience. We support identity work, content and performance marketing scoped to objectives and budget.',
    offerings: [
      'Logo design and brand identity',
      'Company profiles, brochures, pitch decks and catalogues',
      'SEO, social media and content marketing',
      'Google Ads, Meta Ads and LinkedIn marketing',
      'Email, WhatsApp and local marketing',
      'Lead generation and performance marketing',
      'Google Business Profile, online reputation and PR support',
    ],
    approach:
      'Channel selection and campaign scope are aligned with target audience, objectives, budget and available performance data.',
    icon: 'Megaphone',
  },
  {
    slug: 'website-software-technology',
    title: 'Website, Software & Technology',
    tagline: 'Build a Strong Digital Foundation',
    shortDescription: 'Websites, business systems and automation built around your processes.',
    intro:
      'Digital tools should reflect how your organisation actually works. We design and implement websites, business systems and automation scoped to processes, integrations and security needs.',
    offerings: [
      'Corporate, business, e-commerce and portfolio websites',
      'Landing pages and WordPress websites',
      'Custom CRM, ERP and HRMS systems',
      'Inventory, billing and business dashboards',
      'Workflow automation, APIs and SaaS applications',
      'Mobile application development',
      'Domain, hosting, business email and cloud deployment',
      'Maintenance, security hardening, backup and migration',
    ],
    approach:
      'Technology scope is defined according to business processes, integrations, security needs and implementation priorities.',
    icon: 'Code2',
    bentoSpan: 'wide',
  },
  {
    slug: 'business-strategy-growth-advisory',
    title: 'Business Strategy & Growth Advisory',
    tagline: 'Make Your Next Move with Confidence',
    shortDescription: 'Practical advisory for planning, expansion and operating improvement.',
    intro:
      'Growth decisions are clearer when they rest on goals, resources and market context. We help organisations develop plans, assess feasibility and structure next steps.',
    offerings: [
      'Business and operating plans',
      'Business model development and feasibility studies',
      'Market research and competitor analysis',
      'Market expansion and revenue growth strategy',
      'Sales strategy and business development',
      'Partnership and franchise consulting',
      'Product launch and process improvement',
      'Business restructuring and management advisory',
    ],
    approach:
      "Recommendations are developed around the client's goals, available resources, market context and implementation capacity.",
    icon: 'TrendingUp',
  },
  {
    slug: 'export-import-international-business',
    title: 'Export, Import & International Business',
    tagline: 'Prepare for Opportunities Beyond Your Current Market',
    shortDescription: 'Trade readiness, documentation and market-entry advisory.',
    intro:
      'Cross-border opportunities require documentation readiness and a clear view of destination requirements. We support IEC-related assistance, trade documentation and international expansion advisory.',
    offerings: [
      'Import Export Code assistance',
      'Export documentation and RCMC coordination',
      'AD Code guidance and Certificate of Origin coordination',
      'Trade documentation and export readiness',
      'International market research',
      'Market entry strategy',
      'Supplier and distributor research',
      'International business expansion advisory',
    ],
    note: 'Requirements differ by product, destination country, transaction structure and applicable regulations.',
    icon: 'Globe2',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}
