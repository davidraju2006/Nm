import React, { useEffect, useState } from 'react';
import { Star, MessageCircle, Twitter, Mail, Heart } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { getCurrentUser, type AuthUser } from '../../lib/auth';

interface FeedbackItem {
  id: string;
  customer: string;
  company: string;
  text: string;
  source: 'review' | 'social' | 'email' | 'support';
  sentiment: 'positive' | 'neutral' | 'negative';
  created_at: string;
}

const SourceIcon: React.FC<{ source: string }> = ({ source }) => {
  switch (source) {
    case 'review':
      return <Star size={16} className="text-warning-500" />;
    case 'social':
      return <Twitter size={16} className="text-primary-500" />;
    case 'email':
      return <Mail size={16} className="text-secondary-500" />;
    case 'support':
      return <MessageCircle size={16} className="text-success-500" />;
    default:
      return null;
  }
};

const SentimentBadge: React.FC<{ sentiment: string }> = ({ sentiment }) => {
  const classes = {
    positive: 'bg-success-50 text-success-700 border-success-200',
    neutral: 'bg-neutral-50 text-neutral-700 border-neutral-200',
    negative: 'bg-error-50 text-error-700 border-error-200',
  };
  
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border ${classes[sentiment as keyof typeof classes]}`}>
      {sentiment}
    </span>
  );
};

const RecentFeedbackList: React.FC = () => {
  const [feedback, setFeedback] = useState<FeedbackItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const user = await getCurrentUser();
      setCurrentUser(user);
    };
    loadUser();
  }, []);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        let query = supabase
          .from('feedback')
          .select(`
            id,
            text,
            source,
            sentiment,
            created_at,
            customer:customer_id(email),
            user_profiles!customer_id(company)
          `)
          .order('created_at', { ascending: false });

        // If user is a customer, only show their feedback
        if (currentUser?.role === 'customer') {
          query = query.eq('customer_id', currentUser.id);
        }

        const { data, error: fetchError } = await query.limit(4);

        if (fetchError) throw fetchError;

        const formattedData = data.map(item => ({
          id: item.id,
          customer: item.customer?.email || 'Anonymous',
          company: item.user_profiles?.company || 'Unknown Company',
          text: item.text,
          source: item.source,
          sentiment: item.sentiment,
          created_at: new Date(item.created_at).toLocaleString()
        }));

        setFeedback(formattedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch feedback');
      } finally {
        setLoading(false);
      }
    };

    if (currentUser) {
      fetchFeedback();
    }
  }, [currentUser]);

  if (!currentUser) {
    return (
      <div className="text-center py-8 text-neutral-500">
        Please sign in to view feedback
      </div>
    );
  }

  if (loading) {
    return <div className="flex justify-center py-8">Loading feedback...</div>;
  }

  if (error) {
    return <div className="text-error-600 py-4">{error}</div>;
  }

  return (
    <div className="space-y-4">
      {feedback.map((item) => (
        <div key={item.id} className="p-3 border border-neutral-200 rounded-lg hover:border-primary-200 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-neutral-100 flex items-center justify-center">
                {item.sentiment === 'positive' ? (
                  <Heart size={14} className="text-error-500" />
                ) : (
                  <span className="text-xs font-medium">{item.customer.substring(0, 2)}</span>
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900">{item.customer}</p>
                {currentUser.role === 'admin' && (
                  <p className="text-xs text-neutral-500">{item.company}</p>
                )}
                <div className="flex items-center gap-2">
                  <SourceIcon source={item.source} />
                  <span className="text-xs text-neutral-500">{item.created_at}</span>
                </div>
              </div>
            </div>
            <SentimentBadge sentiment={item.sentiment} />
          </div>
          
          <p className="text-sm text-neutral-700 pl-10">{item.text}</p>
        </div>
      ))}
      
      <button className="w-full py-2 text-center text-sm text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-md transition-colors">
        View All Feedback
      </button>
    </div>
  );
};

export default RecentFeedbackList;