import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const lang: any = i18n.language || "en";

  return (
    <section className="bg-[#f5f5f4] py-20 px-8 text-gray-900" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text Content */}
        <div>
          {/* Yellow Badge Heading */}
          <h2 className="bg-yellow-400 relative text-black text-sm sm:text-base font-bold px-4 py-1 rounded-full shadow-md w-fit mb-4">
            {t("aboutSection.badgeHeading")}
          </h2>

          {/* Paragraphs */}
          <p className="text-lg leading-relaxed font-fira text-gray-700 mb-6">
            {t("aboutSection.paragraph1")}
          </p>
          <p className="text-lg leading-relaxed font-fira text-gray-700">
            {t("aboutSection.paragraph2")}
          </p>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center items-center relative">
          <img
            src="/aboutimg6.jpg"
            alt="About Rukaz"
            loading="lazy"
            className="max-w-lg w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
