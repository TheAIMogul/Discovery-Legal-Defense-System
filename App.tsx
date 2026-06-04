
import React from 'react';
import DiscoveryDashboard from './components/DiscoveryDashboard';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-[#ccff00] selection:text-slate-900">
      <DiscoveryDashboard />
    </div>
  );
};

export default App;
