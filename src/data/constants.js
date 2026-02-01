export const marketProducts = {
  en: [
    { id: 1, name: "Rice (1kg)", currentPrice: 65, previousPrice: 60, category: "Grains" },
    { id: 2, name: "Wheat Flour (1kg)", currentPrice: 55, previousPrice: 58, category: "Grains" },
    { id: 3, name: "Potatoes (1kg)", currentPrice: 30, previousPrice: 35, category: "Vegetables" },
    { id: 4, name: "Tomatoes (1kg)", currentPrice: 40, previousPrice: 38, category: "Vegetables" },
    { id: 5, name: "Onions (1kg)", currentPrice: 50, previousPrice: 45, category: "Vegetables" },
    { id: 6, name: "Eggs (12 pcs)", currentPrice: 150, previousPrice: 155, category: "Poultry" },
    { id: 7, name: "Milk (1L)", currentPrice: 70, previousPrice: 68, category: "Dairy" },
    { id: 8, name: "Fish (Rui 1kg)", currentPrice: 350, previousPrice: 340, category: "Fish" },
    { id: 9, name: "Lentils (1kg)", currentPrice: 120, previousPrice: 125, category: "Pulses" },
    { id: 10, name: "Cooking Oil (1L)", currentPrice: 180, previousPrice: 175, category: "Essentials" }
  ],
  bn: [
    { id: 1, name: "চাল (১কেজি)", currentPrice: 65, previousPrice: 60, category: "শস্য" },
    { id: 2, name: "আটা (১কেজি)", currentPrice: 55, previousPrice: 58, category: "শস্য" },
    { id: 3, name: "আলু (১কেজি)", currentPrice: 30, previousPrice: 35, category: "সবজি" },
    { id: 4, name: "টমেটো (১কেজি)", currentPrice: 40, previousPrice: 38, category: "সবজি" },
    { id: 5, name: "পেঁয়াজ (১কেজি)", currentPrice: 50, previousPrice: 45, category: "সবজি" },
    { id: 6, name: "ডিম (১২টি)", currentPrice: 150, previousPrice: 155, category: "হাঁস-মুরগি" },
    { id: 7, name: "দুধ (১লিটার)", currentPrice: 70, previousPrice: 68, category: "দুগ্ধজাত" },
    { id: 8, name: "মাছ (রুই ১কেজি)", currentPrice: 350, previousPrice: 340, category: "মাছ" },
    { id: 9, name: "ডাল (১কেজি)", currentPrice: 120, previousPrice: 125, category: "ডাল" },
    { id: 10, name: "রান্নার তেল (১লিটার)", currentPrice: 180, previousPrice: 175, category: "নিত্যপ্রয়োজনীয়" }
  ]
};

export const qaDatabase = {
  en: [
    { q: "What's the best time to plant rice?", a: "For Boro: December-February\nFor Aman: July-August\nFor Aus: March-April", category: "agriculture" },
    { q: "How to prevent pest attacks?", a: "1. Use organic pesticides\n2. Crop rotation\n3. Field hygiene\n4. Pest-resistant varieties", category: "agriculture" },
    { q: "Tips for SSC exam preparation?", a: "1. Follow a study routine\n2. Practice past questions\n3. Take regular breaks\n4. Join study groups", category: "education" },
    { q: "Best fertilizers for vegetables?", a: "Organic: Compost, cow dung, vermicompost\nChemical: NPK balanced fertilizer\nMicronutrients as needed", category: "agriculture" },
    { q: "How to improve concentration?", a: "1. Study in quiet environment\n2. Take 5-min breaks every 25 mins\n3. Stay hydrated\n4. Get enough sleep", category: "education" },
    { q: "Weather forecast for farming?", a: "Check local weather apps daily. Rain expected this week - good for transplanting rice. Prepare drainage for heavy rainfall.", category: "weather" },
    { q: "Market price trends?", a: "Rice prices stable. Vegetable prices increased 5% due to transport costs. Best time to sell potatoes is next week.", category: "market" }
  ],
  bn: [
    { q: "ধান রোপণের সেরা সময় কখন?", a: "বোরো: ডিসেম্বর-ফেব্রুয়ারি\nআমন: জুলাই-আগস্ট\nআউশ: মার্চ-এপ্রিল", category: "agriculture" },
    { q: "কীটপতঙ্গ নিয়ন্ত্রণ করবেন কীভাবে?", a: "১. জৈব কীটনাশক ব্যবহার\n২. ফসল পর্যায়ক্রম\n৩. ক্ষেত পরিচ্ছন্নতা\n৪. প্রতিরোধী জাত", category: "agriculture" },
    { q: "এসএসসি পরীক্ষার প্রস্তুতির টিপস?", a: "১. নিয়মিত রুটিন মেনে পড়ুন\n২. পুরাতন প্রশ্ন অনুশীলন করুন\n৩. নিয়মিত বিরতি নিন\n৪. স্টাডি গ্রুপে যোগ দিন", category: "education" },
    { q: "সবজির জন্য সেরা সার কোনটি?", a: "জৈব: কম্পোস্ট, গোবর, কেঁচো সার\nরাসায়নিক: NPK সুষম সার\nপ্রয়োজন অনুযায়ী মাইক্রোনিউট্রিয়েন্ট", category: "agriculture" },
    { q: "মনোযোগ বাড়াবেন কীভাবে?", a: "১. শান্ত পরিবেশে পড়ুন\n২. প্রতি ২৫ মিনিটে ৫ মিনিট বিরতি\n৩. পর্যাপ্ত পানি পান করুন\n৪. যথেষ্ট ঘুমান", category: "education" },
    { q: "কৃষির জন্য আবহাওয়া পূর্বাভাস?", a: "স্থানীয় আবহাওয়া অ্যাপ প্রতিদিন দেখুন। এই সপ্তাহে বৃষ্টির সম্ভাবনা - ধান রোপণের জন্য ভাল। ভারী বৃষ্টির জন্য নিকাশ প্রস্তুত রাখুন।", category: "weather" },
    { q: "বাজার মূল্যের ট্রেন্ড?", a: "চালের দাম স্থিতিশীল। পরিবহন খরচের কারণে সবজির দাম ৫% বৃদ্ধি। আলু বিক্রির সেরা সময় আগামী সপ্তাহ।", category: "market" }
  ]
};

