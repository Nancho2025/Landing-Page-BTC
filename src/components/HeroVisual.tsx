import cleanBitcoinImg from '../assets/images/bitcoin_hero_clean_1790774251987.jpg';
import { HERO_CANDLES } from './heroCandlesData';

export default function HeroVisual() {
  const priceGrid = [
    { label: '120,000.0', y: 119 },
    { label: '110,000.0', y: 188 },
    { label: '100,000.0', y: 257 },
    { label: '80,000.0', y: 394 },
    { label: '70,000.0', y: 463 },
    { label: '60,000.0', y: 531 },
    { label: '40,000.0', y: 669 },
    { label: '30,000.0', y: 737 },
    { label: '20,000.0', y: 806 },
    { label: '10,000.0', y: 875 },
  ];

  const timeGrid = [
    { label: '2022', x: 20, isYear: true },
    { label: 'Mar', x: 80 },
    { label: 'May', x: 140 },
    { label: 'Jul', x: 200 },
    { label: 'Sep', x: 260 },
    { label: 'Nov', x: 320 },
    { label: '2023', x: 380, isYear: true },
    { label: 'Mar', x: 440 },
    { label: 'May', x: 500 },
    { label: 'Jul', x: 560 },
    { label: 'Sep', x: 620 },
    { label: 'Nov', x: 680 },
    { label: '2024', x: 745, isYear: true },
    { label: 'Mar', x: 805 },
    { label: 'May', x: 865 },
    { label: 'Jul', x: 925 },
    { label: 'Sep', x: 985 },
    { label: 'Nov', x: 1045 },
    { label: '2025', x: 1110, isYear: true },
    { label: 'Mar', x: 1170 },
    { label: 'May', x: 1230 },
    { label: 'Jul', x: 1290 },
    { label: 'Sep', x: 1350 },
    { label: 'Nov', x: 1410 },
    { label: '2026', x: 1475, isYear: true },
    { label: 'Mar', x: 1535 },
    { label: 'May', x: 1595 },
    { label: 'Jul', x: 1655 },
    { label: 'Sep', x: 1715 },
    { label: 'Nov', x: 1775 },
    { label: '2027', x: 1840, isYear: true },
  ];

  return (
    <div className="relative w-full h-full bg-black overflow-hidden select-none">
      <svg
        viewBox="0 0 1920 1080"
        className="w-full h-full block"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Circular mask for the iconic Bitcoin gold coin */}
          <clipPath id="bitcoinCoinClip">
            <circle cx="600" cy="490" r="425" />
          </clipPath>
          {/* Subtle vignette around the coin rim */}
          <radialGradient id="coinRimShadow" cx="50%" cy="50%" r="50%">
            <stop offset="85%" stopColor="#000000" stopOpacity="0" />
            <stop offset="98%" stopColor="#000000" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
          </radialGradient>
        </defs>

        {/* Pure Pitch Black Background */}
        <rect width="1920" height="1080" fill="#000000" />

        {/* Horizontal Price Gridlines */}
        {priceGrid.map((g) => (
          <line
            key={g.label}
            x1="0"
            y1={g.y}
            x2="1840"
            y2={g.y}
            stroke="#14171d"
            strokeWidth="1"
          />
        ))}

        {/* Current Price Line at 81,901.27 */}
        <line
          x1="0"
          y1="381"
          x2="1745"
          y2="381"
          stroke="#2962ff"
          strokeDasharray="4 4"
          strokeWidth="1"
          opacity="0.35"
        />

        {/* Background Candlesticks (rendered behind the coin) */}
        {HERO_CANDLES.map((c, idx) => (
          <g key={`candle-bg-${idx}`}>
            {/* High/Low Wick */}
            <line
              x1={c.x}
              y1={c.wickTop}
              x2={c.x}
              y2={c.wickBottom}
              stroke={c.color}
              strokeWidth="1.2"
            />
            {/* Real Candlestick Body */}
            <rect
              x={c.x - 2.5}
              y={c.bodyTop}
              width="5"
              height={c.bodyHeight}
              fill={c.color}
            />
          </g>
        ))}

        {/* Golden Bitcoin Coin Layer (Left side) */}
        <g>
          {/* Ambient Warm Golden Glow behind coin */}
          <circle cx="600" cy="490" r="430" fill="#caa775" opacity="0.06" />

          {/* High resolution coin image */}
          <image
            href={cleanBitcoinImg}
            x="170"
            y="60"
            width="860"
            height="860"
            clipPath="url(#bitcoinCoinClip)"
            preserveAspectRatio="xMidYMid slice"
          />

          {/* Rim shadow overlay for seamless blending */}
          <circle
            cx="600"
            cy="490"
            r="425"
            fill="url(#coinRimShadow)"
            pointerEvents="none"
          />
        </g>

        {/* Foreground Candlesticks (candles that cross or pass in front of the coin rim on right/bottom) */}
        {HERO_CANDLES.filter((c) => c.x > 720 || (c.x > 380 && c.wickBottom > 750)).map((c, idx) => (
          <g key={`candle-fg-${idx}`}>
            <line
              x1={c.x}
              y1={c.wickTop}
              x2={c.x}
              y2={c.wickBottom}
              stroke={c.color}
              strokeWidth="1.2"
            />
            <rect
              x={c.x - 2.5}
              y={c.bodyTop}
              width="5"
              height={c.bodyHeight}
              fill={c.color}
            />
          </g>
        ))}

        {/* Right Y-Axis: Price Labels */}
        {priceGrid.map((g) => (
          <text
            key={`txt-${g.label}`}
            x="1855"
            y={g.y + 4}
            fill="#848e9c"
            fontSize="13"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="start"
          >
            {g.label}
          </text>
        ))}

        {/* Active Price Badge (896 USDT | 81,901.27) */}
        <g>
          {/* Left pill (896 USDT) */}
          <rect x="1742" y="369" width="70" height="24" rx="2" fill="#1e53e5" />
          <text
            x="1777"
            y="385"
            fill="#ffffff"
            fontSize="12"
            fontWeight="500"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
          >
            896 USDT
          </text>

          {/* Right pill (81,901.27) */}
          <rect x="1816" y="369" width="80" height="24" rx="2" fill="#2962ff" />
          <text
            x="1856"
            y="385"
            fill="#ffffff"
            fontSize="12"
            fontWeight="600"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
          >
            81,901.27
          </text>
        </g>

        {/* Bottom X-Axis (Date / Timeline) */}
        <line x1="0" y1="945" x2="1920" y2="945" stroke="#181b22" strokeWidth="1" />
        {timeGrid.map((t, idx) => (
          <text
            key={`time-${idx}`}
            x={t.x}
            y="965"
            fill={t.isYear ? '#ffffff' : '#787b86'}
            fontWeight={t.isYear ? '700' : '400'}
            fontSize={t.isYear ? '13' : '12'}
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="start"
          >
            {t.label}
          </text>
        ))}
      </svg>
    </div>
  );
}
