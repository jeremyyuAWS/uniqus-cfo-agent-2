import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { motion } from 'framer-motion';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

export enum ChartType {
  Line = 'line',
  Bar = 'bar',
  Pie = 'pie'
}

interface ChartComponentProps {
  type: ChartType;
  data: any;
  options?: any;
  height?: number;
  title?: string;
  subtitle?: string;
}

export const ChartComponent: React.FC<ChartComponentProps> = ({ 
  type, 
  data, 
  options = {}, 
  height = 300,
  title,
  subtitle
}) => {
  // Default options with monochromatic theme
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            family: "'Inter', sans-serif",
            size: 12
          },
          color: '#374151'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1f2937',
        bodyColor: '#4b5563',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        padding: 10,
        bodyFont: {
          family: "'Inter', sans-serif"
        },
        titleFont: {
          family: "'Inter', sans-serif",
          weight: 'bold'
        }
      }
    },
    scales: type !== ChartType.Pie ? {
      x: {
        grid: {
          color: '#f3f4f6'
        },
        ticks: {
          color: '#6b7280',
          font: {
            family: "'Inter', sans-serif"
          }
        }
      },
      y: {
        grid: {
          color: '#f3f4f6'
        },
        ticks: {
          color: '#6b7280',
          font: {
            family: "'Inter', sans-serif"
          }
        }
      }
    } : {}
  };

  const mergedOptions = { ...defaultOptions, ...options };

  const renderChart = () => {
    switch (type) {
      case ChartType.Line:
        return <Line data={data} options={mergedOptions} height={height} />;
      case ChartType.Bar:
        return <Bar data={data} options={mergedOptions} height={height} />;
      case ChartType.Pie:
        return <Pie data={data} options={mergedOptions} height={height} />;
      default:
        return <Line data={data} options={mergedOptions} height={height} />;
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-card border border-gray-200 p-4 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <div className="mb-4">
          <h3 className="text-gray-900 font-medium text-lg">{title}</h3>
          {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
        </div>
      )}
      <div style={{ height: `${height}px` }}>
        {renderChart()}
      </div>
    </motion.div>
  );
};