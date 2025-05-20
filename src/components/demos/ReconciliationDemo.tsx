import React from 'react';
import { ChartComponent, ChartType } from './ChartComponent';
import { DashboardMockup } from './DashboardMockup';
import { ProcessFlow } from './ProcessFlow';
import { FileText, Search, Check, Bot, Clock, FileCheck } from 'lucide-react';

export const ReconciliationDemo: React.FC = () => {
  const stages = [
    // Stage 0: Initial reconciliation analysis
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Bank Reconciliation Status</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <div className="flex justify-between items-center mb-3">
          <div className="font-medium text-gray-900">May Bank Reconciliation</div>
          <div className="text-gray-500 text-sm">132 Transactions</div>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-green-50 p-3 rounded-lg border border-green-100 text-center">
            <div className="text-xl font-bold text-gray-800">124</div>
            <div className="text-sm text-gray-600">Matched</div>
            <div className="text-xs text-gray-500">$1.24M</div>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100 text-center">
            <div className="text-xl font-bold text-gray-800">8</div>
            <div className="text-sm text-gray-600">Unmatched</div>
            <div className="text-xs text-gray-500">$20.26K</div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-center">
            <div className="text-xl font-bold text-gray-800">94%</div>
            <div className="text-sm text-gray-600">Auto-Match</div>
            <div className="text-xs text-gray-500">Rate</div>
          </div>
        </div>
        
        <h4 className="font-medium text-gray-800 mb-2">Unmatched Transactions</h4>
        <div className="divide-y divide-gray-100">
          <div className="py-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">Deposit $4,280.15</span>
              <span className="text-gray-500">5/12</span>
            </div>
            <div className="text-xs text-gray-500">In bank statement, missing from GL</div>
          </div>
          
          <div className="py-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">Check #4452 $1,875.33</span>
              <span className="text-gray-500">5/18</span>
            </div>
            <div className="text-xs text-gray-500">Cleared in bank, still open in GL</div>
          </div>
          
          <div className="py-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">ACH Acme Services $962.50</span>
              <span className="text-gray-500">5/10</span>
            </div>
            <div className="text-xs text-gray-500">In bank statement, missing from GL</div>
          </div>
          
          <div className="py-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">3 Credit card fees $542.75</span>
              <span className="text-gray-500">Various</span>
            </div>
            <div className="text-xs text-gray-500">In bank statement, missing from GL</div>
          </div>
        </div>
      </div>
      
      <ChartComponent
        type={ChartType.Pie}
        height={200}
        title="Reconciliation Analysis"
        data={{
          labels: ['Auto-Matched', 'Missing in GL', 'Timing Differences', 'Requires Review'],
          datasets: [
            {
              data: [94, 3, 2, 1],
              backgroundColor: [
                '#1f2937',
                '#4b5563',
                '#6b7280',
                '#9ca3af'
              ],
              borderWidth: 1,
              borderColor: '#fff'
            }
          ]
        }}
      />
    </>,
    
    // Stage 1: Journal entry recommendations
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Recommended Journal Entries</h3>
      
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-start space-x-3">
            <div className="mt-1 flex-shrink-0">
              <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-gray-800 text-sm">1</span>
              </div>
            </div>
            <div>
              <h4 className="text-gray-900 font-medium">$4,280.15 Deposit from Customer XYZ</h4>
              <div className="mt-2 space-y-1 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Cash/Bank Account</span>
                  <span className="font-medium">$4,280.15</span>
                </div>
                <div className="flex justify-between pl-6">
                  <span>Accounts Receivable (Customer XYZ)</span>
                  <span className="font-medium">$4,280.15</span>
                </div>
              </div>
              <div className="mt-2 px-3 py-1.5 bg-gray-50 text-xs text-gray-600 rounded">
                AI detected this as payment from Customer XYZ (matching invoice #INV-2241) but wasn't recorded in the system
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-start space-x-3">
            <div className="mt-1 flex-shrink-0">
              <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-gray-800 text-sm">2</span>
              </div>
            </div>
            <div>
              <h4 className="text-gray-900 font-medium">$1,875.33 Check #4452 to Acme Office Supplies</h4>
              <div className="mt-2 space-y-1 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Outstanding Checks</span>
                  <span className="font-medium">$1,875.33</span>
                </div>
                <div className="flex justify-between pl-6">
                  <span>Bank Reconciliation Clearing</span>
                  <span className="font-medium">$1,875.33</span>
                </div>
              </div>
              <div className="mt-2 px-3 py-1.5 bg-gray-50 text-xs text-gray-600 rounded">
                Update check status from outstanding to cleared
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-start space-x-3">
            <div className="mt-1 flex-shrink-0">
              <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-gray-800 text-sm">3</span>
              </div>
            </div>
            <div>
              <h4 className="text-gray-900 font-medium">$962.50 Recurring Payment to Acme Services</h4>
              <div className="mt-2 space-y-1 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>SaaS Subscriptions Expense</span>
                  <span className="font-medium">$962.50</span>
                </div>
                <div className="flex justify-between pl-6">
                  <span>Cash/Bank Account</span>
                  <span className="font-medium">$962.50</span>
                </div>
              </div>
              <div className="mt-2 px-3 py-1.5 bg-gray-50 text-xs text-gray-600 rounded">
                May subscription fee (subscription renews on 10th of each month)
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-start space-x-3">
            <div className="mt-1 flex-shrink-0">
              <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-gray-800 text-sm">4</span>
              </div>
            </div>
            <div>
              <h4 className="text-gray-900 font-medium">$542.75 Credit Card Fees</h4>
              <div className="mt-2 space-y-1 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Bank/Merchant Fees</span>
                  <span className="font-medium">$542.75</span>
                </div>
                <div className="flex justify-between pl-6">
                  <span>Cash/Bank Account</span>
                  <span className="font-medium">$542.75</span>
                </div>
              </div>
              <div className="mt-2 px-3 py-1.5 bg-gray-50 text-xs text-gray-600 rounded">
                Split across 3 entries on 5/10, 5/20, and 5/30
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    
    // Stage 2: Process improvement recommendations
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Process Improvement Recommendations</h3>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
        <h4 className="font-medium text-gray-900 mb-3">Pattern Analysis</h4>
        
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 rounded-full bg-gray-800 mr-2"></div>
              <div className="font-medium text-gray-900">Customer Payment Recording</div>
            </div>
            <div className="text-sm text-gray-600 pl-4">
              <p className="mb-1">12 instances in the last 3 months where payments were not recorded or had incorrect timing</p>
              <div className="mt-2">
                <span className="text-xs font-medium text-gray-700">Root Cause:</span>
                <span className="text-xs text-gray-600 ml-1">Manual entry process for non-integrated payment methods</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 rounded-full bg-gray-800 mr-2"></div>
              <div className="font-medium text-gray-900">Subscription Management</div>
            </div>
            <div className="text-sm text-gray-600 pl-4">
              <p className="mb-1">Recurring SaaS payments consistently missing from GL</p>
              <div className="mt-2">
                <span className="text-xs font-medium text-gray-700">Root Cause:</span>
                <span className="text-xs text-gray-600 ml-1">No central subscription management system</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 rounded-full bg-gray-800 mr-2"></div>
              <div className="font-medium text-gray-900">Check Clearing Delay</div>
            </div>
            <div className="text-sm text-gray-600 pl-4">
              <p className="mb-1">Average 5-7 day delay in updating check status</p>
              <div className="mt-2">
                <span className="text-xs font-medium text-gray-700">Root Cause:</span>
                <span className="text-xs text-gray-600 ml-1">Manual check clearing updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <h4 className="font-medium text-gray-900 mb-3">Recommended Solutions</h4>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5 mt-0.5">
              <Check className="h-4 w-4 text-gray-700" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Payment Processor API Integration</div>
              <div className="text-sm text-gray-600">
                Connect payment processor API with accounting system for automated payment matching
              </div>
              <div className="mt-1 text-xs bg-gray-50 p-2 rounded flex justify-between">
                <span>Estimated effort: 2 weeks</span>
                <span className="font-medium">ROI: High</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5 mt-0.5">
              <Check className="h-4 w-4 text-gray-700" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Subscription Tracking System</div>
              <div className="text-sm text-gray-600">
                Implement subscription tracking software with accounting integration and advance notification
              </div>
              <div className="mt-1 text-xs bg-gray-50 p-2 rounded flex justify-between">
                <span>Efficiency gain: 85%</span>
                <span className="font-medium">ROI: Medium</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5 mt-0.5">
              <Check className="h-4 w-4 text-gray-700" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">Positive Pay System</div>
              <div className="text-sm text-gray-600">
                Configure positive pay system with daily status updates to reduce check clearing delays
              </div>
              <div className="mt-1 text-xs bg-gray-50 p-2 rounded flex justify-between">
                <span>Time savings: 4 hrs/month</span>
                <span className="font-medium">ROI: Medium</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-gray-50 rounded-md">
          <div className="text-sm font-medium text-gray-900 mb-1">Expected Impact:</div>
          <div className="text-sm text-gray-700">
            Monthly reconciliation effort reduced by approximately 6 hours (80% decrease)
          </div>
          <div className="text-sm text-gray-700">
            Reconciling items decreased by 80%
          </div>
        </div>
      </div>
    </>,
    
    // Stage 3: Process visualization
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">AI-Powered Reconciliation Process</h3>
      
      <ProcessFlow
        steps={[
          {
            icon: <FileText className="h-5 w-5" />,
            title: "Data Collection",
            description: "Automated extraction from banking and accounting systems"
          },
          {
            icon: <Bot className="h-5 w-5" />,
            title: "Intelligent Matching",
            description: "ML-powered transaction matching with fuzzy logic"
          },
          {
            icon: <Search className="h-5 w-5" />,
            title: "Variance Analysis",
            description: "Root cause identification for discrepancies"
          },
          {
            icon: <Check className="h-5 w-5" />,
            title: "Corrective Actions",
            description: "Automated journal entry creation and approval workflow"
          }
        ]}
      />
      
      <div className="mt-6">
        <DashboardMockup
          imageSrc="https://images.pexels.com/photos/7681255/pexels-photo-7681255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Reconciliation Dashboard"
          description="Automated match rate tracking, variance analysis, and journal entry recommendation with one-click approval."
        />
      </div>
      
      <div className="mt-4 bg-white p-4 rounded-lg border border-gray-200 shadow-card">
        <h4 className="font-medium text-gray-900 mb-2">Reconciliation Impact</h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">-80%</div>
            <div className="text-sm text-gray-500">Manual Effort</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">+98%</div>
            <div className="text-sm text-gray-500">Accuracy Rate</div>
          </div>
        </div>
      </div>
    </>
  ];
  
  return <>{stages}</>;
};