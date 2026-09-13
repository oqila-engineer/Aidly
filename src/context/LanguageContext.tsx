import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations, TranslationKey } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  isReady: boolean;
}

const STORAGE_KEY = 'aidly_preferred_language';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default language is Uzbek ('uz')
  const [language, setLanguageState] = useState<Language>('uz');
  const [isReady, setIsReady] = useState<boolean>(false);

  // Safely restore from localStorage after initial client mount to avoid hydration mismatch
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'uz' || saved === 'en' || saved === 'ru') {
          setLanguageState(saved);
        }
      }
    } catch {
      // Ignore storage access errors
    } finally {
      setIsReady(true);
    }
  }, []);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, newLang);
        document.documentElement.lang = newLang;
      }
    } catch {
      // Ignore storage write error
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key: TranslationKey): string => {
    const langDict = translations[language] || translations.uz;
    const value = langDict[key];
    if (typeof value === 'string') {
      return value;
    }
    // Fallback to English or Uzbek if key is missing or not a string
    const fallback = translations.uz[key] || translations.en[key];
    return typeof fallback === 'string' ? fallback : String(key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isReady }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
