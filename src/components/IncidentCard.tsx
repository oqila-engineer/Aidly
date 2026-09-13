import React from 'react';
import { FirstAidTopic } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  Droplet,
  Flame,
  ShieldAlert,
  Activity,
  UserX,
  Shield,
  Bone,
  Zap,
  Sun,
  AlertCircle,
  Skull,
  Eye,
  Bandage,
  Bug,
  Brain,
  Wind,
  ChevronRight,
  Clock
} from 'lucide-react';

interface IncidentCardProps {
  topic: FirstAidTopic;
  onSelect: (topic: FirstAidTopic) => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Droplet,
  Flame,
  ShieldAlert,
  Activity,
  UserX,
  Shield,
  Bone,
  Zap,
  Sun,
  AlertCircle,
  Skull,
  Eye,
  Bandage,
  Bug,
  Brain,
  Wind
};

export const IncidentCard: React.FC<IncidentCardProps> = ({ topic, onSelect }) => {
  const { language, t } = useLanguage();
  const trans = topic.translations[language] || topic.translations.uz;

  const IconComponent = ICON_MAP[topic.iconName] || Activity;

  const urgencyColors = {
    critical: 'bg-rose-50 text-rose-700 border-rose-200',
    high: 'bg-amber-50 text-amber-700 border-amber-200',
    moderate: 'bg-sky-50 text-sky-700 border-sky-200',
    mild: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  };

  const urgencyLabels = {
    critical: t('urgencyCritical'),
    high: t('urgencyHigh'),
    moderate: t('urgencyModerate'),
    mild: t('urgencyMild')
  };

  return (
    <div
      onClick={() => onSelect(topic)}
      className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-teal-400/80 p-5 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between cursor-pointer focus-within:ring-2 focus-within:ring-teal-500"
    >
      <div>
        {/* Card Header: Icon & Urgency */}
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <div className="w-12 h-12 rounded-xl bg-slate-100/90 group-hover:bg-teal-50 text-slate-700 group-hover:text-teal-700 flex items-center justify-center transition-colors">
            <IconComponent className="w-6 h-6" />
          </div>
          <span
            className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
              urgencyColors[topic.urgencyLevel]
            }`}
          >
            {urgencyLabels[topic.urgencyLevel]}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-1">
          {trans.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
          {trans.shortDescription}
        </p>
      </div>

      {/* Card Footer */}
      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-400 font-medium flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {trans.steps.length} {t('cardStepsCount')}
        </span>
        <button
          type="button"
          tabIndex={-1}
          className="inline-flex items-center gap-1 font-semibold text-teal-700 group-hover:text-teal-800 group-hover:translate-x-0.5 transition-all"
        >
          <span>{t('cardViewGuide')}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
