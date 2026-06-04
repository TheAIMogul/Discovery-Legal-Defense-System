
import React from 'react';
import { FileText, Shield } from 'lucide-react';
import CaseStatusCard from './CaseStatusCard';
import WinProbabilitySlider from './WinProbabilitySlider';
import ActivityChart from './ActivityChart';
import DotMatrixWidget from './DotMatrixWidget';
import AdversarialSimulationWidget from './AdversarialSimulationWidget';
import AgentFeed from './AgentFeed';
import DocumentsWidget from './DocumentsWidget';
import CalendarWidget from './CalendarWidget';
import KPIModule from './KPIModule';

const OverviewTab: React.FC = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 max-w-[1600px] mx-auto pb-8">
      {/* --- LEFT COLUMN --- */}
      <div className="flex-1 flex flex-col gap-6 min-w-0 xl:max-w-[45%]">
        <CaseStatusCard />
        <WinProbabilitySlider />
        <ActivityChart />
      </div>

      {/* --- RIGHT COLUMN --- */}
      <div className="flex-1 flex flex-col gap-6 min-w-0">
        <div className="bg-white backdrop-blur-xl rounded-[2.5rem] p-8 border border-slate-200 shadow-sm min-h-[300px] flex flex-col justify-center">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Case Analysis Matrix</span>
              <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600">Updated 4m ago</span>
            </div>
            <div className="flex flex-col md:flex-row gap-12 items-center justify-around">
              <DotMatrixWidget label="Prosecution Strength" percent={62} color="red" />
              <DotMatrixWidget label="Defense Viability" percent={78} color="green" />
            </div>
        </div>

        <AdversarialSimulationWidget />
        <AgentFeed />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DocumentsWidget />
          <CalendarWidget />
          <KPIModule 
            type="precedents" 
            value="214" 
            label="Relevant cases found & verified" 
            icon={<FileText size={14} />} 
          />
          <KPIModule 
            type="weaknesses" 
            value="17" 
            label="Gaps in prosecution logic" 
            icon={<Shield size={14} className="rotate-180" />} 
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
