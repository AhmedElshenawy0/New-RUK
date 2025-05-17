const pricingPlans = [
  {
    name: "Starter",
    price: "$9",
    priceSuffix: "/mo",
    description: "Perfect for personal projects or MVPs.",
    features: [
      "1 Project",
      "Basic Compute",
      "5 GB Storage",
      "Community Support",
    ],
    button: {
      text: "Get Started",
      href: "#",
      classes:
        "relative inline-block bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-transparent hover:text-black hover:border transition",
    },
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    priceSuffix: "/mo",
    description: "For growing teams and scaling products.",
    features: [
      "Unlimited Projects",
      "Advanced Compute",
      "100 GB Storage",
      "Priority Support",
    ],
    button: {
      text: "Upgrade Now",
      href: "#",
      classes:
        "inline-block bg-yellow-400 text-black px-6 py-2 rounded-md font-bold hover:bg-yellow-500 transition",
    },
    highlight: true,
    badgeText: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceSuffix: "",
    description: "Custom solutions for large-scale needs.",
    features: [
      "Custom Deployments",
      "High Performance GPU/TPU",
      "Unlimited Storage",
      "Dedicated Support",
    ],
    button: {
      text: "Contact Sales",
      href: "#",
      classes:
        "relative inline-block border border-black text-black px-6 py-2 rounded-md font-semibold hover:bg-black hover:text-white transition",
    },
    highlight: false,
  },
];

const PricingSec = () => {
  return (
    <section className="bg-[#ffffff] text-gray-900 py-20 px-8 " id="pricing">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="inline-block bg-yellow-400 relative text-black px-4 py-1 rounded-full font-extrabold uppercase tracking-wide mb-4">
          Pricing Plans
        </h2>
        <p className="text-lg font-medium text-gray-600 max-w-2xl mx-auto">
          Choose a plan that fits your scale — whether you're building your
          first app or deploying globally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, i) => (
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
              {plan.features.map((feature, idx) => (
                <li key={idx}>✓ {feature}</li>
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
