import React from 'react';
import { 
  MessageCircle, 
  Filter, 
  Search,
  Inbox,
  Mail,
  Twitter,
  FileText
} from 'lucide-react';

// Simplified version for demonstration

const FeedbackAggregationPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-secondary-100 flex items-center justify-center">
            <MessageCircle size={20} className="text-secondary-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">Feedback Aggregation</h1>
            <p className="text-neutral-500">Consolidate and analyze customer feedback from all channels</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            <input 
              type="text" 
              placeholder="Search feedback..." 
              className="pl-9 pr-4 py-2 rounded-md border border-neutral-200 text-sm w-[200px] focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          
          <button className="flex items-center gap-1 px-3 py-2 rounded-md border border-neutral-200 text-sm hover:bg-neutral-50">
            <Filter size={16} />
            <span>Filter</span>
          </button>
        </div>
      </div>
      
      {/* Feedback sources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200 hover:border-primary-300 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
              <Inbox size={20} className="text-primary-600" />
            </div>
            <div>
              <h3 className="font-medium">Support Tickets</h3>
              <p className="text-sm text-neutral-500">328 entries</p>
            </div>
          </div>
          <div className="h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
            <div className="h-full bg-primary-500 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-neutral-500">
            <span>65% analyzed</span>
            <span>Last updated: 15m ago</span>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200 hover:border-primary-300 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-secondary-100 flex items-center justify-center">
              <Mail size={20} className="text-secondary-600" />
            </div>
            <div>
              <h3 className="font-medium">Email Feedback</h3>
              <p className="text-sm text-neutral-500">187 entries</p>
            </div>
          </div>
          <div className="h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
            <div className="h-full bg-secondary-500 rounded-full" style={{ width: '92%' }}></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-neutral-500">
            <span>92% analyzed</span>
            <span>Last updated: 30m ago</span>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200 hover:border-primary-300 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-accent-100 flex items-center justify-center">
              <Twitter size={20} className="text-accent-600" />
            </div>
            <div>
              <h3 className="font-medium">Social Media</h3>
              <p className="text-sm text-neutral-500">532 entries</p>
            </div>
          </div>
          <div className="h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
            <div className="h-full bg-accent-500 rounded-full" style={{ width: '78%' }}></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-neutral-500">
            <span>78% analyzed</span>
            <span>Last updated: 5m ago</span>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200 hover:border-primary-300 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-warning-100 flex items-center justify-center">
              <FileText size={20} className="text-warning-600" />
            </div>
            <div>
              <h3 className="font-medium">Customer Surveys</h3>
              <p className="text-sm text-neutral-500">145 entries</p>
            </div>
          </div>
          <div className="h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
            <div className="h-full bg-warning-500 rounded-full" style={{ width: '100%' }}></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-neutral-500">
            <span>100% analyzed</span>
            <span>Last updated: 2h ago</span>
          </div>
        </div>
      </div>
      
      {/* Feedback overview */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Feedback Overview</h2>
          <div className="flex items-center gap-2">
            <select className="px-3 py-1.5 rounded-md border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="all">All Sources</option>
              <option value="support">Support Tickets</option>
              <option value="email">Email</option>
              <option value="social">Social Media</option>
              <option value="surveys">Surveys</option>
            </select>
          </div>
        </div>
        
        {/* Placeholder for feedback entries - would be a table or list in real implementation */}
        <div className="rounded-lg border border-neutral-200">
          <div className="bg-neutral-50 px-4 py-3 border-b border-neutral-200 grid grid-cols-12 gap-4">
            <div className="col-span-3 font-medium">Source</div>
            <div className="col-span-4 font-medium">Customer</div>
            <div className="col-span-3 font-medium">Sentiment</div>
            <div className="col-span-2 font-medium text-right">Date</div>
          </div>
          
          <div className="divide-y divide-neutral-100">
            {Array(5).fill(null).map((_, index) => (
              <div key={index} className="px-4 py-3 grid grid-cols-12 gap-4 hover:bg-neutral-50">
                <div className="col-span-3 flex items-center gap-2">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center 
                    ${index % 4 === 0 ? 'bg-primary-100' : 
                     index % 4 === 1 ? 'bg-secondary-100' : 
                     index % 4 === 2 ? 'bg-accent-100' : 'bg-warning-100'}`}
                  >
                    {index % 4 === 0 ? <Inbox size={14} className="text-primary-600" /> : 
                     index % 4 === 1 ? <Mail size={14} className="text-secondary-600" /> : 
                     index % 4 === 2 ? <Twitter size={14} className="text-accent-600" /> : 
                     <FileText size={14} className="text-warning-600" />}
                  </div>
                  <span className="text-sm">
                    {index % 4 === 0 ? 'Support Ticket' : 
                     index % 4 === 1 ? 'Email' : 
                     index % 4 === 2 ? 'Twitter' : 'Survey'}
                  </span>
                </div>
                <div className="col-span-4 flex items-center text-sm">
                  Customer {1000 + index}
                </div>
                <div className="col-span-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full
                    ${index % 3 === 0 ? 'bg-success-50 text-success-700 border border-success-200' : 
                     index % 3 === 1 ? 'bg-neutral-50 text-neutral-700 border border-neutral-200' : 
                     'bg-error-50 text-error-700 border border-error-200'}`}
                  >
                    {index % 3 === 0 ? 'Positive' : index % 3 === 1 ? 'Neutral' : 'Negative'}
                  </span>
                </div>
                <div className="col-span-2 text-sm text-neutral-500 text-right">
                  {index === 0 ? 'Today' : 
                   index === 1 ? 'Yesterday' : 
                   `${index + 1} days ago`}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-neutral-500">
            Showing 5 of 1,192 entries
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 rounded border border-neutral-200 text-sm disabled:opacity-50">
              Previous
            </button>
            <button className="px-3 py-1 rounded bg-primary-50 border border-primary-200 text-primary-700 text-sm">
              1
            </button>
            <button className="px-3 py-1 rounded border border-neutral-200 text-sm">
              2
            </button>
            <button className="px-3 py-1 rounded border border-neutral-200 text-sm">
              3
            </button>
            <button className="px-3 py-1 rounded border border-neutral-200 text-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackAggregationPage;