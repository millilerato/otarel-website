export default function Logo({ small = false }) {
  const size = small ? 'h-9 w-9' : 'h-11 w-11 lg:h-[52px] lg:w-[52px]'
  return (
    <span className="flex items-center gap-3">
      <svg viewBox="0 0 48 48" className={size} aria-hidden="true">
        <defs>
          <linearGradient id="otarel-ring" x1="0.15" y1="0.9" x2="0.85" y2="0.1">
            <stop offset="0" stopColor="#0f55f5" />
            <stop offset="0.6" stopColor="#2f74ff" />
            <stop offset="1" stopColor="#8fb6ff" />
          </linearGradient>
          <linearGradient id="otarel-ring-hi" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* soft track, visible through the gap at the top right */}
        <circle cx="24" cy="24" r="15.5" fill="none" stroke="#2f74ff" strokeOpacity="0.18" strokeWidth="12" />
        {/* main ring */}
        <circle
          cx="24"
          cy="24"
          r="15.5"
          fill="none"
          stroke="url(#otarel-ring)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray="84 13.4"
          transform="rotate(-38 24 24)"
        />
        {/* inner highlight for the glossy look */}
        <circle cx="24" cy="24" r="12" fill="none" stroke="url(#otarel-ring-hi)" strokeWidth="2.5" />
      </svg>
      <span className={`font-display font-bold tracking-[-0.02em] text-ink ${small ? 'text-xl' : 'text-[22px] lg:text-[26px]'}`}>
        Otarel <span className="font-semibold text-brand">Solutions</span>
      </span>
    </span>
  )
}
