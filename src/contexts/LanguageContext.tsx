import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { translationKeys } from '@/data/translations';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

interface ContentTranslation {
  content_key: string;
  title: string | null;
  description: string | null;
}

interface LanguageContextType {
  currentLanguage: Language;
  setCurrentLanguage: (language: Language) => void;
  getTranslation: (key: string) => string;
  isLoading: boolean;
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "sn", name: "Shona", nativeName: "ChiShona", flag: "🇿🇼" },
  { code: "nd", name: "Ndebele", nativeName: "IsiNdebele", flag: "🇿🇼" },
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages.find(lang => lang.code === 'sn') || languages[0]);
  const [translations, setTranslations] = useState<Record<string, ContentTranslation>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTranslations();
  }, [currentLanguage]);

  const fetchTranslations = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('content_translations')
        .select('content_key, title, description')
        .eq('language_code', currentLanguage.code);

      if (error) {
        console.error('Error fetching translations:', error);
        return;
      }

      const translationsMap: Record<string, ContentTranslation> = {};
      data?.forEach((translation) => {
        translationsMap[translation.content_key] = translation;
      });

      setTranslations(translationsMap);
    } catch (error) {
      console.error('Error fetching translations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getTranslation = (key: string): string => {
    const translation = translations[key];
    if (translation?.title || translation?.description) {
      return translation?.title || translation?.description || key;
    }
    
    // Fallback to local translations
    const fallback = translationKeys.find((t: any) => t.key === key);
    if (fallback) {
      return fallback[currentLanguage.code] || fallback.en || key;
    }
    
    return key;
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setCurrentLanguage,
        getTranslation,
        isLoading,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export { languages };