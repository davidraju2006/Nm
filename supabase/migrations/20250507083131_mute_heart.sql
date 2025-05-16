/*
  # Voice of Customer Database Schema

  1. New Tables
    - `feedback`
      - `id` (uuid, primary key)
      - `customer_id` (uuid, references auth.users)
      - `text` (text, feedback content)
      - `source` (text, feedback source like 'email', 'social', 'support')
      - `sentiment` (text, one of 'positive', 'neutral', 'negative')
      - `created_at` (timestamp)
    
    - `topics`
      - `id` (uuid, primary key)
      - `name` (text, topic name)
      - `count` (integer, mention count)
      - `sentiment_score` (float, average sentiment)
      - `created_at` (timestamp)
    
    - `marketing_campaigns`
      - `id` (uuid, primary key)
      - `title` (text, campaign name)
      - `description` (text)
      - `type` (text, campaign type)
      - `status` (text)
      - `engagement_rate` (float)
      - `created_at` (timestamp)
    
    - `customer_segments`
      - `id` (uuid, primary key)
      - `name` (text, segment name)
      - `description` (text)
      - `criteria` (jsonb, segmentation rules)
      - `customer_count` (integer)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Feedback table
CREATE TABLE feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid REFERENCES auth.users,
  text text NOT NULL,
  source text NOT NULL CHECK (source IN ('email', 'social', 'support', 'review')),
  sentiment text NOT NULL CHECK (sentiment IN ('positive', 'neutral', 'negative')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read all feedback"
  ON feedback
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert their own feedback"
  ON feedback
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = customer_id);

-- Topics table
CREATE TABLE topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  count integer DEFAULT 0,
  sentiment_score float CHECK (sentiment_score >= 0 AND sentiment_score <= 1),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE topics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read all topics"
  ON topics
  FOR SELECT
  TO authenticated
  USING (true);

-- Marketing campaigns table
CREATE TABLE marketing_campaigns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  type text NOT NULL CHECK (type IN ('email', 'notification', 'offer')),
  status text NOT NULL CHECK (status IN ('active', 'scheduled', 'completed', 'draft')),
  engagement_rate float DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE marketing_campaigns ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read all campaigns"
  ON marketing_campaigns
  FOR SELECT
  TO authenticated
  USING (true);

-- Customer segments table
CREATE TABLE customer_segments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  description text,
  criteria jsonb NOT NULL DEFAULT '{}',
  customer_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE customer_segments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read all segments"
  ON customer_segments
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX feedback_customer_id_idx ON feedback(customer_id);
CREATE INDEX feedback_sentiment_idx ON feedback(sentiment);
CREATE INDEX feedback_created_at_idx ON feedback(created_at);
CREATE INDEX topics_sentiment_score_idx ON topics(sentiment_score);
CREATE INDEX campaigns_status_idx ON marketing_campaigns(status);