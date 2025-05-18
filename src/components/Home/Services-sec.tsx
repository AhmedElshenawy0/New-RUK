import { useTranslation } from "react-i18next";

const ServicesSec = () => {
  const { t, i18n } = useTranslation();
  const lang: any = i18n.language || "en";

  const services = t("services", { returnObjects: true });
  return (
    <section className="py-20 bg-[#f5f5f4] text-gray-900" id="services">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-yellow-400 relative text-black text-sm sm:text-base font-bold px-4 py-1 rounded-full shadow-md w-fit mx-auto mb-4">
            {t("servicesSectionTitle")}
          </div>

          <h2 className="text-4xl font-black uppercase tracking-wide">
            {t("servicesSectionHeading")}
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-fira max-w-2xl mx-auto">
            {t("servicesSectionDescription")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service: any, i: number) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition hover:z-10"
            >
              <div className="mb-4 relative">
                <img
                  src={service.img}
                  alt={service.alt}
                  className="w-full aspect-auto"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 font-fira">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSec;
