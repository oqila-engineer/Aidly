import React, { useState } from 'react';
import { FirstAidTopic } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  HelpCircle,
  X,
  Phone,
  AlertOctagon,
  CheckCircle,
  RotateCcw,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface UncertainFlowModalProps {
  isOpen: boolean;
  onClose: () => void;
  allTopics: FirstAidTopic[];
  onSelectTopic: (topic: FirstAidTopic) => void;
}

interface Question {
  id: string;
  text: {
    uz: string;
    en: string;
    ru: string;
  };
  details: {
    uz: string;
    en: string;
    ru: string;
  };
  isDangerIfNo?: boolean;
  isDangerIfYes?: boolean;
  targetTopicIdIfYes?: string;
}

const FLOW_QUESTIONS: Question[] = [
  {
    id: 'conscious',
    text: {
      uz: 'Jabrlanuvchi hushidami va savollarga javob beryaptimi?',
      en: 'Is the person conscious and responding to you?',
      ru: 'Пострадавший находится в сознании и реагирует на вас?'
    },
    details: {
      uz: 'Ko‘zini ochadimi, qo‘lini qisadimi yoki gapirishga harakat qiladimi?',
      en: 'Do they open their eyes, squeeze your hand, or attempt to speak?',
      ru: 'Открывает ли глаза, сжимает ли руку или пытается говорить?'
    },
    isDangerIfNo: true
  },
  {
    id: 'breathing',
    text: {
      uz: 'Inson normal, erkin nafas olyaptimi?',
      en: 'Are they breathing normally and steadily?',
      ru: 'Человек дышит нормально и ровно?'
    },
    details: {
      uz: 'Ko‘krak qafasi ko‘tarilmoqdami, xirillash yoki nafas to‘xtashi yo‘qmi?',
      en: 'Is the chest rising and falling without gasping, wheezing, or apnea?',
      ru: 'Поднимается ли грудная клетка без хрипов, судорожных вдохов или пауз?'
    },
    isDangerIfNo: true
  },
  {
    id: 'severe-bleeding',
    text: {
      uz: 'Kuchli, to‘xtovsiz yoki fontan bo‘lib qon ketish bormi?',
      en: 'Is there heavy, uncontrollable, or spurting bleeding?',
      ru: 'Есть ли сильное, непрекращающееся или пульсирующее кровотечение?'
    },
    details: {
      uz: 'Kiyimlar yoki matolar bir necha daqiqada qonga to‘lib ketmoqdami?',
      en: 'Are clothes or dressings rapidly soaking through with blood?',
      ru: 'Пропитывается ли одежда кровью за считанные минуты?'
    },
    isDangerIfYes: true,
    targetTopicIdIfYes: 'cuts-bleeding'
  },
  {
    id: 'choking-airway',
    text: {
      uz: 'Bo‘g‘ilish, tomog‘iga narsa tiqilish belgilari bormi?',
      en: 'Are there signs of choking or an airway blockage?',
      ru: 'Есть ли признаки удушья или инородного тела в горле?'
    },
    details: {
      uz: 'Inson tomog‘ini ushlab, gapira olmay qolganmi?',
      en: 'Is the person clutching their throat, unable to speak or cough?',
      ru: 'Хватается ли человек за горло, не в состоянии говорить или кашлять?'
    },
    targetTopicIdIfYes: 'choking'
  },
  {
    id: 'burn-scald',
    text: {
      uz: 'Olov, qaynoq suv yoki kimyoviy moddadan kuyish yuz berganmi?',
      en: 'Did a burn occur from heat, hot liquids, or chemicals?',
      ru: 'Произошел ли ожог от огня, кипятка или химикатов?'
    },
    details: {
      uz: 'Terida qizarish, pufakchalar yoki kuyish belgilari bormi?',
      en: 'Is there redness, blistering, or charred tissue on the skin?',
      ru: 'Есть ли покраснение, волдыри или повреждение кожи?'
    },
    targetTopicIdIfYes: 'burns'
  }
];

