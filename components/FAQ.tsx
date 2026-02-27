import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItemProps { q: string; a: string; }

export default function FAQItem({ q, a }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border border-slate-200 rounded-lg mb-3 transition-all duration-200 overflow-hidden ${isOpen ? 'bg-rose-50/50 border-rose-200 shadow-sm' : 'bg-white hover:border-rose-300'}`}>
      <button className="w-full flex justify-between items-start p-5 text-left focus:outline-none group" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <div className="flex items-start gap-3">
          <HelpCircle size={20} className={`mt-0.5 transition-colors ${isOpen ? 'text-[#7c2d3e]' : 'text-slate-400 group-hover:text-[#a3415a]'}`} />
          <span className={`text-lg font-medium pr-4 transition-colors ${isOpen ? 'text-[#5a1a2a]' : 'text-slate-800 group-hover:text-[#7c2d3e]'}`}>{q}</span>
        </div>
        {isOpen ? <ChevronUp className="text-[#7c2d3e] flex-shrink-0 mt-1" /> : <ChevronDown className="text-slate-400 flex-shrink-0 group-hover:text-[#a3415a] mt-1" />}
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pl-12 text-slate-600 leading-relaxed border-t border-rose-100/50 pt-3">{a}</div>
      )}
    </div>
  );
}
