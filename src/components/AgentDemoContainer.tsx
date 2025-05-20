import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Agent } from '../types';

interface AgentDemoContainerProps {
  isOpen: boolean;
  onClose: () => void;
  agent: Agent;
  children?: React.ReactNode;
}

export const AgentDemoContainer: React.FC<AgentDemoContainerProps> = ({ 
  isOpen, 
  onClose, 
  agent,
  children
}) => {
  const [conversation, setConversation] = useState<{role: string; content: string}[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [demoStage, setDemoStage] = useState<number>(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Use a higher threshold to ensure content is more visible before triggering
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  // Restart demo when opened
  useEffect(() => {
    if (isOpen) {
      setConversation([]);
      setCurrentMessageIndex(0);
      setDemoStage(0);
      
      // Start the conversation
      const timer = setTimeout(() => {
        handleNextMessage();
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, agent]);

  // Handle demo stage advancement based on conversation progress
  useEffect(() => {
    if (currentMessageIndex === 2 && demoStage === 0) {
      setDemoStage(1);
    } else if (currentMessageIndex === 4 && demoStage === 1) {
      setDemoStage(2);
    } else if (currentMessageIndex >= 6 && demoStage === 2) {
      setDemoStage(3);
    }
  }, [currentMessageIndex, demoStage]);

  const handleNextMessage = () => {
    if (currentMessageIndex < agent.demoConversation.length) {
      setIsTyping(true);
      
      setTimeout(() => {
        setConversation(prev => [
          ...prev, 
          agent.demoConversation[currentMessageIndex]
        ]);
        setIsTyping(false);
        setCurrentMessageIndex(prev => prev + 1);
        
        // Schedule next message if there are more
        if (currentMessageIndex + 1 < agent.demoConversation.length) {
          const delay = agent.demoConversation[currentMessageIndex].role === 'user' ? 1000 : 1500;
          setTimeout(handleNextMessage, delay);
        }
      }, agent.demoConversation[currentMessageIndex].role === 'agent' ? 1000 : 500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
      <motion.div 
        ref={ref}
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="text-gray-800">
              {agent.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{agent.name}</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row h-[600px]">
          {/* Chat panel */}
          <div className="md:w-1/2 flex-shrink-0 overflow-hidden flex flex-col border-r border-gray-200">
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {conversation.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-lg px-4 py-3 ${
                      message.role === 'user' 
                        ? 'bg-gray-200 text-gray-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  disabled
                  placeholder="Type your message..."
                  className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
                <button
                  disabled
                  className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-400 bg-gray-100 cursor-not-allowed"
                >
                  Send
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                This is a demo conversation. Live agent interaction coming soon.
              </p>
            </div>
          </div>
          
          {/* Visualization panel */}
          <div className="md:w-1/2 flex-shrink-0 overflow-y-auto p-6 bg-gray-50">
            {children && React.Children.map(children, (child, index) => {
              if (React.isValidElement(child)) {
                // Only render children corresponding to current demo stage
                if (index === demoStage) {
                  return React.cloneElement(child as React.ReactElement);
                }
              }
              return null;
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};