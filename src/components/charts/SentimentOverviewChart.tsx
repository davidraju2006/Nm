import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

// Sample data - would come from API in real implementation
const data = [
  { date: 'Jan', positive: 65, neutral: 28, negative: 7 },
  { date: 'Feb', positive: 59, neutral: 32, negative: 9 },
  { date: 'Mar', positive: 70, neutral: 21, negative: 9 },
  { date: 'Apr', positive: 74, neutral: 18, negative: 8 },
  { date: 'May', positive: 65, neutral: 25, negative: 10 },
  { date: 'Jun', positive: 72, neutral: 20, negative: 8 },
  { date: 'Jul', positive: 78, neutral: 16, negative: 6 },
];

const SentimentOverviewChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
        <XAxis 
          dataKey="date" 
          tick={{ fontSize: 12 }} 
          tickLine={false}
          axisLine={{ stroke: '#e5e7eb' }}
        />
        <YAxis 
          tickFormatter={(value) => `${value}%`} 
          tick={{ fontSize: 12 }} 
          tickLine={false}
          axisLine={{ stroke: '#e5e7eb' }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }} 
        />
        <Legend 
          verticalAlign="top" 
          height={36} 
          iconType="circle"
          iconSize={8}
        />
        <Line 
          type="monotone" 
          dataKey="positive" 
          stroke="#16A34A" 
          strokeWidth={2} 
          dot={false} 
          activeDot={{ r: 4 }} 
          name="Positive"
        />
        <Line 
          type="monotone" 
          dataKey="neutral" 
          stroke="#6B7280" 
          strokeWidth={2} 
          dot={false} 
          activeDot={{ r: 4 }} 
          name="Neutral"
        />
        <Line 
          type="monotone" 
          dataKey="negative" 
          stroke="#DC2626" 
          strokeWidth={2} 
          dot={false} 
          activeDot={{ r: 4 }} 
          name="Negative"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SentimentOverviewChart;