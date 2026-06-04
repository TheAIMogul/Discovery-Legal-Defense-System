
import React from 'react';
import { Zap, ChevronRight } from 'lucide-react';

const AdversarialSimulationWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-[2.5rem] p-1 border border-slate-200 min-h-[220px] flex flex-col relative overflow-hidden shadow-sm">
       <div className="flex justify-between items-center p-6 pb-2 z-10">
          <span className="text-slate-500 text-xs font-bold tracking-wider uppercase flex items-center gap-2">
             <Zap size={12} className="text-purple-600"/> Opposition Simulation
          </span>
          <button className="text-purple-600 text-xs font-medium flex items-center gap-1 hover:text-purple-800 transition-colors">
            View Models <ChevronRight size={12} />
          </button>
       </div>

       {/* Inner Card */}
       <div className="flex-1 m-1 rounded-[2rem] relative overflow-hidden flex flex-col justify-end p-6 bg-slate-50 border border-slate-100">
          {/* WAVE ANIMATION */}
          <div className="absolute bottom-0 left-0 right-0 h-40 w-full overflow-hidden opacity-80 pointer-events-none">
             {/* Back Wave */}
             <div className="absolute bottom-0 w-[200%] h-full flex animate-wave-slow opacity-40 text-[#4c1d95]">
                <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="currentColor" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="currentColor" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
             </div>
             {/* Front Wave */}
             <div className="absolute bottom-[-10px] w-[200%] h-full flex animate-wave-fast text-[#7c3aed]">
                 <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                     <path fill="currentColor" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                 </svg>
                 <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                     <path fill="currentColor" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                 </svg>
             </div>
          </div>

          <div className="relative z-10 flex justify-between items-end">
             <div>
                <div className="text-purple-800 text-xs font-medium mb-1">Stress Testing Defense</div>
                <div className="text-4xl font-bold text-slate-900 tracking-tighter">8,492<span className="text-lg font-normal text-purple-600 ml-2">scenarios</span></div>
             </div>
             <div className="text-slate-400 text-[10px] font-mono mb-1">RUNNING AGENT: OPPOSITION</div>
          </div>
       </div>
       <style>{`
          @keyframes moveLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-wave-slow { animation: moveLeft 15s linear infinite; }
          .animate-wave-fast { animation: moveLeft 8s linear infinite; }
       `}</style>
    </div>
  );
};

export default AdversarialSimulationWidget;
