import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";

import { lazy, Suspense, useState } from "react";
import { useTranslation } from "react-i18next";

const LazyTypewriter = lazy(() => import("typewriter-effect"));

const MainSection = () => {
  const technologies = [
    { name: "React", logo: "/react-original-wordmark.svg" },
    { name: "Next.js", logo: "/nextjs.svg" },
    { name: "Node.js", logo: "/node-js.svg" },
    { name: "Express", logo: "/express.svg" },
    { name: "MongoDB", logo: "/mongodb-original-wordmark.svg" },
    { name: "PostgreSQL", logo: "/postgresql-plain-wordmark.svg" },
    { name: "jenkins", logo: "/jenkins.svg" },
    { name: "Nest", logo: "/nestjs-plain-wordmark.svg" },
  ];

  const loopedItems = [...technologies, ...technologies];

  const { t, i18n } = useTranslation();
  const [activeId, setActiveId] = useState("main");
  return (
    <div className="relative z-10" id="main">
      <main className="text-black">
        <section className="flex flex-col items-center justify-center text-center px-8 py-20">
          <motion.div
            className="text-4xl font-black uppercase mb-6 max-w-[500px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="">
              High-performance Infrastructure for
              <span className="drop-shadow-md">
                <Suspense fallback={<span>Loading...</span>}>
                  <LazyTypewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("full stack apps.")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("fine tuning.")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("ai agents.")
                        .pauseFor(2000)
                        .start();
                    }}
                    options={{ loop: true, delay: 100 }}
                  />
                </Suspense>
              </span>
            </div>
          </motion.div>

          {/* Desc */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-[500px] font-medium font-fira"
          >
            {t("main.description")}
          </motion.div>

          {/* Btns */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0 mt-8 text-sm font-medium font-fira uppercase">
            <a
              href="#"
              className="bg-[#2d2b2c] border-b-8 border-yellow-400 text-white px-4 pb-1 pt-2 font-semibold rounded-md opacity-90 transition lg:px-8 flex items-center"
            >
              <IoMdArrowDropright />
              {t("main.getStarted")}
            </a>
            <a
              href="#"
              className="arrow-hover text-gray-700 hover:text-black transition flex items-center"
            >
              <span className="right">
                <IoMdArrowDropright />
              </span>
              {t("main.talkToExpert")}
              <span className="left">
                <IoMdArrowDropleft />
              </span>
            </a>
          </div>
          {/* <p className="mt-6">Trusted by the most ambitious teams</p> */}

          {/* curosel */}
          <div className="overflow-hidden py-6 mt-10 border border-black">
            <div className="animate-scroll gap-12">
              {loopedItems.map((tech, i) => (
                <div
                  key={i}
                  className="inline-flex flex-col items-center mx-6 min-w-max"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 mb-1"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainSection;
