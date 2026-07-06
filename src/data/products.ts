export type ProductCategory = "chutney" | "protein" | "baby" | "pickles";

export interface Product {
  id: string;
  category: ProductCategory;
  weight: string;
  color: string;
  emoji: string;
  names: { en: string; kn: string; te: string };
  descriptions: { en: string; kn: string; te: string };
  ingredients: { en: string; kn: string; te: string };
  serving: { en: string; kn: string; te: string };
}

export const products: Product[] = [
  {
    id: "variety-chutney",
    category: "chutney",
    weight: "200g",
    color: "#D4A017",
    emoji: "🌶️",
    names: {
      en: "Variety Chutney Powder",
      kn: "ವಿವಿಧ ಚಟ್ನಿ ಪುಡಿ",
      te: "వివిధ చట్నీ పొడి",
    },
    descriptions: {
      en: "A classic Karnataka-style chutney pudi blend of roasted lentils, coconut, and spices.",
      kn: "ಬೇಯಿಸಿದ ಬೇಳೆಕಾಳು, ಕೊಬ್ಬರಿ ಮತ್ತು ಮಸಾಲೆಗಳ ಕ್ಲಾಸಿಕ್ ಕರ್ನಾಟಕ ಶೈಲಿ ಚಟ್ನಿ ಪುಡಿ.",
      te: "వేయించిన పప్పులు, కొబ్బరి మరియు మసాలా దినుసుల క్లాసిక్ కర్ణాటక స్టైల్ చట్నీ పొడి.",
    },
    ingredients: {
      en: "Urad dal, chana dal, dry coconut, red chillies, curry leaves, tamarind, jaggery, salt",
      kn: "ಉದ್ದಿನ ಬೇಳೆ, ಕಡಲೆ ಬೇಳೆ, ಒಣ ಕೊಬ್ಬರಿ, ಏಣ್ಣೆ ಮೆಣಸು, ಕರಿಬೇವು, ಹುಳಿ, ಬೆಲ್ಲ, ಉಪ್ಪು",
      te: "మినుములు, శనగ, ఎండిన కొబ్బరి, ఎండు మిరప, కరివేపాకు, చింతపండు, బెల్లం, ఉప్పు",
    },
    serving: {
      en: "Mix with ghee or sesame oil. Serve with idli, dosa, or hot rice.",
      kn: "ನೆಯ್ಯಿ ಅಥವಾ ಎಳ್ಳೆಣ್ಣೆಯ ಎಣ್ಣೆಯೊಂದಿಗೆ ಮಿಶ್ರಣ. ಇಡ್ಲಿ, ದೋಸೆ ಅಥವಾ ಬಿಸಿ ಅನ್ನಕ್ಕೆ.",
      te: "నెయ్యి లేదా నువ్వుల నూనెతో కలపండి. ఇడ్లీ, దోస లేదా వేడి అన్నంతో.",
    },
  },
  {
    id: "shenga-chutney",
    category: "chutney",
    weight: "200g",
    color: "#B55233",
    emoji: "🥜",
    names: {
      en: "Shenga Chutney Powder",
      kn: "ಶೇಂಗಾ ಚಟ್ನಿ ಪುಡಿ",
      te: "వేరుశనగ చట్నీ పొడి",
    },
    descriptions: {
      en: "Protein-rich peanut chutney pudi — a North Karnataka favorite.",
      kn: "ಪ್ರೋಟೀನ್ ಸಮೃದ್ಧ ಶೇಂಗಾ ಚಟ್ನಿ ಪುಡಿ — ಉತ್ತರ ಕರ್ನಾಟಕದ ಮೆಚ್ಚಿನವು.",
      te: "ప్రోటీన్ సమృద్ధి వేరుశనగ చట్నీ పొడి — ఉత్తర కర్ణాటక ఇష్టమైనది.",
    },
    ingredients: {
      en: "Roasted peanuts, red chillies, garlic, curry leaves, tamarind, jaggery, salt",
      kn: "ಬೇಯಿಸಿದ ಶೇಂಗಾ, ಏಣ್ಣೆ ಮೆಣಸು, ಬೆಳ್ಳುಳ್ಳಿ, ಕರಿಬೇವು, ಹುಳಿ, ಬೆಲ್ಲ, ಉಪ್ಪು",
      te: "వేయించిన వేరుశనగ, ఎండు మిరప, వెల్లులి, కరివేపాకు, చింతపండు, బెల్లం, ఉప్పు",
    },
    serving: {
      en: "Perfect with jowar roti, ragi mudde, or curd rice.",
      kn: "ಜೋಳ ರೊಟ್ಟಿ, ರಾಗಿ ಮುದ್ದೆ ಅಥವಾ ಮೊಸರು ಅನ್ನಕ್ಕೆ ಅತ್ಯುತ್ತಮ.",
      te: "జొన్న రొట్టె, రాగి ముద్ద లేదా పెరుగు అన్నంతో అద్భుతం.",
    },
  },
  {
    id: "agase-chutney",
    category: "chutney",
    weight: "150g",
    color: "#4A7C3F",
    emoji: "🌿",
    names: {
      en: "Agase Chutney Powder",
      kn: "ಅಗಸೆ ಚಟ್ನಿ ಪುಡಿ",
      te: "అవిసె చట్నీ పొడి",
    },
    descriptions: {
      en: "Flax seed chutney with omega-rich nutrition and bold regional flavor.",
      kn: "ಒಮೇಗಾ ಸಮೃದ್ಧ ಅಗಸೆ ಚಟ್ನಿ — ಆಳವಾದ ಪಾರಂಪರಿಕ ರುಚಿ.",
      te: "ఒమేగా సమృద్ధి అవిసె చట్నీ — బలమైన ప్రాంతీయ రుచి.",
    },
    ingredients: {
      en: "Roasted flax seeds, Byadagi chillies, curry leaves, garlic, tamarind, salt",
      kn: "ಬೇಯಿಸಿದ ಅಗಸೆ, ಬ್ಯಾಡಗಿ ಮೆಣಸು, ಕರಿಬೇವು, ಬೆಳ್ಳುಳ್ಳಿ, ಹುಳಿ, ಉಪ್ಪು",
      te: "వేయించిన అవిసె, బ్యాడగి మిరప, కరివేపాకు, వెల్లులి, చింతపండు, ఉప్పు",
    },
    serving: {
      en: "Mix with curd and serve with rice or roti.",
      kn: "ಮೊಸರಿನೊಂದಿಗೆ ಮಿಶ್ರಣ ಮಾಡಿ ಅನ್ನ ಅಥವಾ ರೊಟ್ಟಿಗೆ.",
      te: "పెరుగుతో కలపి అన్నం లేదా రొట్టెకు.",
    },
  },
  {
    id: "gurellu-chutney",
    category: "chutney",
    weight: "150g",
    color: "#6B4423",
    emoji: "🫘",
    names: {
      en: "Gurellu Chutney Powder",
      kn: "ಗುರೆಳ್ಳು ಚಟ್ನಿ ಪುಡಿ",
      te: "గురెళ్ళు చట్నీ పొడి",
    },
    descriptions: {
      en: "Niger seed chutney — a unique Karnataka specialty loved across the region.",
      kn: "ಗುರೆಳ್ಳು ಚಟ್ನಿ — ಪ್ರದೇಶದಾದ್ಯಂತ ಪ್ರೀತಿಸಲ್ಪಡುವ ಅನನ್ಯ ಕರ್ನಾಟಕ ವಿಶೇಷತೆ.",
      te: "గురెళ్ళు చట్నీ — ప్రాంతంలో ప్రేమించబడిన ప్రత్యేక కర్ణాటక విశేషత.",
    },
    ingredients: {
      en: "Niger seeds, red chillies, curry leaves, garlic, tamarind, jaggery, salt",
      kn: "ಗುರೆಳ್ಳು, ಏಣ್ಣೆ ಮೆಣಸು, ಕರಿಬೇವು, ಬೆಳ್ಳುಳ್ಳಿ, ಹುಳಿ, ಬೆಲ್ಲ, ಉಪ್ಪು",
      te: "గురెళ్ళు, ఎండు మిరప, కరివేపాకు, వెల్లులి, చింతపండు, బెల్లం, ఉప్పు",
    },
    serving: {
      en: "Mix with yogurt and enjoy with ragi rotti or rice bhakri.",
      kn: "ಮೊಸರಿನೊಂದಿಗೆ ಮಿಶ್ರಣ ಮಾಡಿ ರಾಗಿ ರೊಟ್ಟಿ ಅಥವಾ ಅನ್ನ ಭಕ್ರಿಗೆ.",
      te: "పెరుగుతో కలపి రాగి రొట్టె లేదా అన్న భక్రీతో.",
    },
  },
  {
    id: "natural-protein",
    category: "protein",
    weight: "500g",
    color: "#C0392B",
    emoji: "💪",
    names: {
      en: "Natural Protein Powder",
      kn: "ನೈಸರ್ಗಿಕ ಪ್ರೋಟೀನ್ ಪುಡಿ",
      te: "సహజ ప్రోటీన్ పౌడర్",
    },
    descriptions: {
      en: "Sprouted pulses and millet blend for daily protein and energy.",
      kn: "ದೈನಂದಿನ ಪ್ರೋಟೀನ್ ಮತ್ತು ಶಕ್ತಿಗಾಗಿ ಮೊಳಕೆ ಎಳೆದ ಬೇಳೆಕಾಳು ಮತ್ತು ಸಿರಿಧಾನ್ಯ ಮಿಶ್ರಣ.",
      te: "రోజువారీ ప్రోటీన్ మరియు శక్తి కోసం మొలకెత్తిన పప్పులు మరియు మిల్లెట్ మిశ్రమం.",
    },
    ingredients: {
      en: "Sprouted moong, chickpea, ragi, wheat, almonds, cardamom",
      kn: "ಮೊಳಕೆ ಎಳೆದ ಹೆಸರು, ಕಡಲೆ, ರಾಗಿ, ಗೋಧಿ, ಬಾದಾಮಿ, ಏಲಕ್ಕಿ",
      te: "మొలకెత్తిన పెసర, శనగ, రాగి, గోధుమ, బాదం, ఏలకులు",
    },
    serving: {
      en: "Mix with warm milk or water. Ideal for adults, postpartum, and elderly.",
      kn: "ಬೆಚ್ಚಗಿನ ಹಾಲು ಅಥವಾ ನೀರಿನೊಂದಿಗೆ ಮಿಶ್ರಣ. ವಯಸ್ಕರು, ಪ್ರಸವಾನಂತರ ಮತ್ತು ವೃದ್ಧರಿಗೆ.",
      te: "వెచ్చని పాలు లేదా నీటితో కలపండి. పెద్దలు, ప్రసవానంతర మరియు వృద్ధులకు.",
    },
  },
  {
    id: "sathu-maavu-laddu",
    category: "baby",
    weight: "250g (8 pcs)",
    color: "#E67E22",
    emoji: "🍡",
    names: {
      en: "Health Mix Laddu",
      kn: "ಸಾತು ಮಾವು ಉರಂಡೈ",
      te: "సత్తు మావు లడ్డూ",
    },
    descriptions: {
      en: "Nutritious sathu maavu laddus made with ghee and jaggery — for the whole family.",
      kn: "ನೆಯ್ಯಿ ಮತ್ತು ಬೆಲ್ಲದಿಂದ ತಯಾರಿಸಿದ ಪೋಷಕ ಸಾತು ಮಾವು ಉರಂಡೈ — ಇಡೀ ಕುಟುಂಬಕ್ಕೆ.",
      te: "నెయ్యి మరియు బెల్లంతో తయారు చేసిన పోషక సత్తు మావు లడ్డూలు — మొత్తం కుటుంబానికి.",
    },
    ingredients: {
      en: "Multigrain health mix, pure ghee, organic jaggery, dry ginger",
      kn: "ಬಹುಧಾನ್ಯ ಆರೋಗ್ಯ ಮಿಶ್ರಣ, ಶುದ್ಧ ನೆಯ್ಯಿ, ಸಾವಯವ ಬೆಲ್ಲ, ಸುಕ್ಕು",
      te: "బహుళ ధాన్య హెల్త్ మిక్స్, శుద్ధమైన నెయ్యి, సేంద్రీయ బెల్లం, సొంటి",
    },
    serving: {
      en: "Enjoy 1-2 laddus as a healthy snack or with evening tea.",
      kn: "ಆರೋಗ್ಯಕರ ತಿಂಡಿಯಾಗಿ ಅಥವಾ ಸಂಜೆ ಚಹಾದೊಂದಿಗೆ 1-2 ಉರಂಡೈ ಸವಿಯಿರಿ.",
      te: "ఆరోగ్యకరమైన స్నాక్‌గా లేదా సాయంత్రం టీతో 1-2 లడ్డూలు ఆస్వాదించండి.",
    },
  },
  {
    id: "baby-health-mix",
    category: "baby",
    weight: "500g",
    color: "#F39C12",
    emoji: "👶",
    names: {
      en: "Protein-Rich Baby Food",
      kn: "ಶಿಶು ಆರೋಗ್ಯ ಮಿಶ್ರಣ",
      te: "పిల్లల ఆరోగ్య మిశ్రమం",
    },
    descriptions: {
      en: "Gentle sprouted grain porridge mix for growing babies and toddlers.",
      kn: "ಬೆಳೆಯುತ್ತಿರುವ ಶಿಶುಗಳು ಮತ್ತು ಚಿಕ್ಕ ಮಕ್ಕಳಿಗೆ ಮೃದು ಮೊಳಕೆ ಎಳೆದ ಧಾನ್ಯ ಪಯಸ ಮಿಶ್ರಣ.",
      te: "పెరుగుతున్న శిశువులు మరియు చిన్న పిల్లల కోసం మృదువైన మొలకెత్తిన ధాన్య పయసం మిశ్రమం.",
    },
    ingredients: {
      en: "Sprouted ragi, rice, moong, almonds, cashews, cardamom (no sugar added)",
      kn: "ಮೊಳಕೆ ಎಳೆದ ರಾಗಿ, ಅಕ್ಕಿ, ಹೆಸರು, ಬಾದಾಮಿ, ಗೋಡಂಬಿ, ಏಲಕ್ಕಿ (ಸಕ್ಕರೆ ಸೇರಿಸಲಾಗಿಲ್ಲ)",
      te: "మొలకెత్తిన రాగి, బియ్యం, పెసర, బాదం, జీడిపప్పు, ఏలకులు (చక్కర జోడించలేదు)",
    },
    serving: {
      en: "Cook with water or milk into smooth porridge. Suitable from 6+ months.",
      kn: "ನೀರು ಅಥವಾ ಹಾಲಿನಲ್ಲಿ ಮೃದು ಪಯಸವಾಗಿ ಬೇಯಿಸಿ. 6+ ತಿಂಗಳು ಮಕ್ಕಳಿಗೆ ಸೂಕ್ತ.",
      te: "నీరు లేదా పాలలో మృదువైన పయసంగా వండండి. 6+ నెలల శిశువులకు అనువైనది.",
    },
  },
  {
    id: "mango-pickle",
    category: "pickles",
    weight: "500g",
    color: "#E74C3C",
    emoji: "🥭",
    names: {
      en: "Traditional Mango Pickle",
      kn: "ಸ್ಥಳೀಯ ಮಾವಿನಕಾಯಿ ಉಪ್ಪಿನಕಾಯಿ",
      te: "స్థానిక మామిడి ఊరగాయ",
    },
    descriptions: {
      en: "Sun-dried native mango pickle with traditional spices — no preservatives.",
      kn: "ಪಾರಂಪರಿಕ ಮಸಾಲೆಗಳೊಂದಿಗೆ ಬಿಸಿಲಿನಲ್ಲಿ ಒಣಗಿಸಿದ ಸ್ಥಳೀಯ ಮಾವಿನಕಾಯಿ ಉಪ್ಪಿನಕಾಯಿ — ಸಂರಕ್ಷಕರಹಿತ.",
      te: "సాంప్రదాయ మసాలా దినుసులతో ఎండబెట్టిన స్థానిక మామిడి ఊరగాయ — సంరక్షకాలు లేవు.",
    },
    ingredients: {
      en: "Raw mango, mustard, fenugreek, red chilli powder, turmeric, salt, sesame oil",
      kn: "ಕಾಯಿ ಮಾವಿನಕಾಯಿ, ಸಾಸಿವೆ, ಮೆಂತ್ಯ, ಏಣ್ಣೆ ಮೆಣಸಿನ ಪುಡಿ, ಅರಿಶಿನ, ಉಪ್ಪು, ಎಳ್ಳೆಣ್ಣೆ",
      te: "కాయ మామిడి, ఆవాలు, మెంతులు, కారం, పసుపు, ఉప్పు, నువ్వుల నూనె",
    },
    serving: {
      en: "Serve with hot rice, curd rice, or as a side with any meal.",
      kn: "ಬಿಸಿ ಅನ್ನ, ಮೊಸರು ಅನ್ನ ಅಥವಾ ಯಾವುದೇ ಊಟಕ್ಕೆ ಉಪ್ಪಿನಕಾಯಿಯಾಗಿ.",
      te: "వేడి అన్నం, పెరుగు అన్నం లేదా ఏ భోజనానికైనా ఊరగాయగా.",
    },
  },
];

export function getProductName(product: Product, locale: string): string {
  return product.names[locale as keyof typeof product.names] ?? product.names.en;
}

export function getProductField<T extends keyof Omit<Product, "id" | "category" | "weight" | "color" | "emoji">>(
  product: Product,
  field: T,
  locale: string
): string {
  const value = product[field];
  if (typeof value === "object" && value !== null && locale in value) {
    return (value as Record<string, string>)[locale] ?? (value as Record<string, string>).en;
  }
  return "";
}
