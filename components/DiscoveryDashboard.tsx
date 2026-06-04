
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import OverviewTab from './OverviewTab';
import StrategyTab from './StrategyTab';
import EvidenceTab from './EvidenceTab';

const DiscoveryDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden relative">
      {/* Ambient Background Lighting */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px] opacity-40"></div>
      </div>

      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        {/* --- MAIN CONTENT --- */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 relative scrollbar-hide">
          {/* Header */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 sticky top-0 bg-slate-50/80 backdrop-blur-xl z-50 py-2 border-b border-slate-200 md:border-none md:static">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold tracking-tight flex flex-wrap items-center gap-2">
                Discovery <span className="text-slate-500 text-sm font-normal tracking-wide ml-0 md:ml-2">// STATE V. PATTERSON (CR-2024-0092)</span>
              </h1>
            </div>
            
            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-lg p-1.5 rounded-full border border-slate-200 shadow-sm overflow-x-auto max-w-full">
              {['Overview', 'Strategy', 'Evidence', 'Agents', 'Logs'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab 
                      ? 'bg-slate-900 text-white shadow-md scale-105' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <div className="h-4 w-px bg-slate-300 mx-1 hidden sm:block"></div>
              <div className="hidden sm:flex items-center gap-2 pr-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                 <span className="text-[10px] uppercase font-bold text-green-500 tracking-wider">System Active</span>
              </div>
            </div>
          </header>

          {/* DASHBOARD CONTENT AREA */}
          <div className="min-h-[calc(100vh-140px)]">
            {activeTab === 'Overview' && <OverviewTab />}
            {activeTab === 'Strategy' && <StrategyTab />}
            {activeTab === 'Evidence' && <EvidenceTab />}
            
            {/* Placeholder for tabs not yet implemented */}
            {(activeTab === 'Agents' || activeTab === 'Logs') && (
               <div className="flex flex-col items-center justify-center h-96 text-slate-400 animate-pulse">
                  <div className="text-4xl font-bold mb-4 opacity-20">{activeTab}</div>
                  <div className="text-xs uppercase tracking-widest">Module Loading...</div>
               </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DiscoveryDashboard;
