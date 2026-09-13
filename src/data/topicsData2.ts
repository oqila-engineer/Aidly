import { FirstAidTopic } from '../types';

export const topicsBatch2: FirstAidTopic[] = [
  {
    id: 'heat-illness',
    category: 'environmental',
    urgencyLevel: 'high',
    iconName: 'Sun',
    illustrationType: 'shade-cool-water',
    isQuickHelp: false,
    relatedTopicIds: ['fainting', 'breathing-difficulties'],
    translations: {
      uz: {
        title: 'Issiq va quyosh urishi',
        shortDescription: 'Tana harorati keskin ko‘tarilganda salqin joyga o‘tkazish, tana haroratini tushirish va suyuqlik berish.',
        keywords: ['issiq urishi', 'quyosh urishi', 'harorat', 'suvsizlanish', 'holsizlik', 'bosh og‘rig‘i'],
        illustrationCaption: 'Salqin joyga o‘tkazish, bosh va bo‘yinga nam salqin sochiq qo‘yish',
        steps: [
          {
            stepNumber: 1,
            title: 'Salqin joyga o‘tkazing',
            instruction: 'Jabrlanuvchini darhol soya, salqin yoki konditsionerli xonaga o‘tkazing.',
            tip: 'Siqib turgan issiq kiyimlarni yeching yoki bo‘shating.'
          },
          {
            stepNumber: 2,
            title: 'Tanani faol sovuting',
            instruction: 'Peshonaga, bo‘yinga, qo‘ltiq ostiga va chov sohasiga salqin suvda namlangan sochiqlarni qo‘ying.',
            tip: 'Shamollatgich (ventilyator) yoqish yoki yelpig‘ich bilan yelpish sovushni tezlashtiradi.'
          },
          {
            stepNumber: 3,
            title: 'Kichik qultumlar bilan suv ichiring',
            instruction: 'Agar odam hushida bo‘lsa va yuta olsa, xona haroratidagi toza suv yoki retsidratsiya eritmasi ichiring.',
            tip: 'Muzdek suv ichirmang — bu oshqozon spazmini keltirib chiqaradi.'
          },
          {
            stepNumber: 4,
            title: 'Holatini kuzating',
            instruction: 'Tana harorati 38°C dan pastga tushguncha sovutishni davom ettiring.'
          }
        ],
        doNot: [
          'Hushsiz yotgan odamga suv ichirishga urinmang.',
          'Bemorga spirtli ichimliklar yoki kofe bermang.',
          'Jabrlanuvchini birdaniga muzdek suvga botirmang (tomir spazmi yuzaga keladi).'
        ],
        warnings: [
          'Tana harorati 40°C dan oshib ketishi.',
          'Teri quruq va qizargan bo‘lib, terlash to‘xtagan bo‘lsa (issiqlik urishi).',
          'Alahsirash, tutqanoq yoki hushdan ketish.'
        ],
        whenToSeekHelp: [
          'Hush yo‘qotilganda yoki 40°C dan yuqori haroratda darhol 112 yoki 103 ga qo‘ng‘iroq qiling.',
          'Agar 30 daqiqalik sovutishdan so‘ng ahvol yaxshilanmasa.'
        ]
      },
      en: {
        title: 'Heatstroke and Heat Exhaustion',
        shortDescription: 'Emergency cooling, hydration, and first aid for dangerously high body temperature.',
        keywords: ['heatstroke', 'heat exhaustion', 'sunstroke', 'fever', 'dehydration', 'hot weather'],
        illustrationCaption: 'Moving to shade, applying cool damp cloths to neck and underarms, and slow hydration',
        steps: [
          {
            stepNumber: 1,
            title: 'Move to a cool, shaded area',
            instruction: 'Get the person out of the heat immediately into an air-conditioned space or deep shade.',
            tip: 'Loosen or remove excess layers of clothing.'
          },
          {
            stepNumber: 2,
            title: 'Actively cool the body',
            instruction: 'Apply cool, damp cloths or ice packs wrapped in towels to the neck, armpits, and groin where major blood vessels run.',
            tip: 'Use a fan or breeze to accelerate evaporative cooling.'
          },
          {
            stepNumber: 3,
            title: 'Offer small sips of cool water',
            instruction: 'If the person is fully conscious and able to swallow safely, give cool water or an electrolyte sports drink in small sips.',
            tip: 'Never give ice-cold water, which can trigger stomach cramping.'
          },
          {
            stepNumber: 4,
            title: 'Monitor body temperature and symptoms',
            instruction: 'Continue cooling until their skin cools down and breathing steadies.'
          }
        ],
        doNot: [
          'Do NOT give fluids to someone who is drowsy, confused, or vomiting.',
          'Do NOT give aspirin, paracetamol, or fever reducers (they do not work for heat illness).',
          'Do NOT plunge the person into an ice bath unsupervised.'
        ],
        warnings: [
          'Body temperature exceeds 40°C (104°F).',
          'Skin is hot, red, and completely dry without sweat (classic heatstroke).',
          'Confusion, slurred speech, seizures, or loss of consciousness.'
        ],
        whenToSeekHelp: [
          'Heatstroke is a medical emergency — call 112 or 103 immediately.',
          'If symptoms fail to improve within 30 minutes of cooling.'
        ]
      },
      ru: {
        title: 'Тепловой и солнечный удар',
        shortDescription: 'Экстренное охлаждение, гидратация и помощь при перегреве и критическом повышении температуры.',
        keywords: ['тепловой удар', 'солнечный удар', 'жара', 'перегрев', 'обезвоживание', 'температура'],
        illustrationCaption: 'Перемещение в тень, прикладывание влажных салфеток к шее и подмышкам',
        steps: [
          {
            stepNumber: 1,
            title: 'Переместите в прохладу и тень',
            instruction: 'Немедленно уведите пострадавшего с солнца в прохладное проветриваемое помещение.',
            tip: 'Расстегните или снимите тесную, плотную одежду.'
          },
          {
            stepNumber: 2,
            title: 'Охлаждайте тело',
            instruction: 'Приложите смоченные прохладной водой салфетки к шее, подмышкам и паховой области.',
            tip: 'Обмахивайте пострадавшего или включите вентилятор для ускорения испарения.'
          },
          {
            stepNumber: 3,
            title: 'Поите мелкими глотками',
            instruction: 'Если человек в ясном сознании, давайте ему пить негазированную воду комнатной температуры.',
            tip: 'Не давайте ледяную воду, чтобы не вызвать спазм сосудов желудка.'
          },
          {
            stepNumber: 4,
            title: 'Контролируйте состояние',
            instruction: 'Продолжайте охлаждение до снижения жара и облегчения дыхания.'
          }
        ],
        doNot: [
          'НЕ поите человека без сознания или с нарушением глотания.',
          'НЕ давайте жаропонижающие таблетки (они неэффективны при тепловом ударе).',
          'НЕ погружайте человека резко в ледяную ванну.'
        ],
        warnings: [
          'Температура тела выше 40°C.',
          'Сухая горячая кожа при полном прекращении потоотделения.',
          'Спутанность сознания, бред, судороги или обморок.'
        ],
        whenToSeekHelp: [
          'При тепловом ударе и температуре 40°C срочно звоните 112 или 103.',
          'Если симптомы не стихают в течение 30 минут охлаждения.'
        ]
      }
    }
  },
  {
    id: 'allergic-reactions',
    category: 'medical',
    urgencyLevel: 'critical',
    iconName: 'AlertCircle',
    illustrationType: 'epipen-posture',
    isQuickHelp: true,
    relatedTopicIds: ['breathing-difficulties', 'animal-bites'],
    translations: {
      uz: {
        title: 'Allergik reaksiyalar va anafilaksiya',
        shortDescription: 'Tomirlar shishishi, toshma, nafas qisishi va og‘ir allergik shokda birinchi yordam.',
        keywords: ['allergiya', 'anafilaksiya', 'shish', 'nafas qisishi', 'toshma', 'qichishish', 'epipen'],
        illustrationCaption: 'Yarim o‘tirgan qulay holatda nafasni yengillatish, shoshilinch yordam chaqirish',
        steps: [
          {
            stepNumber: 1,
            title: 'Allergen bilan aloqani to‘xtating',
            instruction: 'Ovqatlanishni to‘xtating, dori qabulini to‘xtating yoki hasharot nishini ehtiyotkorlik bilan olib tashlang.',
            tip: 'Nishni siqib qo‘ymaslik uchun uni tirnoq yoki plastik karta cheti bilan surib oling.'
          },
          {
            stepNumber: 2,
            title: 'Anafilaksiya belgilarini aniqlang',
            instruction: 'Lab, til yoki tomoq shishishi, nafas olishning xirillashi va toshma paydo bo‘lishi o‘ta xavflidir.',
            tip: 'Bu hayot uchun xavfli bo‘lgan anafilaktik shok bo‘lishi mumkin.'
          },
          {
            stepNumber: 3,
            title: 'Autoinyektorni (EpiPen) qo‘llang',
            instruction: 'Agar bemorda shifokor tomonidan berilgan adrenalin (EpiPen) bo‘lsa, ko‘rsatmaga binoan sonning tashqi tomoniga sanching.',
            tip: 'Inyeksiyadan keyin ignani 5-10 soniya ushlab turing.'
          },
          {
            stepNumber: 4,
            title: 'Qulay holatda yotqizing',
            instruction: 'Nafas qisayotgan bo‘lsa, yarim o‘tirgan holatda; bosh aylanishi bo‘lsa, chalqancha yotqizib oyoqlarini ko‘taring.'
          }
        ],
        doNot: [
          'Nafas olishi qiyinlashgan odamni tik oyoqda turishga majburlamang.',
          'Tomoq shishayotganda suv yoki ovqat yutishga majburlamang.',
          'Og‘ir anafilaksiyada tez yordam chaqirishni kechiktirmang.'
        ],
        warnings: [
          'Tomoq, lablar va ko‘z atrofining tez shishishi.',
          'Nafas yetishmasligi, xirillash yoki ovozning bo‘g‘ilishi.',
          'Qon bosimining keskin tushib ketishi, rang oqarishi va hushdan ketish.'
        ],
        whenToSeekHelp: [
          'Anafilaksiya alomatlarida zudlik bilan 112 yoki 103 ga qo‘ng‘iroq qiling.',
          'Adrenalin kiritilgandan keyin ham shifoxonaga borish shart, chunki reaksiya qaytalanishi mumkin.'
        ]
      },
      en: {
        title: 'Allergic Reactions and Anaphylaxis',
        shortDescription: 'Recognizing severe allergic reactions, positioning, epinephrine administration, and urgent care.',
        keywords: ['allergy', 'anaphylaxis', 'epipen', 'hives', 'swelling', 'wheezing', 'sting'],
        illustrationCaption: 'Assisting into a comfortable semi-upright breathing position and preparing epinephrine',
        steps: [
          {
            stepNumber: 1,
            title: 'Remove allergen exposure',
            instruction: 'Stop eating the suspect food, discontinue medication, or scrape away an insect stinger with a fingernail or plastic card.',
            tip: 'Do NOT squeeze the venom sac of a bee stinger.'
          },
          {
            stepNumber: 2,
            title: 'Recognize anaphylaxis signs',
            instruction: 'Look for swelling of the lips, tongue, or throat, hives, wheezing, or difficulty breathing.',
            tip: 'Anaphylaxis progresses rapidly and is life-threatening.'
          },
          {
            stepNumber: 3,
            title: 'Help administer epinephrine auto-injector',
            instruction: 'If the casualty carries a prescribed auto-injector (e.g., EpiPen), administer it into the outer middle thigh as directed.',
            tip: 'Hold firmly in place against the thigh for 5 to 10 seconds before removing.'
          },
          {
            stepNumber: 4,
            title: 'Position appropriately',
            instruction: 'If breathing is labored, sit them upright; if feeling dizzy or faint, keep them lying flat with legs raised.'
          }
        ],
        doNot: [
          'Do NOT make the person stand up or walk around during an allergic reaction.',
          'Do NOT delay calling emergency services even if an antihistamine was taken.',
          'Do NOT offer food or drink if the throat feels swollen or tight.'
        ],
        warnings: [
          'Rapidly swelling throat, tongue, or difficulty swallowing.',
          'Audible stridor, harsh wheezing, or tightness in the chest.',
          'Dizziness, pale skin, blue lips, or fainting.'
        ],
        whenToSeekHelp: [
          'Call 112 or 103 immediately if there is any breathing difficulty or facial swelling.',
          'Always seek emergency department evaluation even if symptoms improve after epinephrine.'
        ]
      },
      ru: {
        title: 'Аллергические реакции и анафилаксия',
        shortDescription: 'Распознавание отека Квинке, сыпи, спазма дыхания и экстренная помощь при анафилактическом шоке.',
        keywords: ['аллергия', 'анафилаксия', 'отек квинке', 'крапивница', 'зуд', 'эпипен', 'удушье'],
        illustrationCaption: 'Положение полусидя для облегчения дыхания, экстренный вызов скорой',
        steps: [
          {
            stepNumber: 1,
            title: 'Устраните контакт с аллергеном',
            instruction: 'Прекратите прием подозрительной пищи или лекарства, удалите жало насекомого ребром пластиковой карты.',
            tip: 'Не сдавливайте мешочек с ядом при удалении жала.'
          },
          {
            stepNumber: 2,
            title: 'Оцените симптомы анафилаксии',
            instruction: 'Следите за появлением отека лица, губ, языка, осиплости голоса или затруднения дыхания.',
            tip: 'Анафилаксия развивается за считанные минуты и смертельно опасна.'
          },
          {
            stepNumber: 3,
            title: 'Используйте шприц-ручку с адреналином',
            instruction: 'Если у пострадавшего есть выписанный автоинъектор адреналина, сделайте инъекцию в наружную поверхность бедра.',
            tip: 'Удерживайте иглу в бедре 5-10 секунд для полного введения дозы.'
          },
          {
            stepNumber: 4,
            title: 'Придайте безопасное положение',
            instruction: 'При одышке посадите полусидя; при головокружении уложите на спину и приподнимите ноги.'
          }
        ],
        doNot: [
          'НЕ заставляйте пострадавшего ходить или стоять.',
          'НЕ поите и не кормите человека при отеке горла.',
          'НЕ откладывайте вызов скорой помощи, надеясь только на таблетку от аллергии.'
        ],
        warnings: [
          'Быстро нарастающий отек лица, губ, языка и шеи.',
          'Свистящее дыхание, чувство нехватки воздуха.',
          'Резкое падение давления, бледность и потеря сознания.'
        ],
        whenToSeekHelp: [
          'Срочно вызывайте 112 или 103 при любых признаках отека дыхательных путей.',
          'Даже при улучшении после укола адреналина госпитализация обязательна.'
        ]
      }
    }
  },
  {
    id: 'poisoning',
    category: 'medical',
    urgencyLevel: 'critical',
    iconName: 'Skull',
    illustrationType: 'airway-clear-recovery',
    isQuickHelp: true,
    relatedTopicIds: ['fainting', 'breathing-difficulties'],
    translations: {
      uz: {
        title: 'Zaharlanish (Kimyoviy va dori moddalari)',
        shortDescription: 'Xavfli moddalar, dorilar yoki zaharli gazlar yutib yuborilganda xavfsiz harakatlar.',
        keywords: ['zaharlanish', 'dori', 'toksik', 'kimyoviy', 'qusish', 'oshqozon', 'gaz'],
        illustrationCaption: 'Qusish chaqirmaslik, qadoqni saqlash, yagona 112/103 xizmatiga qo‘ng‘iroq qilish',
        steps: [
          {
            stepNumber: 1,
            title: 'Zahar manbasini aniqlang',
            instruction: 'Inson nima ichgani yoki yutganini bilish uchun dori qutilari, idishlar yoki kimyoviy moddalar yorlig‘ini tekshiring.',
            tip: 'Qadoqni saqlab qo‘ying — bu shifokorlarga to‘g‘ri antidot tanlashda juda muhimdir.'
          },
          {
            stepNumber: 2,
            title: 'Gazdan zaharlanganda toza havoga olib chiqing',
            instruction: 'Agar is gazi yoki zaharli bug‘lar bo‘lsa, zudlik bilan derazalarni oching va odamni toza havoga olib chiqing.',
            tip: 'O‘zingiz nafas olmaslik uchun og‘zingizni nam dastro‘mol bilan yoping.'
          },
          {
            stepNumber: 3,
            title: 'Og‘izni chaying (yutmasdan)',
            instruction: 'Agar zaharli suyuqlik og‘izda qolgan bo‘lsa, og‘izni sovuq suv bilan chayib tupurib tashlashini so‘rang.'
          },
          {
            stepNumber: 4,
            title: 'Hushsiz bo‘lsa — yonbosh holatga o‘tkazing',
            instruction: 'Agar bemor hushsiz bo‘lsa, uni tiklanish holatiga (yonboshiga) yotqizing, toki qussa nafas yo‘li berkilib qolmasin.'
          }
        ],
        doNot: [
          'Kislota, ishqor yoki neft mahsulotlari (benzin, kerosin) ichilganda qusish chaqirmang (qizilo‘ngachni qayta kuydiradi).',
          'Shifokor ko‘rsatmasisiz eritmalar yoki xalqona vositalarni majburlab ichirmang.',
          'Hushsiz odamning og‘ziga hech narsa tiqmang.'
        ],
        warnings: [
          'Hushning xiralashishi yoki yo‘qolishi.',
          'Nafas olishning sekinlashishi yoki to‘xtashi.',
          'Qorindagi kuchli og‘riqlar va tinimsiz qusish.'
        ],
        whenToSeekHelp: [
          'Har qanday zaharlanish ehtimolida darhol 112 yoki 103 ga qo‘ng‘iroq qiling.',
          'Shifokorlarga qabul qilingan modda nomi, taxminiy miqdori va vaqtini ayting.'
        ]
      },
      en: {
        title: 'Poisoning and Toxic Ingestion',
        shortDescription: 'Emergency response for chemical, medicinal, or household poison ingestion.',
        keywords: ['poison', 'toxin', 'overdose', 'chemical', 'ingestion', 'stomach', 'carbon monoxide'],
        illustrationCaption: 'Keeping the substance packaging ready for emergency staff, placing unresponsive person on side',
        steps: [
          {
            stepNumber: 1,
            title: 'Identify the substance safely',
            instruction: 'Locate any open pill bottles, containers, or chemical labels to determine what was ingested and when.',
            tip: 'Keep the original packaging to show arriving emergency medical teams.'
          },
          {
            stepNumber: 2,
            title: 'Move to fresh air for inhaled poisons',
            instruction: 'If carbon monoxide or toxic fumes are suspected, immediately bring the person into fresh open air.',
            tip: 'Do not stay inside a contaminated area without adequate ventilation.'
          },
          {
            stepNumber: 3,
            title: 'Rinse the mouth (do not swallow)',
            instruction: 'If caustic chemicals touched the lips or mouth, have the person gently rinse with water and spit it out.'
          },
          {
            stepNumber: 4,
            title: 'Maintain the recovery position',
            instruction: 'If the casualty is unresponsive but breathing, keep them on their side to prevent choking if they vomit.'
          }
        ],
        doNot: [
          'Do NOT induce vomiting, especially for corrosive chemicals or petroleum products (causes secondary burn to esophagus).',
          'Do NOT give raw eggs, vinegar, or home remedies.',
          'Do NOT administer anything by mouth to an unconscious person.'
        ],
        warnings: [
          'Sudden confusion, extreme drowsiness, or unresponsiveness.',
          'Burns or redness around the lips and mouth.',
          'Difficulty breathing, seizures, or persistent vomiting.'
        ],
        whenToSeekHelp: [
          'Call 112 or 103 immediately upon suspicion of chemical or medication poisoning.',
          'Provide responders with exact product details and the estimated quantity consumed.'
        ]
      },
      ru: {
        title: 'Отравления (Химические и лекарственные)',
        shortDescription: 'Действия при проглатывании токсичных веществ, передозировке лекарств и вдыхании ядовитых газов.',
        keywords: ['отравление', 'токсин', 'лекарства', 'химия', 'рвота', 'желудок', 'угарный газ'],
        illustrationCaption: 'Сохранение упаковки вещества для врачей, перевод пострадавшего на бок',
        steps: [
          {
            stepNumber: 1,
            title: 'Определите вещество и сохраните упаковку',
            instruction: 'Найдите упаковки лекарств или емкости с бытовой химией, чтобы понять, что и в каком объеме попало в организм.',
            tip: 'Покажите упаковку прибывшей бригаде скорой помощи.'
          },
          {
            stepNumber: 2,
            title: 'Выведите на свежий воздух при ингаляционном отравлении',
            instruction: 'При подозрении на угарный газ или пары химикатов немедленно выведите человека на свежий воздух.',
            tip: 'Защищайте свои органы дыхания влажной тканью.'
          },
          {
            stepNumber: 3,
            title: 'Прополощите рот водой',
            instruction: 'При попадании едких веществ прополощите рот чистой водой, сплевывая ее наружу.'
          },
          {
            stepNumber: 4,
            title: 'Переведите в устойчивое боковое положение',
            instruction: 'Если пострадавший теряет сознание, поверните его на бок, чтобы исключить аспирацию рвотными массами.'
          }
        ],
        doNot: [
          'НЕ вызывайте рвоту при проглатывании кислот, щелочей или бензина (повторный химический ожог пищевода).',
          'НЕ поите раствором марганцовки или соды.',
          'НЕ оставляйте пострадавшего одного без присмотра.'
        ],
        warnings: [
          'Нарушение или потеря сознания.',
          'Ожоги слизистых оболочек рта и губ.',
          'Судороги, угнетение дыхания, галлюцинации.'
        ],
        whenToSeekHelp: [
          'Срочно звоните 112 или 103 при любых острых отравлениях.',
          'Сообщите диспетчеру точное название вещества и примерное время приема.'
        ]
      }
    }
  },
  {
    id: 'eye-injuries',
    category: 'trauma',
    urgencyLevel: 'high',
    iconName: 'Eye',
    illustrationType: 'shield-eye-wash',
    isQuickHelp: false,
    relatedTopicIds: ['cuts-bleeding', 'burns'],
    translations: {
      uz: {
        title: 'Ko‘z jarohatlari va begona jismlar',
        shortDescription: 'Ko‘zga kimyoviy modda yoki chang tushganda yuvish, jiddiy jarohatda ko‘zni ishqalamaslik va himoya qilish.',
        keywords: ['ko‘z', 'ko‘rish', 'kimyoviy', 'chang', 'shisha', 'yuvish', 'jarohat'],
        illustrationCaption: 'Ko‘zni ishqalamasdan 15 daqiqa toza suv bilan yuvish yoki himoya qoplamasi qo‘yish',
        steps: [
          {
            stepNumber: 1,
            title: 'Ko‘zni aslo ishqalamang!',
            instruction: 'Ko‘zni qo‘l bilan ishqalash begona jismning shox pardani tirnab jarohatlashiga olib keladi.',
            tip: 'Miltillatib ko‘ring — ko‘z yoshi mayda changlarni tabiiy yo‘l bilan chiqarishi mumkin.'
          },
          {
            stepNumber: 2,
            title: 'Kimyoviy modda tushganda darhol yuving',
            instruction: 'Ko‘zga kislota, ishqor yoki sovun tushganda, ko‘z qovog‘ini ochib, toza oqib turgan suv ostida kamida 15-20 daqiqa uzluksiz yuving.',
            tip: 'Suv oqimi ikkinchi sog‘lom ko‘zga oqib tushmasligiga e’tibor bering.'
          },
          {
            stepNumber: 3,
            title: 'Sanchilgan jismga tegmang',
            instruction: 'Agar ko‘z olmasiga shisha, metall parchasi yoki boshqa narsa sanchilgan bo‘lsa, uni sug‘urishga aslo urinmang.',
            tip: 'Qog‘oz stakanchik yoki himoya qalqoni bilan jismni himoyalang va ikkala ko‘zni yumshoq yoping.'
          },
          {
            stepNumber: 4,
            title: 'Ko‘zni toza salfetka bilan yoping',
            instruction: 'Jarohatlangan ko‘z ustiga toza steril bint qo‘yib, fiksatsiya qiling.'
          }
        ],
        doNot: [
          'Ko‘zga sanchilgan begona jismni o‘zingiz chiqarib olishga urinmang.',
          'Ko‘zni bosim bilan ezmang.',
          'Shifokor ko‘rsatmasisiz ko‘zga har xil tomchilar yoki malhamlar surtmang.'
        ],
        warnings: [
          'Ko‘rish qobiliyatining keskin pasayishi yoki yo‘qolishi.',
          'Ko‘z qorachig‘i shaklining o‘zgarishi.',
          'Kuchli to‘xtovsiz og‘riq va yorug‘likka qaray olmaslik.'
        ],
        whenToSeekHelp: [
          'Har qanday sanchilgan jarohat yoki kimyoviy kuyishda darhol 112 yoki oftalmologik tez yordamga boring.',
          'Qon quyilishi yoki shox parda shikastlanishida kechiktirmang.'
        ]
      },
      en: {
        title: 'Eye Injuries and Foreign Objects',
        shortDescription: 'Irrigation for chemical splashes, shielding punctured eyes, and preventing corneal damage.',
        keywords: ['eye', 'vision', 'chemical splash', 'foreign object', 'cornea', 'irrigation', 'eye wash'],
        illustrationCaption: 'Flushing eye with continuous clean water for 15 minutes or shielding with a protective cup',
        steps: [
          {
            stepNumber: 1,
            title: 'Do NOT rub the eye',
            instruction: 'Rubbing will scratch the delicate cornea or push foreign particles deeper into ocular tissue.',
            tip: 'Blink gently several times to allow tears to wash away small loose dust particles.'
          },
          {
            stepNumber: 2,
            title: 'Flush chemical splashes immediately',
            instruction: 'Hold eyelids open under a gentle stream of clean running tap water for at least 15 to 20 minutes continuously.',
            tip: 'Tilt head so runoff water flows away from the unaffected eye.'
          },
          {
            stepNumber: 3,
            title: 'Do NOT remove embedded objects',
            instruction: 'If an object is lodged in the eyeball, do not touch or pull it. Protect it by taping a paper cup over the eye.',
            tip: 'Cover both eyes lightly if possible to minimize sympathetic eye movement.'
          },
          {
            stepNumber: 4,
            title: 'Cover loosely with sterile pad',
            instruction: 'Place a clean, loose sterile eye pad and seek emergency ophthalmic care without delay.'
          }
        ],
        doNot: [
          'Do NOT attempt to pluck out an embedded splinter, metal shaving, or glass fragment.',
          'Do NOT press or apply direct pressure to the injured eyeball.',
          'Do NOT apply over-the-counter medicated ointments or drops without medical orders.'
        ],
        warnings: [
          'Partial or total loss of vision.',
          'Abnormal pupil shape or visible bleeding inside the eye chamber.',
          'Persistent severe pain, light sensitivity, or discharge.'
        ],
        whenToSeekHelp: [
          'Seek immediate medical or emergency care (112/103) for any penetrating eye wound or chemical exposure.',
          'Always see an eye specialist if pain persists beyond gentle rinsing.'
        ]
      },
      ru: {
        title: 'Травмы глаз и инородные тела',
        shortDescription: 'Промывание при химических ожогах, защита при проникающих ранениях и предотвращение повреждения роговицы.',
        keywords: ['глаз', 'зрение', 'ожог глаза', 'соринка', 'инородное тело', 'промывание', 'роговица'],
        illustrationCaption: 'Обильное промывание проточной водой 15-20 минут или защита глаза защитным конусом',
        steps: [
          {
            stepNumber: 1,
            title: 'Ни в коем случае НЕ трите глаз!',
            instruction: 'Трение глаза приведет к глубокому повреждению роговицы острыми частицами.',
            tip: 'Поморгайте, чтобы слезная жидкость естественным путем вымыла мелкую соринку.'
          },
          {
            stepNumber: 2,
            title: 'Срочно промойте при химическом ожоге',
            instruction: 'При попадании бытовой химии или кислот непрерывно промывайте открытый глаз чистой водой не менее 15-20 минут.',
            tip: 'Наклоняйте голову так, чтобы вода стекала от носа наружу, не попадая во второй глаз.'
          },
          {
            stepNumber: 3,
            title: 'НЕ извлекайте застрявшие предметы',
            instruction: 'Если в глазное яблоко вонзился осколок стекла или металла, не трогайте его. Прикройте глаз жестким стаканчиком.',
            tip: 'Прикройте салфеткой и второй глаз, чтобы уменьшить синхронные движения глазных яблок.'
          },
          {
            stepNumber: 4,
            title: 'Накройте чистой салфеткой',
            instruction: 'Наложите легкую стерильную повязку без давления на глаз.'
          }
        ],
        doNot: [
          'НЕ пытайтесь вытащить вонзившееся инородное тело пинцетом или пальцами.',
          'НЕ давите на поврежденный глаз.',
          'НЕ закапывайте капли с антибиотиками или гормонами без назначения врача.'
        ],
        warnings: [
          'Резкое падение зрения или двоение в глазах.',
          'Деформация зрачка или кровоизлияние в переднюю камеру глаза.',
          'Сильная светобоязнь и резкая боль.'
        ],
        whenToSeekHelp: [
          'Срочно обращайтесь в неотложную офтальмологию или звоните 112/103 при проникающих ранениях и ожогах.',
          'Осмотр врача обязателен при сохранении боли после промывания.'
        ]
      }
    }
  },
  {
    id: 'minor-wounds',
    category: 'trauma',
    urgencyLevel: 'mild',
    iconName: 'Bandage',
    illustrationType: 'wash-bandage-wound',
    isQuickHelp: false,
    relatedTopicIds: ['cuts-bleeding', 'animal-bites'],
    translations: {
      uz: {
        title: 'Yengil jarohatlar va shilinishlar',
        shortDescription: 'Yuzaki tirnalish, shilinish va mayda yaralarni tozalash, zararsizlantirish va bog‘lash.',
        keywords: ['yara', 'shilinish', 'tirnalish', 'leykoplastir', 'antiseptik', 'bint'],
        illustrationCaption: 'Yarani toza suv va sovun bilan yuvish, quritish va toza plastir yopishtirish',
        steps: [
          {
            stepNumber: 1,
            title: 'Qo‘llaringizni yuving',
            instruction: 'Yaraga tegishdan oldin qo‘llaringizni sovunlab toza qilib yuving.',
            tip: 'Bu yara ichiga bakteriyalar tushishi va yallig‘lanishining oldini oladi.'
          },
          {
            stepNumber: 2,
            title: 'Yarani oqib turgan toza suvda yuving',
            instruction: 'Yara ichidagi qum va changlarni ketkazish uchun uni toza oqib turgan suv ostida ehtiyotkorlik bilan yuving.',
            tip: 'Yara chetlarini sovun bilan yuvish mumkin, biroq ochiq yara ichiga sovun tushirmang.'
          },
          {
            stepNumber: 3,
            title: 'Yumshoq quriting va antiseptik surting',
            instruction: 'Toza steril salfetka bilan artib quriting. Suvli antiseptik (xlorgeksidin yoki miramistin) bilan ishlov bering.',
            tip: 'Yara ustiga yod yoki spirt quymang (to‘qimani kuydiradi).'
          },
          {
            stepNumber: 4,
            title: 'Himoya plastiri yoki bog‘lam qo‘ying',
            instruction: 'Yarani kirlanishdan himoya qilish uchun toza leykoplastir yopishtiring yoki bint bog‘lang.'
          }
        ],
        doNot: [
          'Ochiq yaraga to‘g‘ridan-to‘g‘ri spirt, yod yoki brilliant yashili (zelenka) quymang.',
          'Yarada hosil bo‘lgan qora qasmoqni yulib tashlamang.',
          'Ifloz paxtani yara ustiga qo‘ymang (tolalari yopishib qoladi).'
        ],
        warnings: [
          'Yara atrofining qizarishi, shishishi va qizib ketishi (infeksiya belgisi).',
          'Yaradan yiring oqishi yoki yoqimsiz hid paydo bo‘lishi.',
          'Tana haroratining ko‘tarilishi.'
        ],
        whenToSeekHelp: [
          'Agar yara 10 kunda ham bitmasa yoki infeksiya alomatlari kuchaysa.',
          'Zanglagan mix yoki tuproq bilan jarohatlanganda (qoqshol emlashini tekshirish zarur).'
        ]
      },
      en: {
        title: 'Minor Wounds and Abrasions',
        shortDescription: 'Gentle cleaning, antiseptic application, and protective dressing for scrapes and shallow cuts.',
        keywords: ['minor wound', 'scrape', 'abrasion', 'scratch', 'bandaid', 'antiseptic', 'cut'],
        illustrationCaption: 'Washing wound under clean tap water, drying gently, and applying adhesive bandage',
        steps: [
          {
            stepNumber: 1,
            title: 'Wash your hands thoroughly',
            instruction: 'Clean your hands with soap and water before touching or treating any wound.',
            tip: 'Hand hygiene prevents introducing household bacteria into the abrasion.'
          },
          {
            stepNumber: 2,
            title: 'Clean under running water',
            instruction: 'Rinse the abrasion under gentle running tap water to dislodge dirt, sand, and loose debris.',
            tip: 'Clean around the wound with mild soap, but do not irritate the raw surface with harsh cleansers.'
          },
          {
            stepNumber: 3,
            title: 'Pat dry and apply mild antiseptic',
            instruction: 'Pat dry gently with a sterile gauze pad. Apply a water-based antiseptic (e.g., chlorhexidine) if desired.',
            tip: 'Avoid stinging alcohols or pure iodine which can damage exposed cells.'
          },
          {
            stepNumber: 4,
            title: 'Cover with a protective bandage',
            instruction: 'Apply an adhesive bandage or sterile non-stick pad to keep bacteria and dirt out while healing.'
          }
        ],
        doNot: [
          'Do NOT pour rubbing alcohol, hydrogen peroxide, or iodine directly into fresh wounds.',
          'Do NOT pick at scabs as they form naturally.',
          'Do NOT leave dirty bandages on without changing them daily.'
        ],
        warnings: [
          'Spreading redness, warmth, or increased swelling around the edges.',
          'Pus or cloudy drainage coming from the wound.',
          'Fever or red streaks spreading outward from the cut.'
        ],
        whenToSeekHelp: [
          'See a healthcare professional if signs of bacterial infection develop.',
          'Consult a clinic if your tetanus vaccination is not up to date (within 5–10 years).'
        ]
      },
      ru: {
        title: 'Ссадины и легкие раны',
        shortDescription: 'Промывание чистой водой, обработка мягким антисептиком и защита пластырем.',
        keywords: ['ссадина', 'порез', 'царапина', 'пластырь', 'антисептик', 'бинт', 'рана'],
        illustrationCaption: 'Промывание проточной водой с мылом, бережное осушение и наложение пластыря',
        steps: [
          {
            stepNumber: 1,
            title: 'Вымойте руки с мылом',
            instruction: 'Тщательно вымойте руки перед тем, как прикасаться к ране.',
            tip: 'Это исключит занос бактерий с кожи рук в поврежденные ткани.'
          },
          {
            stepNumber: 2,
            title: 'Промойте рану проточной водой',
            instruction: 'Аккуратно смойте грязь и частицы земли под струей чистой прохладной воды.',
            tip: 'Кожу вокруг раны можно промыть мылом, стараясь не попадать на открытую поверхность.'
          },
          {
            stepNumber: 3,
            title: 'Просушите и обработайте антисептиком',
            instruction: 'Промокните стерильной салфеткой и обработайте водным антисептиком (хлоргексидином или мирамистином).',
            tip: 'Не лейте спирт или йод в саму рану во избежание химического ожога.'
          },
          {
            stepNumber: 4,
            title: 'Защитите пластырем или повязкой',
            instruction: 'Наклейте бактерицидный пластырь или наложите легкую марлевую повязку.'
          }
        ],
        doNot: [
          'НЕ заливайте открытую рану йодом или зеленкой.',
          'НЕ сдирайте образующиеся защитные корочки (струпья).',
          'НЕ накладывайте сухую вату прямо на рану (волокна присохнут).'
        ],
        warnings: [
          'Нарастающее покраснение, отек и пульсирующая боль.',
          'Появление гноя или неприятного запаха.',
          'Повышение температуры тела.'
        ],
        whenToSeekHelp: [
          'Обратитесь к врачу при появлении признаков нагноения.',
          'Если рана загрязнена землей или ржавчиной, проверьте статус прививки от столбняка.'
        ]
      }
    }
  },
  {
    id: 'animal-bites',
    category: 'trauma',
    urgencyLevel: 'high',
    iconName: 'Bug',
    illustrationType: 'soap-water-rabies',
    isQuickHelp: false,
    relatedTopicIds: ['minor-wounds', 'cuts-bleeding'],
    translations: {
      uz: {
        title: 'Hayvon va hasharot chaqishi',
        shortDescription: 'It, mushuk tishlaganda sovunli suv bilan 15 daqiqa yuvish, quturishdan himoyalanish va shifokorga borish.',
        keywords: ['hayvon', 'it', 'mushuk', 'tishlash', 'quturish', 'arilar', 'chayon', 'hasharot'],
        illustrationCaption: 'Yarani 15 daqiqa sovunli oqib turgan suv bilan uzluksiz yuvish',
        steps: [
          {
            stepNumber: 1,
            title: 'Yarani zudlik bilan sovunli suvda yuving',
            instruction: 'Hayvon tishlagan joyni kamida 15 daqiqa davomida kir sovun yoki oddiy sovun ko‘pigi bilan oqib turgan suv ostida yaxshilab yuving.',
            tip: 'Sovun tarkibidagi ishqor quturish (rabies) virusining qobig‘ini parchalab, xavfni sezilarli darajada kamaytiradi.'
          },
          {
            stepNumber: 2,
            title: 'Antiseptik bilan ishlov bering',
            instruction: 'Yuvilgandan so‘ng yara chetlariga spirtli antiseptik yoki yod surting va toza bog‘lam qo‘ying.',
            tip: 'Qon ozroq oqishi so‘lak bilan tushgan viruslarni yuvib chiqarishga yordam beradi, darhol qattiq siqmang.'
          },
          {
            stepNumber: 3,
            title: 'Hasharot chaqqanda nishni oling',
            instruction: 'Ari chaqqan bo‘lsa, nishni plastik karta bilan surib oling va sovuq kompress qo‘ying.',
            tip: 'Chayon yoki qoraqurt chaqqanda zudlik bilan shifoxonaga olib boring.'
          },
          {
            stepNumber: 4,
            title: 'Darhol travmatologiya yoki shifoxonaga boring',
            instruction: 'Quturishga va qoqsholga qarshi emlash (vaksina) olish uchun zudlik bilan tibbiyot muassasasiga murojaat qiling.'
          }
        ],
        doNot: [
          'Hayvon tishlagan yarani qon to‘xtaguncha yuvishsiz qoldirmang.',
          'Yarani o‘zboshimchalik bilan kesmang yoki kuydirmang.',
          'Quturishga qarshi emlashni kechiktirmang (quturish davosiz o‘limga olib keladi).'
        ],
        warnings: [
          'Tishlagan hayvon noma’lum yoki g‘alati xatti-harakat qilayotgan bo‘lsa (og‘zidan so‘lak oqishi, tajovuzkorlik).',
          'Tana haroratining ko‘tarilishi va mushaklar tortishishi.',
          'Hasharot chaqishidan so‘ng umumiy toshma va nafas qisishi boshlansa.'
        ],
        whenToSeekHelp: [
          'Har qanday it, mushuk yoki yovvoyi hayvon tishlaganda shoshilinch vaksina olish uchun tibbiy yordamga boring.',
          'Chayon yoki zaharli ilon chaqqanda zudlik bilan 112 yoki 103 ga qo‘ng‘iroq qiling.'
        ]
      },
      en: {
        title: 'Animal and Insect Bites',
        shortDescription: 'Crucial 15-minute soap-and-water wash for animal bites, rabies prevention, and insect sting relief.',
        keywords: ['animal bite', 'dog bite', 'cat bite', 'rabies', 'insect sting', 'bee', 'wasp', 'tetanus'],
        illustrationCaption: 'Thoroughly washing bite wound with soapy running water for 15 full minutes',
        steps: [
          {
            stepNumber: 1,
            title: 'Wash thoroughly with soap and water for 15 minutes',
            instruction: 'Immediately wash the bite under warm running tap water with gentle soap for a full 15 minutes.',
            tip: 'Soap alkaline compounds break down the lipid envelope of the deadly rabies virus.'
          },
          {
            stepNumber: 2,
            title: 'Apply antiseptic and sterile dressing',
            instruction: 'Pat dry and apply an antiseptic to the wound edges. Cover with a clean sterile dressing.',
            tip: 'A small amount of bleeding helps flush saliva and contaminants from the wound.'
          },
          {
            stepNumber: 3,
            title: 'Scrape stinger and apply cold for insect stings',
            instruction: 'For bee or wasp stings, scrape away the stinger with a card and apply an ice pack wrapped in cloth to reduce swelling.'
          },
          {
            stepNumber: 4,
            title: 'Seek medical assessment for rabies and tetanus vaccines',
            instruction: 'Go to an urgent care clinic or hospital for mandatory rabies post-exposure prophylaxis (PEP) and tetanus evaluation.'
          }
        ],
        doNot: [
          'Do NOT skip washing the wound even if it appears small or superficial.',
          'Do NOT cut, cauterize, or suck on bite or sting wounds.',
          'Do NOT delay rabies vaccination — rabies is 100% fatal once clinical symptoms appear.'
        ],
        warnings: [
          'Unknown stray, wild, or abnormally aggressive animal.',
          'Deep puncture wounds from animal teeth that can inoculate bone or joints.',
          'Systemic reaction: swelling, hives, or breathing problems after an insect sting.'
        ],
        whenToSeekHelp: [
          'Always seek medical care immediately after any mammalian animal bite for rabies vaccine protocols.',
          'Call 112 or 103 for scorpion or venomous snake bites.'
        ]
      },
      ru: {
        title: 'Укусы животных и насекомых',
        shortDescription: '15-минутное промывание с мылом при укусах собак и кошек, профилактика бешенства и помощь при укусах.',
        keywords: ['укус', 'собака', 'кошка', 'бешенство', 'оса', 'пчела', 'насекомое', 'столбняк'],
        illustrationCaption: 'Непрерывное промывание места укуса теплой водой с мылом в течение 15 минут',
        steps: [
          {
            stepNumber: 1,
            title: 'Промывайте водой с мылом 15 минут',
            instruction: 'Немедленно промойте рану проточной водой с хозяйственным или обычным мылом не менее 15 минут непрерывно.',
            tip: 'Щелочь мыла разрушает оболочку вируса бешенства, спасая жизнь.'
          },
          {
            stepNumber: 2,
            title: 'Обработайте края антисептиком',
            instruction: 'Обработайте кожу вокруг раны антисептиком и наложите чистую стерильную повязку.',
            tip: 'Небольшое кровотечение способствует вымыванию слюны животного из раневого канала.'
          },
          {
            stepNumber: 3,
            title: 'Удалите жало и приложите холод при укусе насекомого',
            instruction: 'При укусе пчелы удалите жало ребром карты и приложите холод для снятия отека.'
          },
          {
            stepNumber: 4,
            title: 'Срочно обратитесь в травмпункт',
            instruction: 'Немедленно посетите врача для начала курса вакцинации против бешенства и столбняка.'
          }
        ],
        doNot: [
          'НЕ пренебрегайте 15-минутным промыванием с мылом.',
          'НЕ прижигайте рану и не пытайтесь отсасывать яд ртом.',
          'НЕ откладывайте визит к врачу — бешенство неизлечимо после проявления симптомов.'
        ],
        warnings: [
          'Укус бродячим, диким или неадекватно ведущим себя животным.',
          'Глубокие колотые раны от зубов кошек или собак.',
          'Признаки аллергии: нарастающий отек горла, сыпь после укуса осы.'
        ],
        whenToSeekHelp: [
          'Любой укус млекопитающего требует немедленного обращения в травмпункт для вакцинации.',
          'При укусах скорпионов или змей срочно вызывайте 112 или 103.'
        ]
      }
    }
  },
  {
    id: 'head-injuries',
    category: 'trauma',
    urgencyLevel: 'high',
    iconName: 'Brain',
    illustrationType: 'still-head-neck',
    isQuickHelp: false,
    relatedTopicIds: ['fainting', 'cuts-bleeding'],
    translations: {
      uz: {
        title: 'Bosh jarohati va miya chayqalishi',
        shortDescription: 'Qattiq zarbadan so‘ng bosh va bo‘yinni qo‘zg‘atmaslik, hushni kuzatish va xavfli belgilarni aniqlash.',
        keywords: ['bosh jarohati', 'miya chayqalishi', 'bosh og‘rig‘i', 'qusish', 'bo‘yin', 'zarba', 'jarohat'],
        illustrationCaption: 'Bosh va bo‘yinni bir chiziqda qimirlatmasdan ushlab turish, sovuq kompress qo‘yish',
        steps: [
          {
            stepNumber: 1,
            title: 'Bosh va bo‘yinni qimirlatmaslik',
            instruction: 'Jabrlanuvchini tinch yotqizing va boshini bir holatda ushlab turing. Bo‘yin umurtqasini qo‘zg‘atmang.',
            tip: 'Kuchli zarba bo‘yin umurtqalari sinishi bilan birga kelishi mumkin.'
          },
          {
            stepNumber: 2,
            title: 'Boshdagi kesilgan joydan qonni to‘xtating',
            instruction: 'Bosh terisidagi yaraga toza steril mato bilan ehtiyotkorlik bilan bosim bering.',
            tip: 'Agar kalla suyagi sinishi yoki chuqurcha borligi sezilsa, qattiq bosmang.'
          },
          {
            stepNumber: 3,
            title: 'Sovuq kompress qo‘ying',
            instruction: 'Zarba tekkan joyga matoga o‘ralgan sovuq paket qo‘yib shishni kamaytiring.'
          },
          {
            stepNumber: 4,
            title: 'Hushini va nutqini doimiy tekshiring',
            instruction: 'Bemor bilan muloqotda bo‘ling, ismini va qayerdaligini so‘rab turing. Uyquga ketishiga yo‘l qo‘ymang.'
          }
        ],
        doNot: [
          'Bo‘yin jarohati ehtimoli bo‘lganda boshni buramang yoki siljitmang.',
          'Bemorga spirtli ichimliklar yoki uyqu dori bermang.',
          'Kalla suyagi sinishi ehtimolida yara ichini bosmang.'
        ],
        warnings: [
          'Hushni yo‘qotish (hatto bir necha soniyaga bo‘lsa ham).',
          'Takroriy qusish yoki kuchli ko‘ngil aynishi.',
          'Quloq yoki burundan tiniq suyuqlik yoki qon kelishi.',
          'Ko‘z qorachiqlari o‘lchamining turlicha bo‘lib qolishi (anizokoriya).'
        ],
        whenToSeekHelp: [
          'Hush yo‘qotilganda, qusganda yoki hush xiralashganda zudlik bilan 112 yoki 103 ga qo‘ng‘iroq qiling.',
          'Balandlikdan yoki avtohalokatdan keyingi har qanday bosh jarohatida tez yordam chaqiring.'
        ]
      },
      en: {
        title: 'Head Injuries and Concussion',
        shortDescription: 'Cervical spine stabilization, monitoring consciousness, and identifying red-flag neurological signs.',
        keywords: ['head injury', 'concussion', 'brain', 'skull', 'neck', 'vomiting', 'trauma', 'knockout'],
        illustrationCaption: 'Keeping head and neck manually aligned and still while applying cool compress',
        steps: [
          {
            stepNumber: 1,
            title: 'Keep head and neck still',
            instruction: 'Have the person lie flat and keep their head and neck strictly aligned and immobile.',
            tip: 'Assume possible cervical spinal injury following any significant head impact.'
          },
          {
            stepNumber: 2,
            title: 'Control external scalp bleeding',
            instruction: 'Apply gentle pressure with a clean cloth over scalp lacerations.',
            tip: 'Do NOT apply heavy pressure if a depressed skull fracture is suspected.'
          },
          {
            stepNumber: 3,
            title: 'Apply a cold compress',
            instruction: 'Place a cloth-covered ice pack gently over localized bumps to relieve swelling.'
          },
          {
            stepNumber: 4,
            title: 'Continuously assess responsiveness',
            instruction: 'Keep talking to the casualty, verifying their name, orientation, and memory of the event.'
          }
        ],
        doNot: [
          'Do NOT move or twist the casualty’s head or neck.',
          'Do NOT give sedatives or allow them to fall deeply asleep without monitoring.',
          'Do NOT pull out any object penetrating the skull.'
        ],
        warnings: [
          'Any loss of consciousness, even for a few seconds.',
          'Repeated vomiting, seizures, or worsening severe headache.',
          'Clear fluid or watery blood leaking from the nose or ears.',
          'Unequal pupil sizes or slurred speech.'
        ],
        whenToSeekHelp: [
          'Call 112 or 103 immediately for any head injury with loss of consciousness or vomiting.',
          'All high-impact falls and road accidents require emergency medical evaluation.'
        ]
      },
      ru: {
        title: 'Травмы головы и сотрясение мозга',
        shortDescription: 'Обеспечение неподвижности шеи, контроль сознания и выявление опасных неврологических симптомов.',
        keywords: ['травма головы', 'сотрясение мозга', 'череп', 'шея', 'рвота', 'удар', 'падение'],
        illustrationCaption: 'Фиксация головы и шеи в неподвижном положении, холод к месту ушиба',
        steps: [
          {
            stepNumber: 1,
            title: 'Обеспечьте покой голове и шее',
            instruction: 'Уложите пострадавшего и зафиксируйте голову руками в нейтральном положении, исключая повороты.',
            tip: 'При любой тяжелой травме головы всегда подозревайте повреждение шейного отдела позвоночника.'
          },
          {
            stepNumber: 2,
            title: 'Остановите кровотечение из раны на голове',
            instruction: 'Прижмите к ране чистую салфетку без чрезмерного давления.',
            tip: 'Не давите сильно при подозрении на вдавленный перелом костей черепа.'
          },
          {
            stepNumber: 3,
            title: 'Приложите холод',
            instruction: 'Приложите к шишке холод через ткань для уменьшения отека мягких тканей.'
          },
          {
            stepNumber: 4,
            title: 'Контролируйте уровень сознания',
            instruction: 'Разговаривайте с пострадавшим, задавайте простые вопросы (имя, дата, что произошло).'
          }
        ],
        doNot: [
          'НЕ поворачивайте и не запрокидывайте голову пострадавшего.',
          'НЕ давайте обезболивающие препараты до осмотра врача (это смажет симптомы).',
          'НЕ разрешайте засыпать в первые часы без наблюдения.'
        ],
        warnings: [
          'Потеря сознания (даже кратковременная).',
          'Многократная рвота, тошнота.',
          'Истечение прозрачной жидкости или крови из носа или ушей.',
          'Разный размер зрачков (анизокория) или спутанная речь.'
        ],
        whenToSeekHelp: [
          'Срочно вызывайте 112 или 103 при потере сознания, рвоте или нарушении речи.',
          'Травмы при ДТП и падениях с высоты требуют немедленной госпитализации.'
        ]
      }
    }
  },
  {
    id: 'breathing-difficulties',
    category: 'respiratory',
    urgencyLevel: 'critical',
    iconName: 'Wind',
    illustrationType: 'upright-breathing-posture',
    isQuickHelp: true,
    relatedTopicIds: ['choking', 'allergic-reactions'],
    translations: {
      uz: {
        title: 'Nafas qisishi va bo‘g‘ilish xuruji',
        shortDescription: 'Og‘ir nafas yetishmovchiligi, astma xuruji yoki ko‘krak qisilishida to‘g‘ri o‘tirish va shoshilinch choralar.',
        keywords: ['nafas', 'nafas qisishi', 'astma', 'xirillash', 'ko‘krak', 'kislorod', 'ingalyator'],
        illustrationCaption: 'Gavdani oldinga egib yarim o‘tirgan qulay holat (ortopnoe) va yoqani bo‘shatish',
        steps: [
          {
            stepNumber: 1,
            title: 'Yarim o‘tirgan qulay holatga o‘tkazing',
            instruction: 'Bemorni yotqizmang! Uni o‘tirg‘izib, gavdasini biroz oldinga egib, qo‘llarini tizzaga yoki stolga tirab o‘tirishiga yordam bering.',
            tip: 'Bu holatda o‘pka diafragmasi erkin harakatlanib, nafas olish sezilarli yengillashadi.'
          },
          {
            stepNumber: 2,
            title: 'Toza havo oqimini ta’minlang',
            instruction: 'Yoqa tugmalarini, bo‘yinbog‘ni va siqib turgan kiyimlarni yeching. Deraza va eshiklarni lang oching.',
            tip: 'Atrofdagi odamlarni tarqating — havoning tiqilishi vahimani oshiradi.'
          },
          {
            stepNumber: 3,
            title: 'Shaxsiy ingalyatoridan foydalanishga ko‘maklashing',
            instruction: 'Agar bemorda astma bo‘lsa va o‘zining dori ingalyatori (salbutamol) bor bo‘lsa, uni 1-2 marta purkashiga yordamlashing.'
          },
          {
            stepNumber: 4,
            title: 'Tinchlantiring va birga nafas oling',
            instruction: 'Vahima kislorod sarfini 2 barobarga oshiradi. Bemorga qarab, sekin burun orqali nafas olib, lablarni cho‘chchaytirib og‘izdan chiqarishni ko‘rsating.'
          }
        ],
        doNot: [
          'Nafas qisayotgan odamni chalqancha yotqizmang (bo‘g‘ilib qolishi mumkin).',
          'Bemorga begona dori yoki sedativ vositalarni bermang.',
          'Suv ichishga majburlamang.'
        ],
        warnings: [
          'Lablar, til yoki quloq solinchaklarining ko‘karishi (sianoz).',
          'Odam bitta jumlani ham gapira olmasligi, faqat so‘zma-so‘z pichirlashi.',
          'Hushning xiralashishi yoki tushib qolishi.'
        ],
        whenToSeekHelp: [
          'Og‘ir nafas qisishida darhol 112 yoki 103 ga qo‘ng‘iroq qiling.',
          'Agar ingalyator purkagandan so‘ng 5 daqiqa ichida yengillik sezilmasa.'
        ]
      },
      en: {
        title: 'Breathing Difficulties and Asthma',
        shortDescription: 'Upright tripod posture, clothing relief, inhaler assistance, and managing severe respiratory distress.',
        keywords: ['breathing', 'shortness of breath', 'asthma', 'inhaler', 'wheezing', 'respiratory', 'dyspnea'],
        illustrationCaption: 'Assisting casualty into an upright forward-leaning tripod position to expand lung capacity',
        steps: [
          {
            stepNumber: 1,
            title: 'Assist into an upright, forward-leaning position',
            instruction: 'Do NOT lay the person down! Help them sit upright leaning slightly forward with hands resting on their knees or a table (tripod position).',
            tip: 'The tripod posture maximizes chest cavity expansion and helps diaphragm efficiency.'
          },
          {
            stepNumber: 2,
            title: 'Ensure fresh airflow and loosen clothing',
            instruction: 'Loosen tight collar buttons, ties, and belts. Open windows and ask bystanders to step back.',
            tip: 'Panic and lack of air exacerbate bronchospasm.'
          },
          {
            stepNumber: 3,
            title: 'Help use prescribed relief inhaler',
            instruction: 'If the person has a prescribed quick-relief asthma inhaler (such as albuterol), help them take 1–2 puffs with a spacer if available.'
          },
          {
            stepNumber: 4,
            title: 'Coach slow, pursed-lip breathing',
            instruction: 'Guide them to breathe in gently through the nose and out slowly through pursed lips to prevent airway collapse.'
          }
        ],
        doNot: [
          'Do NOT force the person to lie flat on their back.',
          'Do NOT give unfamiliar medications or sedatives.',
          'Do NOT offer food or liquids while breathing is distressed.'
        ],
        warnings: [
          'Bluish discoloration of the lips, face, or fingernails (cyanosis).',
          'Inability to speak in full sentences (can only manage single words).',
          'Chest muscles pulling in hard between the ribs and at the neck (retractions).'
        ],
        whenToSeekHelp: [
          'Call 112 or 103 immediately for severe respiratory distress or cyanosis.',
          'If symptoms fail to improve within 5 minutes of inhaler use.'
        ]
      },
      ru: {
        title: 'Затрудненное дыхание и приступ астмы',
        shortDescription: 'Положение сидя с наклоном вперед, доступ кислорода, помощь с ингалятором и снятие приступа удушья.',
        keywords: ['дыхание', 'одышка', 'астма', 'ингалятор', 'хрипы', 'задыхается', 'удушье'],
        illustrationCaption: 'Посадить человека с наклоном вперед (поза ортопноэ) и расстегнуть одежду',
        steps: [
          {
            stepNumber: 1,
            title: 'Посадите с наклоном вперед',
            instruction: 'Ни в коем случае НЕ укладывайте пострадавшего! Посадите его, слегка наклонив корпус вперед с упором руками на колени или стол.',
            tip: 'Эта поза облегчает работу дыхательных мышц и диафрагмы.'
          },
          {
            stepNumber: 2,
            title: 'Обеспечьте приток свежего воздуха',
            instruction: 'Расстегните тугой воротник, снимите галстук, откройте окно. Попросите посторонних отойти.',
            tip: 'Паника увеличивает потребность организма в кислороде.'
          },
          {
            stepNumber: 3,
            title: 'Помогите воспользоваться ингалятором',
            instruction: 'Если у человека астма и есть личный бронхорасширяющий ингалятор (сальбутамол), помогите сделать 1-2 вдоха.'
          },
          {
            stepNumber: 4,
            title: 'Успокаивайте и дышите вместе',
            instruction: 'Подсказывайте делать спокойный вдох носом и плавный выдох через сложенные трубочкой губы.'
          }
        ],
        doNot: [
          'НЕ укладывайте человека на спину.',
          'НЕ давайте успокоительные средства, угнетающие дыхательный центр.',
          'НЕ заставляйте пить воду во время одышки.'
        ],
        warnings: [
          'Посинение губ, носогубного треугольника или ногтей (цианоз).',
          'Человек не может сказать фразу целиком, говорит только отдельными словами.',
          'Втяжение межреберных промежутков при вдохе, спутанность сознания.'
        ],
        whenToSeekHelp: [
          'Срочно вызывайте 112 или 103 при тяжелой одышке и посинении губ.',
          'Если ингалятор не облегчил дыхание в течение 5 минут.'
        ]
      }
    }
  }
];
