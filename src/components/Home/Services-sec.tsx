const ServicesSec = () => {
  return (
    <section className="py-20 bg-[#f5f5f4] text-gray-900" id="services">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-yellow-400 relative text-black text-sm sm:text-base font-bold px-4 py-1 rounded-full shadow-md w-fit mx-auto mb-4">
            Our Services
          </div>

          <h2 className="text-4xl font-black uppercase tracking-wide">
            Empowering Innovation
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-fira max-w-2xl mx-auto">
            Empowering developers and teams with high-performance
            infrastructure, scalable tools, and intelligent AI-powered services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition hover:z-10">
            <div className="mb-4 relative">
              <img
                src="/aboutimg5.jpg"
                alt="Deploy"
                className="w-full aspect-auto"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Deployments</h3>
            <p className="text-gray-600 font-fira">
              Launch full-stack apps or AI models in seconds across global
              infrastructure.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition hover:z-10">
            <div className="mb-4 relative">
              <img
                src="/aboutimg6.jpg"
                alt="AI"
                className="w-full aspect-auto"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">AI Agent Hosting</h3>
            <p className="text-gray-600 font-fira">
              Seamlessly host and scale AI agents with secure inference and
              fine-tuning.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition hover:z-10">
            <div className="mb-4 relative">
              <img
                src="/aboutimg3.jpg"
                alt="API"
                className="w-full aspect-auto"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Flexible APIs</h3>
            <p className="text-gray-600 font-fira">
              Powerful APIs and developer tools for automation, integration, and
              scaling.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition hover:z-10">
            <div className="mb-4 relative">
              <img
                loading="lazy"
                src="/service3.jpg"
                alt="API"
                className="w-full aspect-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Flexible APIs</h3>
            <p className="text-gray-600 font-fira">
              Powerful APIs and developer tools for automation, integration, and
              scaling.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition hover:z-10">
            <div className="mb-4 relative">
              <img
                src="/service2.jpg"
                alt="API"
                className="w-full aspect-auto"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Flexible APIs</h3>
            <p className="text-gray-600 font-fira">
              Powerful APIs and developer tools for automation, integration, and
              scaling.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition hover:z-10">
            <div className="mb-4 relative">
              <img
                src="/service1.jpg"
                alt="API"
                className="w-full aspect-auto"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Flexible APIs</h3>
            <p className="text-gray-600 font-fira">
              Powerful APIs and developer tools for automation, integration, and
              scaling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSec;
