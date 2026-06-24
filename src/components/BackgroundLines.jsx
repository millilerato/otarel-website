import { motion } from "framer-motion";

export default function BackgroundLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>

        {[...Array(8)].map((_, i) => (
          <motion.path
            key={i}
            d={`M-200 ${100 + i * 120} C 300 ${50 + i * 80}, 700 ${180 + i * 100}, 1600 ${120 + i * 140}`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
