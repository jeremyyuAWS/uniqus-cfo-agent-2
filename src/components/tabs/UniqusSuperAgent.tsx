import React, { useState } from 'react';
import { KnowledgeGraph } from '../KnowledgeGraph';
import { UniqusChat } from '../UniqusChat';

export const UniqusSuperAgent: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Uniqus Super Agent</h2>
        <p className="text-gray-600">
          Explore the connected network of agents, systems, and data sources powering
          intelligent finance automation for your organization.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-4 h-[600px]">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Knowledge Graph</h3>
          <div className="h-[520px] border border-gray-100 rounded-lg bg-gray-50">
            <KnowledgeGraph onNodeSelect={setSelectedNode} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 h-[600px] flex flex-col">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Uniqus Assistant</h3>
          <UniqusChat selectedNode={selectedNode} />
        </div>
      </div>
    </div>
  );
};