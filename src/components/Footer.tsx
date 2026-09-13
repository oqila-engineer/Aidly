import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HeartPulse, Phone, AlertTriangle, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenEmergency: () => void;
  onOpenQuickHelp: () => void;
  onOpenUncertain: () => void;
  onNavigateHome: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenEmergency,
  onOpenQuickHelp,
  onOpenUncertain,
  onNavigateHome
}) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Aid<span className="text-teal-400">ly</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              {t('brandTagline')} — {t('heroSubtitle')}
            </p>

            {/* Disclaimer Box */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300 leading-relaxed">
                {t('disclaimerText')}
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {t('footerQuickLinks')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={onNavigateHome}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('navHome')}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuickHelp}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('navQuickHelp')}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenUncertain}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('navUncertain')}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenEmergency}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('navEmergency')}
                </button>
              </li>
            </ul>
          </div>

          {/* Emergency Uzbekistan numbers */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {t('emergencyModalTitle')}
            </h3>
            <div className="space-y-2 text-xs">
              <a
                href="tel:112"
                className="flex items-center justify-between p-2.5 rounded-xl bg-rose-950/60 border border-rose-800/60 text-rose-200 hover:bg-rose-900/80 transition-colors"
              >
                <span>Yagona favqulodda (Unified)</span>
                <span className="font-extrabold text-white text-sm">112</span>
              </a>
              <a
                href="tel:103"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors"
              >
                <span>Tez tibbiy yordam (Ambulance)</span>
                <span className="font-bold text-teal-400 text-sm">103</span>
              </a>
              <a
                href="tel:101"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors"
              >
                <span>Yong‘in xavfsizligi (Fire)</span>
                <span className="font-bold text-amber-400 text-sm">101</span>
              </a>
              <a
                href="tel:102"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors"
              >
                <span>Ichki ishlar / Militsiya (Police)</span>
                <span className="font-bold text-sky-400 text-sm">102</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Aidly. {t('footerAllRights')}</p>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-500" />
            <span>Xavfsiz va ishonchli birinchi yordam qo‘llanmasi</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
