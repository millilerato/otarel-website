import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageContainer from "../components/PageContainer";
import Hero from "../components/Hero";

export default function Services() {
  const navigate = useNavigate(); 
  const [active, setActive] = useState("web");

  const services = {
    web: {
      title: "Web Development",
      subtitle: "Fast, modern websites and web apps built for performance",
      points: [
        "Responsive UI design",
        "React / Next.js development",
        "Landing pages that convert",
        "API integration & deployment",
      ],
      visual: "🌐",
      glow: "rgba(168,85,247,0.25)",
    },

    software: {
      title: "Software Solutions",
      subtitle: "Custom systems designed for real business problems",
      points: [
        "Admin dashboards",
        "Automation systems",
        "CRM / ERP tools",
        "Business workflows",
      ],
      visual: "⚙️",
      glow: "rgba(59,130,246,0.25)",
    },

    it: {
      title: "IT Support",
      subtitle: "Reliable remote support and system maintenance",
      points: [
        "Device setup & fixes",
        "Remote troubleshooting",
        "System optimization",
        "Security checks",
      ],
      visual: "🛠️",
      glow: "rgba(34,197,94,0.20)",
    },

    hosting: {
      title: "Hosting & Domains",
      subtitle: "We handle deployment and infrastructure setup",
      points: [
        "Domain configuration",
        "Hosting setup",
        "DNS management",
        "Website deployment",
      ],
      visual: "🚀",
      glow: "rgba(249,115,22,0.20)",
    },
  };

  const current = services[active];

  return (
    <div className="min-h-screen bg-[#05070d] text-white relative overflow-hidden flex">

      {/* 🔥 DYNAMIC GLOW (THIS is the visible change) */}
      <motion.div
        key={active}
        className="absolute w-[700px] h-[700px] blur-[160px] rounded-full top-[-200px] left-[-200px]"
        animate={{
          backgroundColor: current.glow,
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* LEFT NAV */}
      <div className="w-[260px] p-10 z-10 border-r border-white/10">
        <h2 className="text-white/40 text-sm mb-8 tracking-widest">
          SERVICES
        </h2>

        <div className="space-y-2">
          {Object.keys(services).map((key) => {
            const isActive = active === key;

            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`
                  w-full text-left px-4 py-3 rounded-xl transition
                  ${
                    isActive
                      ? "bg-white/15 text-white border border-white/20 scale-[1.02]"
                      : "text-white/40 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {services[key].title}
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN SPOTLIGHT */}
      <div className="flex-1 flex items-center justify-center relative z-10">

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
            className="
              w-[650px]
              p-12
              rounded-3xl
              bg-white/5
              border border-white/10
              backdrop-blur-2xl
              shadow-[0_30px_120px_rgba(0,0,0,0.6)]
              relative
              overflow-hidden
            "
          >

            {/* inner glow */}
            <div
              className="absolute inset-0 opacity-30 blur-2xl"
              style={{ background: current.glow }}
            />

            {/* content */}
            <div className="relative z-10">

              <div className="text-6xl mb-6">
                {current.visual}
              </div>

              <h1 className="text-4xl font-semibold">
                {current.title}
              </h1>

              <p className="text-white/60 mt-3 text-lg">
                {current.subtitle}
              </p>

              <div className="mt-8 space-y-3">
                {current.points.map((p, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white/70"
                  >
                    {p}
                  </div>
                ))}
              </div>

              <button
  onClick={() => navigate("/contact")}
  className="
    mt-10
    px-6 py-3
    rounded-xl
    bg-white/10
    border border-white/20
    hover:bg-white/15
    transition
  "
>
  Request this service
</button>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}