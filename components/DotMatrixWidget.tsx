
import React from 'react';

interface DotMatrixProps {
  label: string;
  percent: number;
  color: 'red' | 'green';
}

const DotMatrixWidget: React.FC<DotMatrixProps> = ({ label, percent, color }) => {
   const cols = 10;
   const rows = 6;
   const totalDots = cols * rows;
   const activeDots = Math.floor((percent / 100) * totalDots);
   
   return (
      <div className="flex flex-col items-center gap-3 w-full">
         <div className="grid grid-cols-10 gap-1.5 md:gap-2">
            {[...Array(rows)].map((_, row) => (
               [...Array(cols)].map((_, col) => {
                  const index = ((rows - 1 - row) * cols) + col; 
                  const isActive = index < activeDots;
                  const dotColor = color === 'red' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]' : 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]';
                  
                  return (
                     <div 
                        key={`${row}-${col}`} 
                        className={`w-2 h-2 rounded-full transition-all duration-700 delay-[${index * 10}ms] ${isActive ? dotColor : 'bg-slate-200'}`}
                     ></div>
                  )
               })
            ))}
         </div>
         <div className="flex justify-between w-full items-end px-1 mt-2">
            <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">{label}</span>
            <span className={`text-xl font-bold font-mono ${color === 'red' ? 'text-red-500' : 'text-green-500'}`}>{percent}%</span>
         </div>
      </div>
   );
};

export default DotMatrixWidget;
