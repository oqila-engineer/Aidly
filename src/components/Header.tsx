import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { Phone, Zap, HelpCircle, Menu, X, ShieldAlert, HeartPulse } from 'lucide-react';

interface HeaderProps {
  onOpenQuickHelp: () => void;
  onOpenUncertain: () => void;
  onOpenEmergency: () => void;
  onNavigateHome: () => void;
  activeView?: 'home' | 'guide';
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuickHelp,
  onOpenUncertain,
  onOpenEmergency,
  onNavigateHome
}) => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand */}
          <button
            id="aidly-brand-logo"
            onClick={onNavigateHome}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-xl p-1 text-left cursor-pointer"
            aria-label="Aidly Homepage"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-linear-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
                  Aid<span className="text-teal-600">ly</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-md bg-teal-50 text-teal-700 border border-teal-200/60 hidden xs:inline-block">
                  EDU
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-tight -mt-0.5 hidden sm:block">
                {t('brandTaglineAlt')}
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              id="aidly-nav-home"
              onClick={onNavigateHome}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-teal-700 hover:bg-slate-100/70 rounded-xl transition-colors cursor-pointer"
            >
              {t('navHome')}
            </button>

            <button
              id="aidly-nav-quick-help"
              onClick={onOpenQuickHelp}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-teal-700 hover:bg-slate-100/70 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-amber-500" />
              <span>{t('navQuickHelp')}</span>
            </button>

            <button
              id="aidly-nav-uncertain"
              onClick={onOpenUncertain}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-teal-700 hover:bg-slate-100/70 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-teal-600" />
              <span>{t('navUncertain')}</span>
            </button>

            <button
              id="aidly-nav-emergency"
              onClick={onOpenEmergency}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-rose-700 hover:bg-rose-50/70 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ShieldAlert className="w-4 h-4 text-rose-500" />
              <span>{t('navEmergency')}</span>
            </button>
          </nav>

          {/* Right actions: Language & Emergency Call Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSelector />

            <a
              id="aidly-header-call-112"
              href="tel:112"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold shadow-sm shadow-rose-600/30 transition-all hover:scale-102 focus:outline-none focus:ring-2 focus:ring-rose-500/50"
              aria-label="Call Emergency 112"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
              <span>112</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              id="aidly-mobile-menu-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
              aria-label={mobileMenuOpen ? t('ariaCloseMenu') : t('ariaOpenMenu')}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4 px-2 space-y-1 bg-white animate-in slide-in-from-top-2 duration-150">
            <button
              onClick={() => handleNav(onNavigateHome)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-base font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              <span>{t('navHome')}</span>
            </button>

            <button
              onClick={() => handleNav(onOpenQuickHelp)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-base font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              <Zap className="w-5 h-5 text-amber-500" />
              <span>{t('navQuickHelp')}</span>
            </button>

            <button
              onClick={() => handleNav(onOpenUncertain)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-base font-semibold text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              <HelpCircle className="w-5 h-5 text-teal-600" />
              <span>{t('navUncertain')}</span>
            </button>

            <button
              onClick={() => handleNav(onOpenEmergency)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-base font-semibold text-rose-700 bg-rose-50/50 hover:bg-rose-50 cursor-pointer"
            >
              <ShieldAlert className="w-5 h-5 text-rose-600" />
              <span>{t('navEmergency')} (112, 103, 101, 102)</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
