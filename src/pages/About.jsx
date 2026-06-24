import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import Hero from "../components/Hero";

export default function About() {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  const items = [
    {
      title: "Clean Architecture",
      short: "Built with scalable and maintainable code structure.",
      long: "We structure every system with scalability in mind using modular architecture, reusable components, and clean separation of logic. This ensures your platform can grow without breaking or becoming hard to manage.",
    },
    {
      title: "Automation Focused",
      short: "We reduce manual work through smart systems.",
      long: "We design automation workflows that remove repetitive tasks from your business. From data processing to system triggers, everything is optimized to save time and reduce human error.",
    },
    {
      title: "Business Driven",
      short: "Every solution is designed for real business growth.",
      long: "We don’t build just for looks — every system is designed to improve efficiency, increase revenue, or simplify operations. Technology is always aligned with business goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#05070d] text-white flex items-center justify-center px-6">

      <div className="max-w-5xl w-full text-center">

        {/* TITLE */}
        <h1 className="text-5xl font-bold">
          About Otarel Solutions
        </h1>

        <p className="mt-6 text-white/60 text-lg max-w-3xl mx-auto">
          We design and build modern digital systems, automation tools, and scalable platforms
          that help businesses operate faster and smarter.
        </p>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {items.map((item, i) => {
            const isOpen = active === i;

            return (
              <motion.div
                key={item.title}
                layout
                onClick={() => setActive(isOpen ? null : i)}
                className="
                  cursor-pointer
                  p-6
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  backdrop-blur-2xl
                  text-left
                  hover:bg-white/10
                  transition
                "
              >

                {/* TITLE */}
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                {/* SHORT TEXT */}
                <p className="text-white/60 text-sm mt-2">
                  {item.short}
                </p>

                {/* EXPANDED CONTENT */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/70 text-sm mt-4 leading-relaxed"
                    >
                      {item.long}
                    </motion.p>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>
{/* CTA BUTTON */}
<div className="mt-24 text-center">

  <p className="text-white/50 mb-4">
    Want to find out more about our services?
  </p>

  <button
    onClick={() => navigate("/services")}
    className="
      px-10 py-4
      rounded-xl
      bg-purple-500/20
      border border-purple-400/30
      text-purple-200
      hover:bg-purple-500/30
      hover:border-purple-300/40
      transition
      font-medium
      backdrop-blur-xl
    "
  >
    Explore Our Services
  </button>

</div>
      </div>
    </div>
  );
}