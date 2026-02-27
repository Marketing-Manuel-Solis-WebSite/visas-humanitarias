'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, FileText, Lock } from 'lucide-react';

interface LegalProps { type: 'privacy' | 'terms'; goHome: () => void; }

export default function Legal({ type, goHome }: LegalProps) {
  const isPrivacy = type === 'privacy';

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 font-sans text-slate-800">
      <nav className="flex items-center text-sm text-slate-500 mb-8 border-b border-slate-200 pb-4">
        <button onClick={goHome} className="hover:text-[#7c2d3e] transition-colors flex items-center font-medium">
          <ChevronLeft size={16} className="mr-1" />Back to Home
        </button>
        <ChevronRight size={16} className="mx-2 text-slate-300" />
        <span className="font-bold text-[#7c2d3e]">{isPrivacy ? 'Privacy Policy' : 'Terms of Use'}</span>
      </nav>

      <div className="bg-white border border-slate-200 rounded-xl p-8 md:p-12 shadow-sm">
        <div className="mb-10 border-b border-slate-100 pb-8">
          <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            {isPrivacy ? <Lock size={14} /> : <FileText size={14} />}
            <span>Legal Information</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#7c2d3e] font-serif mb-4">
            {isPrivacy ? 'Privacy Policy' : 'Terms and Conditions of Use'}
          </h1>
          <p className="text-slate-500 text-sm">Last updated: {new Date().getFullYear()}</p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600">
          {isPrivacy ? (
            <>
              <h3>1. Information We Collect</h3>
              <p>This site is designed as an informational resource. We do not require user registration, and we do not proactively collect personally identifiable information (PII). We use minimal analytics (Vercel Analytics) to understand general site traffic patterns.</p>
              <h3>2. Cookies and Local Storage</h3>
              <p>This site uses minimal cookies and local storage, primarily for language preference. We do not use tracking cookies or third-party advertising trackers.</p>
              <h3>3. Third-Party Links</h3>
              <p>This site contains links to external organizations (such as USCIS, the Department of State, and legal service providers). When you click these links, you are subject to those sites&apos; privacy policies.</p>
              <h3>4. Data Security</h3>
              <p>All connections are encrypted via SSL/HTTPS. We do not store user-submitted information on our servers.</p>
            </>
          ) : (
            <>
              <h3>1. Informational Nature</h3>
              <p>The content on this site is exclusively for educational and informational purposes. <strong>It does not constitute legal advice</strong> and does not establish an attorney-client relationship. Immigration laws are complex and subject to change; always consult a qualified attorney for your specific case.</p>
              <h3>2. Use of Site</h3>
              <p>You agree to use this site only for lawful purposes and in a manner that does not infringe upon the rights of others.</p>
              <h3>3. Limitation of Liability</h3>
              <p>This site and its creators are not responsible for any actions taken based on the information contained herein. We do not guarantee that information is error-free or completely up-to-date at the time of reading.</p>
              <h3>4. Accuracy of Information</h3>
              <p>While we strive to keep all information current, immigration regulations, court decisions, and USCIS policies change frequently. Users should always verify information with official U.S. government sources (uscis.gov, travel.state.gov) and consult with a qualified attorney before taking action.</p>
            </>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex justify-center">
          <button onClick={goHome} className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors flex items-center">Back to Home</button>
        </div>
      </div>
    </div>
  );
}
