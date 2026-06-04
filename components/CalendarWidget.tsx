
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-[2.5rem] p-6 border border-slate-200 flex flex-col shadow-sm">
       <div className="bg-slate-50 rounded-xl p-3 flex justify-between items-center mb-6 border border-slate-200">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Hearing Schedule</span>
          <div className="flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
             <span className="text-[10px] text-slate-500">Impending</span>
          </div>
       </div>

       <div className="flex justify-between items-center mb-4 px-2">
          <ChevronLeft size={16} className="text-slate-400 cursor-pointer hover:text-slate-900" />
          <span className="text-sm font-bold text-slate-900">February, 2026</span>
          <ChevronRight size={16} className="text-slate-400 cursor-pointer hover:text-slate-900" />
       </div>

       <div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center mb-2">
          {['MO','TU','WE','TH','FR','SA','SU'].map(d => (
             <span key={d} className="text-[10px] font-bold text-slate-400">{d}</span>
          ))}
       </div>
       <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center">
          {[...Array(3)].map((_, i) => <span key={`empty-${i}`} />)}
          {[...Array(28)].map((_, i) => {
             const day = i + 1;
             const isHearing = day === 14;
             const isFiling = day === 10;
             
             return (
               <div 
                 key={day} 
                 className={`h-8 flex items-center justify-center text-xs font-medium rounded-lg relative cursor-default
                    ${isHearing ? 'bg-red-50 text-red-600 border border-red-200' : ''}
                    ${isFiling ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'text-slate-500'}
                 `}
               >
                  {day}
                  {isHearing && <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>}
               </div>
             )
          })}
       </div>
    </div>
  );
};

export default CalendarWidget;
