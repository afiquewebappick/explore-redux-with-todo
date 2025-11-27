import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "bn", name: "বাংলা", flag: "🇧🇩" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("selectedLang") || "en"
  );

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    localStorage.setItem("selectedLang", lang);
  };

  return (
    <section className="py-10 shadow bg-white/50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">

        <ul className="flex gap-x-8">
          <li>
            <NavLink to="/" className="text-lg flex items-center gap-x-1">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" className="text-lg flex items-center gap-x-1">
              <IoAddCircleSharp /> Add list
            </NavLink>
          </li>
        </ul>

        <div className="w-48">
          <Select value={selectedLang} onValueChange={handleLanguageChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
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
