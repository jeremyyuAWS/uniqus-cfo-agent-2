import React from 'react';
import { 
  DollarSign, 
  CreditCard, 
  Receipt, 
  Calendar, 
  Scale, 
  PieChart, 
  BarChart4, 
  ShoppingBag, 
  TreePine, 
  BarChart 
} from 'lucide-react';

import { Agent } from '../types';

export const agentData: Agent[] = [
  {
    id: 1,
    name: 'Cash-Flow Forecaster & Liquidity Orchestrator',
    painSolved: 'Manual cash modeling, siloed bank portals',
    kpi: '+3-5 pp WC yield',
    capabilities: 'Multivariate forecasting, Monte Carlo, bank APIs',
    icon: <DollarSign className="h-8 w-8" />,
    demoConversation: [
      { role: 'user', content: 'Show me the 30-day cash forecast for our tech division.' },
      { role: 'agent', content: 'Here\'s the 30-day forecast for the tech division. I\'m seeing a potential liquidity gap around April 18-22 due to the AWS invoice payment ($1.2M) coinciding with payroll. Would you like to see scenario options?' },
      { role: 'user', content: 'Yes, what options do we have?' },
      { role: 'agent', content: 'I\'ve identified three options to address the April liquidity gap:\n\n1. Accelerate collections from Enterprise clients Microsoft and Adobe ($1.8M available, 90% probability)\n2. Delay the AWS payment by 7 days (no penalty per terms)\n3. Temporarily draw $2M from the revolving credit facility (current utilization: 15%)\n\nBased on historical patterns, Option 1 has the highest ROI. Shall I prepare the AR acceleration notices?' },
      { role: 'user', content: 'Yes, please prepare the AR acceleration. What would be the working capital impact?' },
      { role: 'agent', content: 'Preparing AR acceleration notices for Microsoft and Adobe.\n\nWorking capital impact:\n• DSO reduction: 2.3 days this quarter\n• Yield on cash increase: +4.2 pp (due to avoiding credit facility costs)\n• Additional interest income: $14,300\n\nI\'ll also update the treasury dashboard and alert the AR team to prioritize follow-up calls. The notices will be sent with optimized timing at 8:15am local recipient time for maximum open rates.' }
    ]
  },
  {
    id: 2,
    name: 'AR Collections Prioritizer',
    painSolved: 'Long DSO, high write-offs',
    kpi: '-20–30% DSO',
    capabilities: 'Payer risk scoring, LLM collector emails',
    icon: <CreditCard className="h-8 w-8" />,
    demoConversation: [
      { role: 'user', content: 'Which accounts need immediate attention this week?' },
      { role: 'agent', content: 'I\'ve analyzed our AR aging and identified 3 high-priority accounts that need immediate attention this week:\n\n1. Acme Corp - $580K overdue by 45+ days, risk score increased by 32% based on their recent earnings miss and payment patterns\n\n2. TechGiant Inc - $320K due in 5 days with no payment processing started yet (unusual for this customer)\n\n3. InnoSystems - $175K disputed invoice that\'s been unresolved for 28 days\n\nShould I generate collection strategies for each?' },
      { role: 'user', content: 'Yes, please generate strategies for all three.' },
      { role: 'agent', content: 'Here are the tailored strategies:\n\n1. Acme Corp ($580K):\n   • Risk factors: Earnings miss, CEO transition, pattern of paying only after escalation\n   • Strategy: Immediate SVP-to-SVP call (drafted talking points), offer 2% discount for payment within 48hrs\n   • Expected recovery: 85-90% within 10 days\n\n2. TechGiant ($320K):\n   • Analysis shows invoice was sent to wrong AP contact after their March reorg\n   • Strategy: Resend to new AP director (Sarah Chen) with updated PO reference\n   • Expected recovery: 100% within 7 days\n\n3. InnoSystems ($175K dispute):\n   • Invoice line item 4 challenged (implementation services)\n   • Strategy: Offer split payment option with consulting hours credit\n   • Expected recovery: 80% immediately, 20% as service credit\n\nShall I implement these strategies?' },
      { role: 'user', content: 'Implement for TechGiant and InnoSystems, but let me review the Acme strategy first.' },
      { role: 'agent', content: 'Implementing collection strategies for TechGiant and InnoSystems:\n\n✓ TechGiant: Invoice resent to Sarah Chen with correct PO#TG-29581\n✓ InnoSystems: Split payment proposal sent to their AP team\n\nAcme Corp strategy is ready for your review in the Collections Dashboard. I\'ve also prepared talking points for the SVP call and calculated that the 2% discount ($11,600) is financially justified based on our current cost of capital (7.2%) and expected 30+ day acceleration.' }
    ]
  },
  {
    id: 3,
    name: 'AP & Payment-Run Optimizer',
    painSolved: 'Duplicate invoices, missed discounts',
    kpi: '+1-2 pp EBITDA',
    capabilities: 'OCR + LLM invoice analysis, fraud alerts',
    icon: <Receipt className="h-8 w-8" />,
    demoConversation: [
      { role: 'user', content: 'Review next week\'s payment run for any optimization opportunities.' },
      { role: 'agent', content: 'I\'ve analyzed next week\'s payment run ($4.8M total) and found several optimization opportunities:\n\n1. DUPLICATE ALERT: Oracle invoice #OR-29587 appears to be a duplicate of #OR-29484 paid last month (98% confidence)\n\n2. EARLY PAYMENT DISCOUNT: We can save $14,650 by accelerating payment to Salesforce by 3 days to capture their 2% early discount\n\n3. PAYMENT TIMING: Deferring non-discount payments totaling $1.2M by 9 days would optimize cash position during our inventory build period\n\nShould I adjust the payment run to capture these opportunities?' },
      { role: 'user', content: 'Flag the Oracle duplicate, accelerate Salesforce, but leave other timing as scheduled.' },
      { role: 'agent', content: 'Changes applied to payment run for week of May 15-19:\n\n✓ Oracle invoice #OR-29587 ($87,500) flagged for review and temporarily removed from payment batch\n\n✓ Salesforce payment ($732,500) accelerated to May 17 to capture 2% discount, saving $14,650\n\n✓ Other payments left as originally scheduled\n\nI\'ve notified AP Manager Janet Wilson about the Oracle duplicate with comparison details. The modified payment run is ready for final approval in the AP system.\n\nCumulative discount capture this quarter: $41,800 (122% of target)' },
      { role: 'user', content: 'Approve changes. Are there any other potential duplicates in our AP system?' },
      { role: 'agent', content: 'Running duplicate detection scan across all AP records...\n\nFound 2 additional potential duplicates:\n\n1. AWS invoice #AWS-2025-0428 ($12,500) - 92% match with #AWS-2025-0415\n2. Adobe Creative Cloud invoice ($8,750) - 89% match with last month\'s invoice\n\nBoth are flagged for AP team review. I\'ve also implemented an enhanced duplicate detection rule to catch similar patterns in the future. Would you like to see the new detection rules?' }
    ]
  },
  {
    id: 4,
    name: 'Close Cycle Orchestrator',
    painSolved: 'Manual close tasks, late reporting',
    kpi: '-40% close time',
    capabilities: 'Task orchestration, anomaly detection',
    icon: <Calendar className="h-8 w-8" />,
    demoConversation: [
      { role: 'user', content: 'What\'s the status of our May month-end close?' },
      { role: 'agent', content: 'May close status: Day 4 of 7 (target: complete by June 7)\n\n✅ Completed (83%):\n- Revenue recognition reconciled\n- AR subledger closed\n- Inventory valuation complete\n- Cash reconciliation complete\n- Prepaid amortization processed\n\n⏳ In Progress (12%):\n- Accruals at 80% (waiting on final Marketing events data)\n- APAC intercompany at 50% (slower than normal)\n\n❌ Blockers (5%):\n- Singapore office hasn\'t submitted local OPEX report (4 days late)\n- Sales commission calculation delayed due to new plan structure\n\nForecast: Risk of 1-day delay unless blockers resolved in next 12 hours. Should I send escalations?' },
      { role: 'user', content: 'Yes, please escalate the blockers. What automation improvements could prevent these issues next month?' },
      { role: 'agent', content: 'Escalations sent:\n\n1. Singapore OPEX: Notified APAC Controller and Singapore Office Manager via Slack and email (with backup template form for quick completion)\n\n2. Sales Commissions: Scheduled urgent meeting with Sales Ops Director and Compensation Analyst at 2pm today\n\nAutomation improvements for June close:\n\n1. Singapore Office: Implement auto-extraction from local accounting system instead of manual submission (est. 4 hours setup)\n\n2. Sales Commissions: Create pre-close validation workflow to identify commission calculation issues 2 days before close starts\n\n3. APAC Intercompany: Implement robotics process automation (RPA) for repetitive elements - est. reduction of 8 hours per close\n\n4. Marketing Accruals: Add API connection to event management platform for real-time expense data\n\nThese improvements could reduce close by 1.5 days next month. Shall I prepare implementation plans?' },
      { role: 'user', content: 'Prepare the implementation plans, but prioritize the Singapore and commission issues first.' },
      { role: 'agent', content: 'Implementation plans prepared and prioritized:\n\nHIGH PRIORITY (Week 1):\n1. Singapore OPEX Automation\n   • API integration with local accounting system\n   • Automated data validation and reconciliation\n   • Estimated completion: 3 business days\n\n2. Sales Commission Pre-close Validation\n   • Automated commission calculation verification\n   • Early warning system for plan structure changes\n   • Estimated completion: 4 business days\n\nMEDIUM PRIORITY (Week 2):\n• APAC Intercompany RPA\n• Marketing Accruals API Integration\n\nI\'ve scheduled a kickoff meeting for tomorrow at 10am with the technical team. Would you like to review the detailed technical specifications?' }
    ]
  },
  {
    id: 5,
    name: 'Transfer Pricing Compliance Agent',
    painSolved: 'BEPS 2.0 compliance burden',
    kpi: '99% audit-ready',
    capabilities: 'Comparable analysis, XBRL doc gen',
    icon: <Scale className="h-8 w-8" />,
    demoConversation: [
      { role: 'user', content: 'Are we compliant with the new OECD Pillar Two regulations?' },
      { role: 'agent', content: 'Based on my analysis of your global structure and the new OECD Pillar Two regulations, there are several compliance gaps that require attention:\n\n🚨 HIGH RISK AREAS:\n1. Irish subsidiary effective tax rate is 11.2%, below the 15% global minimum\n2. Singapore R&D transfer pricing documentation is outdated (last updated 18 months ago)\n3. UAE operations lack economic substance documentation required under new rules\n\n⚠️ MEDIUM RISK AREAS:\n1. Missing country-by-country reporting for two new LATAM entities\n2. Transfer pricing markup on German support services lacks recent comparables\n\nWould you like me to generate a remediation plan with estimated timelines and resource requirements?' },
      { role: 'user', content: 'Yes, please generate a remediation plan focusing on the high-risk items first.' },
      { role: 'agent', content: 'High-Risk Remediation Plan:\n\n1. Irish Subsidiary (Priority: Immediate)\n   • Current ETR: 11.2% vs. Required: 15%\n   • Action Items:\n     - Review intercompany service agreements\n     - Adjust management fee structure\n     - Document substance requirements\n   • Timeline: 45 days\n   • Resource: Tax Director + External Advisor\n\n2. Singapore R&D Documentation (Priority: High)\n   • Current Status: 18 months outdated\n   • Action Items:\n     - Update functional analysis\n     - Refresh comparables database\n     - Document R&D value chain\n   • Timeline: 60 days\n   • Resource: Transfer Pricing Manager\n\n3. UAE Economic Substance (Priority: High)\n   • Current Status: Missing documentation\n   • Action Items:\n     - Prepare substance documentation\n     - Document core income-generating activities\n     - Implement tracking system\n   • Timeline: 30 days\n   • Resource: Local Finance Manager\n\nWould you like me to proceed with implementing the Irish subsidiary changes first?' }
    ]
  },
  {
    id: 6,
    name: 'SaaS Rev-Rec Copilot',
    painSolved: 'ASC 606 contract complexity',
    kpi: '-70% time',
    capabilities: 'Clause parsing, usage data modeling',
    icon: <PieChart className="h-8 w-8" />,
    demoConversation: [
      { role: 'user', content: 'How should we recognize revenue for the new Microsoft enterprise deal?' },
      { role: 'agent', content: 'I\'ve analyzed the Microsoft Enterprise Agreement ($4.2M TCV) and here\'s my ASC 606 revenue recognition assessment:\n\n1. Performance Obligations:\n   • Cloud Subscription: $2.8M (distinct, recognized ratably)\n   • Implementation Services: $450K (not distinct, recognized with subscription)\n   • Training: $350K (distinct, recognized upon delivery)\n   • Custom Development: $600K (distinct, recognize based on milestone completion)\n\n2. Variable Consideration:\n   • Usage-based overage fees should be estimated using expected value method\n   • Historical data suggests 18% average overage (~$504K)\n   • Constrain estimate to $400K based on 80% probability threshold\n\n3. Contract Modifications:\n   • Amendment 2 does not add distinct goods/services\n   • Treat as continuation of original contract\n\nRecommended rev rec schedule attached. Does this align with your understanding of the contract?' },
      { role: 'user', content: 'That looks right, but what about the penalty clause for uptime guarantees?' },
      { role: 'agent', content: 'Analyzing the uptime guarantee penalty clause:\n\n• Guarantee: 99.9% uptime\n• Penalty: 5% of monthly subscription for each 0.1% below target\n• Maximum penalty: 25% of annual subscription\n\nASC 606 Treatment:\n• This is a variable consideration that should be constrained\n• Historical uptime: 99.95% (well above guarantee)\n• Probability of penalty: <5%\n• Constrained estimate: $0 (no penalty expected)\n\nI\'ve updated the revenue recognition schedule to reflect this analysis. The penalty clause doesn\'t impact our current recognition pattern, but we should monitor uptime metrics monthly. Would you like to see the updated schedule?' }
    ]
  },
  {
    id: 7,
    name: 'FX Hedge-Triage Agent',
    painSolved: 'Currency volatility',
    kpi: '+80 bps EPS',
    capabilities: 'Real-time exposure calc, trade recs',
    icon: <BarChart4 className="h-8 w-8" />,
    demoConversation: [
      { role: 'user', content: 'What\'s our Euro exposure for Q3 and how should we hedge it?' },
      { role: 'agent', content: 'Euro Exposure Analysis for Q3 2025:\n\nNet Position: €8.2M short (expecting to receive)\n• Revenue inflows: €12.7M (primarily EMEA SaaS contracts)\n• Expense outflows: €4.5M (EMEA operations + AWS EU hosting)\n\nKey Risk Factors:\n• EUR/USD currently at 1.12, up 4.2% from Q2 average\n• Forward curve implies 1.8% weakening over next 3 months\n• ECB meeting on July 18 with 65% probability of rate cut\n• Volatility measure at 18-month high (14.5)\n\nCurrent Hedges:\n• €3M forward contract at 1.085, expiring July 15\n• €1.5M forward contract at 1.092, expiring August 30\n• Effective hedge ratio: 55% of Q3 exposure\n\nHedging Recommendation:\n• Increase hedge ratio to 75% given elevated volatility\n• Execute €2.5M forward at current 1.12 rate (3-month)\n• Consider €1M options collar for remaining exposure\n\nEstimated EPS impact: +12-18 basis points vs. unhedged position' },
      { role: 'user', content: 'Let\'s go with the forward contract. What\'s the projected P&L impact?' },
      { role: 'agent', content: 'Forward Contract P&L Impact Analysis:\n\nTransaction Details:\n• Amount: €2.5M\n• Rate: 1.12\n• Term: 3 months\n• Execution Date: June 15, 2025\n\nP&L Impact:\n• Current hedge ratio: 55% → 75%\n• Additional hedged amount: €2.5M\n• Expected gain vs. unhedged: $87,500 (based on forward curve)\n• EPS impact: +0.12 cents\n\nRisk Metrics:\n• VaR (95%): $42,000\n• Maximum drawdown: $65,000\n• Break-even rate: 1.105\n\nI\'ve prepared the trade ticket for your approval. Would you like to see the detailed risk analysis?' }
    ]
  },
  {
    id: 8,
    name: 'Spend Intelligence & Vendor-Risk Sentinel',
    painSolved: 'Shadow IT, ESG risk',
    kpi: '5–10% opex down',
    capabilities: 'Anomaly detection, LLM explanations, ESG merge',
    icon: <ShoppingBag className="h-8 w-8" />,
    demoConversation: [
      { role: 'user', content: 'Show me our largest spend anomalies this quarter.' },
      { role: 'agent', content: 'Q2 2025 Spend Anomaly Analysis:\n\n1. 🚨 HIGH: Cloud Computing (+72% YoY, $980K over forecast)\n   • Root cause: Dev environment instances not auto-scaling down on nights/weekends\n   • 155 unused GPU instances identified across 8 projects\n   • Estimated waste: $620K per quarter\n\n2. 🚨 HIGH: Marketing Software (+114% YoY, $340K over forecast)\n   • Root cause: Duplicate SaaS tools with overlapping functionality\n   • 14 tools for similar social media scheduling functions\n   • 8 separate video editing platforms (73% utilization below threshold)\n\n3. ⚠️ MEDIUM: Travel & Entertainment (+35% YoY, $210K over forecast)\n   • Root cause: Non-compliant bookings outside corporate platform\n   • 41% of bookings made directly vs. through approved channels\n   • Premium flight/hotel upgrades exceeding policy\n\n4. ⚠️ MEDIUM: Contract Labor (+28% YoY, $175K over forecast)\n   • Root cause: Rate card violations and unapproved overtime\n   • Vendor rate increases without procurement review\n\nWould you like detailed remediation plans for any specific area?' },
      { role: 'user', content: 'Give me a remediation plan for the cloud computing issue.' },
      { role: 'agent', content: 'Cloud Computing Remediation Plan:\n\nImmediate Actions (Week 1):\n1. Instance Cleanup\n   • Schedule immediate shutdown of 155 unused GPU instances\n   • Estimated savings: $620K per quarter\n   • Risk: Low (instances are confirmed unused)\n\n2. Auto-scaling Implementation (Week 2-3):\n   • Deploy auto-scaling policies for all dev environments\n   • Schedule scale-down during non-working hours\n   • Expected savings: $180K per quarter\n\n3. Resource Tagging & Monitoring (Week 3-4):\n   • Implement mandatory resource tagging\n   • Set up cost allocation by project\n   • Deploy real-time cost alerts\n\n4. Governance Framework (Week 4-5):\n   • Implement approval workflow for GPU instance creation\n   • Set up weekly cost review meetings\n   • Create developer cost awareness dashboard\n\nTotal Expected Savings: $800K per quarter\nImplementation Timeline: 5 weeks\n\nWould you like me to proceed with the immediate instance cleanup?' }
    ]
  },
  {
    id: 9,
    name: 'ESG/Sustainability Disclosure Drafter',
    painSolved: 'SEC/CSRD compliance',
    kpi: '-75% prep time',
    capabilities: 'IoT ingest, carbon modeling, LLM drafts',
    icon: <TreePine className="h-8 w-8" />,
    demoConversation: [
      { role: 'user', content: 'What\'s our current status for EU CSRD compliance?' },
      { role: 'agent', content: 'EU CSRD Compliance Status:\n\nOverall: 67% Ready (Gap areas identified)\n\n✅ STRONG AREAS:\n• Double Materiality Assessment (92% complete)\n• Scope 1 & 2 Emissions Tracking (95% complete)\n• Social Standards Reporting (84% complete)\n• Value Chain Due Diligence (76% complete)\n\n⚠️ GAP AREAS:\n• Scope 3 Emissions Measuring (41% complete)\n  - Missing: Purchased goods & services calculations\n  - Missing: Business travel comprehensive data\n  - Missing: Employee commuting estimates\n\n• Biodiversity Impact Assessment (23% complete)\n  - Missing: EU operations ecosystem impact analysis\n  - Missing: Supplier biodiversity requirements\n\n• Resource Use & Circular Economy (52% complete)\n  - Missing: Product lifecycle assessments\n  - Missing: E-waste metrics for cloud assets\n\nCompliance Timeline Risk:\n• First reporting deadline: April 2026\n• Current status: 5-month gap to readiness\n• Critical path: Scope 3 data collection\n\nWould you like to see remediation recommendations?' },
      { role: 'user', content: 'Yes, show me remediation recommendations prioritized by effort vs. impact.' },
      { role: 'agent', content: 'CSRD Remediation Recommendations:\n\nHIGH IMPACT, LOW EFFORT (1-2 months):\n1. Scope 3 Travel & Commuting\n   • Implement automated travel data collection\n   • Deploy employee commuting survey\n   • Expected completion: 6 weeks\n   • Impact: +25% on Scope 3 completeness\n\n2. E-waste Metrics\n   • Integrate with IT asset management system\n   • Set up automated tracking for cloud assets\n   • Expected completion: 4 weeks\n   • Impact: +15% on Resource Use metrics\n\nMEDIUM IMPACT, MEDIUM EFFORT (2-3 months):\n3. Purchased Goods & Services\n   • Develop supplier emissions questionnaire\n   • Implement data collection platform\n   • Expected completion: 10 weeks\n   • Impact: +30% on Scope 3 completeness\n\n4. Biodiversity Assessment\n   • Conduct site-specific impact analysis\n   • Develop supplier requirements\n   • Expected completion: 12 weeks\n   • Impact: +40% on Biodiversity metrics\n\nWould you like me to create a detailed project plan for the high-impact items?' }
    ]
  },
  {
    id: 10,
    name: 'Scenario Planning Copilot',
    painSolved: 'Obsolete budgets',
    kpi: '-60% time-to-insight',
    capabilities: 'Narrative forecasts, elasticity sims',
    icon: <BarChart className="h-8 w-8" />,
    demoConversation: [
      { role: 'user', content: 'How would a 5% increase in borrowing costs impact our 2026 plan?' },
      { role: 'agent', content: '5% Borrowing Cost Increase: 2026 Plan Impact Analysis\n\nDirect Financial Impacts:\n\n1. Interest Expense: +$3.2M annually (+14.8%)\n   • Floating rate debt impact: +$2.4M\n   • Refinancing impact (2026 maturities): +$0.8M\n   • Net margin impact: -60 basis points\n\n2. Cash Flow Impact: -$2.7M (after tax effects)\n   • Working capital strategy adjustments recommended\n   • Capex reprioritization opportunity: $1.8M\n\n3. Covenant Considerations:\n   • Interest coverage ratio: 5.2x → 4.6x (covenant: 3.0x)\n   • Net leverage ratio: 2.1x → 2.2x (covenant: 3.5x)\n   • Status: All covenants still met with adequate headroom\n\nSecondary Effects:\n\n1. Customer Impact: Moderate\n   • Potential extended sales cycles in interest-rate sensitive sectors\n   • Affected segments: Real Estate (-4.2%), Financial Services (-2.8%)\n   • Projected impact: -$1.2M in pipeline conversion\n\n2. Competitive Position: Limited Impact\n   • Lower leverage vs. key competitors (avg. 3.1x vs. our 2.2x)\n   • Potential opportunity: Distressed competitor acquisition\n\nWould you like to see mitigation strategies or run additional scenarios?' },
      { role: 'user', content: 'Show me the mitigation strategies.' },
      { role: 'agent', content: 'Mitigation Strategies for 5% Rate Increase:\n\n1. Working Capital Optimization\n   • Accelerate AR collections: +$1.8M cash flow\n   • Extend AP terms where possible: +$0.9M cash flow\n   • Net impact: +$2.7M (offsets 100% of cash flow impact)\n\n2. Capex Reprioritization\n   • Defer non-critical projects: $1.8M savings\n   • Focus on high-ROI automation initiatives\n   • Expected ROI: 25% (vs. 15% for deferred projects)\n\n3. Revenue Enhancement\n   • Price increase for rate-sensitive customers: +$2.1M\n   • Accelerate high-margin product launches: +$1.5M\n   • Net impact: +$3.6M (300% of interest expense increase)\n\n4. Debt Restructuring\n   • Refinance floating rate debt to fixed: $15M\n   • Expected savings: $0.6M annually\n   • Hedge remaining floating exposure\n\nTotal Mitigation Impact: +$8.7M (272% of interest expense increase)\n\nWould you like me to prepare a detailed implementation plan for any of these strategies?' }
    ]
  },
  {
    id: 11,
    name: 'AI Powered Reconciliations',
    painSolved: 'Manual bank reconciliations',
    kpi: '-80% effort',
    capabilities: 'Auto-matching, anomaly detection, variance explanations',
    icon: <DollarSign className="h-8 w-8" />,
    demoConversation: [
      { role: 'user', content: 'Help me reconcile this month\'s bank statement with our general ledger.' },
      { role: 'agent', content: 'I\'ve analyzed your May bank statement against the general ledger and found the following:\n\n✅ MATCHED: 124 transactions ($1.24M) automatically reconciled\n\n⚠️ UNRECONCILED: 8 transactions requiring attention:\n\n1. Deposit of $4,280.15 on 5/12 appears in bank but not in GL\n\n2. Check #4452 for $1,875.33 to Acme Office Supplies shows as cleared in bank but still open in GL\n\n3. Recurring payment to Acme Services for $962.50 appears in bank but not in GL\n\n4. ACH transfer from Customer ABC for $12,450 recorded in GL on 5/28 but not yet in bank\n\n5. Three credit card fee entries totaling $542.75 in bank not recorded in GL\n\n6. Bank interest of $145.22 not recorded in GL\n\nRecommended corrective entries displayed in the reconciliation dashboard. Would you like me to suggest specific journal entries for these items?' },
      { role: 'user', content: 'Yes, please recommend the corrective entries.' },
      { role: 'agent', content: 'Here are the recommended corrective entries for the unreconciled items:\n\n1. $4,280.15 deposit on 5/12:\n   • DR: Cash/Bank Account - $4,280.15\n   • CR: Accounts Receivable (Customer XYZ) - $4,280.15\n   • Note: Payment appears to be from Customer XYZ but wasn\'t recorded in the system\n\n2. $1,875.33 check #4452:\n   • DR: Outstanding Checks - $1,875.33\n   • CR: Bank Reconciliation Clearing - $1,875.33\n   • Note: Update check status from outstanding to cleared\n\n3. $962.50 recurring payment to Acme Services:\n   • DR: SaaS Subscriptions Expense - $962.50\n   • CR: Cash/Bank Account - $962.50\n   • Note: May subscription fee (subscription renews on 10th of each month)\n\n4. $12,450 ACH transfer from Customer ABC:\n   • No action needed - timing difference that will clear in June\n   • Verify receipt in next bank statement\n   • Flag for next month\'s reconciliation\n\n5. Credit card fees totaling $542.75:\n   • DR: Bank/Merchant Fees - $542.75\n   • CR: Cash/Bank Account - $542.75\n   • Note: Split across 3 entries on 5/10, 5/20, and 5/30\n\n6. Bank interest of $145.22:\n   • DR: Cash/Bank Account - $145.22\n   • CR: Interest Income - $145.22\n   • Note: May monthly interest earned\n\nShall I prepare these entries in the accounting system, or would you like to review them first?' },
      { role: 'user', content: 'Please prepare them in the system. Also, are there any patterns in these reconciliation issues we should address?' },
      { role: 'agent', content: 'I\'ve prepared all entries in the accounting system (Batch #REC-05-2025).\n\nRegarding patterns in reconciliation issues, I\'ve identified several recurring problems and recommended process improvements:\n\n1. Customer Payment Recording (Items #1, #4)\n   • Pattern: 12 instances in the last 3 months where customer payments were either not recorded or recorded with incorrect timing\n   • Root Cause: Manual entry process for non-integrated payment methods\n   • Recommendation: Implement automated payment matching by connecting payment processor API with accounting system (est. effort: 2 weeks)\n\n2. Subscription Management (Item #3)\n   • Pattern: Recurring SaaS payments consistently missing from GL\n   • Root Cause: No central subscription management system\n   • Recommendation: Implement subscription tracking software with accounting integration and advance notification (est. efficiency gain: 85%)\n\n3. Bank Fees (Item #5)\n   • Pattern: Consistent monthly manual entry required\n   • Recommendation: Create standing monthly accrual with periodic true-up\n\n4. Check Clearing (Item #2)\n   • Pattern: Average 5-7 day delay in updating check status\n   • Recommendation: Configure positive pay system with daily status updates\n\nImplementing these process improvements would reduce monthly reconciliation effort by approximately 6 hours and decrease reconciling items by 80%.\n\nWould you like me to draft a process improvement proposal for your review?' }
    ]
  }
];