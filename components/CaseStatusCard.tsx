
import React from 'react';
import { Shield } from 'lucide-react';

const CaseStatusCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 backdrop-blur-md rounded-[2.5rem] p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-between border border-slate-200 shadow-xl group">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay"></div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
          <Shield size={12} className="text-blue-600" />
          <span className="text-[10px] uppercase tracking-widest font-bold text-slate-600">Defense Protocol Omega</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-medium leading-[1.1] mb-6 tracking-tight text-slate-900">
          Research Agent woke up at <span className="text-blue-600">3:47am</span>. New precedent found.
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex-1 backdrop-blur-sm">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Last Action</div>
            <div className="text-sm font-medium text-blue-700">Posted citation to case board</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex-1 backdrop-blur-sm">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Next Wake</div>
            <div className="text-sm font-medium text-green-700">12 mins (Scheduled)</div>
          </div>
        </div>

        <div>
          <p className="text-slate-500 text-sm font-light mb-3">Recent Activity</p>
          <div className="flex items-center gap-3">
            <div className="h-10 w-1 bg-blue-500 rounded-full"></div>
            <div>
              <div className="text-slate-900 font-medium">Appellate Decision 2019 flagged</div>
              <div className="text-slate-500 text-xs">Tagged @StrategyAgent for immediate review</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStatusCard;
