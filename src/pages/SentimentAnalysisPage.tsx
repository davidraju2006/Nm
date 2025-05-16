import React from 'react';
import { 
  BarChart, 
  ArrowRight,
  Filter,
  Download
} from 'lucide-react';

// In a real application, we would import detailed components
// This is a simplified version to show the page structure

const SentimentAnalysisPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary-100 flex items-center justify-center">
            <BarChart size={20} className="text-primary-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">Sentiment Analysis</h1>
            <p className="text-neutral-500">Analyze customer emotions and feedback trends</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-3 py-2 rounded-md border border-neutral-200 text-sm hover:bg-neutral-50">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          
          <button className="flex items-center gap-1 px-3 py-2 rounded-md border border-neutral-200 text-sm hover:bg-neutral-50">
            <Download size={16} />
            <span>Export</span>
          </button>
          
          <select className="px-3 py-2 rounded-md border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last quarter</option>
            <option value="12m">Last year</option>
          </select>
        </div>
      </div>
      
      {/* Main content area */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 min-w-[200px] p-4 bg-success-50 rounded-lg border border-success-100">
            <span className="text-sm text-neutral-600">Positive Sentiment</span>
            <h3 className="text-2xl font-bold text-success-700">78.2%</h3>
            <span className="text-sm text-success-600">+2.4% from last period</span>
          </div>
          
          <div className="flex-1 min-w-[200px] p-4 bg-neutral-50 rounded-lg border border-neutral-100">
            <span className="text-sm text-neutral-600">Neutral Sentiment</span>
            <h3 className="text-2xl font-bold text-neutral-700">9.4%</h3>
            <span className="text-sm text-neutral-600">-1.2% from last period</span>
          </div>
          
          <div className="flex-1 min-w-[200px] p-4 bg-error-50 rounded-lg border border-error-100">
            <span className="text-sm text-neutral-600">Negative Sentiment</span>
            <h3 className="text-2xl font-bold text-error-700">12.4%</h3>
            <span className="text-sm text-error-600">-1.2% from last period</span>
          </div>
        </div>
        
        {/* Placeholder for detailed charts and metrics */}
        <div className="h-[400px] mb-6 rounded-lg bg-neutral-50 border border-dashed border-neutral-200 flex items-center justify-center text-neutral-400">
          Detailed sentiment trend charts would appear here
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="h-[250px] rounded-lg bg-neutral-50 border border-dashed border-neutral-200 flex items-center justify-center text-neutral-400">
            Emotion distribution chart
          </div>
          
          <div className="h-[250px] rounded-lg bg-neutral-50 border border-dashed border-neutral-200 flex items-center justify-center text-neutral-400">
            Source comparison chart
          </div>
        </div>
        
        <div className="rounded-lg border border-neutral-200 overflow-hidden">
          <div className="bg-neutral-50 px-4 py-3 border-b border-neutral-200">
            <h3 className="font-medium">Top Negative Feedback Themes</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {['Shipping delays', 'Product quality issues', 'Website usability', 'Price concerns'].map((theme, index) => (
                <div key={index} className="flex justify-between items-center p-3 hover:bg-neutral-50 rounded-md">
                  <span>{theme}</span>
                  <button className="text-sm text-primary-600 flex items-center">
                    View Details
                    <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalysisPage;