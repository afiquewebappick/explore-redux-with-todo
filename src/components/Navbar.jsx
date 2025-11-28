import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { IoAddCircleSharp } from 'react-icons/io5';
import { FaClipboardList } from 'react-icons/fa';
import { NavLink } from 'react-router';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem('selectedLang') || 'en'
  );

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('selectedLang', lang);

    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  useEffect(() => {
    if (i18n.language === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [i18n.language]);

  return (
    <section className="py-10 shadow bg-white/50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <ul className="flex gap-x-8">
          <li>
            <NavLink to="/" className="text-lg flex items-center gap-x-1">
              <FaHome /> {t('navbar.home')}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/todoList"
              className="text-lg flex items-center gap-x-1"
            >
              <FaClipboardList /> {t('navbar.taskList')}
            </NavLink>
          </li>

          <li>
            <NavLink to="/add" className="text-lg flex items-center gap-x-1">
              <IoAddCircleSharp /> {t('navbar.addTask')}
            </NavLink>
          </li>

          <li>
            <NavLink to="/test" className="text-lg flex items-center gap-x-1">
              Language test
            </NavLink>
          </li>
        </ul>

        <div className="w-48">
          <Select value={selectedLang} onValueChange={handleLanguageChange}>
            <SelectTrigger>
              <SelectValue placeholder={t('languageSelector.placeholder')} />
            </SelectTrigger>

            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  <span className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    {lang.name}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
