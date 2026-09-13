import React from 'react';
import { FirstAidTopic } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  Zap,
  X,
  Phone,
  Droplet,
  Flame,
  ShieldAlert,
  UserX,
  Wind,
  Bone,
  Skull,
  ArrowRight,
  Activity
} from 'lucide-react';

interface QuickHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  topics: FirstAidTopic[];
  onSelectTopic: (topic: FirstAidTopic) => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Droplet,
  Flame,
  ShieldAlert,
  UserX,
  Wind,
  Bone,
  Zap,
  Skull
};

export const QuickHelpModal: React.FC<QuickHelpModalProps> = ({
  isOpen,
  onClose,
  topics,
  onSelectTopic
}) => {
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  // Filter the primary 8 quick help emergency topics
  const quickTopics = topics.filter((t) => t.isQuickHelp);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-help-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-amber-50 border-b border-amber-100 p-5 sm:p-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/30">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="quick-help-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {t('quickHelpTitle')}
                </h2>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-amber-200/80 text-amber-900">
                  SOS
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md">
                {t('quickHelpSubtitle')}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label={t('ariaCloseModal')}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-amber-100/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Emergency Quick Bar inside Modal */}
        <div className="bg-rose-600 px-5 py-2.5 flex items-center justify-between text-white text-xs sm:text-sm font-semibold">
          <span>{t('emergencyDirectBar')}</span>
          <div className="flex items-center gap-2">
            <a
              href="tel:112"
              className="px-2.5 py-1 rounded-lg bg-white text-rose-700 font-bold hover:bg-rose-50 transition-colors"
            >
              112
            </a>
            <a
              href="tel:103"
              className="px-2.5 py-1 rounded-lg bg-rose-700 border border-rose-400 text-white font-bold hover:bg-rose-800 transition-colors"
            >
              103
            </a>
          </div>
        </div>

        {/* Quick Emergency Topic Cards */}
        <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {quickTopics.map((topic) => {
            const trans = topic.translations[language] || topic.translations.uz;
            const IconComponent = ICON_MAP[topic.iconName] || Activity;

            return (
              <button
                key={topic.id}
                onClick={() => {
                  onSelectTopic(topic);
                  onClose();
                }}
                className="flex items-center gap-3.5 p-4 rounded-2xl border-2 border-slate-200/80 hover:border-amber-400 hover:bg-amber-50/30 text-left transition-all group shadow-2xs hover:shadow-md cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-amber-100 text-slate-700 group-hover:text-amber-800 flex items-center justify-center shrink-0 transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-amber-900 truncate">
                    {trans.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                    {trans.shortDescription}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 shrink-0 transition-all" />
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors cursor-pointer"
          >
            {t('quickHelpClose')}
          </button>
        </div>
      </div>
    </div>
  );
};
