import React, { useEffect, useState } from 'react';
import { ArrowRight, Mail, Users, Gift, BellRing } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface Campaign {
  id: string;
  title: string;
  description: string;
  type: 'email' | 'notification' | 'offer';
  impact: 'high' | 'medium' | 'low';
  action_text: string;
}

const ImpactBadge: React.FC<{ impact: string }> = ({ impact }) => {
  const classes = {
    high: 'bg-error-50 text-error-700 border-error-200',
    medium: 'bg-warning-50 text-warning-700 border-warning-200',
    low: 'bg-success-50 text-success-700 border-success-200',
  };
  
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border ${classes[impact as keyof typeof classes]}`}>
      {impact} impact
    </span>
  );
};

const MarketingRecommendations: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const { data, error } = await supabase
          .from('marketing_campaigns')
          .select('*')
          .eq('status', 'active')
          .order('created_at', { ascending: false })
          .limit(4);

        if (error) throw error;

        const formattedData = data.map(campaign => ({
          id: campaign.id,
          title: campaign.title,
          description: campaign.description,
          type: campaign.type,
          impact: campaign.engagement_rate > 0.5 ? 'high' : campaign.engagement_rate > 0.3 ? 'medium' : 'low',
          action_text: `Create ${campaign.type.charAt(0).toUpperCase() + campaign.type.slice(1)}`
        }));

        setCampaigns(formattedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch campaigns');
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  if (loading) {
    return <div className="flex justify-center py-8">Loading recommendations...</div>;
  }

  if (error) {
    return <div className="text-error-600 py-4">{error}</div>;
  }

  return (
    <div className="space-y-4">
      {campaigns.map((item) => (
        <div 
          key={item.id} 
          className="p-4 border border-neutral-200 rounded-lg hover:border-primary-200 transition-colors"
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-neutral-100 flex items-center justify-center">
                {item.type === 'email' && <Mail size={16} className="text-primary-500" />}
                {item.type === 'notification' && <BellRing size={16} className="text-secondary-500" />}
                {item.type === 'offer' && <Gift size={16} className="text-success-500" />}
              </div>
              <h3 className="text-sm font-medium text-neutral-900">{item.title}</h3>
            </div>
            <ImpactBadge impact={item.impact} />
          </div>
          
          <p className="text-sm text-neutral-600 mb-3 pl-11">{item.description}</p>
          
          <div className="pl-11">
            <button className="flex items-center text-sm font-medium text-primary-600 hover:text-primary-700">
              {item.action_text}
              <ArrowRight size={14} className="ml-1" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketingRecommendations;