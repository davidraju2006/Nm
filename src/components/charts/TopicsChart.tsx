import React, { useEffect, useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { supabase } from '../../lib/supabase';

interface TopicData {
  topic: string;
  count: number;
  sentiment: number;
}

const getBarColor = (sentiment: number) => {
  if (sentiment >= 0.7) return '#16A34A'; // High positive (green)
  if (sentiment >= 0.5) return '#22C55E'; // Moderate positive
  if (sentiment >= 0.4) return '#9CA3AF'; // Neutral
  if (sentiment >= 0.3) return '#F87171'; // Moderate negative
  return '#DC2626'; // High negative (red)
};

const TopicsChart: React.FC = () => {
  const [topics, setTopics] = useState<TopicData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const { data, error } = await supabase
          .from('topics')
          .select('name, count, sentiment_score')
          .order('count', { ascending: false })
          .limit(6);

        if (error) throw error;

        const formattedData = data.map(item => ({
          topic: item.name,
          count: item.count,
          sentiment: item.sentiment_score
        }));

        setTopics(formattedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch topics');
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  if (loading) {
    return <div className="flex justify-center py-8">Loading topics...</div>;
  }

  if (error) {
    return <div className="text-error-600 py-4">{error}</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart 
        data={topics} 
        layout="vertical"
        margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" horizontal={true} vertical={false} />
        <XAxis 
          type="number" 
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={{ stroke: '#e5e7eb' }}
        />
        <YAxis 
          type="category" 
          dataKey="topic" 
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={{ stroke: '#e5e7eb' }}
          width={90}
        />
        <Tooltip 
          formatter={(value, name) => [value, 'Mentions']}
          contentStyle={{ 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}
          labelStyle={{
            fontWeight: 'bold'
          }}
        />
        <Bar 
          dataKey="count" 
          radius={[0, 4, 4, 0]} 
          barSize={20}
          fill="#3B82F6"
          background={{ fill: '#f3f4f6' }}
          label={{ position: 'right', fill: '#6B7280', fontSize: 12 }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TopicsChart;