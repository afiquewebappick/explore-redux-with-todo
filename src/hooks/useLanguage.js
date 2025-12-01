import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('selectedLang', lang);
  };

  const getCurrentLanguageName = () => {
    const languages = {
      en: 'English',
      bn: 'বাংলা',
      hi: 'हिंदी',
      ar: 'العربية',
      fr: 'Français',
    };
    return languages[i18n.language] || 'English';
  };

  const isRTL = () => {
    return i18n.language === 'ar';
  };

  // Format date based on current language
  const formatDate = (date, options = {}) => {
    const defaultOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      ...options,
    };

    const localeMap = {
      en: 'en-US',
      bn: 'bn-BD',
      hi: 'hi-IN',
      ar: 'ar-SA',
      fr: 'fr-FR',
    };

    return new Date(date).toLocaleDateString(
      localeMap[i18n.language] || 'en-US',
      defaultOptions,
    );
  };

  // Format number based on current language
  const formatNumber = (number, options = {}) => {
    const localeMap = {
      en: 'en-US',
      bn: 'bn-BD',
      hi: 'hi-IN',
      ar: 'ar-SA',
      fr: 'fr-FR',
    };

    return new Intl.NumberFormat(
      localeMap[i18n.language] || 'en-US',
      options,
    ).format(number);
  };

  // Format currency based on current language
  const formatCurrency = (amount, currency = 'USD') => {
    const currencyMap = {
      en: 'USD',
      bn: 'BDT',
      hi: 'INR',
      ar: 'SAR',
      fr: 'EUR',
    };

    const localeMap = {
      en: 'en-US',
      bn: 'bn-BD',
      hi: 'hi-IN',
      ar: 'ar-SA',
      fr: 'fr-FR',
    };

    return new Intl.NumberFormat(localeMap[i18n.language] || 'en-US', {
      style: 'currency',
      currency: currency || currencyMap[i18n.language] || 'USD',
    }).format(amount);
  };

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    getCurrentLanguageName,
    isRTL,
    t,
    formatDate,
    formatNumber,
    formatCurrency,
  };
};
