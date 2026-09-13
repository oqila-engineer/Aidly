import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { Globe, ChevronDown, Check } from 'lucide-react';

const LANGUAGES: { code: Language; label: string; flag: string; nativeName: string }[] = [
  { code: 'uz', label: 'O‘zbekcha', flag: '🇺🇿', nativeName: 'O‘zbek' },
  { code: 'en', label: 'English', flag: '🇬🇧', nativeName: 'English' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺', nativeName: 'Русский' }
];

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        id="aidly-language-toggle"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={t('ariaSelectLanguage')}
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/50 cursor-pointer"
      >
        <span className="text-base leading-none" aria-hidden="true">{currentLang.flag}</span>
        <span className="hidden sm:inline-block">{currentLang.nativeName}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="aidly-language-toggle"
          className="absolute right-0 mt-1.5 w-44 rounded-2xl bg-white border border-slate-200 shadow-lg py-1 z-50 animate-in fade-in zoom-in-95 duration-100"
        >
          <div className="px-3 py-2 text-xs font-semibold text-slate-400 border-b border-slate-100 uppercase tracking-wider">
            {t('navLanguage')}
          </div>
          {LANGUAGES.map((item) => {
            const isSelected = item.code === language;
            return (
              <button
                key={item.code}
                role="menuitem"
                onClick={() => handleSelect(item.code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm text-left transition-colors cursor-pointer ${
                  isSelected ? 'bg-teal-50 text-teal-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base leading-none" aria-hidden="true">{item.flag}</span>
                  <span>{item.label}</span>
                </div>
                {isSelected && <Check className="w-4 h-4 text-teal-600" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
