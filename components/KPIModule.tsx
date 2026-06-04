
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface KPIProps {
  type: 'precedents' | 'weaknesses';
  value: string;
  label: string;
  icon: React.ReactNode;
}

const KPIModule: React.FC<KPIProps> = ({ type, value, label, icon }) => {
  if (type === 'precedents') {
    return (
      <div className="bg-[#ccff00] rounded-[2.5rem] p-6 text-slate-900 flex flex-col justify-between relative overflow-hidden group shadow-sm border border-slate-200 min-h-[200px]">
         <span className="font-bold tracking-tight text-xs uppercase z-10 flex items-center gap-2">
            {icon} Precedents
         </span>
         <div className="absolute top-1/2 -right-16 w-48 h-48 border border-black/5 rounded-full"></div>
         <div className="z-10 mt-auto">
           <h2 className="text-4xl font-bold tracking-tight mb-2">{value}</h2>
           <p className="text-[10px] font-bold opacity-60 uppercase tracking-wide">{label}</p>
         </div>
         <div className="absolute bottom-4 right-4 w-8 h-8 bg-slate-900 text-[#ccff00] rounded-full flex items-center justify-center transform -rotate-45 hover:rotate-0 transition-transform cursor-pointer shadow-lg">
           <ArrowUpRight size={16} />
         </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-600 rounded-[2.5rem] p-6 text-white flex flex-col justify-between relative overflow-hidden shadow-sm border border-blue-500 min-h-[200px]">
       <span className="font-bold tracking-tight text-xs uppercase z-10 flex items-center gap-2">
          {icon} Weaknesses
       </span>
       <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-30">
           <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
             {Array.from({length: 6}).map((_, i) => (
               <circle key={i} cx="100" cy="100" r={10 + (i * 12)} />
             ))}
           </svg>
       </div>
       <div className="z-10 mt-auto">
         <h2 className="text-4xl font-bold tracking-tight mb-1">{value}</h2>
         <p className="text-[10px] text-blue-100 opacity-80 leading-tight">{label}</p>
       </div>
    </div>
  );
};

export default KPIModule;
