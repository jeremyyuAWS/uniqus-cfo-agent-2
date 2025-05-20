import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { AgentHub } from './components/tabs/AgentHub';
import { UniqusSuperAgent } from './components/tabs/UniqusSuperAgent';
import { Analytics } from './components/tabs/Analytics';
import { AboutUniqus } from './components/tabs/AboutUniqus';

function App() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { id: 0, name: 'Agent Hub', component: <AgentHub /> },
    { id: 1, name: 'Uniqus Super Agent', component: <UniqusSuperAgent /> },
    { id: 2, name: 'Analytics', component: <Analytics /> },
    { id: 3, name: 'About Uniqus', component: <AboutUniqus /> },
  ];

  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Uniqus AI Agents Hub
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl">
          Advanced AI agents for finance operations, 
          orchestrating intelligent automation for efficiency, compliance, and strategic insights.
        </p>
        
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-md transition-all duration-200
                  ${
                    activeTab === tab.id
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="animate-fade-in">
          {tabs.find(tab => tab.id === activeTab)?.component}
        </div>
      </div>
    </Layout>
  );
}

export default App;