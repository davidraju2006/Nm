/*
  # Create user profiles table

  1. New Tables
    - `user_profiles`
      - `id` (uuid, primary key, references auth.users)
      - `email` (text, unique)
      - `role` (text, either 'admin' or 'customer')
      - `company` (text, nullable)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on user_profiles table
    - Add policies for authenticated users
*/

CREATE TABLE user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users,
  email text UNIQUE NOT NULL,
  role text NOT NULL CHECK (role IN ('admin', 'customer')),
  company text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON user_profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Index for faster lookups
CREATE INDEX user_profiles_role_idx ON user_profiles(role);