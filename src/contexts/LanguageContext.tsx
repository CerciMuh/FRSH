
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations dictionary
export const translations: Record<string, Record<Language, string>> = {
  // Navbar items
  "about": {
    en: "About",
    ar: "من نحن"
  },
  "lifestyle": {
    en: "Lifestyle",
    ar: "نمط الحياة"
  },
  "vision": {
    en: "Vision",
    ar: "رؤيتنا"
  },
  "subscribe": {
    en: "Subscribe",
    ar: "اشترك"
  },
  "faq": {
    en: "FAQ",
    ar: "الأسئلة الشائعة"
  },
  "legal": {
    en: "Legal",
    ar: "قانوني"
  },
  "reach_us": {
    en: "Reach Us",
    ar: "تواصل معنا"
  },
  
  // Hero section
  "eat_smart": {
    en: "Eat Smart.",
    ar: "طعام ذكي."
  },
  "live_fresh": {
    en: "Live Fresh.",
    ar: "حياة منعشة."
  },
  "healthy_food": {
    en: "Healthy Food.",
    ar: "طعام صحي."
  },
  "happy_mood": {
    en: "Happy Mood.",
    ar: "مزاج سعيد."
  },
  "fresh_meals": {
    en: "Fresh Meals.",
    ar: "وجبات طازجة."
  },
  "fresher_you": {
    en: "Fresher You.",
    ar: "أنت أكثر انتعاشًا."
  },
  "hero_description": {
    en: "Chef-crafted meals, delivered fresh to your door. Designed to keep you healthy, happy, and full of flavor.",
    ar: "وجبات من إعداد الطهاة، يتم توصيلها طازجة إلى باب منزلك. مصممة للحفاظ على صحتك وسعادتك ومليئة بالنكهة."
  },
  "subscribe_now": {
    en: "Subscribe Now",
    ar: "اشترك الآن"
  },
  "whatsapp_us": {
    en: "WhatsApp Us",
    ar: "راسلنا عبر واتساب"
  },
  
  // Footer
  "quick_links": {
    en: "Quick Links",
    ar: "روابط سريعة"
  },
  "about_us": {
    en: "About Us",
    ar: "من نحن"
  },
  "legal_info": {
    en: "Legal",
    ar: "معلومات قانونية"
  },
  "company_registration": {
    en: "Company Registration",
    ar: "تسجيل الشركة"
  },
  "vat_information": {
    en: "VAT Information",
    ar: "معلومات ضريبة القيمة المضافة"
  },
  "terms_of_service": {
    en: "Terms of Service",
    ar: "شروط الخدمة"
  },
  "privacy_policy": {
    en: "Privacy Policy",
    ar: "سياسة الخصوصية"
  },
  "rights_reserved": {
    en: "All rights reserved.",
    ar: "جميع الحقوق محفوظة."
  },
  
  // Subscribe Section
  "subscribe_to_frsh": {
    en: "Subscribe to FRSH",
    ar: "اشترك في FRSH"
  },
  "subscribe_description": {
    en: "Start your healthy meal plan subscription today. Choose your package, complete your information, and enjoy fresh meals delivered to your door.",
    ar: "ابدأ اشتراكك في خطة الوجبات الصحية اليوم. اختر باقتك، أكمل معلوماتك، واستمتع بالوجبات الطازجة الموصلة إلى باب منزلك."
  },
  "how_it_works": {
    en: "How It Works",
    ar: "كيف يعمل"
  },
  "step_1": {
    en: "Enter the application, choose your package, complete your information, and pay.",
    ar: "أدخل التطبيق، اختر باقتك، أكمل معلوماتك، وادفع."
  },
  "step_2": {
    en: "Select your meals based on your dietary preferences and needs.",
    ar: "اختر وجباتك بناءً على تفضيلاتك واحتياجاتك الغذائية."
  },
  "step_3": {
    en: "Receive fresh, refrigerated meals delivered on the same day to your door.",
    ar: "استلم وجبات طازجة ومبردة يتم توصيلها في نفس اليوم إلى باب منزلك."
  },
  "step_4": {
    en: "Enjoy nutritious meals for up to 3 days when properly refrigerated.",
    ar: "استمتع بوجبات مغذية لمدة تصل إلى 3 أيام عند تبريدها بشكل صحيح."
  },
  "get_started": {
    en: "Get Started",
    ar: "ابدأ الآن"
  },
  "ready_to_start": {
    en: "Ready to start your healthy meal subscription? Click below to access our subscription portal.",
    ar: "هل أنت مستعد لبدء اشتراكك في الوجبات الصحية؟ انقر أدناه للوصول إلى بوابة الاشتراك."
  },
  "start_my_subscription": {
    en: "Start My Subscription",
    ar: "ابدأ اشتراكي"
  },
  "or_download_app": {
    en: "Or download our app:",
    ar: "أو قم بتنزيل تطبيقنا:"
  },
  "payment_methods": {
    en: "Payment methods we accept:",
    ar: "طرق الدفع التي نقبلها:"
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get saved language preference or default to English
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem("language") as Language;
    return savedLang === "ar" ? "ar" : "en";
  });

  // Update document direction and language attributes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("language", language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
