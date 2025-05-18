import { useTranslation } from "react-i18next";

const PricingSec = () => {
  const { t, i18n } = useTranslation();
  const lang: any = i18n.language || "en";

  const pricingPlans = t("pricingSection.plans", { returnObjects: true });

  return (
    <section className="bg-[#ffffff] text-gray-900 py-20 px-8 " id="pricing">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="inline-block bg-yellow-400 relative text-black px-4 py-1 rounded-full font-extrabold uppercase tracking-wide mb-4">
          {t("pricingSection.heading")}
        </h2>
        <p className="text-lg font-medium text-gray-600 max-w-2xl mx-auto">
          {t("pricingSection.subheading")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan: any, i: number) => (
          <div
            key={i}
            className={`border rounded-2xl bg-white p-8 shadow transition ${
              plan.highlight
                ? "border-yellow-400 shadow-lg scale-[1.03] relative z-10"
                : "border-gray-300 hover:shadow-lg"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                {plan.badgeText}
              </div>
            )}

            <h3 className="text-xl font-bold uppercase mb-4">{plan.name}</h3>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <div className="text-4xl font-extrabold mb-6">
              {plan.price}
              <span className="text-base font-medium text-gray-500">
                {plan.priceSuffix}
              </span>
            </div>
            <ul className="text-sm space-y-2 text-left mb-6">
              {plan.features.map((feature: string, idx: number) => (
                <li key={idx}>
                  {" "}
                  <span aria-hidden="true">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a href={plan.button.href} className={plan.button.classes}>
              {plan.button.text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSec;
