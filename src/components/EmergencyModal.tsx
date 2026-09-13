import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { UZBEKISTAN_EMERGENCY_CONTACTS } from '../data/emergencyContacts';
import { Phone, X, ShieldAlert, AlertTriangle } from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="emergency-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-rose-50 border-b border-rose-100 p-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center shadow-md shadow-rose-600/30">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h2 id="emergency-modal-title" className="text-xl font-bold text-slate-900">
                {t('emergencyModalTitle')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {t('emergencyModalSubtitle')}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label={t('ariaCloseModal')}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-3">
          <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-amber-900">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p>
              {t('disclaimerText')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {UZBEKISTAN_EMERGENCY_CONTACTS.map((item) => (
              <a
                key={item.number}
                href={`tel:${item.number}`}
                className={`flex items-center justify-between p-4 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all group ${
                  item.isPrimary ? 'bg-rose-50/40 border-rose-200' : 'bg-white hover:bg-slate-50/80'
                }`}
              >
                <div className="pr-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                      {item.number}
                    </span>
                    {item.isPrimary && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                        {t('urgencyCritical')}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 mt-1 line-clamp-1">
                    {t(item.nameKey)}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                    {t(item.descKey)}
                  </p>
                </div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${item.color}`}>
                  <Phone className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors cursor-pointer"
          >
            {t('quickHelpClose')}
          </button>
        </div>
      </div>
    </div>
  );
};
