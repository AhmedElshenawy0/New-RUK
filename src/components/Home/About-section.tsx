const AboutSection = () => {
  return (
    <section className="bg-[#f5f5f4] py-20 px-8 text-gray-900" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text Content */}
        <div>
          {/* Yellow Badge Heading */}
          <h2 className="bg-yellow-400 relative text-black text-sm sm:text-base font-bold px-4 py-1 rounded-full shadow-md w-fit mb-4">
            About Rukaz
          </h2>

          {/* Paragraphs */}
          <p className="text-lg leading-relaxed font-fira text-gray-700 mb-6">
            Rukaz is your trusted infrastructure partner for building and
            scaling high-performance full stack applications. Whether you're
            deploying AI-powered agents, fine-tuned models, or real-time data
            pipelines, Rukaz offers the power, reliability, and speed to bring
            your vision to life.
          </p>
          <p className="text-lg leading-relaxed font-fira text-gray-700">
            Our mission is to make cutting-edge tech accessible and
            developer-friendly. Join teams around the world who choose Rukaz to
            deploy ambitious ideas faster.
          </p>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center items-center relative">
          <img
            src="/aboutimg6.jpg"
            alt="About Rukaz"
            className="max-w-lg w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
