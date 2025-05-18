import { Outlet } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Layout = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
