import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import DashboardPage from './pages/DashboardPage';
import SentimentAnalysisPage from './pages/SentimentAnalysisPage';
import FeedbackAggregationPage from './pages/FeedbackAggregationPage';
import MarketingAutomationPage from './pages/MarketingAutomationPage';
import SecurityPage from './pages/SecurityPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="sentiment" element={<SentimentAnalysisPage />} />
          <Route path="feedback" element={<FeedbackAggregationPage />} />
          <Route path="marketing" element={<MarketingAutomationPage />} />
          <Route path="security" element={<SecurityPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;