export const agriCategories = {
  en: [
    {
      title: "Crop Management",
      items: [
        { 
          name: "Rice Cultivation",
          id: "rice",
          description: "Complete guide to growing rice successfully",
          steps: [
            "Land Preparation: Plow the field 2-3 times and level it properly",
            "Seed Selection: Choose high-yielding varieties like BRRI dhan28, BRRI dhan29",
            "Sowing Time: Boro (Nov-Dec), Aman (Jun-Jul), Aus (Mar-Apr)",
            "Transplanting: 20-25 day old seedlings, 2-3 seedlings per hill",
            "Water Management: Maintain 2-3 inches water level during growth",
            "Fertilizer: Urea, TSP, MoP as per soil test recommendations",
            "Pest Control: Monitor for stem borer, leaf folder, use IPM methods",
            "Harvesting: When 80% grains turn golden yellow (110-140 days)"
          ],
          timing: "Boro: Dec-May | Aman: Jul-Dec | Aus: Mar-Aug"
        },
        { 
          name: "Vegetable Farming",
          id: "vegetables",
          description: "Seasonal vegetable cultivation guide",
          steps: [
            "Soil Preparation: Mix organic compost, make raised beds",
            "Season Selection: Summer (Apr-Sep), Winter (Oct-Mar)",
            "Seed/Seedling: Quality seeds from reliable sources",
            "Planting: Maintain proper spacing between plants",
            "Irrigation: Regular watering, avoid waterlogging",
            "Fertilizer: Organic manure preferred, chemical as supplement",
            "Pest Management: Neem oil, biological control methods",
            "Harvesting: Pick vegetables at right maturity stage"
          ],
          timing: "Winter: Tomato, Cabbage, Cauliflower | Summer: Cucumber, Pumpkin, Beans"
        },
        { 
          name: "Fruit Growing",
          id: "fruits",
          description: "Orchard management and fruit cultivation",
          steps: [
            "Site Selection: Well-drained soil, adequate sunlight",
            "Variety Selection: Choose climate-suitable varieties",
            "Planting: Dig pits 2-3 months before planting",
            "Spacing: Maintain proper distance between trees",
            "Irrigation: Regular watering in dry season",
            "Pruning: Remove dead branches, shape the tree",
            "Fertilization: Organic manure annually, chemical fertilizer as needed",
            "Pest & Disease: Regular monitoring and treatment"
          ],
          timing: "Planting Season: Monsoon (Jun-Sep) | Grafting: Feb-Mar, Aug-Sep"
        }
      ]
    },
    {
      title: "Livestock",
      items: [
        { 
          name: "Cattle Care",
          id: "cattle",
          description: "Proper cattle rearing and management",
          steps: [
            "Housing: Clean, well-ventilated shed with drainage",
            "Feeding: Green grass, dry straw, concentrate feed",
            "Water: Clean drinking water 3-4 times daily",
            "Vaccination: Follow vaccination schedule strictly",
            "Deworming: Every 3-4 months",
            "Milking: Clean udder before milking, twice daily",
            "Health Check: Regular veterinary checkups",
            "Record Keeping: Maintain breeding and health records"
          ],
          timing: "Breeding Season: Any time | Calving: 280 days gestation"
        },
        { 
          name: "Poultry Management",
          id: "poultry",
          description: "Chicken and duck farming guidelines",
          steps: [
            "Brooding: Maintain 32-35°C for chicks (0-7 days)",
            "Housing: 1.5-2 sq ft per bird, good ventilation",
            "Feeding: Starter, grower, layer feed as per age",
            "Vaccination: Newcastle, Gumboro, IB as per schedule",
            "Lighting: 14-16 hours light for layers",
            "Litter Management: Keep dry, change regularly",
            "Egg Collection: 2-3 times daily for layers",
            "Biosecurity: Restrict entry, disinfect regularly"
          ],
          timing: "Layer Production: 18-72 weeks | Broiler: 35-42 days to market"
        },
        { 
          name: "Fish Farming",
          id: "fish",
          description: "Pond fish culture management",
          steps: [
            "Pond Preparation: Dry, lime application, fill water",
            "Stocking: 4000-5000 fingerlings per acre (mixed culture)",
            "Species Mix: Rui, Katla, Mrigel, Silver carp, Common carp",
            "Feeding: Rice bran, mustard oil cake, pellet feed",
            "Fertilization: Cow dung, urea, TSP for plankton growth",
            "Water Quality: Check pH, oxygen, change water if needed",
            "Disease Prevention: Avoid overcrowding, maintain hygiene",
            "Harvesting: Partial or complete after 8-12 months"
          ],
          timing: "Stocking: Feb-Apr, Jun-Aug | Harvesting: Oct-Dec, Apr-Jun"
        }
      ]
    }
  ],
  bn: [
    {
      title: "ফসল পরিচালনা",
      items: [
        { 
          name: "ধান চাষ",
          id: "rice",
          description: "সফলভাবে ধান চাষের সম্পূর্ণ গাইড",
          steps: [
            "জমি প্রস্তুতি: ২-৩ বার চাষ দিয়ে জমি সমতল করুন",
            "বীজ নির্বাচন: BRRI dhan28, BRRI dhan29 এর মতো উচ্চ ফলনশীল জাত",
            "বপনের সময়: বোরো (নভেম্বর-ডিসেম্বর), আমন (জুন-জুলাই), আউশ (মার্চ-এপ্রিল)",
            "রোপণ: ২০-২৫ দিনের চারা, প্রতি গুছিতে ২-৩টি চারা",
            "পানি ব্যবস্থাপনা: বৃদ্ধির সময় ২-৩ ইঞ্চি পানি রাখুন",
            "সার: মাটি পরীক্ষা অনুযায়ী ইউরিয়া, টিএসপি, এমওপি",
            "পোকা নিয়ন্ত্রণ: মাজরা পোকা, পাতা মোড়ানো পোকা পর্যবেক্ষণ, IPM পদ্ধতি ব্যবহার",
            "ফসল সংগ্রহ: ৮০% দানা সোনালি হলে (১১০-১৪০ দিন)"
          ],
          timing: "বোরো: ডিসেম্বর-মে | আমন: জুলাই-ডিসেম্বর | আউশ: মার্চ-আগস্ট"
        },
        { 
          name: "সবজি চাষ",
          id: "vegetables",
          description: "মৌসুমী সবজি চাষের নির্দেশিকা",
          steps: [
            "মাটি প্রস্তুতি: জৈব সার মিশান, উঁচু বেড তৈরি করুন",
            "মৌসুম নির্বাচন: গ্রীষ্ম (এপ্রিল-সেপ্টেম্বর), শীত (অক্টোবর-মার্চ)",
            "বীজ/চারা: নির্ভরযোগ্য উৎস থেকে মানসম্পন্ন বীজ",
            "রোপণ: গাছের মধ্যে সঠিক দূরত্ব বজায় রাখুন",
            "সেচ: নিয়মিত পানি, জলাবদ্ধতা এড়ান",
            "সার: জৈব সার প্রাধান্য, রাসায়নিক সার সম্পূরক হিসেবে",
            "পোকা ব্যবস্থাপনা: নিম তেল, জৈবিক নিয়ন্ত্রণ পদ্ধতি",
            "সংগ্রহ: সঠিক পরিপক্কতায় সবজি তুলুন"
          ],
          timing: "শীত: টমেটো, বাঁধাকপি, ফুলকপি | গ্রীষ্ম: শসা, কুমড়া, বরবটি"
        },
        { 
          name: "ফল চাষ",
          id: "fruits",
          description: "বাগান ব্যবস্থাপনা এবং ফল চাষ",
          steps: [
            "স্থান নির্বাচন: পানি নিষ্কাশনযুক্ত মাটি, পর্যাপ্ত সূর্যালোক",
            "জাত নির্বাচন: আবহাওয়া-উপযুক্ত জাত বাছুন",
            "রোপণ: রোপণের ২-৩ মাস আগে গর্ত খনন করুন",
            "দূরত্ব: গাছের মধ্যে সঠিক দূরত্ব বজায় রাখুন",
            "সেচ: শুষ্ক মৌসুমে নিয়মিত পানি",
            "ছাঁটাই: মৃত ডাল কাটুন, গাছ আকৃতি দিন",
            "সার প্রয়োগ: বার্ষিক জৈব সার, প্রয়োজন অনুযায়ী রাসায়নিক সার",
            "পোকা ও রোগ: নিয়মিত পর্যবেক্ষণ এবং চিকিৎসা"
          ],
          timing: "রোপণ মৌসুম: বর্ষা (জুন-সেপ্টেম্বর) | কলম: ফেব্রুয়ারি-মার্চ, আগস্ট-সেপ্টেম্বর"
        }
      ]
    },
    {
      title: "প্রাণিসম্পদ",
      items: [
        { 
          name: "গবাদি পশু",
          id: "cattle",
          description: "সঠিক গবাদি পশু পালন এবং ব্যবস্থাপনা",
          steps: [
            "ঘর: পরিষ্কার, বায়ু চলাচল সহ নিষ্কাশনযুক্ত ঘর",
            "খাবার: সবুজ ঘাস, শুকনো খড়, দানাদার খাদ্য",
            "পানি: দৈনিক ৩-৪ বার বিশুদ্ধ পানি",
            "টিকা: টিকার সময়সূচী কঠোরভাবে অনুসরণ করুন",
            "কৃমিনাশক: প্রতি ৩-৪ মাসে",
            "দুধ দোহন: দোহনের আগে পরিষ্কার করুন, দিনে দুবার",
            "স্বাস্থ্য পরীক্ষা: নিয়মিত পশু চিকিৎসক পরীক্ষা",
            "রেকর্ড রাখা: প্রজনন এবং স্বাস্থ্য রেকর্ড সংরক্ষণ"
          ],
          timing: "প্রজনন মৌসুম: যেকোনো সময় | বাচ্চা প্রসব: ২৮০ দিন গর্ভকাল"
        },
        { 
          name: "হাঁস-মুরগি",
          id: "poultry",
          description: "মুরগি এবং হাঁস পালনের নির্দেশিকা",
          steps: [
            "ব্রুডিং: বাচ্চার জন্য ৩২-৩৫°সে (০-৭ দিন)",
            "ঘর: প্রতি পাখিতে ১.৫-২ বর্গফুট, ভালো বায়ু চলাচল",
            "খাদ্য: বয়স অনুযায়ী স্টার্টার, গ্রোয়ার, লেয়ার ফিড",
            "টিকা: নিউক্যাসল, গামবোরো, আইবি সময়সূচী অনুযায়ী",
            "আলো: লেয়ারের জন্য ১৪-১৬ ঘণ্টা আলো",
            "লিটার ব্যবস্থাপনা: শুকনো রাখুন, নিয়মিত পরিবর্তন করুন",
            "ডিম সংগ্রহ: লেয়ারের জন্য দৈনিক ২-৩ বার",
            "জৈবনিরাপত্তা: প্রবেশ সীমিত করুন, নিয়মিত জীবাণুমুক্ত করুন"
          ],
          timing: "লেয়ার উৎপাদন: ১৮-৭২ সপ্তাহ | ব্রয়লার: ৩৫-৪২ দিনে বাজারজাত"
        },
        { 
          name: "মৎস্য চাষ",
          id: "fish",
          description: "পুকুরে মাছ চাষ ব্যবস্থাপনা",
          steps: [
            "পুকুর প্রস্তুতি: শুকানো, চুন প্রয়োগ, পানি ভরা",
            "পোনা মজুদ: প্রতি একরে ৪০০০-৫০০০ পোনা (মিশ্র চাষ)",
            "প্রজাতি মিশ্রণ: রুই, কাতলা, মৃগেল, সিলভার কার্প, কমন কার্প",
            "খাদ্য: চালের কুঁড়া, সরিষার খৈল, পিলেট খাদ্য",
            "সার প্রয়োগ: গোবর, ইউরিয়া, টিএসপি প্ল্যাঙ্কটন বৃদ্ধির জন্য",
            "পানির গুণমান: pH, অক্সিজেন পরীক্ষা, প্রয়োজনে পানি পরিবর্তন",
            "রোগ প্রতিরোধ: অতিরিক্ত মজুদ এড়ান, পরিচ্ছন্নতা বজায় রাখুন",
            "ফসল সংগ্রহ: ৮-১২ মাস পর আংশিক বা সম্পূর্ণ"
          ],
          timing: "মজুদ: ফেব্রুয়ারি-এপ্রিল, জুন-আগস্ট | সংগ্রহ: অক্টোবর-ডিসেম্বর, এপ্রিল-জুন"
        }
      ]
    }
  ]
};

