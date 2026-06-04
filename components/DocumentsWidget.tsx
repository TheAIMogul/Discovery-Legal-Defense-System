
import React from 'react';
import { Database, FileText, MoreHorizontal, Plus } from 'lucide-react';

const DocumentsWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-[2.5rem] p-6 border border-slate-200 flex flex-col shadow-sm">
       <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
              <Database size={16} className="text-slate-500" />
              <span className="text-slate-500 text-xs font-bold tracking-wider uppercase">Evidence Locker</span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">ENCRYPTED</span>
       </div>

       <div className="flex flex-col gap-3">
          <div className="bg-slate-50 p-3 rounded-2xl flex items-center justify-between group hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 relative shadow-sm">
                   <FileText size={18} className="text-orange-500" />
                   <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-green-500 rounded-full border border-white"></div>
                </div>
                <div>
                   <div className="text-sm font-medium text-slate-900">Arrest Report.pdf</div>
                   <div className="text-[10px] text-slate-500">Processed by Case Law Agent</div>
                </div>
             </div>
             <MoreHorizontal size={14} className="text-slate-400 hover:text-slate-900" />
          </div>

          <div className="bg-slate-50 p-3 rounded-2xl flex items-center justify-between group hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                   <FileText size={18} className="text-blue-500" />
                </div>
                <div>
                   <div className="text-sm font-medium text-slate-900">Witness_Statement_01.doc</div>
                   <div className="text-[10px] text-slate-500">Flagged for inconsistencies</div>
                </div>
             </div>
             <MoreHorizontal size={14} className="text-slate-400 hover:text-slate-900" />
          </div>

          <button className="mt-2 w-full py-3 border border-dashed border-slate-300 rounded-2xl text-slate-500 text-sm font-medium hover:bg-slate-50 hover:text-slate-900 hover:border-slate-400 transition-all flex items-center justify-center gap-2">
             <Plus size={16} /> Upload Discovery
          </button>
       </div>
    </div>
  );
};

export default DocumentsWidget;
