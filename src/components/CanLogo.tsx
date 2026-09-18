export default function CanLogo({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="热点罐头 Logo"
    >
      {/* 罐身 */}
      <rect x="18" y="26" width="60" height="58" rx="10" fill="#d63c2f" />
      <rect x="18" y="26" width="60" height="58" rx="10" fill="url(#canShade)" />
      {/* 标签带 */}
      <rect x="18" y="52" width="60" height="18" fill="#fdf3e3" />
      <text
        x="48"
        y="65.5"
        textAnchor="middle"
        fontSize="12"
        fontWeight="900"
        fill="#b03a2e"
        fontFamily="'Songti SC','Noto Serif SC',serif"
        letterSpacing="2"
      >
        热点
      </text>
      {/* 罐盖 */}
      <ellipse cx="48" cy="26" rx="30" ry="8" fill="#d9d4c7" />
      <ellipse cx="48" cy="24.5" rx="27" ry="6.5" fill="#efeadf" />
      {/* 拉环 */}
      <ellipse cx="48" cy="23" rx="7" ry="3.2" fill="none" stroke="#a8a296" strokeWidth="2.4" />
      {/* 眼睛 */}
      <circle cx="36" cy="42" r="3.4" fill="#2b2320" />
      <circle cx="60" cy="42" r="3.4" fill="#2b2320" />
      <circle cx="37.2" cy="40.8" r="1.1" fill="#fff" />
      <circle cx="61.2" cy="40.8" r="1.1" fill="#fff" />
      {/* 腮红 */}
      <ellipse cx="30.5" cy="47.5" rx="3.6" ry="2.2" fill="#f1948a" opacity="0.85" />
      <ellipse cx="65.5" cy="47.5" rx="3.6" ry="2.2" fill="#f1948a" opacity="0.85" />
      {/* 微笑 */}
      <path d="M43 47.5 Q48 52 53 47.5" stroke="#2b2320" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      {/* 热气 */}
      <path d="M38 14 q3 -4 0 -8" stroke="#b8b2a4" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M48 13 q3 -4 0 -8" stroke="#b8b2a4" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M58 14 q3 -4 0 -8" stroke="#b8b2a4" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      {/* 高光 */}
      <rect x="24" y="32" width="4" height="16" rx="2" fill="#fff" opacity="0.35" />
      <defs>
        <linearGradient id="canShade" x1="18" y1="26" x2="78" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#000" stopOpacity="0.12" />
          <stop offset="0.3" stopColor="#000" stopOpacity="0" />
          <stop offset="0.75" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.18" />
        </linearGradient>
      </defs>
    </svg>
  )
}
