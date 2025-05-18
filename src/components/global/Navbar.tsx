import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Hamburger icons
import NoisyBg from "./NoisyBg";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("main");
  const { t, i18n } = useTranslation();

  const navItems = [
    { name: t("nav.home"), id: "main" },
    { name: t("nav.about"), id: "about" },
    { name: t("nav.pricing"), id: "pricing" },
    { name: t("nav.services"), id: "services" },
  ];

  // Languages array including French
  const languages = [
    {
      code: "en",
      label: "English",
      short: "EN",
      flag: "https://flagcdn.com/us.svg",
    },
    {
      code: "ar",
      label: "العربية",
      short: "AR",
      flag: "https://flagcdn.com/eg.svg",
    },
    {
      code: "fr",
      label: "Français",
      short: "FR",
      flag: "https://flagcdn.com/fr.svg",
    },
  ];

  // Get the currently selected language
  const [langOpen, setLangOpen] = useState(false);

  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setMenuOpen(false);
    setLangOpen(false);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 shadow-md w-full px-6 sm:px-8 py-4 flex justify-between items-center border-b border-gray-200 font-fira bg-white z-50">
      <NoisyBg />

      {/* Left: Logo */}
      <div className="flex items-center relative space-x-3">
        <div className="relative w-10 h-10">
          <div className="w-10 h-10 bg-yellow-400 rounded-full border-2 border-yellow-500" />
          <div className="absolute top-1.5 left-1.5 w-7 h-7 bg-white rounded-full" />
        </div>
        <span className="font-extrabold text-xl sm:text-2xl tracking-widest text-gray-800 uppercase font-share">
          {t("footer.brandName")}
        </span>
      </div>

      {/* Center: Nav links - desktop only */}
      <div className="hidden lg:flex space-x-6 text-sm text-gray-700 bg-[#d8d7d3] py-3 px-6 rounded absolute left-1/2 transform -translate-x-1/2 z-10">
        {navItems.map((item) => (
          <ScrollLink
            key={item.id}
            to={item.id}
            onClick={() => setActiveLink(item.id)}
            smooth={true}
            duration={600}
            offset={-80}
            className={`${
              activeLink === item.id &&
              "relative z-50 after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:bg-yellow-400 after:transition-all after:duration-300 after:w-full "
            } cursor-pointer relative z-50 after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full font-medium text-[14px] block uppercase`}
          >
            {item.name}
          </ScrollLink>
        ))}
      </div>
      {/* Right: Language Switcher & Hamburger */}

      <div className="flex items-center space-x-4 text-sm font-medium uppercase  z-20">
        <div className="flex items-center space-x-4 text-sm font-medium uppercase z-20">
          {/* Desktop Language Switcher as a Dropdown */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1 text-sm font-semibold shadow-inner hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
            >
              <img
                src={currentLang.flag}
                alt={currentLang.label}
                className="w-5 h-3 rounded-sm"
              />
              {currentLang.short}
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                {languages
                  .filter((lang) => lang.code !== currentLang.code)
                  .map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.label}
                        className="w-5 h-3 rounded-sm"
                      />
                      {lang.short}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
        {/* Hamburger button - shown on small screens only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl p-1 rounded-md hover:bg-gray-100 transition relative"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 lg:hidden z-40
    overflow-hidden transition-all duration-400 ease-in-out
    ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col space-y-4 py-4 px-6 text-center">
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              onClick={() => {
                setMenuOpen(false);
                setActiveLink(item.id);
              }}
              to={item.id}
              smooth={true}
              duration={600}
              offset={-80} // if you have a sticky header
              className={`${
                activeLink === item.id && "border-2 border-yellow-400 font-bold"
              } cursor-pointer relative z-50 text-[14px] block uppercase border-2 border-gray-200 p-2`}
            >
              {item.name}
            </ScrollLink>
          ))}

          {/* <div className="mt-4 flex flex-col space-y-2">
            <a
              href="#"
              className="text-gray-700 hover:text-black flex justify-center items-center space-x-1"
              onClick={() => setMenuOpen(false)}
            >
              <IoMdArrowDropright />
              <span>Login</span>
              <IoMdArrowDropleft />
            </a>
            <a
              href="#"
              className="bg-[#2d2b2c] border-b-8 border-yellow-400 text-white px-8 py-2 rounded-md opacity-90 flex justify-center items-center"
              onClick={() => setMenuOpen(false)}
            >
              <IoMdArrowDropright />
              <span>Sign Up</span>
            </a>
          </div> */}

          {/* Mobile Language Switcher */}
          <div className="flex justify-center space-x-2 bg-gray-100 rounded-full py-1 px-2 mx-auto shadow-inner w-fit">
            <button
              onClick={() => {
                i18n.changeLanguage("en");
                setMenuOpen(false);
              }}
              className={`flex items-center gap-2 px-4 py-1 rounded-full text-sm font-semibold transition-colors duration-300 ${
                i18n.language === "en"
                  ? "bg-yellow-400 text-white shadow-md"
                  : "text-gray-700 hover:text-black hover:bg-gray-200"
              }`}
            >
              <img
                src="https://flagcdn.com/us.svg"
                alt="English"
                className="w-5 h-3 rounded-sm"
              />
              EN
            </button>
            <button
              onClick={() => {
                i18n.changeLanguage("fr");
                setMenuOpen(false);
              }}
              className={`flex items-center gap-2 px-4 py-1 rounded-full text-sm font-semibold transition-colors duration-300 ${
                i18n.language === "fr"
                  ? "bg-yellow-400 text-white shadow-md"
                  : "text-gray-700 hover:text-black hover:bg-gray-200"
              }`}
            >
              <img
                src="https://flagcdn.com/fr.svg"
                alt="English"
                className="w-5 h-3 rounded-sm"
              />
              FR
            </button>
            <button
              onClick={() => {
                i18n.changeLanguage("ar");
                setMenuOpen(false);
              }}
              className={`flex items-center gap-2 px-4 py-1 rounded-full text-sm font-semibold transition-colors duration-300 ${
                i18n.language === "ar"
                  ? "bg-yellow-400 text-white shadow-md"
                  : "text-gray-700 hover:text-black hover:bg-gray-200"
              }`}
            >
              <img
                src="https://flagcdn.com/sa.svg"
                alt="Arabic"
                className="w-5 h-3 rounded-sm"
              />
              AR
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
