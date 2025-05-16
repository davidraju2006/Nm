import React from 'react';
import StatCard from '../components/dashboard/StatCard';
import SentimentOverviewChart from '../components/charts/SentimentOverviewChart';
import TopicsChart from '../components/charts/TopicsChart';
import RecentFeedbackList from '../components/feedback/RecentFeedbackList';
import MarketingRecommendations from '../components/marketing/MarketingRecommendations';
import { 
  TrendingUp, 
  TrendingDown, 
  Heart, 
  Users, 
  MessageSquare,
  Clock
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
          <p className="text-neutral-500">Overview of your customer feedback insights</p>
        </div>
        
        <div className="flex items-center gap-2">
          <select className="px-3 py-2 rounded-md border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last quarter</option>
            <option value="12m">Last year</option>
          </select>
          
          <button className="px-4 py-2 bg-primary-600 text-white text-sm rounded-md hover:bg-primary-700 transition-colors">
            Export Report
          </button>
        </div>
      </div>
      
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Overall Sentiment" 
          value="78%" 
          change="+5.2%" 
          trend="up"
          icon={<Heart className="text-primary-500" />} 
        />
        <StatCard 
          title="Negative Feedback" 
          value="12.4%" 
          change="-2.1%" 
          trend="down"
          icon={<TrendingDown className="text-error-500" />} 
        />
        <StatCard 
          title="Customer Retention" 
          value="94.2%" 
          change="+1.3%" 
          trend="up"
          icon={<Users className="text-success-500" />} 
        />
        <StatCard 
          title="Response Rate" 
          value="86.7%" 
          change="+3.8%" 
          trend="up"
          icon={<MessageSquare className="text-secondary-500" />} 
        />
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-neutral-900">Sentiment Trends</h2>
            <button className="text-sm text-primary-600 hover:text-primary-700">View Details</button>
          </div>
          <SentimentOverviewChart />
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-neutral-900">Top Topic Analysis</h2>
            <button className="text-sm text-primary-600 hover:text-primary-700">View Details</button>
          </div>
          <TopicsChart />
        </div>
      </div>
      
      {/* Recent Activity & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-neutral-900">Recent Feedback</h2>
            <div className="flex items-center gap-1 text-sm text-neutral-500">
              <Clock size={14} />
              <span>Updated 5m ago</span>
            </div>
          </div>
          <RecentFeedbackList />
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-neutral-900">Marketing Recommendations</h2>
            <button className="text-sm text-primary-600 hover:text-primary-700">View All</button>
          </div>
          <MarketingRecommendations />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;