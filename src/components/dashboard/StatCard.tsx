import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend, icon }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200 transition-all hover:shadow-md">
      <div className="flex justify-between mb-2">
        <span className="text-neutral-500 text-sm">{title}</span>
        <div className="h-8 w-8 rounded-full bg-neutral-100 flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      <div className="mt-2">
        <div className="text-2xl font-bold text-neutral-900">{value}</div>
        
        <div className="flex items-center mt-1.5">
          {trend === 'up' && (
            <div className="flex items-center text-success-600 text-sm">
              <TrendingUp size={16} className="mr-1" />
              <span>{change}</span>
            </div>
          )}
          
          {trend === 'down' && (
            <div className="flex items-center text-error-600 text-sm">
              <TrendingDown size={16} className="mr-1" />
              <span>{change}</span>
            </div>
          )}
          
          <span className="text-xs text-neutral-500 ml-2">vs previous period</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;