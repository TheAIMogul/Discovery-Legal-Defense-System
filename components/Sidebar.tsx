
import React from 'react';
import { Shield, Scale, Users, Brain, Activity, Database, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-20 hidden md:flex flex-col items-center py-8 border-r border-slate-200 bg-white/80 backdrop-blur-xl z-20 shadow-lg justify-between">
      <div className="flex flex-col items-center gap-8 w-full px-4">
        <div className="mb-4">
          <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold shadow-md">
            <Scale size={20} />
          </div>
        </div>
        
        <nav className="flex flex-col gap-6 w-full">
          <NavItem icon={<Shield size={22} />} active tooltip="Case Overview" />
          <NavItem icon={<Database size={22} />} tooltip="Evidence Locker" />
          <NavItem icon={<Users size={22} />} tooltip="Agent Squad" />
          <NavItem icon={<Brain size={22} />} tooltip="Strategy Board" />
          <NavItem icon={<Activity size={22} />} tooltip="Timeline" />
        </nav>
      </div>

      <div className="flex flex-col gap-6 items-center w-full mb-4">
        <button className="p-3 text-slate-400 hover:text-slate-900 transition-colors">
          <Settings size={22} />
        </button>
        <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 overflow-hidden mt-2 relative cursor-pointer hover:border-slate-300 transition-colors">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-xs font-medium text-slate-700">
            JD
          </div>
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></div>
        </div>
      </div>
    </aside>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode; active?: boolean; tooltip: string }> = ({ 
  icon, active, tooltip 
}) => (
  <div className="group relative flex items-center">
    <button className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
      active 
        ? 'bg-slate-900 text-white shadow-md' 
        : 'text-slate-400 hover:text-slate-900 hover:bg-slate-100'
    }`}>
      {icon}
    </button>
    <span className="absolute left-14 bg-white text-slate-900 text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-200 shadow-sm z-50">
      {tooltip}
    </span>
  </div>
);

export default Sidebar;
