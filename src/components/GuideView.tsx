import React, { useEffect } from 'react';
import { FirstAidTopic } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { GuideIllustration } from './GuideIllustration';
import {
  ArrowLeft,
  Phone,
  AlertTriangle,
  XCircle,
  Stethoscope,
  Lightbulb,
  CheckCircle2,
  Share2,
  ShieldCheck,
  Clock
} from 'lucide-react';

interface GuideViewProps {
  topic: FirstAidTopic;
  allTopics: FirstAidTopic[];
  onBack: () => void;
  onSelectTopic: (topic: FirstAidTopic) => void;
}

export const GuideView: React.FC<GuideViewProps> = ({
  topic,
  allTopics,
  onBack,
  onSelectTopic
}) => {
  const { language, t } = useLanguage();
  const trans = topic.translations[language] || topic.translations.uz;

  // Scroll to top when topic changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [topic.id]);

  const relatedTopics = allTopics.filter((item) =>
    topic.relatedTopicIds.includes(item.id)
  );

  const urgencyColors = {
    critical: 'bg-rose-100 text-rose-800 border-rose-300',
    high: 'bg-amber-100 text-amber-800 border-amber-300',
    moderate: 'bg-sky-100 text-sky-800 border-sky-300',
    mild: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  };

  const urgencyLabels = {
    critical: t('urgencyCritical'),
    high: t('urgencyHigh'),
    moderate: t('urgencyModerate'),
    mild: t('urgencyMild')
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 animate-in fade-in duration-150">
      
      {/* Top Navigation Back button */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 text-sm font-semibold shadow-xs transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('guideBackToTopics')}</span>
        </button>

        <span
          className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
            urgencyColors[topic.urgencyLevel]
          }`}
        >
          {urgencyLabels[topic.urgencyLevel]}
        </span>
      </div>

      {/* Guide Header Banner */}
      <header className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs mb-8">
        <div className="flex items-center gap-2 text-teal-700 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>{t('guideEducationalBadge')}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {trans.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
          {trans.shortDescription}
        </p>

        {/* Action Illustration */}
        <div className="mt-6">
          <GuideIllustration
            type={topic.illustrationType}
            caption={trans.illustrationCaption}
          />
        </div>
      </header>

      {/* Primary Content Grid */}
      <div className="space-y-8">
        
        {/* Step-by-step instructions */}
        <section aria-labelledby="guide-steps-title">
          <div className="flex items-center justify-between mb-4">
            <h2 id="guide-steps-title" className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <CheckCircle2 className="w-6 h-6 text-teal-600" />
              <span>{t('guideStepsTitle')}</span>
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              {trans.steps.length} {t('cardStepsCount')}
            </span>
          </div>

          <div className="space-y-4">
            {trans.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:border-teal-300 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-600 text-white font-extrabold text-base flex items-center justify-center shrink-0 shadow-xs shadow-teal-600/30">
                    {step.stepNumber}
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                      {t('guideStepPrefix')} {step.stepNumber}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 mt-2 leading-relaxed">
                      {step.instruction}
                    </p>

                    {step.tip && (
                      <div className="mt-3.5 p-3 rounded-xl bg-teal-50/70 border border-teal-200/60 flex items-start gap-2 text-xs sm:text-sm text-teal-900">
                        <Lightbulb className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span><strong>{t('guideImportantTip')}:</strong> {step.tip}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Two-column Warnings & Do Not */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* What NOT to do */}
          <section className="bg-rose-50/60 rounded-3xl border border-rose-200 p-6 shadow-xs">
            <h2 className="text-lg font-bold text-rose-950 flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{t('guideDoNotTitle')}</span>
            </h2>
            <ul className="space-y-2.5">
              {trans.doNot.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-rose-900">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Warning signs */}
          <section className="bg-amber-50/60 rounded-3xl border border-amber-200 p-6 shadow-xs">
            <h2 className="text-lg font-bold text-amber-950 flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>{t('guideWarningsTitle')}</span>
            </h2>
            <ul className="space-y-2.5">
              {trans.warnings.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-900">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* When to seek professional medical help */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
            <Stethoscope className="w-5 h-5 text-teal-600 shrink-0" />
            <span>{t('guideWhenToSeekHelpTitle')}</span>
          </h2>
          <ul className="space-y-3">
            {trans.whenToSeekHelp.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Emergency Call Action Banner */}
        <section className="rounded-3xl bg-linear-to-r from-rose-600 to-rose-700 text-white p-6 sm:p-8 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-rose-200 text-xs font-bold uppercase tracking-wider mb-1">
                <AlertTriangle className="w-4 h-4" />
                <span>O‘zbekiston Tezkor Qutqaruv</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                {t('guideEmergencyCtaTitle')}
              </h2>
              <p className="text-xs sm:text-sm text-rose-100 mt-1 max-w-md">
                {t('guideEmergencyCtaDesc')}
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
              <a
                href="tel:112"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-rose-700 hover:bg-rose-50 text-sm font-extrabold shadow-md transition-all hover:scale-102"
              >
                <Phone className="w-4 h-4" />
                <span>{t('guideCallEmergencyBtn')}</span>
              </a>
              <a
                href="tel:103"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-rose-800/60 hover:bg-rose-800 text-white text-sm font-bold border border-rose-400/40 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{t('guideAmbulanceBtn')}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        {relatedTopics.length > 0 && (
          <section className="pt-4">
            <h2 className="text-lg font-bold text-slate-900 mb-4">
              {t('guideRelatedTitle')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTopics.map((rel) => {
                const relTrans = rel.translations[language] || rel.translations.uz;
                return (
                  <button
                    key={rel.id}
                    onClick={() => onSelectTopic(rel)}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 text-left transition-all hover:shadow-sm group cursor-pointer"
                  >
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700">
                      {relTrans.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {relTrans.shortDescription}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </article>
  );
};