export const UncertainFlowModal: React.FC<UncertainFlowModalProps> = ({
  isOpen,
  onClose,
  allTopics,
  onSelectTopic
}) => {
  const { language, t } = useLanguage();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isDanger, setIsDanger] = useState(false);
  const [recommendedTopicId, setRecommendedTopicId] = useState<string | null>(null);

  if (!isOpen) return null;

  const resetFlow = () => {
    setCurrentStepIndex(0);
    setIsDanger(false);
    setRecommendedTopicId(null);
  };

  const handleAnswer = (answer: boolean) => {
    const q = FLOW_QUESTIONS[currentStepIndex];

    if (q.isDangerIfNo && !answer) {
      setIsDanger(true);
      return;
    }

    if (q.isDangerIfYes && answer) {
      setIsDanger(true);
      if (q.targetTopicIdIfYes) {
        setRecommendedTopicId(q.targetTopicIdIfYes);
      }
      return;
    }

    if (q.targetTopicIdIfYes && answer) {
      setRecommendedTopicId(q.targetTopicIdIfYes);
      return;
    }

    // Next question
    if (currentStepIndex < FLOW_QUESTIONS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      // Completed without immediate life danger — general evaluation
      setRecommendedTopicId('minor-wounds');
    }
  };

  const currentQ = FLOW_QUESTIONS[currentStepIndex];
  const recommendedTopic = recommendedTopicId
    ? allTopics.find((t) => t.id === recommendedTopicId)
    : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="uncertain-flow-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-teal-50 border-b border-teal-100 p-5 sm:p-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md shadow-teal-600/30">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 id="uncertain-flow-title" className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {t('uncertainTitle')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {t('uncertainSubtitle')}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label={t('ariaCloseModal')}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-teal-100/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto">
          
          {/* CRITICAL DANGER SCREEN */}
          {isDanger ? (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 rounded-3xl bg-rose-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-rose-600/30 animate-pulse">
                <AlertOctagon className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-rose-700 uppercase tracking-tight">
                  {t('uncertainDangerTitle')}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 mt-2 font-medium">
                  {t('uncertainDangerDesc')}
                </p>
              </div>

              {/* Emergency Call Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="tel:112"
                  className="p-4 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center gap-3 text-base font-extrabold shadow-md transition-transform hover:scale-102"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t('uncertainDangerCall112')}</span>
                </a>
                <a
                  href="tel:103"
                  className="p-4 rounded-2xl bg-rose-800 hover:bg-rose-900 text-white flex items-center justify-center gap-3 text-base font-extrabold shadow-md transition-transform hover:scale-102"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t('uncertainDangerCall103')}</span>
                </a>
              </div>

              {/* Action advice */}
              <div className="text-left bg-rose-50 border border-rose-200 rounded-2xl p-4 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800">
                  {t('emergencyDirectBar')}
                </h4>
                <ul className="text-xs sm:text-sm text-rose-900 space-y-1.5 list-disc list-inside">
                  <li>Manzil va holatni aniq ayting (State exact address and symptoms)</li>
                  <li>Jabrlanuvchini yolg‘iz qoldirmang (Stay with casualty)</li>
                  <li>Nafas olmasa zudlik bilan yurak massajini boshlang (CPR)</li>
                </ul>
              </div>

              <button
                onClick={resetFlow}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t('uncertainRestart')}</span>
              </button>
            </div>
          ) : recommendedTopic ? (
            /* RECOMMENDED GUIDE OUTCOME */
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 rounded-3xl bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  {t('uncertainRecommendedGuide')}
                </p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  {recommendedTopic.translations[language]?.title || recommendedTopic.translations.uz.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  {recommendedTopic.translations[language]?.shortDescription || recommendedTopic.translations.uz.shortDescription}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onSelectTopic(recommendedTopic);
                    onClose();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-base shadow-md shadow-teal-600/25 transition-all hover:scale-102 cursor-pointer"
                >
                  <span>{t('uncertainOpenGuide')}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={resetFlow}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t('uncertainRestart')}</span>
              </button>
            </div>
          ) : (
            /* STEP-BY-STEP QUESTION */
            <div className="space-y-6">
              
              {/* Progress counter */}
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>
                  {t('uncertainQuestionNumber')} {currentStepIndex + 1} {t('uncertainOf')} {FLOW_QUESTIONS.length}
                </span>
                <span className="flex items-center gap-1 text-teal-700">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Xavfsizlik tekshiruvi</span>
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-teal-600 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStepIndex + 1) / FLOW_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <div className="py-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {currentQ.text[language] || currentQ.text.uz}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2">
                  {currentQ.details[language] || currentQ.details.uz}
                </p>
              </div>

              {/* YES / NO Big Touch Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <button
                  onClick={() => handleAnswer(true)}
                  className="py-4 px-6 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-lg shadow-md shadow-teal-600/20 transition-all hover:scale-102 cursor-pointer"
                >
                  {t('uncertainYes')}
                </button>
                <button
                  onClick={() => handleAnswer(false)}
                  className="py-4 px-6 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-lg transition-all hover:scale-102 cursor-pointer"
                >
                  {t('uncertainNo')}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 flex items-center justify-between">
          <button
            onClick={resetFlow}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t('uncertainRestart')}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors cursor-pointer"
          >
            {t('quickHelpClose')}
          </button>
        </div>
      </div>
    </div>
  );
};
