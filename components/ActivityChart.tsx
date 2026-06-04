
import React from 'react';
import { Activity } from 'lucide-react';

const ActivityChart: React.FC = () => {
  return (
    <div className="bg-white backdrop-blur-xl rounded-[2.5rem] p-8 border border-slate-200 relative overflow-hidden shadow-lg flex flex-col justify-between min-h-[320px]">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-slate-700 font-medium">Agent Activity Volume</h3>
          <p className="text-xs text-slate-500 mt-1">Research queries & simulations per hour</p>
        </div>
        <button className="flex items-center gap-2 text-xs border border-slate-200 px-4 py-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors backdrop-blur-sm">
          Live View <Activity size={12} className="animate-pulse text-green-500"/>
        </button>
      </div>
      <div className="relative h-40 w-full mt-4">
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,120 C50,115 100,80 150,90 C200,100 250,110 300,90 C350,70 400,40 450,60 C500,80 550,50 600,40 C650,30 700,80 750,90 L750,160 L0,160 Z" fill="url(#chartGrad)" stroke="none" />
            <path d="M0,120 C50,115 100,80 150,90 C200,100 250,110 300,90 C350,70 400,40 450,60 C500,80 550,50 600,40 C650,30 700,80 750,90" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
            
            {/* Grid */}
            <line x1="0" y1="100%" x2="100%" y2="100%" stroke="#cbd5e1" strokeOpacity="0.5" />
        </svg>
        <div className="flex justify-between mt-4 px-2">
          {['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm'].map(m => (
            <span key={m} className="text-[9px] uppercase tracking-wider text-slate-400">{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;
