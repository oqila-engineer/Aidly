import React, { useState, useMemo } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchBar } from './components/SearchBar';
import { IncidentCard } from './components/IncidentCard';
import { GuideView } from './components/GuideView';
import { QuickHelpModal } from './components/QuickHelpModal';
import { UncertainFlowModal } from './components/UncertainFlowModal';
import { EmergencyModal } from './components/EmergencyModal';
import { ALL_TOPICS, searchTopics } from './data/topics';
import { FirstAidTopic } from './types';
import {
  Phone,
  Zap,
  HelpCircle,
  ShieldAlert,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Droplet,
  Layers
} from 'lucide-react';

const MainApp: React.FC = () => {
  const { language, t } = useLanguage();

  // Navigation and Modal State
  const [selectedTopic, setSelectedTopic] = useState<FirstAidTopic | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isQuickHelpOpen, setIsQuickHelpOpen] = useState(false);
  const [isUncertainFlowOpen, setIsUncertainFlowOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

  // Search and Category Filtering
  const filteredTopics = useMemo(() => {
    let list = ALL_TOPICS;

    // Filter by category
    if (selectedCategory === 'critical') {
      list = list.filter((item) => item.urgencyLevel === 'critical');
    } else if (selectedCategory === 'quick') {
      list = list.filter((item) => item.isQuickHelp);
    } else if (selectedCategory !== 'all') {
      list = list.filter((item) => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const searched = searchTopics(searchQuery, language);
      const searchIds = new Set(searched.map((s) => s.id));
      list = list.filter((item) => searchIds.has(item.id));
    }

    return list;
  }, [searchQuery, selectedCategory, language]);

  const handleSelectTopic = (topic: FirstAidTopic) => {
    setSelectedTopic(topic);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setSelectedTopic(null);
    setSearchQuery('');
    setSelectedCategory('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    { id: 'all', label: t('filterAll') },
    { id: 'critical', label: t('urgencyCritical') },
    { id: 'quick', label: t('quickHelpTitle') },
    { id: 'trauma', label: t('filterTrauma') },
    { id: 'environmental', label: t('filterEnvironmental') },
    { id: 'medical', label: t('filterMedical') }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-teal-500 selection:text-white">
      
      {/* Top Uzbekistan Emergency Bar */}
      <div className="bg-slate-950 text-slate-200 text-xs px-4 py-2 border-b border-slate-800 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex flex-col xs:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-slate-300">
              O‘zbekiston tezkor xizmatlari (24/7):
            </span>
            <span className="text-slate-400 hidden sm:inline">112 Yagona • 103 Tez tibbiy • 101 Yong‘in • 102 IIB</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:112"
              className="font-extrabold text-rose-400 hover:text-rose-300 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>112 Qo‘ng‘iroq</span>
            </a>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => setIsEmergencyModalOpen(true)}
              className="text-slate-300 hover:text-white font-medium underline underline-offset-2 transition-colors cursor-pointer"
            >
              {t('navEmergency')}
            </button>
          </div>
        </div>
      </div>

      {/* Main App Header */}
      <Header
        onOpenQuickHelp={() => setIsQuickHelpOpen(true)}
        onOpenUncertain={() => setIsUncertainFlowOpen(true)}
        onOpenEmergency={() => setIsEmergencyModalOpen(true)}
        onNavigateHome={handleNavigateHome}
        activeView={selectedTopic ? 'guide' : 'home'}
      />

      {/* Main Body */}
      <main className="flex-1">
        {selectedTopic ? (
          /* DETAILED TOPIC GUIDE VIEW */
          <GuideView
            topic={selectedTopic}
            allTopics={ALL_TOPICS}
            onBack={handleNavigateHome}
            onSelectTopic={handleSelectTopic}
          />
        ) : (
          /* HOMEPAGE VIEW */
          <div>
            
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-linear-to-b from-teal-50/50 via-white to-slate-50 pt-10 pb-12 sm:pt-16 sm:pb-16 border-b border-slate-200/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Brand Title & Hero Copy */}
                <div className="text-center max-w-3xl mx-auto mb-8">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
                    <HeartHandshake className="w-4 h-4 text-teal-700" />
                    <span>Aidly — {t('brandTagline')}</span>
                  </div>
                  
                  <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                    {t('heroTitle')}
                  </h1>
                  
                  <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                    {t('heroSubtitle')}
                  </p>
                </div>

                {/* Multilingual Live Search Bar */}
                <div className="mb-8">
                  <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    onSelectPopular={(tag) => setSearchQuery(tag)}
                  />
                </div>

                {/* Primary Dual Urgent CTA Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  
                  {/* Quick Help Card */}
                  <button
                    id="aidly-hero-quick-help-btn"
                    onClick={() => setIsQuickHelpOpen(true)}
                    className="p-5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white shadow-md shadow-amber-500/25 transition-all duration-200 hover:scale-101 text-left flex items-start gap-4 cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-black tracking-tight">
                          {t('navQuickHelp')}
                        </h2>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-md bg-amber-400 text-amber-950">
                          Tezkor
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-amber-100 mt-1 line-clamp-2">
                        {t('quickHelpSubtitle')}
                      </p>
                    </div>
                  </button>

                  {/* "I'm Not Sure What Happened" Card */}
                  <button
                    id="aidly-hero-uncertain-btn"
                    onClick={() => setIsUncertainFlowOpen(true)}
                    className="p-5 rounded-2xl bg-teal-700 hover:bg-teal-800 text-white shadow-md shadow-teal-700/25 transition-all duration-200 hover:scale-101 text-left flex items-start gap-4 cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal-800 text-white flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                      <HelpCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-black tracking-tight">
                          {t('navUncertain')}
                        </h2>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-md bg-teal-600 text-teal-100">
                          Yo‘riqnoma
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-teal-100 mt-1 line-clamp-2">
                        {t('uncertainSubtitle')}
                      </p>
                    </div>
                  </button>

                </div>

              </div>
            </section>

            {/* Incidents Grid & Filters Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
              
              {/* Category Filter Pills */}
              <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {language === 'uz' ? 'Barcha birinchi yordam qo‘llanmalari' : language === 'ru' ? 'Все инструкции первой помощи' : 'All First-Aid Guides'}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    {filteredTopics.length} {t('searchResultsCount')}
                  </p>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        selectedCategory === cat.id
                          ? 'bg-teal-600 text-white shadow-xs'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Incidents Grid */}
              {filteredTopics.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {filteredTopics.map((topic) => (
                    <IncidentCard
                      key={topic.id}
                      topic={topic}
                      onSelect={handleSelectTopic}
                    />
                  ))}
                </div>
              ) : (
                /* Empty state when no matches found */
                <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto shadow-xs">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {t('searchNoResults')}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2">
                    {t('searchTryOther')}
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="mt-5 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    {language === 'uz' ? 'Barcha qo‘llanmalarni ko‘rish' : language === 'ru' ? 'Показать все инструкции' : 'View all guides'}
                  </button>
                </div>
              )}

              {/* Educational Safety Banner */}
              <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-linear-to-r from-teal-900 to-slate-900 text-white shadow-lg">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                      Oltin Qoidalar
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                      Birinchi yordam ko‘rsatishning 3 ta asosiy tamoyili
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                      1. Xavfsizlikni baholang — o‘zingizga xavf tug‘dirmang. 
                      2. Tez yordamga (112 yoki 103) qo‘ng‘iroq qiling. 
                      3. Zarar yetkazmang — hushsiz odamga dori yoki suv bermang.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsUncertainFlowOpen(true)}
                    className="px-5 py-3 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shrink-0 transition-colors shadow-md cursor-pointer"
                  >
                    {t('navUncertain')}
                  </button>
                </div>
              </div>

            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenEmergency={() => setIsEmergencyModalOpen(true)}
        onOpenQuickHelp={() => setIsQuickHelpOpen(true)}
        onOpenUncertain={() => setIsUncertainFlowOpen(true)}
        onNavigateHome={handleNavigateHome}
      />

      {/* Modals */}
      <QuickHelpModal
        isOpen={isQuickHelpOpen}
        onClose={() => setIsQuickHelpOpen(false)}
        topics={ALL_TOPICS}
        onSelectTopic={handleSelectTopic}
      />

      <UncertainFlowModal
        isOpen={isUncertainFlowOpen}
        onClose={() => setIsUncertainFlowOpen(false)}
        allTopics={ALL_TOPICS}
        onSelectTopic={handleSelectTopic}
      />

      <EmergencyModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
      />

    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
};

export default App;
