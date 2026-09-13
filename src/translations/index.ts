import { Language } from '../types';

export const translations = {
  uz: {
    // Brand
    brandName: 'Aidly',
    brandTagline: 'Kerakli paytda nima qilishni biling.',
    brandTaglineAlt: 'Muhim paytda oddiy yordam.',
    brandSubtitle: 'Keng tarqalgan favqulodda vaziyatlar uchun oddiy va xavfsiz birinchi yordam qo‘llanmasi.',

    // Navigation
    navHome: 'Bosh sahifa',
    navQuickHelp: 'Tezkor yordam',
    navUncertain: 'Nima bo‘lganiga ishonchim komil emas',
    navEmergency: 'Favqulodda raqamlar',
    navLanguage: 'Tilni tanlash',

    // Hero & CTA
    heroTitle: 'Kerakli paytda nima qilishni biling.',
    heroSubtitle: 'Keng tarqalgan favqulodda vaziyatlar va baxtsiz hodisalarda qadam-baqadam xavfsiz harakatlar.',
    ctaQuickHelp: 'Tezkor yordam',
    ctaEmergencyCall: 'Shoshilinch: 112',
    ctaUncertainFlow: 'Nima bo‘lganiga ishonchim komil emasmi?',

    // Search
    searchPlaceholder: 'Vaziyatni qidiring (masalan: kuyish, qon ketish, bo‘g‘ilish)...',
    searchLabel: 'Birinchi yordam mavzularini qidirish',
    searchClear: 'Qidiruvni tozalash',
    searchResultsCount: 'ta qo‘llanma topildi',
    searchNoResults: 'Mos keladigan birinchi yordam qo‘llanmasi topilmadi.',
    searchTryOther: 'Iltimos, boshqa so‘z yoki alomatlar orqali qidirib ko‘ring.',
    popularSearches: 'Ommabop:',

    // Filters
    filterAll: 'Barchasi',
    filterTrauma: 'Jarohatlar',
    filterRespiratory: 'Nafas olish',
    filterMedical: 'Tibbiy holatlar',
    filterEnvironmental: 'Tashqi omillar',

    // Urgency badges
    urgencyCritical: 'Shoshilinch',
    urgencyHigh: 'Yuqori',
    urgencyModerate: 'O‘rtacha',
    urgencyMild: 'Yengil',

    // Incident Cards
    cardViewGuide: 'Qo‘llanmani ko‘rish',
    cardLearnAid: 'Qadamlarni ko‘rish',
    cardStepsCount: 'ta bosqich',

    // Guide view
    guideBackToTopics: 'Barcha qo‘llanmalarga qaytish',
    guideEducationalBadge: 'Ta’limiy birinchi yordam',
    guideOverviewTitle: 'Qisqacha mazmuni',
    guideStepsTitle: 'Bosqichma-bosqich ko‘rsatmalar',
    guideStepPrefix: 'BOSQICH',
    guideImportantTip: 'Foydali maslahat',
    guideDoNotTitle: 'Nima qilish MUMKIN EMAS',
    guideWarningsTitle: 'Xavfli belgilar',
    guideWhenToSeekHelpTitle: 'Qachon shifokorga murojaat qilish kerak',
    guideEmergencyCtaTitle: 'Ahvol og‘irlashsa yoki yordam kechiksa',
    guideEmergencyCtaDesc: 'Hech ikkilanmay darhol O‘zbekiston yagona qutqaruv xizmatiga qo‘ng‘iroq qiling.',
    guideCallEmergencyBtn: '112 ga qo‘ng‘iroq qilish',
    guideAmbulanceBtn: '103 Tez yordam',
    guideRelatedTitle: 'Bog‘liq mavzular',
    guideIllustrationTitle: 'Harakat ko‘rinishi (Sxematik)',

    // Quick Help Section
    quickHelpTitle: 'Tezkor yordam',
    quickHelpSubtitle: 'Sekundlar muhim bo‘lgan eng xavfli vaziyatlar. Kerakli holatni zudlik bilan tanlang.',
    quickHelpClose: 'Yopish',

    // Uncertain flow ("I'm not sure what happened")
    uncertainTitle: 'Nima bo‘lganiga ishonchim komil emas',
    uncertainSubtitle: 'Oddiy xavfsizlik savollari orqali vaziyatni baholash. (Bu tashxis qo‘yish vositasi emas)',
    uncertainQuestionNumber: 'Savol',
    uncertainOf: 'dan',
    uncertainYes: 'Ha',
    uncertainNo: 'Yo‘q',
    uncertainRestart: 'Qaytadan boshlash',
    uncertainDangerTitle: 'DARHOL FAVQULODDA XIZMATLARNI CHAQIRING!',
    uncertainDangerDesc: 'Berilgan javoblar inson hayotiga xavf tug‘diruvchi og‘ir holat mavjudligini ko‘rsatmoqda. Vaqtni boy bermang!',
    uncertainDangerCall112: '112 Yagona xizmatga qo‘ng‘iroq',
    uncertainDangerCall103: '103 Tez yordamga qo‘ng‘iroq',
    uncertainDangerSteps: [
      'Darhol 112 yoki 103 raqamiga qo‘ng‘iroq qiling va manzilingizni aniq ayting.',
      'Jabrlanuvchini yolg‘iz qoldirmang, uning holatini kuzatib turing.',
      'Agar nafas olmasa va hushsiz bo‘lsa, zudlik bilan yurak-o‘pka reanimatsiyasini boshlang.',
      'Atrofingizdagilarni yordamga chaqiring.'
    ],
    uncertainRecommendedGuide: 'Tavsiya etiladigan birinchi yordam qo‘llanmasi:',
    uncertainOpenGuide: 'Qo‘llanmaga o‘tish',

    // Emergency Numbers (Uzbekistan)
    emergencyModalTitle: 'O‘zbekiston favqulodda raqamlari',
    emergencyModalSubtitle: 'Barcha raqamlarga mobil va shahar telefonlaridan bepul ulanish mumkin.',
    emergency112Title: 'Yagona favqulodda dispetcherlik xizmati',
    emergency112Desc: 'Barcha turdagi shoshilinch holatlar uchun umumiy raqam',
    emergency103Title: 'Tez tibbiy yordam',
    emergency103Desc: 'Shoshilinch tibbiy yordam va reanimatsiya brigadasi',
    emergency101Title: 'Yong‘in va qutqaruv xizmati',
    emergency101Desc: 'Yong‘in xavfsizligi va favqulodda qutqaruv',
    emergency102Title: 'Ichki ishlar (Militsiya)',
    emergency102Desc: 'Huquq-tartibot va jamoat xavfsizligi',
    emergency104Title: 'Gaz avariya xizmati',
    emergency104Desc: 'Gaz sizib chiqishi va portlash xavfi',
    emergency1050Title: 'Favqulodda vaziyatlar vazirligi qutqaruv xizmati',
    emergency1050Desc: 'Tabiiy va texnogen favqulodda holatlar',
    emergencyCallAction: 'Qo‘ng‘iroq qilish',
    emergencyDirectBar: 'O‘zbekiston favqulodda xizmatlari:',

    // Disclaimer
    disclaimerTitle: 'Tibbiy ogohlantirish',
    disclaimerText: 'Aidly umumiy ta’limiy ma’lumotlarni taqdim etadi va professional tibbiy maslahat, tashxis yoki tez yordam o‘rnini bosa olmaydi. Jiddiy yoki hayot uchun xavfli vaziyatlarda darhol shoshilinch xizmatlarga murojaat qiling.',

    // Footer
    footerBrandDesc: 'Favqulodda vaziyatlarda qanday to‘g‘ri harakat qilishni o‘rgatuvchi zamonaviy va qulay ta’limiy platforma.',
    footerQuickLinks: 'Tezkor havolalar',
    footerEmergencyNumbers: 'Favqulodda raqamlar',
    footerAllRights: 'Barcha huquqlar himoyalangan.',
    footerSafeNotice: 'Qon va shafqatsiz tasvirlarsiz, faqat xavfsiz ta’limiy tushuntirishlar.',

    // Accessibility
    ariaOpenMenu: 'Menyuni ochish',
    ariaCloseMenu: 'Menyuni yopish',
    ariaSelectLanguage: 'Sayt tilini tanlash',
    ariaSearchInput: 'Birinchi yordam bo‘yicha qidiruv maydoni',
    ariaEmergencyModal: 'Favqulodda raqamlar oynasi',
    ariaQuickHelpModal: 'Tezkor yordam oynasi',
    ariaCloseModal: 'Oynani yopish'
  },

  en: {
    // Brand
    brandName: 'Aidly',
    brandTagline: 'Know what to do when it matters.',
    brandTaglineAlt: 'Simple help when it matters.',
    brandSubtitle: 'Clear, safe, educational first-aid guidance for common emergencies.',

    // Navigation
    navHome: 'Home',
    navQuickHelp: 'Quick Help',
    navUncertain: "I'm not sure what happened",
    navEmergency: 'Emergency Numbers',
    navLanguage: 'Language',

    // Hero & CTA
    heroTitle: 'Know what to do when it matters.',
    heroSubtitle: 'Simple, clear step-by-step first-aid guidance for common accidents and emergencies.',
    ctaQuickHelp: 'Get Quick Help',
    ctaEmergencyCall: 'Emergency: 112',
    ctaUncertainFlow: "I'm not sure what happened",

    // Search
    searchPlaceholder: 'Search emergency (e.g., burn, bleeding, choking)...',
    searchLabel: 'Search first-aid topics',
    searchClear: 'Clear search',
    searchResultsCount: 'guides found',
    searchNoResults: 'No matching first-aid guide found.',
    searchTryOther: 'Please try searching with different keywords or symptoms.',
    popularSearches: 'Popular:',

    // Filters
    filterAll: 'All Topics',
    filterTrauma: 'Trauma & Wounds',
    filterRespiratory: 'Breathing',
    filterMedical: 'Medical',
    filterEnvironmental: 'Environmental',

    // Urgency badges
    urgencyCritical: 'Critical',
    urgencyHigh: 'High',
    urgencyModerate: 'Moderate',
    urgencyMild: 'Mild',

    // Incident Cards
    cardViewGuide: 'View guide',
    cardLearnAid: 'Learn first aid',
    cardStepsCount: 'steps',

    // Guide view
    guideBackToTopics: 'Back to all guides',
    guideEducationalBadge: 'Educational First-Aid Guide',
    guideOverviewTitle: 'Summary',
    guideStepsTitle: 'Step-by-step instructions',
    guideStepPrefix: 'STEP',
    guideImportantTip: 'Helpful Tip',
    guideDoNotTitle: 'What NOT to do',
    guideWarningsTitle: 'Warning signs',
    guideWhenToSeekHelpTitle: 'When to seek professional medical help',
    guideEmergencyCtaTitle: 'Condition worsening or help delayed?',
    guideEmergencyCtaDesc: 'Do not hesitate — call the Uzbekistan unified emergency services immediately.',
    guideCallEmergencyBtn: 'Call 112',
    guideAmbulanceBtn: '103 Ambulance',
    guideRelatedTitle: 'Related first-aid topics',
    guideIllustrationTitle: 'Action Diagram (Schematic)',

    // Quick Help Section
    quickHelpTitle: 'Quick Help',
    quickHelpSubtitle: 'Urgent action protocols for high-priority emergencies. Select a situation immediately.',
    quickHelpClose: 'Close',

    // Uncertain flow ("I'm not sure what happened")
    uncertainTitle: "I'm not sure what happened",
    uncertainSubtitle: 'A gentle safety screening to help guide you toward appropriate first aid. (Not a medical diagnosis)',
    uncertainQuestionNumber: 'Question',
    uncertainOf: 'of',
    uncertainYes: 'Yes',
    uncertainNo: 'No',
    uncertainRestart: 'Start Over',
    uncertainDangerTitle: 'CALL EMERGENCY SERVICES NOW!',
    uncertainDangerDesc: 'Based on your answers, this may be a life-threatening emergency. Do not wait — get professional emergency help immediately.',
    uncertainDangerCall112: 'Call 112 (Unified Emergency)',
    uncertainDangerCall103: 'Call 103 (Ambulance)',
    uncertainDangerSteps: [
      'Call 112 or 103 immediately and state your exact location.',
      'Stay with the person and keep monitoring their responsiveness and breathing.',
      'If unconscious and not breathing normally, begin CPR immediately.',
      'Ask bystanders to bring an Automated External Defibrillator (AED) if nearby.'
    ],
    uncertainRecommendedGuide: 'Recommended first-aid guide:',
    uncertainOpenGuide: 'Open Guide',

    // Emergency Numbers (Uzbekistan)
    emergencyModalTitle: 'Uzbekistan Emergency Numbers',
    emergencyModalSubtitle: 'All numbers are toll-free from any mobile or landline network.',
    emergency112Title: 'Unified Emergency Services',
    emergency112Desc: 'Universal emergency dispatch for all life-safety incidents',
    emergency103Title: 'Ambulance & Emergency Medical Care',
    emergency103Desc: 'Urgent medical response and paramedic team',
    emergency101Title: 'Fire and Rescue Service',
    emergency101Desc: 'Firefighting, rescue operations, and structural hazards',
    emergency102Title: 'Police',
    emergency102Desc: 'Law enforcement and public safety assistance',
    emergency104Title: 'Gas Emergency Service',
    emergency104Desc: 'Gas leaks, odor detection, and pipeline hazards',
    emergency1050Title: 'Ministry of Emergency Situations Rescue',
    emergency1050Desc: 'Specialized rescue for natural and industrial disasters',
    emergencyCallAction: 'Call',
    emergencyDirectBar: 'Uzbekistan Emergency Contacts:',

    // Disclaimer
    disclaimerTitle: 'Medical Safety Notice',
    disclaimerText: 'Aidly provides general educational information and does not replace professional medical advice, diagnosis, or emergency care. In a serious or life-threatening emergency, contact emergency services immediately.',

    // Footer
    footerBrandDesc: 'A modern, intuitive educational platform empowering everyone with clear, non-graphic first-aid guidance.',
    footerQuickLinks: 'Quick Links',
    footerEmergencyNumbers: 'Emergency Numbers',
    footerAllRights: 'All rights reserved.',
    footerSafeNotice: 'Contains no graphic or frightening imagery. Designed strictly for safe public health education.',

    // Accessibility
    ariaOpenMenu: 'Open main navigation menu',
    ariaCloseMenu: 'Close main navigation menu',
    ariaSelectLanguage: 'Select website language',
    ariaSearchInput: 'Search first-aid topics',
    ariaEmergencyModal: 'Emergency contacts dialog',
    ariaQuickHelpModal: 'Quick help dialog',
    ariaCloseModal: 'Close dialog'
  },

  ru: {
    // Brand
    brandName: 'Aidly',
    brandTagline: 'Знайте, что делать, когда это важно.',
    brandTaglineAlt: 'Простая помощь в нужный момент.',
    brandSubtitle: 'Понятные, безопасные образовательные инструкции по первой помощи при распространенных чрезвычайных ситуациях.',

    // Navigation
    navHome: 'Главная',
    navQuickHelp: 'Быстрая помощь',
    navUncertain: 'Я не уверен, что произошло',
    navEmergency: 'Экстренные номера',
    navLanguage: 'Язык',

    // Hero & CTA
    heroTitle: 'Знайте, что делать, когда это важно.',
    heroSubtitle: 'Простые и четкие пошаговые инструкции по первой помощи при несчастных случаях и травмах.',
    ctaQuickHelp: 'Быстрая помощь',
    ctaEmergencyCall: 'Экстренно: 112',
    ctaUncertainFlow: 'Я не уверен, что произошло',

    // Search
    searchPlaceholder: 'Поиск ситуации (например: ожог, кровотечение, удушье)...',
    searchLabel: 'Поиск тем первой помощи',
    searchClear: 'Очистить поиск',
    searchResultsCount: 'руководств найдено',
    searchNoResults: 'Подходящее руководство по первой помощи не найдено.',
    searchTryOther: 'Попробуйте изменить поисковый запрос или указать другие признаки.',
    popularSearches: 'Популярное:',

    // Filters
    filterAll: 'Все темы',
    filterTrauma: 'Травмы и раны',
    filterRespiratory: 'Дыхание',
    filterMedical: 'Медицинские',
    filterEnvironmental: 'Внешние факторы',

    // Urgency badges
    urgencyCritical: 'Критично',
    urgencyHigh: 'Высокая',
    urgencyModerate: 'Средняя',
    urgencyMild: 'Легкая',

    // Incident Cards
    cardViewGuide: 'Смотреть руководство',
    cardLearnAid: 'Изучить помощь',
    cardStepsCount: 'шагов',

    // Guide view
    guideBackToTopics: 'Назад ко всем руководствам',
    guideEducationalBadge: 'Обучающее руководство',
    guideOverviewTitle: 'Краткое описание',
    guideStepsTitle: 'Пошаговые инструкции',
    guideStepPrefix: 'ШАГ',
    guideImportantTip: 'Полезный совет',
    guideDoNotTitle: 'Чего делать НЕЛЬЗЯ',
    guideWarningsTitle: 'Тревожные признаки',
    guideWhenToSeekHelpTitle: 'Когда обращаться к врачу',
    guideEmergencyCtaTitle: 'Состояние ухудшается или помощь задерживается?',
    guideEmergencyCtaDesc: 'Немедленно позвоните в единую службу экстренной помощи Узбекистана.',
    guideCallEmergencyBtn: 'Позвонить 112',
    guideAmbulanceBtn: '103 Скорая помощь',
    guideRelatedTitle: 'Связанные темы',
    guideIllustrationTitle: 'Схема действий (Наглядно)',

    // Quick Help Section
    quickHelpTitle: 'Быстрая помощь',
    quickHelpSubtitle: 'Немедленные действия при критических состояниях. Быстро выберите нужную ситуацию.',
    quickHelpClose: 'Закрыть',

    // Uncertain flow ("I'm not sure what happened")
    uncertainTitle: 'Я не уверен, что произошло',
    uncertainSubtitle: 'Простая оценка безопасности, которая поможет сориентироваться. (Не является медицинским диагнозом)',
    uncertainQuestionNumber: 'Вопрос',
    uncertainOf: 'из',
    uncertainYes: 'Да',
    uncertainNo: 'Нет',
    uncertainRestart: 'Начать сначала',
    uncertainDangerTitle: 'СРОЧНО ВЫЗЫВАЙТЕ ЭКСТРЕННЫЕ СЛУЖБЫ!',
    uncertainDangerDesc: 'Судя по ответам, ситуация может угрожать жизни человека. Не теряйте время — вызовите профессионалов прямо сейчас.',
    uncertainDangerCall112: 'Позвонить 112 (Единая служба)',
    uncertainDangerCall103: 'Позвонить 103 (Скорая помощь)',
    uncertainDangerSteps: [
      'Немедленно позвоните по номеру 112 или 103 и четко назовите адрес.',
      'Оставайтесь рядом с пострадавшим и контролируйте его дыхание.',
      'Если человек без сознания и не дышит, немедленно начните сердечно-легочную реанимацию.',
      'Попросите окружающих принести автоматический дефибриллятор (АНД), если он есть рядом.'
    ],
    uncertainRecommendedGuide: 'Рекомендуемое руководство по первой помощи:',
    uncertainOpenGuide: 'Перейти к руководству',

    // Emergency Numbers (Uzbekistan)
    emergencyModalTitle: 'Экстренные номера Узбекистана',
    emergencyModalSubtitle: 'Все номера бесплатны для звонков с мобильных и городских телефонов.',
    emergency112Title: 'Единая дежурно-диспетчерская служба',
    emergency112Desc: 'Единый номер при любых чрезвычайных и опасных ситуациях',
    emergency103Title: 'Скорая медицинская помощь',
    emergency103Desc: 'Неотложная медицинская помощь и выезд бригады врачей',
    emergency101Title: 'Служба пожарной безопасности и спасения',
    emergency101Desc: 'Тушение пожаров и проведение спасательных работ',
    emergency102Title: 'Органы внутренних дел (Милиция)',
    emergency102Desc: 'Охрана правопорядка и общественная безопасность',
    emergency104Title: 'Аварийная газовая служба',
    emergency104Desc: 'Утечка газа, запах газа и аварии на газопроводе',
    emergency1050Title: 'Служба спасения МЧС',
    emergency1050Desc: 'Ликвидация последствий стихийных бедствий и катастроф',
    emergencyCallAction: 'Позвонить',
    emergencyDirectBar: 'Экстренные службы Узбекистана:',

    // Disclaimer
    disclaimerTitle: 'Медицинское уведомление',
    disclaimerText: 'Aidly предоставляет общую образовательную информацию и не заменяет профессиональную медицинскую консультацию, диагностику или неотложную медицинскую помощь. В случае серьезной или угрожающей жизни чрезвычайной ситуации немедленно свяжитесь со службами экстренной помощи.',

    // Footer
    footerBrandDesc: 'Современная образовательная платформа, обучающая правильным действиям в экстренных ситуациях без страха и паники.',
    footerQuickLinks: 'Быстрые ссылки',
    footerEmergencyNumbers: 'Экстренные номера',
    footerAllRights: 'Все права защищены.',
    footerSafeNotice: 'Не содержит шокирующих или пугающих изображений. Создано исключительно для безопасного просвещения.',

    // Accessibility
    ariaOpenMenu: 'Открыть главное меню',
    ariaCloseMenu: 'Закрыть главное меню',
    ariaSelectLanguage: 'Выбрать язык сайта',
    ariaSearchInput: 'Поле поиска по темам первой помощи',
    ariaEmergencyModal: 'Диалог экстренных номеров',
    ariaQuickHelpModal: 'Диалог быстрой помощи',
    ariaCloseModal: 'Закрыть диалог'
  }
} as const;

export type TranslationKey = keyof typeof translations.uz;
