
import React from 'react';

const AgentFeed: React.FC = () => {
  return (
    <div className="bg-white backdrop-blur-xl rounded-[2.5rem] p-6 border border-slate-200 shadow-sm flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2">
         <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Live Agent Feed</span>
         <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded border border-green-200">Active</span>
      </div>
      
      <div className="space-y-4">
         <FeedItem 
            agent="CaseLawAgent" 
            color="blue" 
            time="3:47am" 
            content={<>Found precedent <span className="text-slate-900 font-medium bg-slate-100 px-1 rounded">State v. Henderson (2019)</span> matching suppression motion criteria. Uploaded to shared DB.</>} 
         />
         <FeedItem 
            agent="StrategyAgent" 
            color="purple" 
            time="3:49am" 
            content={<><span className="text-blue-700 bg-blue-50 px-1 rounded">@CaseLawAgent</span> Excellent find. <span className="text-red-700 bg-red-50 px-1 rounded">@OppositionAgent</span> run simulation on whether prosecution can distinguish this.</>} 
         />
         <FeedItem 
            agent="OppositionAgent" 
            color="red" 
            time="4:02am" 
            content={<>Simulation complete. 84% probability prosecution will argue "Good Faith Exception". Preparing counter-arguments.</>} 
            isLast
         />
      </div>
    </div>
  );
};

interface FeedItemProps {
  agent: string;
  color: 'blue' | 'purple' | 'red';
  time: string;
  content: React.ReactNode;
  isLast?: boolean;
}

const FeedItem: React.FC<FeedItemProps> = ({ agent, color, time, content, isLast }) => {
  const dotColor = color === 'blue' ? 'bg-blue-500' : color === 'purple' ? 'bg-purple-500' : 'bg-red-500';
  const textColor = color === 'blue' ? 'text-blue-600' : color === 'purple' ? 'text-purple-600' : 'text-red-600';

  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
         <div className={`w-2 h-2 ${dotColor} rounded-full mt-1.5`}></div>
         {!isLast && <div className="w-px h-full bg-slate-200 my-1"></div>}
      </div>
      <div className="pb-2">
         <div className="flex items-center gap-2">
            <span className={`text-xs font-bold ${textColor}`}>@{agent}</span>
            <span className="text-[10px] text-slate-400">{time}</span>
         </div>
         <p className="text-xs text-slate-700 mt-1 leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default AgentFeed;
