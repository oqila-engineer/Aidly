import { FirstAidTopic } from '../types';

export const topicsBatch1: FirstAidTopic[] = [
  {
    id: 'cuts-bleeding',
    category: 'trauma',
    urgencyLevel: 'high',
    iconName: 'Droplet',
    illustrationType: 'pressure-wound',
    isQuickHelp: true,
    relatedTopicIds: ['minor-wounds', 'fainting'],
    translations: {
      uz: {
        title: 'Kesilish va kuchli qon ketish',
        shortDescription: 'Kuchli yoki to‘xtamayotgan qon ketishda jarohatga to‘g‘ridan-to‘g‘ri bosim o‘tkazish va to‘xtatish.',
        keywords: ['qon', 'kesilish', 'jarohat', 'qonash', 'bog‘lash', 'jarohatlanish', 'ochiq yara'],
        illustrationCaption: 'Toza mato yoki bint bilan yarani qattiq bosib turish',
        steps: [
          {
            stepNumber: 1,
            title: 'Xavfsizlikni ta’minlang va himoyalaning',
            instruction: 'O‘zingiz va jabrlanuvchi uchun atrof xavfsiz ekanligiga ishonch hosil qiling. Iloji bo‘lsa, toza tibbiy qo‘lqop kiying.',
            tip: 'Infeksiya tushishining oldini olish uchun yalang‘och qo‘l bilan boshqa birovning qoniga teginmaslikka harakat qiling.'
          },
          {
            stepNumber: 2,
            title: 'Yaraga to‘g‘ridan-to‘g‘ri bosim bering',
            instruction: 'Yaraning ustiga toza doka, steril salfetka yoki toza mato qo‘yib, kaftingiz bilan qattiq bosing va kamida 5-10 daqiqa ushlab turing.',
            tip: 'Mato qonga to‘ysa ham uni olib tashlamang — ustidan yana bitta mato qo‘yib bosishda davom eting.'
          },
          {
            stepNumber: 3,
            title: 'Jarohatlangan a’zoni yuqori ko‘taring',
            instruction: 'Agar suyak sinmagan bo‘lsa, jarohatlangan qo‘l yoki oyoqni yurak sathidan balandroq ko‘taring.',
            tip: 'Bu qon bosimini pasaytirib, qon ketishini tezroq to‘xtatishga yordam beradi.'
          },
          {
            stepNumber: 4,
            title: 'Bosuvchi bog‘lam qo‘ying',
            instruction: 'Qon oqishi kamaygach, matoni bint bilan qattiq bog‘lang, biroq qon aylanishi to‘xtab qolmasligiga (barmoqlar ko‘karmasligiga) e’tibor bering.'
          }
        ],
        doNot: [
          'Yaraga kirib qolgan yirik jismlarni (shisha, metall, pichoq) aslo sug‘urib olmang.',
          'Qon shimarilgan birinchi dokani olib tashlamang (qon ivishi buziladi).',
          'Maxsus ko‘nikmasiz jgutni (turniket) asossiz qo‘llamang.',
          'Yaraga to‘g‘ridan-to‘g‘ri spirt, yod yoki kukun sepmang.'
        ],
        warnings: [
          'Qon fontan bo‘lib (puls urib) otilayotgan bo‘lsa (arterial qon ketish).',
          '10-15 daqiqa to‘xtovsiz bosim berilsa ham qon to‘xtamasa.',
          'Bemor rangi oqarib, sovuq ter chiqib, holsizlanib qolsa (shok alomati).'
        ],
        whenToSeekHelp: [
          'Arterial qon ketishda darhol 112 yoki 103 ga qo‘ng‘iroq qiling.',
          'Yara chuqur, chetlari yirtilgan bo‘lsa va tikish (chok) talab etilsa.',
          'Yarada begona jism qolgan bo‘lsa.',
          'Zanglagan yoki iflos jism bilan jarohatlangan bo‘lsa (qoqsholga qarshi emlash uchun).'
        ]
      },
      en: {
        title: 'Cuts and Severe Bleeding',
        shortDescription: 'How to control severe or non-stopping bleeding using firm direct pressure.',
        keywords: ['cut', 'bleeding', 'wound', 'blood', 'hemorrhage', 'bandage', 'laceration'],
        illustrationCaption: 'Applying firm direct pressure to the wound with a clean cloth',
        steps: [
          {
            stepNumber: 1,
            title: 'Ensure safety and protect yourself',
            instruction: 'Check that the area is safe for you and the casualty. Put on disposable medical gloves if available.',
            tip: 'Avoid touching another person’s blood directly to prevent cross-contamination.'
          },
          {
            stepNumber: 2,
            title: 'Apply firm, direct pressure',
            instruction: 'Place a clean sterile gauze or cloth directly over the wound and press firmly with your palm for at least 5 to 10 minutes continuously.',
            tip: 'If blood soaks through, do not remove the pad — place another pad directly on top and keep pressing.'
          },
          {
            stepNumber: 3,
            title: 'Elevate the injured limb',
            instruction: 'If there is no suspected bone fracture, raise the injured arm or leg above the level of the heart.',
            tip: 'Elevation helps reduce blood flow to the wound site.'
          },
          {
            stepNumber: 4,
            title: 'Secure a pressure bandage',
            instruction: 'Once bleeding slows down, wrap a roller bandage firmly over the dressing without cutting off normal circulation.'
          }
        ],
        doNot: [
          'Do NOT pull out deeply embedded objects (such as glass or metal fragments).',
          'Do NOT remove the initial dressing if soaked — layer new dressings on top.',
          'Do NOT use an improvised tourniquet unless trained and facing catastrophic limb bleeding.',
          'Do NOT pour alcohol, iodine, or powders directly into open, gaping wounds.'
        ],
        warnings: [
          'Blood is spurting or pulsating rapidly from the wound.',
          'Bleeding does not slow down after 10–15 minutes of constant firm pressure.',
          'The person shows signs of shock: pale, cold, clammy skin, weakness, or confusion.'
        ],
        whenToSeekHelp: [
          'Call 112 or 103 immediately for pulsating or uncontrolled severe bleeding.',
          'The wound is deep, gaping, or requires stitches.',
          'An embedded object is protruding from the wound.',
          'The cut was caused by dirty or rusted metal (requires tetanus booster).'
        ]
      },
      ru: {
        title: 'Порезы и сильное кровотечение',
        shortDescription: 'Как остановить обильное кровотечение с помощью прямого давления на рану.',
        keywords: ['порез', 'кровотечение', 'кровь', 'рана', 'повязка', 'рана', 'артерия'],
        illustrationCaption: 'Наложение прямого давления на рану чистой салфеткой',
        steps: [
          {
            stepNumber: 1,
            title: 'Обеспечьте безопасность',
            instruction: 'Убедитесь в безопасности места происшествия. По возможности наденьте медицинские перчатки.',
            tip: 'Избегайте прямого контакта с кровью пострадавшего для предотвращения инфекций.'
          },
          {
            stepNumber: 2,
            title: 'Окажите прямое давление на рану',
            instruction: 'Прижмите к ране чистую стерильную салфетку или ткань и непрерывно давите ладонью 5-10 минут.',
            tip: 'Если салфетка пропиталась кровью, не убирайте ее — положите сверху вторую и продолжайте давить.'
          },
          {
            stepNumber: 3,
            title: 'Приподнимите поврежденную конечность',
            instruction: 'Если нет подозрения на перелом, поднимите руку или ногу выше уровня сердца.',
            tip: 'Это снизит приток крови к ране и облегчит остановку кровотечения.'
          },
          {
            stepNumber: 4,
            title: 'Наложите давящую повязку',
            instruction: 'Зафиксируйте ткань бинтом, проверяя, чтобы пальцы не синели и сохранялась чувствительность.'
          }
        ],
        doNot: [
          'НЕ извлекайте глубоко застрявшие предметы (осколки стекла, лезвия, штыри).',
          'НЕ снимайте первую пропитавшуюся повязку (это разрушит формирующийся тромб).',
          'НЕ накладывайте жгут без специальных навыков и показаний.',
          'НЕ заливайте открытую глубокую рану спиртом или йодом.'
        ],
        warnings: [
          'Кровь бьет пульсирующей струей (артериальное кровотечение).',
          'Кровотечение не останавливается после 10-15 минут непрерывного давления.',
          'Признаки шока: бледность, липкий холодный пот, головокружение, слабость.'
        ],
        whenToSeekHelp: [
          'Немедленно звоните 112 или 103 при пульсирующем или неукротимом кровотечении.',
          'Рана глубокая, края расходятся, требуется наложение швов.',
          'В ране находится инородное тело.',
          'Рана получена грязным или ржавым предметом (риск столбняка).'
        ]
      }
    }
  },
  {
    id: 'burns',
    category: 'trauma',
    urgencyLevel: 'high',
    iconName: 'Flame',
    illustrationType: 'cool-water-burn',
    isQuickHelp: true,
    relatedTopicIds: ['cuts-bleeding', 'electric-shock'],
    translations: {
      uz: {
        title: 'Kuyishlar (Termik va kimyoviy)',
        shortDescription: 'Issiq suv, olov yoki kimyoviy moddalardan kuyganda sovuq suv bilan sovutish va to‘g‘ri parvarish.',
        keywords: ['kuyish', 'olov', 'qaynoq suv', 'qabariq', 'teri', 'muz', 'issiqlik'],
        illustrationCaption: 'Kuygan joyni 10-20 daqiqa salqin oqib turgan suvda sovutish',
        steps: [
          {
            stepNumber: 1,
            title: 'Xavf omilini to‘xtating',
            instruction: 'Issiqlik manbasidan darhol uzoqlashing. Kimyoviy kuyish bo‘lsa, zararlangan kiyimlarni ehtiyotkorlik bilan yeching.',
            tip: 'Kuyib teriga yopishib qolgan kiyimlarni aslo yulib olmang, atrofidan kesib oling.'
          },
          {
            stepNumber: 2,
            title: 'Salqin oqib turgan suv bilan sovuting',
            instruction: 'Kuygan sohani kamida 10-20 daqiqa davomida salqin (muzdek bo‘lmagan, 15-20°C) oqib turgan suv ostida tuting.',
            tip: 'Bu og‘riqni pasaytiradi va to‘qimalarning chuqur qatlamlari nobud bo‘lishini to‘xtatadi.'
          },
          {
            stepNumber: 3,
            title: 'Zargarlik buyumlari va siqib turgan narsalarni yeching',
            instruction: 'Kuygan soha shishishi boshlanishidan oldin uzuk, soat va bilaguzuklarni ehtiyotkorlik bilan yeching.'
          },
          {
            stepNumber: 4,
            title: 'Steril yoki toza quruq mato bilan yoping',
            instruction: 'Kuygan joyni quruq, toza, yumshoq mato yoki oziq-ovqat plyonkasi (siqmasdan) bilan erkin yoping.'
          }
        ],
        doNot: [
          'Muz yoki muzdek sovuq suv ishlatmang (to‘qimalar muzlashi va zararlanishi mumkin).',
          'Pufakchalarni (qabariqlarni) aslo teshmang va qirqmang.',
          'Kuygan joyga sariyog‘, o‘simlik yog‘i, smetana, tish pastasi yoki spirt surtmang.',
          'Teriga yopishib qolgan kiyimlarni majburan ajratmang.'
        ],
        warnings: [
          'Kuyish yuzi kaftdan katta bo‘lsa yoki yuz, bo‘yin, bo‘g‘imlar, chov sohasida bo‘lsa.',
          'Teri oqarib, ko‘mirsimon qorayib yoki qotib qolgan bo‘lsa (3-darajali chuqur kuyish).',
          'Jabrlanuvchi bola yoki qariya bo‘lsa.'
        ],
        whenToSeekHelp: [
          'Har qanday chuqur yoki katta maydonli kuyishda zudlik bilan 112 yoki 103 ga qo‘ng‘iroq qiling.',
          'Kimyoviy yoki elektr toki urishi oqibatidagi kuyishlarda.',
          'Yuz yoki nafas yo‘llari kuygan bo‘lsa (qoraygan burun tuklari, nafas qisishi).'
        ]
      },
      en: {
        title: 'Burns (Thermal and Chemical)',
        shortDescription: 'First-aid cooling and care for heat, hot water, and chemical burn injuries.',
        keywords: ['burn', 'scald', 'fire', 'blister', 'hot water', 'heat', 'chemical'],
        illustrationCaption: 'Cooling the burned area under gentle cool running water for 10–20 minutes',
        steps: [
          {
            stepNumber: 1,
            title: 'Stop the burning process immediately',
            instruction: 'Remove the person from the heat source. For chemical burns, brush off dry chemicals and remove contaminated clothing.',
            tip: 'Do NOT peel off clothing that is firmly stuck to the burned skin.'
          },
          {
            stepNumber: 2,
            title: 'Cool under cool running water',
            instruction: 'Hold the burn under cool (not freezing, around 15–20°C) running tap water for at least 10 to 20 minutes.',
            tip: 'Cooling relieves pain and stops heat from spreading deeper into tissue.'
          },
          {
            stepNumber: 3,
            title: 'Remove tight jewelry and constrictive items',
            instruction: 'Gently take off rings, watches, and belts before the affected area begins to swell.'
          },
          {
            stepNumber: 4,
            title: 'Cover loosely with clean dressing',
            instruction: 'Cover the area loosely with a sterile, non-adherent dressing or clean plastic food wrap placed over the burn.'
          }
        ],
        doNot: [
          'Do NOT use ice, ice water, or freezing compresses (causes tissue hypothermia).',
          'Do NOT pop, prick, or peel blisters.',
          'Do NOT apply butter, oil, toothpaste, egg whites, or ointment to fresh burns.',
          'Do NOT pull away burned fabric stuck to the wound.'
        ],
        warnings: [
          'Burn is larger than the size of the person’s palm.',
          'Burn affects the face, neck, hands, feet, groin, or major joints.',
          'Skin looks charred black, leathery, or waxy white with numbness (third-degree).'
        ],
        whenToSeekHelp: [
          'Call 112 or 103 immediately for severe, extensive, or airway burns.',
          'All electrical or chemical burns require medical assessment.',
          'Burns in infants, children, or elderly individuals.'
        ]
      },
      ru: {
        title: 'Ожоги (Термические и химические)',
        shortDescription: 'Охлаждение проточной водой и правильный уход при ожогах паром, огнем или химикатами.',
        keywords: ['ожог', 'кипяток', 'пламя', 'волдырь', 'кожа', 'пар', 'химический ожог'],
        illustrationCaption: 'Охлаждение места ожога под прохладной проточной водой 10-20 минут',
        steps: [
          {
            stepNumber: 1,
            title: 'Прекратите воздействие тепла',
            instruction: 'Удалите пострадавшего от источника жара. При химическом ожоге снимите загрязненную одежду.',
            tip: 'Не сдирайте одежду, которая прилипла к обожженной коже — обрежьте ткань вокруг.'
          },
          {
            stepNumber: 2,
            title: 'Охладите прохладной проточной водой',
            instruction: 'Подержите поврежденный участок под прохладной (не ледяной, 15-20°C) проточной водой не менее 10-20 минут.',
            tip: 'Охлаждение снимает боль и препятствует углублению ожога в ткани.'
          },
          {
            stepNumber: 3,
            title: 'Снимите украшения до появления отека',
            instruction: 'Аккуратно снимите кольца, часы и браслеты с обожженной конечности.'
          },
          {
            stepNumber: 4,
            title: 'Накройте чистой сухой салфеткой',
            instruction: 'Свободно прикройте ожог стерильной марлей или чистой пищевой пленкой без сдавливания.'
          }
        ],
        doNot: [
          'НЕ прикладывайте лед и ледяную воду (это вызовет некроз тканей).',
          'НЕ прокалывайте и не срезайте волдыри.',
          'НЕ мажьте ожог маслом, жиром, сметаной, зубной пастой или спиртом.',
          'НЕ отдирайте прилипшую ткань от раны.'
        ],
        warnings: [
          'Площадь ожога больше ладони пострадавшего.',
          'Ожог на лице, шее, кистях рук, стопах, в паховой зоне или на суставах.',
          'Кожа обуглена, побелела или потеряла чувствительность (глубокий ожог 3 степени).'
        ],
        whenToSeekHelp: [
          'Срочно звоните 112 или 103 при обширных, глубоких или циркулярных ожогах.',
          'Любые химические и электрические ожоги требуют врачебного осмотра.',
          'Ожоги у младенцев, маленьких детей и пожилых людей.'
        ]
      }
    }
  },
  {
    id: 'choking',
    category: 'respiratory',
    urgencyLevel: 'critical',
    iconName: 'ShieldAlert',
    illustrationType: 'back-blows-abdominal',
    isQuickHelp: true,
    relatedTopicIds: ['breathing-difficulties', 'fainting'],
    translations: {
      uz: {
        title: 'Bo‘g‘ilish (Nafas yo‘liga narsa tiqilishi)',
        shortDescription: 'Ovqat yoki begona jism nafas yo‘liga tiqilib qolganda 5 ta zarba va 5 ta bosish orqali yordam ko‘rsatish.',
        keywords: ['bo‘g‘ilish', 'tiqilish', 'nafas', 'ovqat', 'geymlikh', 'nafas qisishi', 'tomoq'],
        illustrationCaption: 'Gavdani oldinga egib orqaga 5 ta zarba berish va qoringa 5 ta bosish (Geymlix usuli)',
        steps: [
          {
            stepNumber: 1,
            title: 'Holatni baholang: yo‘tala oladimi?',
            instruction: 'Agar inson gapira olsa yoki qattiq yo‘tala olsa, uni kuchliroq yo‘talishga undang. O‘zi chiqarib tashlashi eng xavfsiz yo‘ldir.',
            tip: 'Agar inson gapira olmasa, ovozsiz bo‘g‘ilsa va tomog‘ini ushlasa, zudlik bilan yordamni boshlang.'
          },
          {
            stepNumber: 2,
            title: 'Kuraklar orasiga 5 marta qattiq uring',
            instruction: 'Jabrlanuvchining yon tomonida turing, uning ko‘kragini bir qo‘lingiz bilan ushlab, gavdasini oldinga eging. Ikkinchi qo‘l kafti asosi bilan kuraklar orasiga 5 marta qattiq va yo‘naltirilgan zarba bering.'
          },
          {
            stepNumber: 3,
            title: '5 marta qoringa bosish (Geymlix usuli)',
            instruction: 'Agar jism chiqmasa, uning orqasiga o‘tib quchoqlang. Bir qo‘lingizni musht qilib kindikdan sal yuqoriga qo‘ying, ikkinchi qo‘lingiz bilan mushtni ushlab, ichkariga va yuqoriga qarab 5 marta tez siltab bosing.',
            tip: 'Homilador ayollar va go‘daklarga qorin bosilmaydi — ko‘krak suyagiga bosiladi.'
          },
          {
            stepNumber: 4,
            title: 'Navbatma-navbat takrorlang',
            instruction: 'Begona jism chiqib ketguncha yoki odam nafas olguncha 5 ta zarba va 5 ta qorin bosishni navbatma-navbat bajaring.'
          }
        ],
        doNot: [
          'Agar jabrlanuvchi o‘zi kuchli yo‘talayotgan bo‘lsa, aralashmang va orqasiga urishga shoshilmang.',
          'Tomog‘ida jism ko‘rinmasa, barmog‘ingizni tiqib qidirmang (jismni yanada chuqurroq itarib yuborishi mumkin).',
          'Homilador ayollarning qorniga bosim o‘tkazmang.'
        ],
        warnings: [
          'Jabrlanuvchi lablari va tirnoqlari ko‘karsa (kislorod yetishmasligi).',
          'Nafas olish mutlaqo to‘xtasa va ovoz chiqmasa.',
          'Jabrlanuvchi hushini yo‘qotib yiqilsa.'
        ],
        whenToSeekHelp: [
          'Darhol 112 yoki 103 ga qo‘ng‘iroq qiling (yoki yon-atrofdagilardan qo‘ng‘iroq qilishni so‘rang).',
          'Agar jabrlanuvchi hushidan ketsa, uni ehtiyotkorlik bilan polga yotqizib, sun’iy nafas va yurak massajini boshlang.',
          'Jism chiqarilgandan keyin ham ichki jarohatlarni istisno qilish uchun shifokor ko‘rigi zarur.'
        ]
      },
      en: {
        title: 'Choking (Airway Obstruction)',
        shortDescription: 'Emergency protocol for an obstructed airway using back blows and abdominal thrusts.',
        keywords: ['choking', 'airway', 'heimlich', 'throat', 'cough', 'food', 'suffocation'],
        illustrationCaption: 'Leaning forward for 5 firm back blows followed by 5 abdominal thrusts',
        steps: [
          {
            stepNumber: 1,
            title: 'Assess if choking is mild or severe',
            instruction: 'If the person can speak, cough forcefully, or breathe, encourage them to keep coughing. Do not interfere with coughing.',
            tip: 'If they cannot speak, make silent wheezing sounds, or grasp their neck with both hands, act immediately.'
          },
          {
            stepNumber: 2,
            title: 'Deliver 5 sharp back blows',
            instruction: 'Stand to the side and slightly behind. Support their chest with one hand and lean them well forward. Give 5 firm blows between the shoulder blades with the heel of your other hand.'
          },
          {
            stepNumber: 3,
            title: 'Deliver 5 abdominal thrusts (Heimlich maneuver)',
            instruction: 'Stand behind the person, wrap your arms around their waist. Make a fist just above the navel, grasp your fist with your other hand, and pull inward and upward sharply 5 times.',
            tip: 'For pregnant women or infants, perform chest thrusts instead of abdominal thrusts.'
          },
          {
            stepNumber: 4,
            title: 'Alternate until airway is clear',
            instruction: 'Continue alternating 5 back blows and 5 abdominal thrusts until the blockage dislodges or the person can breathe.'
          }
        ],
        doNot: [
          'Do NOT interfere if the person is coughing effectively.',
          'Do NOT do blind finger sweeps into the throat (this can push the object deeper).',
          'Do NOT perform abdominal thrusts on pregnant individuals or babies under 1 year old.'
        ],
        warnings: [
          'Lips, face, or fingernails turn blue or grey (cyanosis).',
          'Inability to make any sound or breathe.',
          'The person collapses or loses consciousness.'
        ],
        whenToSeekHelp: [
          'Have someone call 112 or 103 immediately while you provide first aid.',
          'If the person becomes unresponsive, lower them to the floor and start CPR.',
          'Always seek medical examination after abdominal thrusts to check for internal injury.'
        ]
      },
      ru: {
        title: 'Удушье (Попадание инородного тела в дыхательные пути)',
        shortDescription: 'Экстренная помощь при закупорке дыхательных путей: 5 ударов по спине и 5 толчков в живот.',
        keywords: ['удушье', 'поперхнулся', 'геймлих', 'дыхание', 'пища', 'горло', 'задыхается'],
        illustrationCaption: 'Наклон вперед для 5 ударов по спине и 5 толчков в живот (прием Геймлиха)',
        steps: [
          {
            stepNumber: 1,
            title: 'Оцените проходимость дыхательных путей',
            instruction: 'Если человек может кашлять или говорить, поощряйте кашель. Это самый эффективный способ удаления предмета.',
            tip: 'Если пострадавший не может говорить, издает беззвучные попытки вдоха или держится руками за горло — действуйте немедленно.'
          },
          {
            stepNumber: 2,
            title: 'Нанесите 5 ударов между лопатками',
            instruction: 'Встаньте сбоку и чуть сзади, придерживайте грудь одной рукой и наклоните человека вперед. Основанием ладони нанесите 5 резких ударов между лопатками.'
          },
          {
            stepNumber: 3,
            title: 'Выполните 5 толчков в живот (прием Геймлиха)',
            instruction: 'Встаньте сзади, обхватите руками талию. Сожмите кулак чуть выше пупка, накройте другой рукой и сделайте 5 резких толчков внутрь и вверх.',
            tip: 'Беременным женщинам и младенцам надавливания делают на середину грудины, а не на живот.'
          },
          {
            stepNumber: 4,
            title: 'Чередуйте действия',
            instruction: 'Повторяйте циклы из 5 ударов по спине и 5 толчков в живот до выхода предмета или появления дыхания.'
          }
        ],
        doNot: [
          'НЕ хлопайте по спине, если человек находится в вертикальном положении без наклона вперед.',
          'НЕ пытайтесь вслепую доставать предмет пальцами из горла (риск протолкнуть глубже).',
          'НЕ давите на живот беременным женщинам и детям до 1 года.'
        ],
        warnings: [
          'Посинение губ, лица или ногтей от нехватки кислорода.',
          'Полная невозможность говорить и дышать.',
          'Потеря сознания пострадавшим.'
        ],
        whenToSeekHelp: [
          'Попросите окружающих срочно вызвать 112 или 103.',
          'Если человек потерял сознание, аккуратно положите его на спину и начните СЛР.',
          'После применения приема Геймлиха обязателен осмотр врача.'
        ]
      }
    }
  },
  {
    id: 'nosebleed',
    category: 'trauma',
    urgencyLevel: 'moderate',
    iconName: 'Activity',
    illustrationType: 'pinch-nose-forward',
    isQuickHelp: false,
    relatedTopicIds: ['cuts-bleeding', 'head-injuries'],
    translations: {
      uz: {
        title: 'Burun qonashi (Epistaksis)',
        shortDescription: 'Boshni oldinga egib burun qanotlarini 10-15 daqiqa qisib turish orqali qonni xavfsiz to‘xtatish.',
        keywords: ['burun', 'qonash', 'burun qonashi', 'qon ketishi', 'bosim', 'yuz'],
        illustrationCaption: 'Boshni biroz oldinga egib, burunning yumshoq qismini barmoqlar bilan qisib turish',
        steps: [
          {
            stepNumber: 1,
            title: 'To‘g‘ri o‘tiring va boshni oldinga eging',
            instruction: 'Qulay o‘tiring va boshingizni biroz oldinga eging. Boshni orqaga tashlamang!',
            tip: 'Boshni orqaga tashlash qonning tomoqqa va oshqozonga oqishiga olib kelib, qusish va nafas yo‘llari tiqilishini keltirib chiqaradi.'
          },
          {
            stepNumber: 2,
            title: 'Burunning yumshoq qismini qising',
            instruction: 'Bosh va ko‘rsatkich barmoqlaringiz bilan burunning yumshoq qismini (burun qanotlarini) suyakdan pastroq joyidan qattiq qisib turing.',
            tip: 'Bosimni kamida 10-15 daqiqa davomida uzluksiz ushlab turing, qon to‘xtaganini tekshirish uchun erta qo‘yib yubormang.'
          },
          {
            stepNumber: 3,
            title: 'Og‘iz orqali nafas oling',
            instruction: 'Tinchlaning va og‘zingiz orqali erkin nafas oling. Tomoqqa to‘plangan qonni yutmang, tupurib tashlang.'
          },
          {
            stepNumber: 4,
            title: 'Burun ustiga sovuq kompress qo‘ying',
            instruction: 'Burun ustiga yoki ensaga matoga o‘ralgan sovuq narsa qo‘yish tomirlarni toraytirib, qon ketishini tezroq to‘xtatadi.'
          }
        ],
        doNot: [
          'Boshingizni hech qachon orqaga tashlamang.',
          'Qon to‘xtagandan keyin darhol burningizni qattiq qoqmang yoki tozalamang.',
          'Burun ichiga quruq paxta tiqmang (u yopishib qolib, olinganda qayta qonash boshlanadi).'
        ],
        warnings: [
          '20 daqiqa uzluksiz qisib turilsa ham qon to‘xtamasa.',
          'Kuchli bosh jarohatidan (zarbadan) keyin qon ketishi boshlansa.',
          'Qon bosimi keskin ko‘tarilib ketishi bilan kechsa.'
        ],
        whenToSeekHelp: [
          '20 daqiqadan ortiq davom etayotgan to‘xtovsiz qonashda tez yordamga (103 yoki 112) murojaat qiling.',
          'Bosh aylanishi, hushdan ketish xavfi yoki ko‘p miqdorda qon yo‘qotilsa.',
          'Agar qon ketish avtohalokat yoki balandlikdan yiqilishdan keyin yuz bersa.'
        ]
      },
      en: {
        title: 'Nosebleed (Epistaxis)',
        shortDescription: 'How to safely stop a nosebleed by leaning forward and pinching the soft nostrils.',
        keywords: ['nosebleed', 'nose', 'epistaxis', 'blood', 'pinch', 'nostril', 'face'],
        illustrationCaption: 'Sitting upright, leaning slightly forward, and pinching the soft part of the nose',
        steps: [
          {
            stepNumber: 1,
            title: 'Sit upright and lean forward',
            instruction: 'Sit comfortably and lean your head slightly forward. Do NOT tilt your head backwards.',
            tip: 'Tilting your head back causes blood to drain down the throat, which can cause gagging, coughing, or vomiting.'
          },
          {
            stepNumber: 2,
            title: 'Pinch the soft part of the nose',
            instruction: 'Use your thumb and index finger to firmly pinch the soft, fleshy part of your nose just below the bony bridge.',
            tip: 'Maintain continuous pressure for at least 10 to 15 minutes without releasing to check.'
          },
          {
            stepNumber: 3,
            title: 'Breathe through your mouth',
            instruction: 'Stay calm and breathe steadily through your mouth. Spit out any blood that collects in your mouth.'
          },
          {
            stepNumber: 4,
            title: 'Apply a cool compress',
            instruction: 'Place a cloth-wrapped cold pack over the bridge of the nose or the back of the neck to help constrict blood vessels.'
          }
        ],
        doNot: [
          'Do NOT tilt your head back or lie flat.',
          'Do NOT blow, pick, or rub your nose for several hours after bleeding stops.',
          'Do NOT pack dry cotton balls deep into the nasal cavity (can cause re-bleeding upon removal).'
        ],
        warnings: [
          'Bleeding continues for more than 20 minutes despite continuous firm pressure.',
          'Nosebleed follows a heavy blow to the head or facial trauma.',
          'Accompanied by dizziness, lightheadedness, or feeling faint.'
        ],
        whenToSeekHelp: [
          'Seek medical attention or call 112 / 103 if bleeding exceeds 20 minutes.',
          'If the bleed resulted from major physical trauma or a car collision.',
          'If the person is on blood thinners or has very high blood pressure.'
        ]
      },
      ru: {
        title: 'Носовое кровотечение (Эпистаксис)',
        shortDescription: 'Остановка носового кровотечения: наклон головы вперед и прижатие крыльев носа.',
        keywords: ['нос', 'кровотечение', 'кровь из носа', 'зажать', 'голова', 'давление'],
        illustrationCaption: 'Положение сидя с легким наклоном вперед и зажатием мягкой части носа',
        steps: [
          {
            stepNumber: 1,
            title: 'Сядьте прямо и наклонитесь вперед',
            instruction: 'Сядьте удобно и слегка наклоните голову вперед. Ни в коем случае НЕ запрокидывайте голову назад!',
            tip: 'При запрокидывании головы кровь стекает по задней стенке глотки в желудок, вызывая рвоту и кашель.'
          },
          {
            stepNumber: 2,
            title: 'Зажмите мягкую часть носа',
            instruction: 'Большим и указательным пальцами плотно сожмите крылья носа чуть ниже костной спинки на 10-15 минут.',
            tip: 'Держите непрерывно, не разжимая пальцы каждые 2 минуты для проверки.'
          },
          {
            stepNumber: 3,
            title: 'Дышите ртом',
            instruction: 'Дышите спокойно через рот. Попадающую в рот кровь сплевывайте, не глотайте.'
          },
          {
            stepNumber: 4,
            title: 'Приложите холод',
            instruction: 'Положите на переносицу или затылок холодный компресс (лед, завернутый в ткань).'
          }
        ],
        doNot: [
          'НЕ запрокидывайте голову назад и не ложитесь горизонтально.',
          'НЕ сморкайтесь в течение нескольких часов после остановки крови.',
          'НЕ заталкивайте сухую вату глубоко в нос (при извлечении она сорвет тромб).'
        ],
        warnings: [
          'Кровотечение не прекращается более 20 минут непрерывного сжатия.',
          'Кровь пошла после сильного удара по голове или перелома костей носа.',
          'Появилась слабость, головокружение, предобморочное состояние.'
        ],
        whenToSeekHelp: [
          'Вызывайте 112 или 103, если кровь не удается остановить за 20 минут.',
          'При обильном кровотечении после травмы головы.',
          'Если пострадавший принимает антикоагулянты (кроверазжижающие препараты).'
        ]
      }
    }
  },
  {
    id: 'fainting',
    category: 'medical',
    urgencyLevel: 'high',
    iconName: 'UserX',
    illustrationType: 'recovery-position',
    isQuickHelp: true,
    relatedTopicIds: ['choking', 'heat-illness'],
    translations: {
      uz: {
        title: 'Hushdan ketish (Xushsizlik)',
        shortDescription: 'Miyaga qon yetib bormasligi oqibatida qisqa muddatli hush yo‘qotilganda oyoqlarni ko‘tarish va barqaror yonbosh holat.',
        keywords: ['hushdan ketish', 'hushsiz', 'xushsizlik', 'yiqilish', 'bosh aylanishi', 'hush'],
        illustrationCaption: 'Tekis yotqizib oyoqlarni 30 sm ko‘tarish yoki xavfsiz yonbosh holatga o‘tkazish',
        steps: [
          {
            stepNumber: 1,
            title: 'Yotqizing va oyoqlarini ko‘taring',
            instruction: 'Jabrlanuvchini chalqancha yotqizib, oyoqlarini 30 santimetrcha balandlikka ko‘taring.',
            tip: 'Bu qonning miyaga qayta quyilishini tezlashtiradi va hushiga kelishiga ko‘maklashadi.'
          },
          {
            stepNumber: 2,
            title: 'Nafas olishini va nafas yo‘llarini tekshiring',
            instruction: 'Yoqani yeching, bo‘yinbog‘ va kamarni bo‘shating. Toza havo oqimini ta’minlang (derazani oching, odamlarni chetlating).'
          },
          {
            stepNumber: 3,
            title: 'Agar hushiga kelmasa — yonbosh holatga o‘tkazing',
            instruction: 'Agar inson 1 daqiqadan ortiq hushsiz yotsa, biroq normal nafas olayotgan bo‘lsa, uni xavfsiz yonbosh holatga (tiklanish holatiga) o‘tkazing.',
            tip: 'Bu holat til orqaga ketib qolishining va qusuq massalari nafas yo‘liga tiqilishining oldini oladi.'
          },
          {
            stepNumber: 4,
            title: 'Sekin-asta o‘tirishiga ruxsat bering',
            instruction: 'Hushiga kelgandan so‘ng darhol turishiga yo‘l qo‘ymang. Avval bir necha daqiqa o‘tirsin, so‘ng suv ichiring.'
          }
        ],
        doNot: [
          'Hushsiz yotgan odamning og‘ziga suv quymang yoki dori bermang.',
          'Yuziga tarsaki tushirmang yoki qattiq silkitmang.',
          'Hushiga kelishi bilan uni tezda oyoqqa turg‘azishga urinmang.'
        ],
        warnings: [
          '1 daqiqadan ko‘proq vaqt davomida hushiga kelmasa.',
          'Nafas olishi to‘xtasa yoki xirillash paydo bo‘lsa (darhol yurak massajini boshlang).',
          'Yiqilishda qattiq bosh jarohati olgan bo‘lsa yoki tana titrashi (tutqanoq) kuzatilsa.'
        ],
        whenToSeekHelp: [
          'Agar inson 1-2 daqiqada hushiga kelmasa, zudlik bilan 112 yoki 103 ga qo‘ng‘iroq qiling.',
          'Hushdan ketish ko‘krak qafasidagi og‘riq yoki nafas qisishi bilan boshlangan bo‘lsa.',
          'Homilador ayollar yoki keksalar hushdan ketganda.'
        ]
      },
      en: {
        title: 'Fainting and Unconsciousness',
        shortDescription: 'First-aid management for brief loss of consciousness, elevation of legs, and recovery position.',
        keywords: ['fainting', 'syncope', 'unconscious', 'passed out', 'collapse', 'dizziness'],
        illustrationCaption: 'Laying flat with legs elevated 30 cm or placing in the safe recovery position',
        steps: [
          {
            stepNumber: 1,
            title: 'Lay flat and elevate the legs',
            instruction: 'Place the person gently on their back and elevate their feet approximately 30 cm (12 inches) above the heart level.',
            tip: 'Leg elevation improves blood and oxygen flow back to the brain.'
          },
          {
            stepNumber: 2,
            title: 'Loosen tight clothing and ensure fresh air',
            instruction: 'Loosen tight collars, ties, and belts. Ask crowds to step back and open windows for fresh airflow.'
          },
          {
            stepNumber: 3,
            title: 'Place in recovery position if unresponsive',
            instruction: 'If breathing normally but unresponsive for more than 1 minute, turn them onto their side into the recovery position.',
            tip: 'The recovery position keeps the airway clear and prevents choking on saliva or vomit.'
          },
          {
            stepNumber: 4,
            title: 'Allow slow, gradual recovery',
            instruction: 'Once conscious, have them rest lying or sitting down for several minutes before attempting to stand.'
          }
        ],
        doNot: [
          'Do NOT pour water into an unconscious person’s mouth or try to feed them.',
          'Do NOT slap, vigorously shake, or throw cold water at their face.',
          'Do NOT allow them to stand up abruptly immediately after regaining consciousness.'
        ],
        warnings: [
          'The person remains unresponsive for more than 1 minute.',
          'Breathing is abnormal, gasping, or completely absent (start CPR immediately).',
          'Accompanied by chest pain, seizures, or following a traumatic fall.'
        ],
        whenToSeekHelp: [
          'Call 112 or 103 immediately if unconsciousness lasts longer than 1 minute.',
          'If the person is pregnant, elderly, or has known heart disease.',
          'If fainting was preceded by palpitations or chest tightness.'
        ]
      },
      ru: {
        title: 'Обморок и потеря сознания',
        shortDescription: 'Помощь при кратковременной потере сознания: подъем ног и перевод в безопасное боковое положение.',
        keywords: ['обморок', 'потеря сознания', 'упал', 'головокружение', 'без сознания', 'синкопе'],
        illustrationCaption: 'Положение на спине с приподнятыми на 30 см ногами или устойчивое боковое положение',
        steps: [
          {
            stepNumber: 1,
            title: 'Положите на спину и приподнимите ноги',
            instruction: 'Уложите человека на ровную поверхность и приподнимите его ноги примерно на 30 см выше уровня груди.',
            tip: 'Это стимулирует отток крови к головному мозгу и ускоряет возвращение сознания.'
          },
          {
            stepNumber: 2,
            title: 'Расстегните одежду и дайте доступ воздуха',
            instruction: 'Расстегните воротник, ослабьте ремень и галстук. Откройте окно и попросите окружающих расступиться.'
          },
          {
            stepNumber: 3,
            title: 'При отсутствии сознания поверните на бок',
            instruction: 'Если дыхание сохранено, но человек не приходит в себя более 1 минуты, поверните его в устойчивое боковое положение.',
            tip: 'Боковое положение предотвращает западение корня языка и аспирацию рвотными массами.'
          },
          {
            stepNumber: 4,
            title: 'Не спешите поднимать пострадавшего',
            instruction: 'После возвращения сознания дайте человеку спокойно полежать или посидеть несколько минут.'
          }
        ],
        doNot: [
          'НЕ вливайте воду и не давайте лекарства человеку без сознания.',
          'НЕ бейте пострадавшего по щекам и не трясите его.',
          'НЕ заставляйте резко вставать сразу после того, как он очнулся.'
        ],
        warnings: [
          'Человек не приходит в сознание дольше 1 минуты.',
          'Отсутствует нормальное дыхание (немедленно начинайте сердечно-легочную реанимацию).',
          'Появились судороги или предшествовала сильная боль в груди.'
        ],
        whenToSeekHelp: [
          'Срочно звоните 112 или 103, если обморок длится более минуты.',
          'Если обморок случился у беременной женщины или пожилого человека.',
          'Если при падении была получена травма головы.'
        ]
      }
    }
  },
  {
    id: 'sprains',
    category: 'trauma',
    urgencyLevel: 'moderate',
    iconName: 'Shield',
    illustrationType: 'rice-method',
    isQuickHelp: false,
    relatedTopicIds: ['fractures', 'minor-wounds'],
    translations: {
      uz: {
        title: 'Pay cho‘zilishi va lat yeyish',
        shortDescription: 'Bo‘g‘imlar yoki mushaklar cho‘zilganda RICE qoidasi: Dam olish, Muz (sovuq), Siqish va Ko‘tarish.',
        keywords: ['pay', 'cho‘zilish', 'lat yeyish', 'bo‘g‘im', 'oyoq qayrilishi', 'shish', 'og‘riq'],
        illustrationCaption: 'RICE usuli: Tinchlik, sovuq kompress, elastik bint bilan bog‘lash va oyoqni ko‘tarish',
        steps: [
          {
            stepNumber: 1,
            title: 'Harakatni to‘xtating (Dam oling)',
            instruction: 'Shikastlangan bo‘g‘imga (masalan, to‘piq yoki tizzaga) og‘irlik tushirishni darhol to‘xtating va tinch qo‘ying.',
            tip: 'Harakatlanishni davom ettirish pay tolalarining yanada ko‘proq uzilishiga sabab bo‘ladi.'
          },
          {
            stepNumber: 2,
            title: 'Sovuq kompress qo‘ying',
            instruction: 'Muz yoki sovuq paketni sochiqqa o‘rab, shikastlangan joyga 15-20 daqiqa davomida qo‘ying.',
            tip: 'Muzni hech qachon yalang‘och teriga to‘g‘ridan-to‘g‘ri qo‘ymang.'
          },
          {
            stepNumber: 3,
            title: 'Elastik bint bilan siqib bog‘lang',
            instruction: 'Bo‘g‘imni elastik bint bilan fiksatsiya qiling. Shishni kamaytiradi, lekin qon aylanishini to‘xtatib qo‘ymaslik kerak.',
            tip: 'Agar barmoqlar uvishib yoki soviy boshlasa, bog‘lamni biroz bo‘shating.'
          },
          {
            stepNumber: 4,
            title: 'Yuqoriga ko‘tarib qo‘ying',
            instruction: 'Shikastlangan a’zoni yostiq ustiga qo‘yib, yurak sathidan yuqoriroq tuting.'
          }
        ],
        doNot: [
          'Dastlabki 48 soat ichida issiq vanna, sauna yoki issiq kompress qilmang.',
          'Jarohatlangan joyni qattiq uqalamang va massaj qilmang.',
          'Og‘riqqa chidab yurishga yoki mashq qilishga urinmang.'
        ],
        warnings: [
          'Bo‘g‘im shakli o‘zgargan (deformatsiyalangan) bo‘lsa (chiqish yoki sinish ehtimoli).',
          'Oyoqqa mutlaqo tura olmasa va qadam bosib bo‘lmasa.',
          'Barmoqlar oqarib, ko‘karib yoki sezuvchanligini yo‘qotsa.'
        ],
        whenToSeekHelp: [
          'Agar inson 4 qadam ham bosa olmasa, suyak sinishini istisno qilish uchun rentgen tekshiruviga boring.',
          'Shish va kuchli og‘riq 2-3 kunda kamaymasa.',
          'Bo‘g‘im g‘ayritabiiy harakatchan yoki butunlay qotib qolgan bo‘lsa.'
        ]
      },
      en: {
        title: 'Sprains and Strains',
        shortDescription: 'First-aid care for twisted joints using the R.I.C.E. protocol: Rest, Ice, Compression, Elevation.',
        keywords: ['sprain', 'strain', 'twisted ankle', 'swelling', 'rice', 'joint', 'ligament'],
        illustrationCaption: 'R.I.C.E protocol: Rest, cold compress, elastic support bandage, and limb elevation',
        steps: [
          {
            stepNumber: 1,
            title: 'Rest the injured joint',
            instruction: 'Stop physical activity immediately. Do not put weight on the injured ankle, knee, or wrist.',
            tip: 'Rest prevents further tearing of ligament or muscle fibers.'
          },
          {
            stepNumber: 2,
            title: 'Ice with cold compress',
            instruction: 'Apply an ice pack wrapped in a clean cloth to the area for 15 to 20 minutes every 2–3 hours.',
            tip: 'Never apply bare ice directly to the skin to prevent cold burn injury.'
          },
          {
            stepNumber: 3,
            title: 'Compression bandage',
            instruction: 'Wrap an elastic bandage snugly around the joint to minimize swelling without cutting off circulation.',
            tip: 'If toes or fingers become cold, pale, or tingle, loosen the wrap.'
          },
          {
            stepNumber: 4,
            title: 'Elevate above heart level',
            instruction: 'Prop the injured limb on pillows so it rests above the level of the heart.'
          }
        ],
        doNot: [
          'Do NOT apply heat pads, hot showers, or rub-downs during the first 48 hours.',
          'Do NOT aggressively massage the painful area.',
          'Do NOT push through the pain to continue sports or walking.'
        ],
        warnings: [
          'The joint appears visibly deformed or out of place (suspected fracture or dislocation).',
          'Complete inability to bear weight or take 4 steps.',
          'Numbness, tingling, or skin turning pale and cold.'
        ],
        whenToSeekHelp: [
          'Seek medical evaluation or X-ray if weight-bearing is impossible.',
          'Severe swelling and discoloration that worsens after 24 hours.',
          'If there is a popping sound or sensation at the moment of injury.'
        ]
      },
      ru: {
        title: 'Растяжения связок и ушибы',
        shortDescription: 'Помощь при подворачивании суставов по протоколу RICE: Покой, Холод, Давящая повязка, Приподнятое положение.',
        keywords: ['растяжение', 'связки', 'ушиб', 'подвернул ногу', 'отек', 'сустав', 'травма'],
        illustrationCaption: 'Метод RICE: Покой, холодный компресс, эластичный бинт и приподнятое положение конечности',
        steps: [
          {
            stepNumber: 1,
            title: 'Обеспечьте покой суставу',
            instruction: 'Немедленно прекратите нагрузку на поврежденную конечность, сядьте или прилягте.',
            tip: 'Попытки наступать на ногу могут привести к полному разрыву связок.'
          },
          {
            stepNumber: 2,
            title: 'Приложите холод',
            instruction: 'Приложите лед или охлаждающий пакет, завернутый в ткань, на 15-20 минут.',
            tip: 'Никогда не прикладывайте чистый лед к голой коже во избежание обморожения.'
          },
          {
            stepNumber: 3,
            title: 'Зафиксируйте эластичным бинтом',
            instruction: 'Наклейте фиксирующую повязку эластичным бинтом для ограничения подвижности и уменьшения отека.',
            tip: 'Следите, чтобы повязка не нарушала кровоток (пальцы не должны неметь или синеть).'
          },
          {
            stepNumber: 4,
            title: 'Приподнимите конечность',
            instruction: 'Положите ногу или руку на подушку выше уровня сердца для уменьшения отека.'
          }
        ],
        doNot: [
          'НЕ грейте место травмы (никаких горячих ванн и согревающих мазей в первые 48 часов).',
          'НЕ массируйте поврежденный сустав.',
          'НЕ пытайтесь превозмогать боль.'
        ],
        warnings: [
          'Видимая деформация сустава или неестественное положение.',
          'Полная невозможность наступить на ногу и сделать хотя бы 4 шага.',
          'Онемение или синюшность пальцев ниже места травмы.'
        ],
        whenToSeekHelp: [
          'Обратитесь в травмпункт для рентгена, если невозможно наступить на ногу.',
          'Если боль и отек не уменьшаются спустя 2-3 дня.',
          'Если в момент травмы был слышен отчетливый хруст или щелчок.'
        ]
      }
    }
  },
  {
    id: 'fractures',
    category: 'trauma',
    urgencyLevel: 'high',
    iconName: 'Bone',
    illustrationType: 'splint-limb',
    isQuickHelp: true,
    relatedTopicIds: ['sprains', 'cuts-bleeding'],
    translations: {
      uz: {
        title: 'Suyak sinishi (Shikastlanishlar)',
        shortDescription: 'Singan suyakni qo‘zg‘atmaslik (immobilizatsiya), shina qo‘yish va shoshilinch yordam chaqirish.',
        keywords: ['sinish', 'suyak', 'shina', 'jarohat', 'oyoq sinishi', 'qo‘l sinishi', 'gips'],
        illustrationCaption: 'Singan sohani qo‘zg‘atmasdan ikki tomonlama shina yoki tayanch bilan fiksatsiya qilish',
        steps: [
          {
            stepNumber: 1,
            title: 'Harakatsizlantiring (Immobilizatsiya)',
            instruction: 'Shikastlangan a’zoni qanday holatda bo‘lsa, shundayligicha qoldiring. Suyakni to‘g‘rilashga aslo urinmang!',
            tip: 'Harakatlanish suyak parchalarining mushaklar, tomirlar va asablarni kesib yuborishiga olib kelishi mumkin.'
          },
          {
            stepNumber: 2,
            title: 'Ochiq sinishda qonni to‘xtating',
            instruction: 'Agar teri yirtilib suyak ko‘rinib turgan bo‘lsa, suyakka tegmasdan yara atrofini toza steril mato bilan yoping va qonashni to‘xtating.',
            tip: 'Suyakni ichkariga qaytarib tiqishga urinmang.'
          },
          {
            stepNumber: 3,
            title: 'Vaqtinchalik shina qo‘ying',
            instruction: 'Qo‘l ostidagi qattiq narsalar (taxtacha, qalin karton) yordamida sinish joyidan yuqoridagi va pastdagi ikkita bo‘g‘imni fiksatsiya qilib bog‘lang.'
          },
          {
            stepNumber: 4,
            title: 'Sovuq qo‘ying va tinchlantiring',
            instruction: 'Og‘riq va shishni kamaytirish uchun matoga o‘ralgan sovuq paket qo‘ying va shifokorlar yetib kelguncha kutib turing.'
          }
        ],
        doNot: [
          'Singan yoki qiyshaygan suyakni o‘zingiz to‘g‘rilashga aslo urinmang.',
          'Ochiq yaraga chiqqan suyak uchlarini ichkariga qaytarib tiqmang.',
          'Jabrlanuvchini zaruratsiz joyidan siljitmang (ayniqsa umurtqa yoki tos suyagi sinishida).'
        ],
        warnings: [
          'Suyak terini teshib tashqariga chiqqan bo‘lsa (ochiq sinish).',
          'Barmoqlar sezgisini yo‘qotgan, muzlagan yoki oqargan bo‘lsa.',
          'Bo‘yin, umurtqa yoki tos suyagi jarohatlangan bo‘lsa (odamni qimirlatmang!).'
        ],
        whenToSeekHelp: [
          'Darhol 112 yoki 103 ga qo‘ng‘iroq qiling.',
          'Ixtisoslashgan tibbiy brigada yetib kelguncha bemorni joyidan qo‘zg‘atmang.',
          'Og‘riq qoldiruvchi dori berishdan oldin shifokor bilan maslahatlashing.'
        ]
      },
      en: {
        title: 'Fractures and Broken Bones',
        shortDescription: 'Immobilization, splinting, and immediate emergency response for suspected broken bones.',
        keywords: ['fracture', 'broken bone', 'splint', 'trauma', 'arm', 'leg', 'orthopedic'],
        illustrationCaption: 'Immobilizing the limb with support above and below the injured bone',
        steps: [
          {
            stepNumber: 1,
            title: 'Immobilize in the position found',
            instruction: 'Keep the injured limb completely still in the exact position you found it. Do NOT try to straighten the bone.',
            tip: 'Movement can cause sharp bone fragments to lacerate nerves and blood vessels.'
          },
          {
            stepNumber: 2,
            title: 'Control bleeding for open fractures',
            instruction: 'If the bone has pierced the skin, cover the wound with a sterile dressing without pressing down on the protruding bone.',
            tip: 'Never attempt to push protruding bone ends back inside.'
          },
          {
            stepNumber: 3,
            title: 'Apply a stabilizing splint',
            instruction: 'Support the limb with a rigid object (board, folded magazine) that secures the joint above and the joint below the injury.'
          },
          {
            stepNumber: 4,
            title: 'Apply cold and keep the person calm',
            instruction: 'Place an ice pack wrapped in cloth near the fracture to reduce swelling while waiting for medical transport.'
          }
        ],
        doNot: [
          'Do NOT attempt to realign, reset, or push bones back into place.',
          'Do NOT move a person with suspected spine, neck, or pelvic injury.',
          'Do NOT allow the person to walk on a broken foot, ankle, or leg.'
        ],
        warnings: [
          'Bone is protruding through the skin (open fracture).',
          'Extreme deformity, unnatural angle, or shortening of a limb.',
          'Fingers or toes distal to the injury turn pale, cold, or blue with numbness.'
        ],
        whenToSeekHelp: [
          'Call 112 or 103 immediately for open fractures, leg fractures, or spine trauma.',
          'Always have the injury evaluated in an emergency department.',
          'Do not transport a casualty with major bone trauma in a standard car.'
        ]
      },
      ru: {
        title: 'Переломы костей',
        shortDescription: 'Иммобилизация, наложение шины и вызов неотложной помощи при подозрении на перелом.',
        keywords: ['перелом', 'кость', 'шина', 'травма', 'гипс', 'рука', 'нога', 'сломал'],
        illustrationCaption: 'Фиксация конечности подручной шиной с захватом двух соседних суставов',
        steps: [
          {
            stepNumber: 1,
            title: 'Обеспечьте неподвижность (Иммобилизацию)',
            instruction: 'Оставьте конечность в том положении, в котором она находится. Ни в коем случае НЕ пытайтесь вправлять кость!',
            tip: 'Любое смещение может повредить крупные сосуды и нервы острыми краями костных отломков.'
          },
          {
            stepNumber: 2,
            title: 'Остановите кровотечение при открытом переломе',
            instruction: 'Если видна кость, прикройте рану стерильной повязкой, не надавливая на выступающие кости.',
            tip: 'Категорически запрещено вправлять костные обломки обратно в рану.'
          },
          {
            stepNumber: 3,
            title: 'Наложите импровизированную шину',
            instruction: 'Зафиксируйте конечность с помощью жесткого предмета (дощечки, плотного картона), закрепив суставы выше и ниже перелома.'
          },
          {
            stepNumber: 4,
            title: 'Приложите холод поверх ткани',
            instruction: 'Для уменьшения отека приложите холод рядом с местом травмы и ожидайте скорую помощь.'
          }
        ],
        doNot: [
          'НЕ пытайтесь самостоятельно сопоставить или выпрямить сломанную кость.',
          'НЕ перемещайте человека при подозрении на перелом позвоночника или костей таза.',
          'НЕ разрешайте опираться на поврежденную ногу.'
        ],
        warnings: [
          'Кость пробила кожу и видна снаружи (открытый перелом).',
          'Визуальная неестественная кривизна или укорочение конечности.',
          'Пальцы побледнели, похолодели, потеряли чувствительность.'
        ],
        whenToSeekHelp: [
          'Срочно вызывайте 112 или 103 при любых тяжелых переломах.',
          'Не транспортируйте пострадавшего с переломом бедра или позвоночника на обычном авто.',
          'Дождитесь специализированную медицинскую бригаду.'
        ]
      }
    }
  },
  {
    id: 'electric-shock',
    category: 'environmental',
    urgencyLevel: 'critical',
    iconName: 'Zap',
    illustrationType: 'power-off-safety',
    isQuickHelp: true,
    relatedTopicIds: ['burns', 'fainting'],
    translations: {
      uz: {
        title: 'Elektr toki urishi',
        shortDescription: 'Elektr manbasini xavfsiz o‘chirish, jabrlanuvchiga to‘g‘ridan-to‘g‘ri teginmaslik va reanimatsiya.',
        keywords: ['elektr', 'tok', 'tok urishi', 'rozetka', 'sim', 'kuyish', 'reanimatsiya'],
        illustrationCaption: 'Avval elektr ta’minotini rubilnikdan o‘chirish yoki tok o‘tkazmaydigan quruq yog‘och bilan simni chetlatish',
        steps: [
          {
            stepNumber: 1,
            title: 'Avval o‘z xavfsizligingizni ta’minlang!',
            instruction: 'Tok manbaiga ulangan jabrlanuvchiga yalang‘och qo‘l bilan tegmang! Siz ham elektr toki zarbasiga uchrashingiz mumkin.',
            tip: 'Darhol elektr rubilnikini (avtomatni) o‘chiring yoki asbob vilkasini rozetkadan sug‘uring.'
          },
          {
            stepNumber: 2,
            title: 'Tok o‘tkazmaydigan narsadan foydalaning',
            instruction: 'Agar tokni o‘chirib bo‘lmasa, quruq yog‘och tayoq, plastmassa buyum yoki quruq supurgi dasta bilan simni odamdan itarib chetga suring.',
            tip: 'Quruq rezina gilamcha yoki quruq yog‘och ustida turing.'
          },
          {
            stepNumber: 3,
            title: 'Hushini va nafas olishini tekshiring',
            instruction: 'Tokdan ajratilgandan so‘ng darhol nafas olishini tekshiring. Agar nafas olmasa, zudlik bilan yurak massajini boshlang.'
          },
          {
            stepNumber: 4,
            title: 'Kuygan joylarni yoping',
            instruction: 'Tok kirgan va chiqqan joylardagi elektr kuyishlarini toza quruq mato bilan yoping.'
          }
        ],
        doNot: [
          'Tok manbaidan ajratilmagan odamga yalang‘och qo‘l yoki metall buyum bilan tegmang.',
          'Ho‘l narsalar yoki nam mato ishlatmang.',
          'Yuqori voltli simlar uzilib tushgan bo‘lsa, 8-10 metrdan yaqin bormang.'
        ],
        warnings: [
          'Nafas olish va pulsning to‘xtashi (klinik o‘lim).',
          'Yurak urishining buzilishi (aritmiya).',
          'Chuqur elektr kuyish belgilari.'
        ],
        whenToSeekHelp: [
          'Har qanday elektr toki urishida darhol 112 yoki 103 ga qo‘ng‘iroq qiling.',
          'Odam hushida bo‘lsa ham, elektr toki yurak ritmini keyinroq to‘xtatishi mumkinligi sababli EKG tekshiruvi shart.'
        ]
      },
      en: {
        title: 'Electric Shock',
        shortDescription: 'Safety precautions, isolating power sources, and emergency resuscitation for electrical injuries.',
        keywords: ['electric shock', 'electrocution', 'power', 'wire', 'current', 'outlet', 'lightning'],
        illustrationCaption: 'Shutting off the main power breaker before approaching, or using a dry wooden broom handle',
        steps: [
          {
            stepNumber: 1,
            title: 'Protect yourself first — DO NOT touch directly',
            instruction: 'Do NOT touch a person who is still in contact with an active electrical current, or you will become a casualty yourself.',
            tip: 'Immediately switch off the main circuit breaker or unplug the appliance.'
          },
          {
            stepNumber: 2,
            title: 'Separate with a non-conductive object',
            instruction: 'If power cannot be cut immediately, stand on dry material (rubber, cardboard) and use a dry wooden broom handle to push the wire away.'
          },
          {
            stepNumber: 3,
            title: 'Check consciousness and breathing',
            instruction: 'Once safely detached, check for normal breathing immediately. If not breathing, start CPR right away.'
          },
          {
            stepNumber: 4,
            title: 'Care for electrical burns',
            instruction: 'Cover entry and exit burn marks loosely with clean, dry dressings while awaiting emergency responders.'
          }
        ],
        doNot: [
          'Do NOT touch the casualty until the electrical source is disconnected.',
          'Do NOT use anything metallic, moist, or damp to move an electric cable.',
          'Do NOT approach fallen high-voltage power lines within 10 meters (33 feet).'
        ],
        warnings: [
          'Absence of normal breathing or pulse (cardiac arrest).',
          'Severe burns at electrical entrance and exit points.',
          'Confusion, seizures, or irregular heart rhythm.'
        ],
        whenToSeekHelp: [
          'Call 112 or 103 immediately for any electrical shock incident.',
          'Even if the person feels fine, delayed cardiac arrhythmias can occur — medical evaluation with an ECG is mandatory.'
        ]
      },
      ru: {
        title: 'Поражение электрическим током',
        shortDescription: 'Безопасное обесточивание, защита спасателя и сердечно-легочная реанимация при электротравме.',
        keywords: ['электричество', 'ток', 'удар током', 'провод', 'розетка', 'электротравма'],
        illustrationCaption: 'Отключение рубильника электропитания или использование сухой деревянной палки для отвода провода',
        steps: [
          {
            stepNumber: 1,
            title: 'Обеспечьте безопасность — НЕ прикасайтесь голой рукой',
            instruction: 'Не трогайте человека, пока он находится под действием тока! Иначе вы сами станете жертвой.',
            tip: 'Немедленно обесточьте прибор: выключите автомат в щитке или выдерните вилку из розетки.'
          },
          {
            stepNumber: 2,
            title: 'Отделите провод диэлектриком',
            instruction: 'Если ток нельзя отключить, используйте сухой предмет из дерева или пластика (сухую швабру, палку), чтобы отбросить провод.'
          },
          {
            stepNumber: 3,
            title: 'Проверьте дыхание и сознание',
            instruction: 'После освобождения от тока немедленно оцените дыхание. Если дыхания нет — начинайте непрямой массаж сердца.'
          },
          {
            stepNumber: 4,
            title: 'Закройте места ожогов',
            instruction: 'Накройте входные и выходные метки тока сухими чистыми салфетками.'
          }
        ],
        doNot: [
          'НЕ прикасайтесь к человеку до отключения тока.',
          'НЕ используйте влажные или металлические предметы для освобождения от провода.',
          'НЕ подходите ближе 8 метров к оборванным высоковольтным проводам.'
        ],
        warnings: [
          'Остановка дыхания и сердечной деятельности.',
          'Нарушение сердечного ритма (аритмия, фибрилляция).',
          'Глубокие термические ожоги тканей.'
        ],
        whenToSeekHelp: [
          'Срочно вызывайте 112 или 103 при любом ударе током.',
          'Даже при хорошем самочувствии обязательна запись ЭКГ из-за риска отсроченной остановки сердца.'
        ]
      }
    }
  }
];
