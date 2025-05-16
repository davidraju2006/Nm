import React from 'react';
import { 
  Target, 
  PlusCircle,
  Edit,
  Users,
  Mail,
  BellRing,
  Gift,
  Clock
} from 'lucide-react';

const MarketingAutomationPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-accent-100 flex items-center justify-center">
            <Target size={20} className="text-accent-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">Marketing Automation</h1>
            <p className="text-neutral-500">Create personalized campaigns based on customer sentiment</p>
          </div>
        </div>
        
        <button className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-primary-600 text-white text-sm hover:bg-primary-700 transition-colors">
          <PlusCircle size={16} />
          <span>Create Campaign</span>
        </button>
      </div>
      
      {/* Segments */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Smart Segments</h2>
          <button className="text-sm text-primary-600 flex items-center gap-1">
            <PlusCircle size={14} />
            <span>New Segment</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="border border-neutral-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-primary-600" />
                <h3 className="font-medium text-sm">High Sentiment Customers</h3>
              </div>
              <button className="text-neutral-400 hover:text-neutral-600">
                <Edit size={14} />
              </button>
            </div>
            <p className="text-sm text-neutral-600 mb-2">Customers with consistently positive sentiment over the last 30 days</p>
            <div className="flex justify-between text-xs">
              <span className="text-success-600 font-medium">2,148 customers</span>
              <span className="text-neutral-500">Updated 2h ago</span>
            </div>
          </div>
          
          <div className="border border-neutral-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-error-600" />
                <h3 className="font-medium text-sm">At Risk Customers</h3>
              </div>
              <button className="text-neutral-400 hover:text-neutral-600">
                <Edit size={14} />
              </button>
            </div>
            <p className="text-sm text-neutral-600 mb-2">Customers who showed decreasing sentiment in the past 14 days</p>
            <div className="flex justify-between text-xs">
              <span className="text-error-600 font-medium">342 customers</span>
              <span className="text-neutral-500">Updated 4h ago</span>
            </div>
          </div>
          
          <div className="border border-neutral-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-warning-600" />
                <h3 className="font-medium text-sm">Product Feedback Providers</h3>
              </div>
              <button className="text-neutral-400 hover:text-neutral-600">
                <Edit size={14} />
              </button>
            </div>
            <p className="text-sm text-neutral-600 mb-2">Customers who've provided specific product feature suggestions</p>
            <div className="flex justify-between text-xs">
              <span className="text-warning-600 font-medium">587 customers</span>
              <span className="text-neutral-500">Updated 1d ago</span>
            </div>
          </div>
        </div>
        
        <button className="w-full py-2 text-center text-sm text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-md transition-colors">
          View All Segments
        </button>
      </div>
      
      {/* Active Campaigns */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Active Campaigns</h2>
          <div className="text-sm text-neutral-500 flex items-center gap-1">
            <Clock size={14} />
            <span>Last updated: 17m ago</span>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="bg-neutral-50 border-y border-neutral-200">
              <tr>
                <th className="py-3 px-4 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Campaign</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Type</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Audience</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Status</th>
                <th className="py-3 px-4 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Engagement</th>
                <th className="py-3 px-4 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              <tr className="hover:bg-neutral-50">
                <td className="py-4 px-4 text-sm font-medium text-neutral-900">Shipping Satisfaction</td>
                <td className="py-4 px-4 text-sm text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <Mail size={14} className="text-primary-500" />
                    <span>Email</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-neutral-500">342 recipients</td>
                <td className="py-4 px-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-success-50 text-success-700 border border-success-200">
                    Active
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-neutral-900">28.4%</td>
                <td className="py-4 px-4 text-right">
                  <button className="text-primary-600 hover:text-primary-700 text-sm">View</button>
                </td>
              </tr>
              
              <tr className="hover:bg-neutral-50">
                <td className="py-4 px-4 text-sm font-medium text-neutral-900">Product Announcement</td>
                <td className="py-4 px-4 text-sm text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <BellRing size={14} className="text-secondary-500" />
                    <span>Notification</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-neutral-500">1,248 recipients</td>
                <td className="py-4 px-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-success-50 text-success-700 border border-success-200">
                    Active
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-neutral-900">42.1%</td>
                <td className="py-4 px-4 text-right">
                  <button className="text-primary-600 hover:text-primary-700 text-sm">View</button>
                </td>
              </tr>
              
              <tr className="hover:bg-neutral-50">
                <td className="py-4 px-4 text-sm font-medium text-neutral-900">Loyalty Rewards</td>
                <td className="py-4 px-4 text-sm text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <Gift size={14} className="text-accent-500" />
                    <span>Offer</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-neutral-500">587 recipients</td>
                <td className="py-4 px-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-warning-50 text-warning-700 border border-warning-200">
                    Scheduled
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-neutral-900">--</td>
                <td className="py-4 px-4 text-right">
                  <button className="text-primary-600 hover:text-primary-700 text-sm">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Recommendation Engine */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">AI Recommendations</h2>
          <button className="px-3 py-1.5 rounded-md border border-neutral-200 text-sm hover:bg-neutral-50">
            Refresh
          </button>
        </div>
        
        <div className="p-6 border border-dashed border-neutral-300 rounded-lg bg-neutral-50 flex flex-col items-center justify-center">
          <Target size={36} className="text-neutral-400 mb-3" />
          <h3 className="text-lg font-medium text-neutral-700 mb-1">Smart Recommendations</h3>
          <p className="text-neutral-500 text-center max-w-md mb-4">
            The AI is analyzing your customer sentiment data to generate personalized marketing recommendations.
          </p>
          <button className="px-4 py-2 bg-primary-600 text-white text-sm rounded-md hover:bg-primary-700 transition-colors">
            Generate Recommendations
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketingAutomationPage;