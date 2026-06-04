
import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const WinProbabilitySlider: React.FC = () => {
  const [percentage, setPercentage] = useState(72);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateProgress = (clientX: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const rawPercent = (x / rect.width) * 100;
    const clamped = Math.min(100, Math.max(0, rawPercent));
    setPercentage(Math.round(clamped));
  };

  const handleMouseDown = (e: React.MouseEvent) => { setIsDragging(true); updateProgress(e.clientX); };
  const handleTouchStart = (e: React.TouchEvent) => { setIsDragging(true); updateProgress(e.touches[0].clientX); };

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => { 
      if (!isDragging) return; 
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      updateProgress(clientX); 
    };
    const handleUp = () => setIsDragging(false);
    
    if (isDragging) { 
      window.addEventListener('mousemove', handleMove); 
      window.addEventListener('mouseup', handleUp); 
      window.addEventListener('touchmove', handleMove); 
      window.addEventListener('touchend', handleUp); 
    }
    return () => { 
      window.removeEventListener('mousemove', handleMove); 
      window.removeEventListener('mouseup', handleUp); 
      window.removeEventListener('touchmove', handleMove); 
      window.removeEventListener('touchend', handleUp); 
    };
  }, [isDragging]);

  return (
    <div className="bg-white backdrop-blur-xl rounded-[2.5rem] p-8 flex flex-col justify-center border border-slate-200 relative overflow-hidden select-none shadow-lg min-h-[220px]">
       <div className="flex justify-between items-center mb-8 relative z-10">
         <h3 className="text-slate-700 font-medium">Case Viability Score</h3>
         <button className="bg-slate-50 p-2 rounded-full hover:bg-slate-100 hover:text-slate-900 transition-colors backdrop-blur-md border border-slate-200 text-slate-500">
           <ArrowUpRight size={14} />
         </button>
       </div>
       
       <div 
        ref={trackRef}
        className="relative h-14 bg-slate-100 backdrop-blur-sm rounded-full flex items-center px-0 overflow-hidden border border-slate-200 cursor-pointer touch-none group shadow-inner"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
       >
         <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(-45deg,transparent,transparent_5px,#cbd5e1_5px,#cbd5e1_10px)]"></div>
         <div 
          className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-blue-400 to-blue-600 z-0 rounded-l-full shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-75"
          style={{ width: `${percentage}%` }}
         ></div>
         <div 
          className={`absolute h-14 w-14 bg-white/80 backdrop-blur-md rounded-full border border-slate-200 flex items-center justify-center z-10 shadow-lg transition-transform duration-75 ease-out ${isDragging ? 'scale-110 border-slate-400' : 'group-hover:scale-105 border-slate-300'}`}
          style={{ left: `calc(${percentage}% - 28px)` }}
         >
            <div className="flex gap-[3px]">
               <div className="w-[3px] h-3 bg-slate-400 rounded-full"></div>
               <div className="w-[3px] h-3 bg-slate-400 rounded-full"></div>
            </div>
         </div>
       </div>

       <div className="mt-6 flex gap-3 items-center z-10">
         <span className="text-3xl font-bold font-mono text-slate-900">{percentage}%</span>
         <span className="text-xs text-slate-500 font-medium leading-tight">Probability of favorable outcome<br/>based on current precedents.</span>
       </div>
    </div>
  );
};

export default WinProbabilitySlider;
