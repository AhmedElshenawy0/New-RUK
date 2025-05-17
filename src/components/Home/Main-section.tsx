import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";

import { lazy } from "react";

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
  return (
    <div className="relative z-10" id="main">
      <main className="text-black">
        <section className="flex flex-col items-center justify-center text-center px-8 py-20">
          <motion.p
            className="text-4xl font-black uppercase mb-6 max-w-[500px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="">
              High-performance Infrastructure for
              <span className="drop-shadow-md">
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
              </span>
            </div>
          </motion.p>

          {/* Desc */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-[500px] font-medium font-fira"
          >
            Deploy intensive applications across GPUs, CPUs, and Accelerators in
            minutes - scale in 50+ locations
          </motion.div>

          {/* Btns */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0 mt-8 text-sm font-medium font-fira uppercase">
            <a
              href="#"
              className="bg-[#2d2b2c] border-b-8 border-yellow-400 text-white px-4 pb-1 pt-2 font-semibold rounded-md opacity-90 transition lg:px-8 flex items-center"
            >
              <IoMdArrowDropright />
              get started
            </a>
            <a
              href="#"
              className="arrow-hover text-gray-700 hover:text-black transition flex items-center"
            >
              <span className="right">
                <IoMdArrowDropright />
              </span>
              talk to an expert
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
                    className="w-20 h-20 mb-1"
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
