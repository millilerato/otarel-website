import { motion } from "framer-motion";

export default function Logo({ size = 40 }) {
  return (
    <motion.div
      style={{ width: size, height: size }}
      whileHover={{
        scale: 1.1,
        rotate: 10,
        filter: "drop-shadow(0px 0px 12px rgba(99,102,241,0.8))",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="cursor-pointer"
    >
      {/* Continuous slow rotation */}
      <motion.svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {/* Outer ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#grad1)"
          strokeWidth="4"
        />

        {/* Grid system */}
        <path
          d="M30 35 H70 M30 50 H70 M30 65 H70"
          stroke="url(#grad2)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Center line */}
        <path
          d="M50 25 V75"
          stroke="url(#grad1)"
          strokeWidth="3"
          opacity="0.7"
        />

        {/* Center node */}
        <circle cx="50" cy="50" r="6" fill="url(#grad2)" />

        {/* Gradients */}
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>

          <linearGradient id="grad2" x1="100" y1="0" x2="0" y2="100">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
      </motion.svg>
    </motion.div>
  );
}