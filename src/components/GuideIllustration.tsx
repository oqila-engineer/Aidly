import React from 'react';

interface GuideIllustrationProps {
  type: string;
  caption?: string;
}

export const GuideIllustration: React.FC<GuideIllustrationProps> = ({ type, caption }) => {
  const renderIllustration = () => {
    switch (type) {
      case 'pressure-wound':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-auto max-h-56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="320" height="200" rx="16" fill="#F0FDFA" />
            {/* Limb outline */}
            <path d="M40 100 Q160 80 280 100 L280 130 Q160 110 40 130 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="3" />
            {/* Sterile gauze pad */}
            <rect x="135" y="75" width="50" height="45" rx="6" fill="#FFFFFF" stroke="#0D9488" strokeWidth="2.5" />
            <line x1="140" y1="85" x2="180" y2="85" stroke="#CCFBF1" strokeWidth="2" strokeDasharray="4 2" />
            <line x1="140" y1="95" x2="180" y2="95" stroke="#CCFBF1" strokeWidth="2" strokeDasharray="4 2" />
            <line x1="140" y1="105" x2="180" y2="105" stroke="#CCFBF1" strokeWidth="2" strokeDasharray="4 2" />
            {/* Hands applying direct pressure */}
            <g transform="translate(140, 35)">
              <path d="M10 25 C10 10 30 10 30 25 L30 50 L10 50 Z" fill="#0D9488" fillOpacity="0.15" stroke="#0D9488" strokeWidth="2.5" />
              <path d="M20 5 L20 25" stroke="#0D9488" strokeWidth="3" strokeLinecap="round" />
              <path d="M15 20 L20 27 L25 20" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            {/* Downward pressure arrows */}
            <path d="M160 30 L160 65 M153 58 L160 65 L167 58" stroke="#0D9488" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <text x="160" y="170" textAnchor="middle" fill="#0F766E" fontSize="13" fontWeight="600">
              Uzluksiz to‘g‘ridan-to‘g‘ri bosim (Direct continuous pressure)
            </text>
          </svg>
        );

      case 'cool-water-burn':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-auto max-h-56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="320" height="200" rx="16" fill="#F0F9FF" />
            {/* Water tap */}
            <path d="M90 30 L160 30 C165 30 170 35 170 40 L170 70 L150 70 L150 45 L90 45 Z" fill="#64748B" />
            {/* Cool water flow */}
            <path d="M155 70 Q153 100 155 130" stroke="#0284C7" strokeWidth="4" strokeDasharray="8 4" strokeLinecap="round" />
            <path d="M165 70 Q167 100 165 130" stroke="#38BDF8" strokeWidth="3" strokeDasharray="6 3" strokeLinecap="round" />
            {/* Hand under water */}
            <g transform="translate(100, 115)">
              <rect x="20" y="15" width="100" height="22" rx="11" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2.5" />
              <circle cx="70" cy="26" r="10" fill="#FEE2E2" stroke="#F87171" strokeWidth="2" strokeDasharray="3 2" />
            </g>
            {/* Timer badge */}
            <rect x="210" y="45" width="90" height="32" rx="16" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
            <text x="255" y="66" textAnchor="middle" fill="#0369A1" fontSize="12" fontWeight="700">10-20 min</text>
            <text x="160" y="175" textAnchor="middle" fill="#0369A1" fontSize="13" fontWeight="600">
              Salqin oqib turgan suv (Cool running water ~15-20°C)
            </text>
          </svg>
        );

      case 'back-blows-abdominal':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-auto max-h-56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="320" height="200" rx="16" fill="#FEF2F2" />
            {/* Person leaning forward */}
            <circle cx="120" cy="70" r="18" fill="#CBD5E1" stroke="#475569" strokeWidth="2" />
            <path d="M125 88 L145 130 L165 170" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
            <path d="M140 100 L110 135" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
            {/* Rescuer delivering back blows */}
            <path d="M220 85 Q175 90 155 95" stroke="#E11D48" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 3" />
            <polygon points="152,95 162,90 162,100" fill="#E11D48" />
            <circle cx="230" cy="65" r="16" fill="#F1F5F9" stroke="#E11D48" strokeWidth="2" />
            {/* 5x 5x badge */}
            <rect x="30" y="30" width="75" height="30" rx="8" fill="#FFE4E6" stroke="#E11D48" strokeWidth="1.5" />
            <text x="67" y="50" textAnchor="middle" fill="#BE123C" fontSize="12" fontWeight="700">5 x 5 Usuli</text>
            <text x="160" y="178" textAnchor="middle" fill="#9F1239" fontSize="13" fontWeight="600">
              5 ta zarba kurakka + 5 ta bosish qoringa
            </text>
          </svg>
        );

      case 'pinch-nose-forward':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-auto max-h-56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="320" height="200" rx="16" fill="#F8FAFC" />
            {/* Head profile leaning forward */}
            <path d="M120 130 C110 120 100 80 125 55 C145 35 180 45 190 70 C195 85 185 105 175 115" stroke="#64748B" strokeWidth="3" fill="#F1F5F9" />
            <path d="M175 80 L195 90 L180 98" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
            {/* Fingers pinching nose wings */}
            <circle cx="187" cy="94" r="12" fill="#0D9488" fillOpacity="0.25" stroke="#0D9488" strokeWidth="2.5" />
            <path d="M187 88 L187 100" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" />
            {/* Forward lean angle indicator */}
            <path d="M220 50 Q235 70 215 90" stroke="#0D9488" strokeWidth="2.5" strokeDasharray="4 3" />
            <polygon points="212,92 222,88 218,80" fill="#0D9488" />
            <text x="160" y="170" textAnchor="middle" fill="#0F766E" fontSize="13" fontWeight="600">
              Boshni oldinga egib, burun qanotlarini qisish (10-15 daqiqa)
            </text>
          </svg>
        );

      case 'recovery-position':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-auto max-h-56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="320" height="200" rx="16" fill="#F0FDFA" />
            {/* Lateral recovery position schematic */}
            <ellipse cx="65" cy="100" rx="20" ry="16" fill="#E2E8F0" stroke="#475569" strokeWidth="2.5" />
            {/* Hand supporting chin */}
            <path d="M60 115 L80 125 L95 105" stroke="#0D9488" strokeWidth="4" strokeLinecap="round" />
            {/* Torso tilted */}
            <path d="M85 100 L180 100" stroke="#475569" strokeWidth="12" strokeLinecap="round" />
            {/* Bent top leg stabilizing */}
            <path d="M175 100 L210 75 L250 120" stroke="#0D9488" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            {/* Straight bottom leg */}
            <path d="M180 105 L260 105" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />
            <text x="160" y="165" textAnchor="middle" fill="#0F766E" fontSize="13" fontWeight="600">
              Barqaror yonbosh holat (Nafas yo‘llari ochiqligi)
            </text>
          </svg>
        );

      case 'rice-method':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-auto max-h-56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="320" height="200" rx="16" fill="#F8FAFC" />
            {/* 4 Quadrants for R-I-C-E */}
            <g transform="translate(25, 25)">
              <rect x="0" y="0" width="125" height="60" rx="8" fill="#F1F5F9" stroke="#CBD5E1" />
              <text x="12" y="25" fill="#0284C7" fontSize="15" fontWeight="800">R</text>
              <text x="32" y="24" fill="#334155" fontSize="12" fontWeight="600">Rest (Tinchlik)</text>
              <text x="12" y="45" fill="#64748B" fontSize="11">Harakatni to‘xtatish</text>

              <rect x="140" y="0" width="125" height="60" rx="8" fill="#F1F5F9" stroke="#CBD5E1" />
              <text x="152" y="25" fill="#0284C7" fontSize="15" fontWeight="800">I</text>
              <text x="170" y="24" fill="#334155" fontSize="12" fontWeight="600">Ice (Sovuq)</text>
              <text x="152" y="45" fill="#64748B" fontSize="11">Muzli sochiq 15-20 daqiqa</text>

              <rect x="0" y="70" width="125" height="60" rx="8" fill="#F1F5F9" stroke="#CBD5E1" />
              <text x="12" y="95" fill="#0284C7" fontSize="15" fontWeight="800">C</text>
              <text x="32" y="94" fill="#334155" fontSize="12" fontWeight="600">Compress</text>
              <text x="12" y="115" fill="#64748B" fontSize="11">Elastik bint bilan siqish</text>

              <rect x="140" y="70" width="125" height="60" rx="8" fill="#F1F5F9" stroke="#CBD5E1" />
              <text x="152" y="95" fill="#0284C7" fontSize="15" fontWeight="800">E</text>
              <text x="170" y="94" fill="#334155" fontSize="12" fontWeight="600">Elevate</text>
              <text x="152" y="115" fill="#64748B" fontSize="11">Yurak sathidan baland</text>
            </g>
            <text x="160" y="178" textAnchor="middle" fill="#0284C7" fontSize="12" fontWeight="700">
              R.I.C.E. xalqaro standarti
            </text>
          </svg>
        );

      case 'splint-limb':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-auto max-h-56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="320" height="200" rx="16" fill="#F8FAFC" />
            {/* Limb */}
            <path d="M50 100 L270 100" stroke="#CBD5E1" strokeWidth="18" strokeLinecap="round" />
            {/* Fracture line */}
            <path d="M155 88 L165 112" stroke="#EF4444" strokeWidth="3" strokeDasharray="3 2" />
            {/* Splint board */}
            <rect x="80" y="68" width="160" height="10" rx="4" fill="#E2E8F0" stroke="#0D9488" strokeWidth="2" />
            <rect x="80" y="122" width="160" height="10" rx="4" fill="#E2E8F0" stroke="#0D9488" strokeWidth="2" />
            {/* Bandages securing splint above & below */}
            <rect x="95" y="63" width="22" height="74" rx="4" fill="#CCFBF1" stroke="#0D9488" strokeWidth="1.5" />
            <rect x="200" y="63" width="22" height="74" rx="4" fill="#CCFBF1" stroke="#0D9488" strokeWidth="1.5" />
            <text x="160" y="168" textAnchor="middle" fill="#0F766E" fontSize="13" fontWeight="600">
              Ikkita bo‘g‘imni qamragan holda shina qo‘yish
            </text>
          </svg>
        );

      case 'power-off-safety':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-auto max-h-56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="320" height="200" rx="16" fill="#FEFCE8" />
            {/* Circuit breaker switch OFF */}
            <rect x="60" y="50" width="80" height="100" rx="10" fill="#334155" />
            <rect x="75" y="65" width="50" height="70" rx="6" fill="#0F172A" />
            <rect x="85" y="95" width="30" height="35" rx="4" fill="#EF4444" />
            <text x="100" y="85" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="800">OFF</text>
            {/* Wooden pole pushing wire */}
            <path d="M190 60 L270 140" stroke="#B45309" strokeWidth="8" strokeLinecap="round" />
            <text x="235" y="75" fill="#92400E" fontSize="11" fontWeight="600">Quruq yog‘och</text>
            {/* Lightning warning symbol */}
            <circle cx="160" cy="100" r="22" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
            <path d="M162 86 L153 100 L163 100 L158 114" stroke="#854D0E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <text x="160" y="175" textAnchor="middle" fill="#854D0E" fontSize="13" fontWeight="600">
              Elektrni o‘chiring yoki yog‘och bilan simni chetlating
            </text>
          </svg>
        );

      case 'upright-breathing-posture':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-auto max-h-56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="320" height="200" rx="16" fill="#F0FDF4" />
            {/* Tripod seated posture */}
            <circle cx="130" cy="65" r="18" fill="#CBD5E1" stroke="#334155" strokeWidth="2.5" />
            {/* Torso leaning forward */}
            <path d="M135 83 L155 125 L140 165" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
            {/* Arms bracing forward on knees */}
            <path d="M145 95 L180 125 L165 145" stroke="#16A34A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Air flow indicator */}
            <path d="M190 60 Q215 55 235 65" stroke="#16A34A" strokeWidth="2.5" strokeDasharray="4 2" strokeLinecap="round" />
            <polygon points="238,65 228,62 232,71" fill="#16A34A" />
            <text x="235" y="90" fill="#15803D" fontSize="11" fontWeight="700">Toza havo</text>
            <text x="160" y="175" textAnchor="middle" fill="#15803D" fontSize="13" fontWeight="600">
              Oldinga egilib o‘tirish (Yotqizmang!)
            </text>
          </svg>
        );

      default:
        // Generic clean schematic
        return (
          <svg viewBox="0 0 320 200" className="w-full h-auto max-h-56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="320" height="200" rx="16" fill="#F8FAFC" />
            <circle cx="160" cy="85" r="32" fill="#E2E8F0" stroke="#0D9488" strokeWidth="2" />
            <path d="M160 65 L160 105 M140 85 L180 85" stroke="#0D9488" strokeWidth="4" strokeLinecap="round" />
            <text x="160" y="150" textAnchor="middle" fill="#334155" fontSize="13" fontWeight="600">
              {caption || "Xavfsiz birinchi yordam harakati"}
            </text>
          </svg>
        );
    }
  };

  return (
    <div className="w-full bg-slate-100/70 border border-slate-200/80 rounded-2xl p-4 flex flex-col items-center justify-center overflow-hidden">
      {renderIllustration()}
      {caption && (
        <p className="mt-2 text-xs text-slate-500 text-center font-medium">
          {caption}
        </p>
      )}
    </div>
  );
};
