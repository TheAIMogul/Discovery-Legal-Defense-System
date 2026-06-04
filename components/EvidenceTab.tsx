
import React from 'react';
import { Database, FileText, CheckCircle, AlertTriangle, Fingerprint, Lock, Eye, Calendar, MapPin } from 'lucide-react';

const EvidenceTab: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
       
       {/* Case Header */}
       <div className="flex flex-col md:flex-row justify-between items-end mb-10 pb-6 border-b border-slate-200 gap-6">
          <div>
             <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#ccff00] text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Active Litigation</span>
                <span className="text-slate-500 text-xs font-mono">CASE NO. 24-CIV-00912</span>
             </div>
             <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">
                Micah Berkley <span className="text-slate-400 font-light mx-2">vs.</span> 
                <span className="blur-[5px] select-none text-slate-900/80 transition-all hover:blur-[3px] duration-500 relative group cursor-help">
                   Dominique Ward
                   <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700 pointer-events-none">Identity Redacted</span>
                </span>
             </h1>
             <p className="text-slate-600 max-w-2xl">
                Evidence Locker #0921. Contains verified assets, forensic reports, and character affidavits. 
                All documents processed by <span className="text-orange-600">@ReceiptsAgent</span> and hashed to blockchain for immutability.
             </p>
          </div>
          <div className="flex gap-4">
             <div className="text-right">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Chain of Custody</div>
             </div>
             <div className="w-px h-10 bg-slate-200"></div>
             <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">14</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Verified Exhibits</div>
             </div>
          </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: Categories */}
          <div className="lg:col-span-1 space-y-2">
             <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4 pl-2">Evidence Categories</h3>
             <CategoryButton active label="Digital Forensics" count={4} icon={<Fingerprint size={16}/>} />
             <CategoryButton label="Financial Records" count={8} icon={<Database size={16}/>} />
             <CategoryButton label="Sworn Affidavits" count={12} icon={<FileText size={16}/>} />
             <CategoryButton label="Character References" count={6} icon={<CheckCircle size={16}/>} />
             <CategoryButton label="Opposition Discovery" count={22} icon={<Eye size={16}/>} />
             
             <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h4 className="text-slate-900 text-sm font-bold mb-3 flex items-center gap-2">
                   <Lock size={14} className="text-purple-600"/> Secure Vault
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                   This locker is encrypted with AES-256. Access logs are immutable. Last access by <span className="text-slate-900 font-medium">Micah Berkley</span> at 3:42 PM.
                </p>
                <button className="w-full py-2 bg-white border border-slate-300 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-400 transition-all rounded-lg text-xs font-bold uppercase tracking-wide text-slate-700">
                   View Access Logs
                </button>
             </div>
          </div>

          {/* RIGHT: Document Feed */}
          <div className="lg:col-span-2 space-y-4">
             <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">Primary Exhibits (Verified)</h3>
             
             <EvidenceCard 
                title="Forensic Metadata Analysis: Plaintiff Communications"
                type="DIGITAL_FORENSICS"
                date="Feb 12, 2025"
                status="CRITICAL"
                statusColor="bg-red-50 text-red-600 border-red-200"
                content="Comprehensive extraction of EXIF and header data from screenshots submitted by Opposition. Analysis confirms creation dates post-date the alleged incidents by 4 months. Proves fabrication of timeline."
                agentNote="@CaseLawAgent: This meets the standard for 'Spoliation of Evidence' under current precedent."
             />

             <EvidenceCard 
                title="Chase Bank: Asset Contribution Trace"
                type="FINANCIAL_RECORD"
                date="Jan 24, 2025"
                status="VERIFIED"
                statusColor="bg-green-50 text-green-600 border-green-200"
                content="Certified bank statements (Oct 2023 - Present) demonstrating 100% of capital for the disputed asset originated from Micah Berkley's personal accounts. No matching inbound transfers from Plaintiff."
                agentNote="@ReceiptsAgent: Prepared Exhibit C for Motion to Dismiss financial claims."
             />

             <EvidenceCard 
                title="Geolocation Logs (Google Timeline Data)"
                type="GEOSPATIAL"
                date="Dec 10, 2024"
                status="EXCULPATORY"
                statusColor="bg-purple-50 text-purple-600 border-purple-200"
                content="Raw GPS data logs placing Defendant at Google HQ (Mountain View, CA) during the specific dates/times Plaintiff alleges the incident occurred in Los Angeles. Corroborated by badge swipe data."
                agentNote="@StrategyAgent: This is the 'Smoking Gun'. Directly impeaches Plaintiff credibility."
             />

             <EvidenceCard 
                title="Affidavit of Truth: Witness J. Doe"
                type="SWORN_TESTIMONY"
                date="Feb 02, 2025"
                status="FILED"
                statusColor="bg-blue-50 text-blue-600 border-blue-200"
                content="Sworn statement from neutral third-party witness present at the alleged event. Witness categorizes Plaintiff's version of events as 'categorically false' and provides video evidence of calm interaction."
             />

             <EvidenceCard 
                title="Ivy League & Corporate Character Attestations"
                type="CHARACTER_EVIDENCE"
                date="Feb 14, 2025"
                status="READY"
                statusColor="bg-indigo-50 text-indigo-600 border-indigo-200"
                content="Collection of 14 letters from senior Google executives and community leaders attesting to Micah Berkley's integrity, community service, and mentorship history. Contradicts 'character' attacks."
             />

          </div>
       </div>
    </div>
  );
};

const CategoryButton: React.FC<{label: string, count: number, icon: React.ReactNode, active?: boolean}> = ({label, count, icon, active}) => (
   <button className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 group ${active ? 'bg-slate-100 border-slate-300 text-slate-900 shadow-sm' : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
      <div className="flex items-center gap-3">
         {icon}
         <span className="text-sm font-medium">{label}</span>
      </div>
      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${active ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-600 group-hover:bg-slate-300'}`}>{count}</span>
   </button>
)

const EvidenceCard: React.FC<{title: string, type: string, date: string, status: string, statusColor: string, content: string, agentNote?: string}> = ({
   title, type, date, status, statusColor, content, agentNote
}) => (
   <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-colors group relative overflow-hidden shadow-sm">
      <div className="flex justify-between items-start mb-4">
         <div className="flex flex-col gap-1">
            <span className="text-[10px] text-slate-500 font-mono flex items-center gap-2">
               {type} <span className="w-1 h-1 bg-slate-300 rounded-full"></span> {date}
            </span>
            <h4 className="text-slate-900 font-semibold text-lg leading-tight group-hover:text-blue-700 transition-colors">{title}</h4>
         </div>
         <div className={`text-[10px] font-bold px-2 py-1 rounded border ${statusColor}`}>
            {status}
         </div>
      </div>
      
      <p className="text-slate-600 text-sm leading-relaxed mb-4">
         {content}
      </p>

      {agentNote && (
         <div className="bg-slate-50 rounded-lg p-3 border-l-2 border-purple-500 text-xs text-slate-700 font-mono mt-4">
            {agentNote}
         </div>
      )}

      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
         <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-slate-200 border border-white flex items-center justify-center text-[8px] text-slate-700 font-bold">MB</div>
            <div className="w-6 h-6 rounded-full bg-[#ccff00] border border-white flex items-center justify-center text-[8px] text-slate-900 font-bold">AI</div>
         </div>
         <button className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors">
            View Full Document <Eye size={12} />
         </button>
      </div>
   </div>
)

export default EvidenceTab;