export const cropCalendar = {
  en: [
    {
      month: "Baishakh",
      monthIndex: 0,
      season: "Kharif-1 (Pre-monsoon)",
      crops: [
        { name: "Aus Rice", stage: "Sowing/Transplanting", details: "Best time to start Aus rice cultivation. Seeds should be sown in nursery or direct seeding in prepared fields.", icon: "🌾" },
        { name: "Jute", stage: "Sowing", details: "Ideal month for jute cultivation. Sow seeds in well-prepared land with adequate moisture.", icon: "🌿" },
        { name: "Summer Vegetables", stage: "Growing/Harvesting", details: "Continue growing pumpkin, bitter gourd, ridge gourd, okra. Some early vegetables ready for harvest.", icon: "🥒" }
      ]
    },
    {
      month: "Jyoishtho",
      monthIndex: 1,
      season: "Kharif-1 (Pre-monsoon)",
      crops: [
        { name: "Aus Rice", stage: "Transplanting/Growing", details: "Transplant Aus rice seedlings. Maintain proper water level and apply first fertilizer dose.", icon: "🌾" },
        { name: "Jute", stage: "Growing", details: "Jute plants are growing. Keep field weed-free and maintain moisture.", icon: "🌿" },
        { name: "Vegetables", stage: "Sowing", details: "Plant summer vegetables: snake gourd, bottle gourd, sponge gourd, and cucumber.", icon: "🥒" }
      ]
    },
    {
      month: "Asharh",
      monthIndex: 2,
      season: "Kharif-2 (Monsoon)",
      crops: [
        { name: "Aman Rice", stage: "Sowing (Nursery)", details: "Prepare Aman rice nursery. This is the main rice crop for Bangladesh. Use quality seeds.", icon: "🌾" },
        { name: "Aus Rice", stage: "Growing/Maturing", details: "Aus rice is maturing. Monitor for pests and diseases.", icon: "🌾" },
        { name: "Jute", stage: "Harvesting", details: "Jute ready for harvesting. Cut when plants flower and start seeding.", icon: "🌿" }
      ]
    },
    {
      month: "Shrabon",
      monthIndex: 3,
      season: "Kharif-2 (Monsoon)",
      crops: [
        { name: "Aman Rice", stage: "Transplanting", details: "Main transplanting period for Aman rice. Plant 25-30 day old seedlings with proper spacing.", icon: "🌾" },
        { name: "Aus Rice", stage: "Harvesting", details: "Harvest Aus rice when 80% grains turn golden yellow.", icon: "🌾" },
        { name: "Vegetables", stage: "Sowing", details: "Plant monsoon vegetables: water spinach, red amaranth, Indian spinach.", icon: "🥬" }
      ]
    },
    {
      month: "Bhadro",
      monthIndex: 4,
      season: "Kharif-2 (Monsoon)",
      crops: [
        { name: "Aman Rice", stage: "Growing", details: "Aman rice growing stage. Apply fertilizer, maintain water level, control weeds and pests.", icon: "🌾" },
        { name: "Winter Vegetables", stage: "Nursery Preparation", details: "Prepare nursery for winter vegetables like tomato, eggplant, chili, cabbage.", icon: "🍅" },
        { name: "Pulses", stage: "Land Preparation", details: "Start preparing land for pulse crops like lentil, chickpea, and mung bean.", icon: "🫘" }
      ]
    },
    {
      month: "Ashwin",
      monthIndex: 5,
      season: "Kharif-2 to Rabi Transition",
      crops: [
        { name: "Aman Rice", stage: "Growing/Flowering", details: "Aman rice flowering stage. Critical period - ensure proper water and pest management.", icon: "🌾" },
        { name: "Winter Vegetables", stage: "Transplanting", details: "Transplant winter vegetable seedlings (tomato, eggplant, chili, cabbage, cauliflower).", icon: "🍅" },
        { name: "Potato", stage: "Land Preparation", details: "Prepare land for potato cultivation. Apply organic manure.", icon: "🥔" }
      ]
    },
    {
      month: "Kartik",
      monthIndex: 6,
      season: "Rabi (Winter)",
      crops: [
        { name: "Aman Rice", stage: "Harvesting", details: "Main harvesting time for Aman rice. Harvest when grains are fully mature.", icon: "🌾" },
        { name: "Potato", stage: "Planting", details: "Plant potato tubers. Use quality seeds and maintain proper spacing.", icon: "🥔" },
        { name: "Mustard", stage: "Sowing", details: "Sow mustard seeds for oil production. Broadcast or line sowing method.", icon: "🌻" },
        { name: "Pulses", stage: "Sowing", details: "Sow lentil, chickpea, grass pea, and field pea.", icon: "🫘" }
      ]
    },
    {
      month: "Ogrohayon",
      monthIndex: 7,
      season: "Rabi (Winter)",
      crops: [
        { name: "Boro Rice", stage: "Nursery Preparation", details: "Prepare Boro rice nursery. This is the high-yielding winter rice crop.", icon: "🌾" },
        { name: "Winter Vegetables", stage: "Growing", details: "Winter vegetables growing well. Apply fertilizer and irrigate as needed.", icon: "🥬" },
        { name: "Wheat", stage: "Sowing", details: "Sow wheat seeds. Ensure timely sowing for good yield.", icon: "🌾" },
        { name: "Potato", stage: "Growing", details: "Potato plants growing. Apply irrigation and fertilizer.", icon: "🥔" }
      ]
    },
    {
      month: "Poush",
      monthIndex: 8,
      season: "Rabi (Winter)",
      crops: [
        { name: "Boro Rice", stage: "Transplanting", details: "Transplant Boro rice seedlings. Use 35-45 day old seedlings.", icon: "🌾" },
        { name: "Winter Vegetables", stage: "Harvesting", details: "Start harvesting winter vegetables - cabbage, cauliflower, tomato, beans.", icon: "🥬" },
        { name: "Mustard", stage: "Flowering/Harvesting", details: "Mustard plants flowering. Early sown crops ready for harvest.", icon: "🌻" },
        { name: "Potato", stage: "Earthing Up", details: "Apply second earthing to potato plants. Monitor for diseases.", icon: "🥔" }
      ]
    },
    {
      month: "Magh",
      monthIndex: 9,
      season: "Rabi (Winter)",
      crops: [
        { name: "Boro Rice", stage: "Growing", details: "Boro rice in vegetative stage. Apply fertilizer and maintain water level.", icon: "🌾" },
        { name: "Wheat", stage: "Growing", details: "Wheat plants growing. Apply irrigation if needed.", icon: "🌾" },
        { name: "Potato", stage: "Harvesting Starts", details: "Early potato varieties ready for harvest. Dig carefully to avoid damage.", icon: "🥔" },
        { name: "Pulses", stage: "Growing/Flowering", details: "Pulse crops flowering. Critical stage for pod formation.", icon: "🫘" }
      ]
    },
    {
      month: "Falgun",
      monthIndex: 10,
      season: "Rabi (Late Winter)",
      crops: [
        { name: "Boro Rice", stage: "Flowering/Grain Filling", details: "Boro rice flowering and grain filling. Maintain proper water. Critical stage.", icon: "🌾" },
        { name: "Wheat", stage: "Harvesting", details: "Wheat ready for harvest. Cut when grains are hard and golden.", icon: "🌾" },
        { name: "Potato", stage: "Harvesting", details: "Main potato harvesting period. Store in cool, dark place.", icon: "🥔" },
        { name: "Pulses", stage: "Harvesting", details: "Harvest pulse crops when pods are dry and mature.", icon: "🫘" }
      ]
    },
    {
      month: "Choitro",
      monthIndex: 11,
      season: "Pre-Kharif (Hot Dry Season)",
      crops: [
        { name: "Boro Rice", stage: "Harvesting", details: "Main Boro rice harvesting period. Harvest at proper maturity for good quality.", icon: "🌾" },
        { name: "Summer Vegetables", stage: "Sowing/Planting", details: "Plant summer vegetables: pumpkin, bitter gourd, okra, cucurbits.", icon: "🥒" },
        { name: "Maize", stage: "Harvesting (if sown)", details: "Spring maize ready for harvest if planted earlier.", icon: "🌽" }
      ]
    }
  ],
  bn: [
    {
      month: "বৈশাখ",
      monthIndex: 0,
      season: "খরিফ-১ (প্রাক-বর্ষা)",
      crops: [
        { name: "আউশ ধান", stage: "বীজ বপন/রোপণ", details: "আউশ ধান চাষের সেরা সময়। নার্সারিতে বীজ বপন করুন বা সরাসরি প্রস্তুত জমিতে বীজ ছিটান।", icon: "🌾" },
        { name: "পাট", stage: "বীজ বপন", details: "পাট চাষের আদর্শ মাস। পর্যাপ্ত আর্দ্রতা সহ ভালোভাবে প্রস্তুত জমিতে বীজ বপন করুন।", icon: "🌿" },
        { name: "গ্রীষ্মকালীন সবজি", stage: "বৃদ্ধি/সংগ্রহ", details: "মিষ্টি কুমড়া, করলা, ঝিঙা, ঢেঁড়স চাষ চলছে। কিছু আগাম সবজি সংগ্রহের জন্য প্রস্তুত।", icon: "🥒" }
      ]
    },
    {
      month: "জ্যৈষ্ঠ",
      monthIndex: 1,
      season: "খরিফ-১ (প্রাক-বর্ষা)",
      crops: [
        { name: "আউশ ধান", stage: "রোপণ/বৃদ্ধি", details: "আউশ ধানের চারা রোপণ করুন। সঠিক পানির স্তর বজায় রাখুন এবং প্রথম সার প্রয়োগ করুন।", icon: "🌾" },
        { name: "পাট", stage: "বৃদ্ধি", details: "পাট গাছ বাড়ছে। জমি আগাছামুক্ত রাখুন এবং আর্দ্রতা বজায় রাখুন।", icon: "🌿" },
        { name: "সবজি", stage: "বীজ বপন", details: "গ্রীষ্মকালীন সবজি রোপণ করুন: চিচিঙ্গা, লাউ, ধুন্দল এবং শসা।", icon: "🥒" }
      ]
    },
    {
      month: "আষাঢ়",
      monthIndex: 2,
      season: "খরিফ-২ (বর্ষা)",
      crops: [
        { name: "আমন ধান", stage: "বীজতলা তৈরি", details: "আমন ধানের বীজতলা তৈরি করুন। এটি বাংলাদেশের প্রধান ধান ফসল। মানসম্পন্ন বীজ ব্যবহার করুন।", icon: "🌾" },
        { name: "আউশ ধান", stage: "বৃদ্ধি/পরিপক্কতা", details: "আউশ ধান পরিপক্ক হচ্ছে। পোকামাকড় ও রোগের জন্য পর্যবেক্ষণ করুন।", icon: "🌾" },
        { name: "পাট", stage: "সংগ্রহ", details: "পাট সংগ্রহের জন্য প্রস্তুত। গাছে ফুল এলে এবং বীজ হতে শুরু করলে কাটুন।", icon: "🌿" }
      ]
    },
    {
      month: "শ্রাবণ",
      monthIndex: 3,
      season: "খরিফ-২ (বর্ষা)",
      crops: [
        { name: "আমন ধান", stage: "রোপণ", details: "আমন ধান রোপণের প্রধান সময়। ২৫-৩০ দিনের চারা সঠিক দূরত্বে রোপণ করুন।", icon: "🌾" },
        { name: "আউশ ধান", stage: "সংগ্রহ", details: "৮০% দানা সোনালি হলে আউশ ধান কাটুন।", icon: "🌾" },
        { name: "সবজি", stage: "বীজ বপন", details: "বর্ষাকালীন সবজি রোপণ করুন: কলমি শাক, লাল শাক, পুঁইশাক।", icon: "🥬" }
      ]
    },
    {
      month: "ভাদ্র",
      monthIndex: 4,
      season: "খরিফ-২ (বর্ষা)",
      crops: [
        { name: "আমন ধান", stage: "বৃদ্ধি", details: "আমন ধানের বৃদ্ধির পর্যায়। সার প্রয়োগ করুন, পানির স্তর বজায় রাখুন, আগাছা ও পোকা নিয়ন্ত্রণ করুন।", icon: "🌾" },
        { name: "শীতকালীন সবজি", stage: "বীজতলা তৈরি", details: "শীতকালীন সবজির বীজতলা তৈরি করুন যেমন টমেটো, বেগুন, মরিচ, বাঁধাকপি।", icon: "🍅" },
        { name: "ডাল", stage: "জমি প্রস্তুতি", details: "ডাল ফসলের জন্য জমি প্রস্তুত করা শুরু করুন যেমন মসুর, ছোলা এবং মুগ ডাল।", icon: "🫘" }
      ]
    },
    {
      month: "আশ্বিন",
      monthIndex: 5,
      season: "খরিফ-২ থেকে রবি রূপান্তর",
      crops: [
        { name: "আমন ধান", stage: "বৃদ্ধি/ফুল ধরা", details: "আমন ধানে ফুল ধরার পর্যায়। গুরুত্বপূর্ণ সময় - সঠিক পানি ও পোকা ব্যবস্থাপনা নিশ্চিত করুন।", icon: "🌾" },
        { name: "শীতকালীন সবজি", stage: "চারা রোপণ", details: "শীতকালীন সবজির চারা রোপণ করুন (টমেটো, বেগুন, মরিচ, বাঁধাকপি, ফুলকপি)।", icon: "🍅" },
        { name: "আলু", stage: "জমি প্রস্তুতি", details: "আলু চাষের জন্য জমি প্রস্তুত করুন। জৈব সার প্রয়োগ করুন।", icon: "🥔" }
      ]
    },
    {
      month: "কার্তিক",
      monthIndex: 6,
      season: "রবি (শীত)",
      crops: [
        { name: "আমন ধান", stage: "সংগ্রহ", details: "আমন ধান সংগ্রহের প্রধান সময়। দানা পুরোপুরি পরিপক্ক হলে কাটুন।", icon: "🌾" },
        { name: "আলু", stage: "রোপণ", details: "আলুর বীজ রোপণ করুন। মানসম্পন্ন বীজ ব্যবহার করুন এবং সঠিক দূরত্ব বজায় রাখুন।", icon: "🥔" },
        { name: "সরিষা", stage: "বীজ বপন", details: "তেল উৎপাদনের জন্য সরিষার বীজ বপন করুন। ছিটিয়ে বা লাইনে বপন করুন।", icon: "🌻" },
        { name: "ডাল", stage: "বীজ বপন", details: "মসুর, ছোলা, খেসারি এবং মটর ডাল বপন করুন।", icon: "🫘" }
      ]
    },
    {
      month: "অগ্রহায়ণ",
      monthIndex: 7,
      season: "রবি (শীত)",
      crops: [
        { name: "বোরো ধান", stage: "বীজতলা তৈরি", details: "বোরো ধানের বীজতলা তৈরি করুন। এটি উচ্চ ফলনশীল শীতকালীন ধান ফসল।", icon: "🌾" },
        { name: "শীতকালীন সবজি", stage: "বৃদ্ধি", details: "শীতকালীন সবজি ভালোভাবে বাড়ছে। প্রয়োজন অনুযায়ী সার প্রয়োগ এবং সেচ দিন।", icon: "🥬" },
        { name: "গম", stage: "বীজ বপন", details: "গমের বীজ বপন করুন। ভালো ফলনের জন্য সময়মত বপন নিশ্চিত করুন।", icon: "🌾" },
        { name: "আলু", stage: "বৃদ্ধি", details: "আলু গাছ বাড়ছে। সেচ এবং সার প্রয়োগ করুন।", icon: "🥔" }
      ]
    },
    {
      month: "পৌষ",
      monthIndex: 8,
      season: "রবি (শীত)",
      crops: [
        { name: "বোরো ধান", stage: "রোপণ", details: "বোরো ধানের চারা রোপণ করুন। ৩৫-৪৫ দিনের চারা ব্যবহার করুন।", icon: "🌾" },
        { name: "শীতকালীন সবজি", stage: "সংগ্রহ", details: "শীতকালীন সবজি সংগ্রহ শুরু করুন - বাঁধাকপি, ফুলকপি, টমেটো, বিন।", icon: "🥬" },
        { name: "সরিষা", stage: "ফুল ধরা/সংগ্রহ", details: "সরিষা গাছে ফুল ধরছে। আগাম বপন করা ফসল সংগ্রহের জন্য প্রস্তুত।", icon: "🌻" },
        { name: "আলু", stage: "মাটি তোলা", details: "আলু গাছে দ্বিতীয়বার মাটি তুলে দিন। রোগের জন্য পর্যবেক্ষণ করুন।", icon: "🥔" }
      ]
    },
    {
      month: "মাঘ",
      monthIndex: 9,
      season: "রবি (শীত)",
      crops: [
        { name: "বোরো ধান", stage: "বৃদ্ধি", details: "বোরো ধান বৃদ্ধির পর্যায়ে। সার প্রয়োগ করুন এবং পানির স্তর বজায় রাখুন।", icon: "🌾" },
        { name: "গম", stage: "বৃদ্ধি", details: "গম গাছ বাড়ছে। প্রয়োজন হলে সেচ দিন।", icon: "🌾" },
        { name: "আলু", stage: "সংগ্রহ শুরু", details: "আগাম আলুর জাত সংগ্রহের জন্য প্রস্তুত। ক্ষতি এড়াতে সাবধানে তুলুন।", icon: "🥔" },
        { name: "ডাল", stage: "বৃদ্ধি/ফুল ধরা", details: "ডাল ফসলে ফুল ধরছে। শুঁটি গঠনের জন্য গুরুত্বপূর্ণ পর্যায়।", icon: "🫘" }
      ]
    },
    {
      month: "ফাল্গুন",
      monthIndex: 10,
      season: "রবি (শেষ শীত)",
      crops: [
        { name: "বোরো ধান", stage: "ফুল ধরা/দানা পুষ্ট হওয়া", details: "বোরো ধানে ফুল ধরা এবং দানা পুষ্ট হচ্ছে। সঠিক পানি বজায় রাখুন। গুরুত্বপূর্ণ পর্যায়।", icon: "🌾" },
        { name: "গম", stage: "সংগ্রহ", details: "গম সংগ্রহের জন্য প্রস্তুত। দানা শক্ত এবং সোনালি হলে কাটুন।", icon: "🌾" },
        { name: "আলু", stage: "সংগ্রহ", details: "আলু সংগ্রহের প্রধান সময়। ঠান্ডা, অন্ধকার জায়গায় সংরক্ষণ করুন।", icon: "🥔" },
        { name: "ডাল", stage: "সংগ্রহ", details: "শুঁটি শুকনো এবং পরিপক্ক হলে ডাল ফসল সংগ্রহ করুন।", icon: "🫘" }
      ]
    },
    {
      month: "চৈত্র",
      monthIndex: 11,
      season: "প্রাক-খরিফ (গরম শুষ্ক মৌসুম)",
      crops: [
        { name: "বোরো ধান", stage: "সংগ্রহ", details: "বোরো ধান সংগ্রহের প্রধান সময়। ভালো মানের জন্য সঠিক পরিপক্কতায় কাটুন।", icon: "🌾" },
        { name: "গ্রীষ্মকালীন সবজি", stage: "বীজ বপন/রোপণ", details: "গ্রীষ্মকালীন সবজি রোপণ করুন: মিষ্টি কুমড়া, করলা, ঢেঁড়স, কুমড়া জাতীয় সবজি।", icon: "🥒" },
        { name: "ভুট্টা", stage: "সংগ্রহ (যদি বপন করা হয়)", details: "আগাম বপন করা বসন্তকালীন ভুট্টা সংগ্রহের জন্য প্রস্তুত।", icon: "🌽" }
      ]
    }
  ]
};

export const studyMaterials = {
  en: [
    {
      level: "SSC",
      subjects: [
        { name: "Physics", chapters: 12 },
        { name: "Chemistry", chapters: 10 }
      ]
    },
    {
      level: "HSC",
      subjects: [
        { name: "Mathematics", chapters: 15 },
        { name: "Physics", chapters: 14 }
      ]
    }
  ],
  bn: [
    {
      level: "এসএসসি",
      subjects: [
        { name: "পদার্থবিজ্ঞান", chapters: 12 },
        { name: "রসায়ন", chapters: 10 }
      ]
    },
    {
      level: "এইচএসসি",
      subjects: [
        { name: "গণিত", chapters: 15 },
        { name: "পদার্থবিজ্ঞান", chapters: 14 }
      ]
    }
  ]
};
