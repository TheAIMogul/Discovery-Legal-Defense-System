
import React from 'react';
import { Brain, Cpu, Search, ShieldAlert, FileCheck, MessageSquare, Terminal, GitBranch, Crosshair } from 'lucide-react';

const StrategyTab: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto pb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        {/* Intro / Context Card */}
        <div className="xl:col-span-2 bg-white border border-slate-200 rounded-[2rem] p-8 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-32 bg-[#ccff00] blur-[150px] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Defense Protocol <span className="text-slate-900 bg-[#ccff00] px-2 rounded">Omega</span></h2>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl">
              OpenClaw Orchestration Active. 5 Autonomous Agents are currently assigned to this case context. 
              Agents operate on 15-minute wake cycles, sharing memory via <code className="bg-slate-100 px-1 py-0.5 rounded text-xs text-blue-600 border border-slate-200">SOUL.md</code> identity files.
              Current strategy focuses on dismantling prosecution credibility through granular forensic analysis and adversarial simulation.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-mono text-green-600 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                SYSTEM_OPTIMAL
              </div>
              <div className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-mono text-slate-500 flex items-center gap-2">
                <Cpu size={12} />
                CLAW_FRAMEWORK_V2.1
              </div>
              <div className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-mono text-slate-500 flex items-center gap-2">
                <GitBranch size={12} />
                SHARED_MEMORY_ACTIVE
              </div>
            </div>
          </div>
        </div>

        {/* Global Stats */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 flex flex-col justify-center shadow-sm">
           <div className="grid grid-cols-2 gap-4">
              <StatBox label="Simulations Run" value="8,492" sub="Adversarial Scenarios" color="text-purple-600" />
              <StatBox label="Citations Found" value="1,204" sub="Verified Precedents" color="text-blue-600" />
              <StatBox label="Motion Drafts" value="14" sub="Ready for Review" color="text-orange-600" />
              <StatBox label="Win Probability" value="78%" sub="+4% since 3am" color="text-green-600" />
           </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        {/* --- LEFT: AGENT SQUAD --- */}
        <div className="w-full xl:w-1/3 flex flex-col gap-4">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest pl-2 mb-2 flex items-center gap-2">
             <Cpu size={14} /> Active Agent Squad
          </h3>
          
          <AgentCard 
            name="Case Law Agent" 
            role="Research & Precedents" 
            status="Working" 
            id="agent:caselaw:main"
            icon={<Search size={18} className="text-blue-400"/>}
            activity="Scanning appellate decisions for suppression motion criteria matching current fact pattern."
          />
          <AgentCard 
            name="Opposition Agent" 
            role="Adversarial Stress Test" 
            status="Sleeping" 
            id="agent:opposition:main"
            icon={<ShieldAlert size={18} className="text-red-400"/>}
            activity="Completed simulation of 'Good Faith Exception' argument. 84% probability of prosecution use."
            nextWake="3m"
          />
          <AgentCard 
            name="Strategy Agent" 
            role="Synthesis & Framework" 
            status="Working" 
            id="agent:strategy:main"
            icon={<Brain size={18} className="text-purple-400"/>}
            activity="Synthesizing CaseLaw findings with Opposition weaknesses. Identified gap in prosecution timeline."
          />
          <AgentCard 
            name="Prep Agent" 
            role="Cross-Exam Simulator" 
            status="Standby" 
            id="agent:prep:main"
            icon={<MessageSquare size={18} className="text-green-400"/>}
            activity="Awaiting user input for mock cross-examination session regarding financial records."
          />
          <AgentCard 
            name="Receipts Agent" 
            role="Documentation & Filing" 
            status="Compiling" 
            id="agent:documents:main"
            icon={<FileCheck size={18} className="text-orange-400"/>}
            activity="Drafting Motion to Dismiss based on newly identified 'Fruit of the Poisonous Tree' precedent."
          />
        </div>

        {/* --- RIGHT: STRATEGY TERMINAL --- */}
        <div className="w-full xl:w-2/3">
           <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 h-full min-h-[600px] flex flex-col relative overflow-hidden font-mono text-sm shadow-2xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                 <div className="flex items-center gap-3">
                    <Terminal size={18} className="text-[#ccff00]" />
                    <span className="text-[#ccff00] font-bold tracking-wider">STRATEGY_OUTPUT_LOG</span>
                 </div>
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                 </div>
              </div>

              <div className="flex-1 overflow-y-auto space-y-6 pr-4 custom-scrollbar">
                 <div className="space-y-2">
                    <div className="text-gray-500 text-xs">[03:47:12] @CaseLawAgent posted new finding:</div>
                    <div className="pl-4 border-l-2 border-blue-500/30 text-blue-100">
                       <span className="text-blue-400 font-bold">PRECEDENT IDENTIFIED:</span> <i>State v. Henderson (2019)</i>. 
                       Court ruled that digital evidence lacking specific chain-of-custody metadata is inadmissible. 
                       <br/><span className="text-gray-400 text-xs mt-1 block">Confidence: 98.2% match to current evidence profile.</span>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <div className="text-gray-500 text-xs">[03:49:05] @StrategyAgent analysis:</div>
                    <div className="pl-4 border-l-2 border-purple-500/30 text-purple-100">
                       Synthesizing Henderson precedent. 
                       <br/>Current Defense Framework: <span className="text-white bg-purple-500/20 px-1 rounded">Procedural Dismissal</span>.
                       <br/>Weakness Identified: Prosecution may argue "Inevitable Discovery".
                       <br/>Action: Tagging <span className="text-red-400">@OppositionAgent</span> to stress-test Inevitable Discovery doctrine against our fact pattern.
                    </div>
                 </div>

                 <div className="space-y-2">
                    <div className="text-gray-500 text-xs">[04:02:22] @OppositionAgent simulation result:</div>
                    <div className="pl-4 border-l-2 border-red-500/30 text-red-100">
                       <div className="flex items-center gap-2 mb-1">
                          <Crosshair size={14} /> 
                          <span className="font-bold">SIMULATION COMPLETE (n=500)</span>
                       </div>
                       Prosecution fails to meet burden of proof for "Inevitable Discovery" in 82% of scenarios due to lack of independent source.
                       <br/>Vulnerability Confirmed.
                    </div>
                 </div>

                 <div className="space-y-2">
                    <div className="text-gray-500 text-xs">[04:05:10] @StrategyAgent directive:</div>
                    <div className="pl-4 border-l-2 border-[#ccff00]/30 text-gray-200">
                       <span className="text-[#ccff00] font-bold">STRATEGY UPDATE:</span> Shift focus to Motion to Suppress Evidence.
                       <br/>Directive to <span className="text-orange-400">@ReceiptsAgent</span>: Draft Motion to Suppress citing <i>State v. Henderson</i> and attaching Opposition's failure probability matrix.
                       <br/>Directive to <span className="text-green-400">@PrepAgent</span>: Prepare client for testimony regarding device access control.
                    </div>
                 </div>
                 
                 <div className="mt-8 pt-4 border-t border-dashed border-white/10">
                    <span className="animate-pulse text-[#ccff00] font-bold">_</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const AgentCard: React.FC<{name: string, role: string, status: string, id: string, icon: React.ReactNode, activity: string, nextWake?: string}> = ({
  name, role, status, id, icon, activity, nextWake
}) => {
  const isWorking = status === "Working" || status === "Compiling";
  return (
    <div className={`bg-white border rounded-2xl p-4 transition-all duration-300 group hover:bg-slate-50 shadow-sm ${isWorking ? 'border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.1)]' : 'border-slate-200'}`}>
       <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-3">
             <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-slate-50 border border-slate-200 ${isWorking ? 'text-slate-900' : 'text-slate-500'}`}>
                {icon}
             </div>
             <div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-green-600 transition-colors">{name}</div>
                <div className="text-[10px] text-slate-500 font-mono">{role}</div>
             </div>
          </div>
          <div className={`text-[10px] px-2 py-0.5 rounded border uppercase tracking-wider font-bold ${
             status === 'Working' ? 'bg-green-100 text-green-700 border-green-200' : 
             status === 'Compiling' ? 'bg-orange-100 text-orange-700 border-orange-200' :
             status === 'Sleeping' ? 'bg-blue-100 text-blue-700 border-blue-200' :
             'bg-slate-100 text-slate-600 border-slate-200'
          }`}>
             {status}
          </div>
       </div>
       <div className="text-xs text-slate-600 leading-relaxed pl-1 border-l border-slate-200 ml-1 mb-2">
          {activity}
       </div>
       <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100">
          <div className="text-[9px] text-slate-400 font-mono">{id}</div>
          {nextWake && <div className="text-[9px] text-blue-500 font-mono">Next Wake: {nextWake}</div>}
       </div>
    </div>
  )
}

const StatBox: React.FC<{label: string, value: string, sub: string, color: string}> = ({label, value, sub, color}) => (
   <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
      <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">{label}</div>
      <div className={`text-2xl font-bold ${color} mb-1`}>{value}</div>
      <div className="text-[10px] text-slate-400">{sub}</div>
   </div>
)

export default StrategyTab;
