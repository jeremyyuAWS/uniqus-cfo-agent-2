import React from 'react';
import { ChartComponent, ChartType } from './ChartComponent';
import { DashboardMockup } from './DashboardMockup';
import { ProcessFlow } from './ProcessFlow';
import { DollarSign, ArrowUp, TrendingUp, BarChart } from 'lucide-react';

export const CashFlowForecasterDemo: React.FC = () => {
  const stages = [
    // Stage 0: Initial forecast visualization
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Tech Division 30-Day Cash Forecast</h3>
      <ChartComponent
        type={ChartType.Line}
        height={250}
        data={{
          labels: [
            'Apr 1', 'Apr 5', 'Apr 10', 'Apr 15', 'Apr 20', 'Apr 25', 'Apr 30'
          ],
          datasets: [
            {
              label: 'Predicted Cash Balance',
              data: [4.2, 4.8, 5.1, 4.6, 3.2, 2.6, 3.9],
              borderColor: '#1f2937',
              backgroundColor: 'rgba(31, 41, 55, 0.1)',
              borderWidth: 2,
              tension: 0.4,
              fill: true,
            },
            {
              label: 'Minimum Threshold',
              data: [3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5],
              borderColor: '#ef4444',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              borderWidth: 1,
              borderDashed: [5, 5],
              pointRadius: 0
            }
          ]
        }}
        options={{
          scales: {
            y: {
              title: {
                display: true,
                text: 'Cash (Millions $)'
              }
            }
          },
          plugins: {
            annotation: {
              annotations: {
                box1: {
                  type: 'box',
                  xMin: 'Apr 15',
                  xMax: 'Apr 25',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  borderColor: 'rgba(239, 68, 68, 0.5)'
                }
              }
            }
          }
        }}
      />
      <div className="mt-4 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <h4 className="font-medium text-gray-900 mb-2">Potential Liquidity Gap Detected</h4>
        <div className="flex items-start space-x-2 text-sm text-gray-600">
          <div className="min-w-4 mt-1">•</div>
          <div>
            <span className="font-medium">AWS Invoice Payment:</span> $1.2M due Apr 20
          </div>
        </div>
        <div className="flex items-start space-x-2 text-sm text-gray-600">
          <div className="min-w-4 mt-1">•</div>
          <div>
            <span className="font-medium">Payroll:</span> $3.4M due Apr 18
          </div>
        </div>
        <div className="flex items-start space-x-2 text-sm text-gray-600">
          <div className="min-w-4 mt-1">•</div>
          <div>
            <span className="font-medium">Cash minimum threshold:</span> $3.5M
          </div>
        </div>
      </div>
    </>,
    
    // Stage 1: Option scenarios
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Liquidity Gap Resolution Options</h3>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:border-gray-300 transition-colors cursor-pointer">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-gray-900">Option 1: Accelerate AR Collections</h4>
              <p className="text-sm text-gray-600 mt-1">Microsoft & Adobe invoices: $1.8M</p>
            </div>
            <div className="bg-gray-100 text-gray-800 rounded-full px-2 py-1 text-xs font-medium">
              90% probability
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center text-sm">
              <ArrowUp className="h-4 w-4 text-gray-800 mr-1.5" />
              <span className="text-gray-700">Highest ROI option</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:border-gray-300 transition-colors cursor-pointer">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-gray-900">Option 2: Delay AWS Payment</h4>
              <p className="text-sm text-gray-600 mt-1">7-day payment extension: $1.2M</p>
            </div>
            <div className="bg-gray-100 text-gray-800 rounded-full px-2 py-1 text-xs font-medium">
              100% probability
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-gray-500 mr-1.5" />
              <span className="text-gray-700">No penalty per terms</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:border-gray-300 transition-colors cursor-pointer">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium text-gray-900">Option 3: Draw from Credit Facility</h4>
              <p className="text-sm text-gray-600 mt-1">Revolving credit draw: $2M</p>
            </div>
            <div className="bg-gray-100 text-gray-800 rounded-full px-2 py-1 text-xs font-medium">
              100% probability
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center text-sm">
              <BarChart className="h-4 w-4 text-gray-500 mr-1.5" />
              <span className="text-gray-700">Current utilization: 15%</span>
            </div>
          </div>
        </div>
      </div>
    </>,
    
    // Stage 2: Solution impact
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Working Capital Impact: AR Acceleration</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="text-sm text-gray-500">DSO Reduction</div>
          <div className="text-2xl font-semibold text-gray-900">2.3 days</div>
          <div className="text-xs text-gray-500 mt-1">This quarter</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="text-sm text-gray-500">Yield Increase</div>
          <div className="text-2xl font-semibold text-gray-900">+4.2 pp</div>
          <div className="text-xs text-gray-500 mt-1">vs. Credit Facility</div>
        </div>
      </div>
      
      <ChartComponent
        type={ChartType.Line}
        height={200}
        data={{
          labels: [
            'Apr 1', 'Apr 5', 'Apr 10', 'Apr 15', 'Apr 20', 'Apr 25', 'Apr 30'
          ],
          datasets: [
            {
              label: 'Original Forecast',
              data: [4.2, 4.8, 5.1, 4.6, 3.2, 2.6, 3.9],
              borderColor: '#9ca3af',
              backgroundColor: 'rgba(156, 163, 175, 0.1)',
              borderWidth: 1,
              tension: 0.4,
              fill: false,
            },
            {
              label: 'With AR Acceleration',
              data: [4.2, 4.8, 5.1, 5.8, 4.7, 4.1, 5.2],
              borderColor: '#1f2937',
              backgroundColor: 'rgba(31, 41, 55, 0.1)',
              borderWidth: 2,
              tension: 0.4,
              fill: true,
            },
            {
              label: 'Minimum Threshold',
              data: [3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5],
              borderColor: '#ef4444',
              backgroundColor: 'rgba(239, 68, 68, 0)',
              borderWidth: 1,
              borderDashed: [5, 5],
              pointRadius: 0
            }
          ]
        }}
      />
      
      <div className="mt-4">
        <h4 className="font-medium text-gray-900 mb-2">Actions Implemented</h4>
        <ul className="space-y-2">
          <li className="flex items-center text-sm text-gray-600">
            <span className="inline-block w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-gray-800">✓</span>
            AR acceleration notices prepared for Microsoft and Adobe
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <span className="inline-block w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-gray-800">✓</span>
            Treasury dashboard updated with new cash flow forecast
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <span className="inline-block w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-gray-800">✓</span>
            AR team alerted to prioritize follow-up calls
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <span className="inline-block w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-2 text-gray-800">✓</span>
            Additional interest income: $14,300 projected
          </li>
        </ul>
      </div>
    </>,
    
    // Stage 3: Process visualization
    <>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Cash-Flow Forecaster Process</h3>
      <ProcessFlow
        steps={[
          {
            icon: <DollarSign className="h-5 w-5" />,
            title: "Data Collection",
            description: "Integrates with ERP, banking systems, CRM for real-time cash positions"
          },
          {
            icon: <BarChart className="h-5 w-5" />,
            title: "AI Forecasting",
            description: "Combines historical patterns with ML to predict future cash positions"
          },
          {
            icon: <TrendingUp className="h-5 w-5" />,
            title: "Scenario Modeling",
            description: "Runs Monte Carlo simulations for variable outcomes"
          },
          {
            icon: <ArrowUp className="h-5 w-5" />,
            title: "Action Execution",
            description: "Implements optimal solutions via banking and ERP integration"
          }
        ]}
      />
      
      <div className="mt-6">
        <DashboardMockup
          imageSrc="https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Treasury Management Dashboard"
          description="Interactive cash flow dashboard with scenarios, triggers, and optimization recommendations."
        />
      </div>
    </>
  ];
  
  return <>{stages}</>;
};