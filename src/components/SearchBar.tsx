import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Search, X, Sparkles } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  onSelectPopular: (tag: string) => void;
}

const POPULAR_SEARCHES = {
  uz: ['Kuyish', 'Qon ketish', 'Bo‘g‘ilish', 'Hushdan ketish', 'Sinish'],
  en: ['Burns', 'Bleeding', 'Choking', 'Fainting', 'Fractures'],
  ru: ['Ожог', 'Кровотечение', 'Удушье', 'Обморок', 'Перелом']
};

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSelectPopular }) => {
  const { language, t } = useLanguage();
  const currentPopular = POPULAR_SEARCHES[language] || POPULAR_SEARCHES.uz;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <label htmlFor="aidly-search-input" className="sr-only">
          {t('searchLabel')}
        </label>
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
          <Search className="w-5 h-5" />
        </div>
        <input
          id="aidly-search-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={t('searchPlaceholder')}
          className="w-full pl-11 pr-12 py-3.5 sm:py-4 rounded-2xl bg-white border-2 border-slate-200/90 text-slate-900 text-sm sm:text-base placeholder-slate-400 shadow-sm focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15 focus:outline-none transition-all"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            aria-label={t('searchClear')}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
          >
            <div className="p-1 rounded-full bg-slate-100 hover:bg-slate-200">
              <X className="w-4 h-4" />
            </div>
          </button>
        )}
      </div>

      {/* Popular quick search tags */}
      <div className="mt-3 flex items-center gap-1.5 flex-wrap">
        <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-500" />
          {t('popularSearches')}
        </span>
        {currentPopular.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => onSelectPopular(tag)}
            className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-600 border border-slate-200/60 transition-colors cursor-pointer"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};
