// RoadmapMap.tsx — Clickable SVG roadtrip map
// Stop markers link to day sections; leg lines link to Google Maps directions.

const VIEW_W = 800
const VIEW_H = 460
const LON_MIN = 2.0
const LON_MAX = 12.5
const LAT_MIN = 47.0
const LAT_MAX = 52.0
const PAD_X = 60
const PAD_Y = 40

function project(lon: number, lat: number): [number, number] {
  const x = PAD_X + ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * (VIEW_W - PAD_X * 2)
  const y = PAD_Y + ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * (VIEW_H - PAD_Y * 2)
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10]
}

// ── Stop definitions ──────────────────────────────────────────────────────────
const stops = [
  {
    city: 'Zwevegem', flag: '🇧🇪',
    lon: 3.33, lat: 50.81,
    href: null,      // home — no anchor
    labelOffset: [-12, -16] as [number, number], anchor: 'end' as const,
  },
  {
    city: 'Würzburg', flag: null,
    lon: 9.93, lat: 49.80,
    href: '#day-1',
    labelOffset: [12, -14] as [number, number], anchor: 'start' as const,
  },
  {
    city: 'Nördlingen', flag: null,
    lon: 10.49, lat: 48.85,
    href: '#day-2',
    labelOffset: [12, -12] as [number, number], anchor: 'start' as const,
  },
  {
    city: 'Augsburg', flag: null,
    lon: 10.90, lat: 48.37,
    href: '#day-3',
    labelOffset: [12, 16] as [number, number], anchor: 'start' as const,
  },
  {
    city: 'Hopfen am See', flag: null,
    lon: 10.70, lat: 47.58,
    href: '#day-4',
    labelOffset: [12, -14] as [number, number], anchor: 'start' as const,
  },
]

// ── Road waypoints per leg ────────────────────────────────────────────────────

// Leg 1: Zwevegem → Würzburg
// E40 → Brussels → Liège → Aachen → A61 → Koblenz → A3 → Frankfurt → Würzburg
const leg1: [number, number][] = [
  [3.33, 50.81],  // Zwevegem
  [3.72, 51.05],  // Ghent
  [4.35, 50.85],  // Brussels
  [4.88, 50.80],  // Namur area
  [5.57, 50.63],  // Liège
  [6.08, 50.77],  // Aachen
  [6.75, 51.00],  // Cologne ring west
  [6.96, 50.94],  // Cologne
  [7.30, 50.65],  // Bonn / A61 south
  [7.59, 50.36],  // Koblenz
  [7.96, 49.98],  // A3 south of Koblenz
  [8.48, 50.07],  // Limburg a.d. Lahn / A3
  [8.68, 50.11],  // Frankfurt area
  [9.18, 49.95],  // A3 east of Frankfurt
  [9.93, 49.80],  // Würzburg
]

// Leg 2: Würzburg → Nördlingen (Romantic Road B19)
const leg2: [number, number][] = [
  [9.93,  49.80],  // Würzburg
  [10.08, 49.58],  // Bad Mergentheim direction
  [10.18, 49.38],  // Rothenburg ob der Tauber
  [10.32, 49.07],  // Dinkelsbühl
  [10.49, 48.85],  // Nördlingen
]

// Leg 3: Nördlingen → Augsburg (B25 → Donauwörth → B2)
const leg3: [number, number][] = [
  [10.49, 48.85],  // Nördlingen
  [10.78, 48.72],  // Donauwörth
  [10.88, 48.55],  // B2 south
  [10.90, 48.37],  // Augsburg
]

// Leg 4: Augsburg → Hopfen am See (A96 → B17 Romantic Road south)
const leg4: [number, number][] = [
  [10.90, 48.37],  // Augsburg
  [10.87, 48.05],  // Landsberg am Lech
  [10.90, 47.82],  // Schongau
  [10.74, 47.65],  // Steingaden / B17
  [10.70, 47.58],  // Hopfen am See / Füssen
]

// Return: Hopfen → Zwevegem
// B17 north → A96 → Munich → A8 west → Ulm → Stuttgart → Karlsruhe → A61 → Koblenz → Cologne → Aachen → Brussels
const legReturn: [number, number][] = [
  [10.70, 47.58],  // Hopfen am See
  [10.87, 48.05],  // Landsberg am Lech (B17 / A96)
  [11.22, 48.08],  // A96 east towards Munich
  [11.58, 48.14],  // Munich (A96 → A8)
  [10.90, 48.37],  // Augsburg (A8 west)
  [9.99,  48.40],  // Ulm
  [9.18,  48.78],  // Stuttgart
  [8.40,  49.01],  // Karlsruhe
  [8.47,  49.49],  // Mannheim
  [7.80,  49.84],  // Kaiserslautern / A6 west
  [7.59,  50.36],  // Koblenz
  [7.30,  50.65],  // Bonn
  [6.96,  50.94],  // Cologne
  [6.08,  50.77],  // Aachen
  [5.57,  50.63],  // Liège
  [4.35,  50.85],  // Brussels
  [3.72,  51.05],  // Ghent
  [3.33,  50.81],  // Zwevegem
]

// ── Leg metadata ──────────────────────────────────────────────────────────────
const legs = [
  {
    pts: leg1, km: '520 km', labelPtIdx: 7, labelOff: [8, -10] as [number, number],
    mapsHref: 'https://www.google.com/maps/dir/Zwevegem,+Belgium/W%C3%BCrzburg,+Germany',
    title: 'Directions: Zwevegem → Würzburg',
  },
  {
    pts: leg2, km: '135 km', labelPtIdx: 2, labelOff: [14, -6] as [number, number],
    mapsHref: 'https://www.google.com/maps/dir/W%C3%BCrzburg,+Germany/N%C3%B6rdlingen,+Germany',
    title: 'Directions: Würzburg → Nördlingen',
  },
  {
    pts: leg3, km: '74 km',  labelPtIdx: 1, labelOff: [12, -8] as [number, number],
    mapsHref: 'https://www.google.com/maps/dir/N%C3%B6rdlingen,+Germany/Augsburg,+Germany',
    title: 'Directions: Nördlingen → Augsburg',
  },
  {
    pts: leg4, km: '105 km', labelPtIdx: 2, labelOff: [14, -6] as [number, number],
    mapsHref: 'https://www.google.com/maps/dir/Augsburg,+Germany/Hopfen+am+See,+Germany',
    title: 'Directions: Augsburg → Hopfen am See',
  },
]

const returnMeta = {
  km: '~800 km', labelPtIdx: 7, labelOff: [-30, 14] as [number, number],
  mapsHref: 'https://www.google.com/maps/dir/Hopfen+am+See,+Germany/Zwevegem,+Belgium',
  title: 'Directions: Hopfen am See → Zwevegem (return)',
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function waypointsToD(wps: [number, number][]): string {
  return wps.map(([lon, lat], i) => {
    const [x, y] = project(lon, lat)
    return `${i === 0 ? 'M' : 'L'}${x},${y}`
  }).join(' ')
}

// Simplified country outlines (approximate)
const belgiumPoly: [number, number][] = [
  [2.55, 51.08], [3.36, 51.37], [4.23, 51.39], [4.99, 51.47], [5.81, 51.16],
  [6.18, 50.73], [6.10, 50.12], [5.74, 49.54], [5.07, 49.46], [4.22, 49.96],
  [3.11, 50.00], [2.53, 50.52], [2.55, 51.08],
]
const germanyPoly: [number, number][] = [
  [6.18, 50.73], [6.92, 51.05], [7.86, 51.97], [8.67, 52.18], [9.40, 52.25],
  [10.42, 52.38], [11.00, 52.40], [12.09, 52.15], [12.36, 51.63], [12.37, 50.73],
  [12.94, 50.40], [12.67, 50.00], [11.91, 49.44], [12.44, 48.56], [12.82, 48.19],
  [12.37, 47.69], [11.08, 47.39], [10.27, 47.27], [9.52, 47.53], [8.51, 47.59],
  [7.59, 47.59], [7.64, 48.19], [7.36, 48.97], [6.60, 49.18], [5.96, 49.46],
  [5.81, 51.16], [6.18, 50.73],
]
function polyToD(coords: [number, number][]): string {
  return coords.map(([lon, lat], i) => {
    const [x, y] = project(lon, lat)
    return `${i === 0 ? 'M' : 'L'}${x},${y}`
  }).join(' ') + ' Z'
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function RoadmapMap() {
  const belgPath = polyToD(belgiumPoly)
  const germPath = polyToD(germanyPoly)
  const returnD  = waypointsToD(legReturn)

  return (
    <div style={{ width: '100%', maxWidth: '860px', margin: '0 auto', padding: '0.5rem 0' }}>
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        aria-label="Clickable roadtrip route map"
        role="img"
      >
        <defs>
          <filter id="dot-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="line-glow" x="-5%" y="-50%" width="110%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="mapBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a1410" />
            <stop offset="100%" stopColor="#1a2818" />
          </linearGradient>

          {/* Hover-bright versions of the outbound leg stroke */}
          <style>{`
            .leg-hit { cursor: pointer; }
            .leg-hit:hover ~ .leg-line { stroke: rgba(232,201,122,0.95); }
            .leg-group:hover .leg-line  { stroke: rgba(232,201,122,0.95); stroke-width: 2.5; }
            .leg-group:hover .leg-glow  { stroke: rgba(232,201,122,0.35); stroke-width: 8; }
            .leg-group:hover .leg-label { fill: #e8c97a; }
            .return-group:hover .return-line  { stroke: rgba(200,151,58,0.60); stroke-width: 1.8; }
            .return-group:hover .return-glow  { stroke: rgba(200,151,58,0.22); stroke-width: 7; }
            .return-group:hover .return-label { fill: rgba(200,151,58,0.75); }
            .stop-group { cursor: pointer; }
            .stop-group:hover .stop-ring  { stroke: rgba(232,201,122,0.55); }
            .stop-group:hover .stop-label { fill: #e8c97a; }
            .stop-group:hover .stop-outer { stroke: rgba(232,201,122,0.55); }
          `}</style>
        </defs>

        {/* Background */}
        <rect width={VIEW_W} height={VIEW_H} fill="url(#mapBg)" rx="12" />

        {/* Grid */}
        {[48, 49, 50, 51].map(lat => {
          const [, y] = project(5, lat)
          return <line key={`lat${lat}`} x1={PAD_X} x2={VIEW_W - PAD_X} y1={y} y2={y}
            stroke="rgba(200,151,58,0.06)" strokeWidth="1" />
        })}
        {[4, 6, 8, 10, 12].map(lon => {
          const [x] = project(lon, 49)
          return <line key={`lon${lon}`} x1={x} x2={x} y1={PAD_Y} y2={VIEW_H - PAD_Y}
            stroke="rgba(200,151,58,0.06)" strokeWidth="1" />
        })}

        {/* Country fills */}
        <path d={belgPath} fill="rgba(200,151,58,0.07)"  stroke="rgba(200,151,58,0.22)" strokeWidth="1" />
        <path d={germPath} fill="rgba(45,74,53,0.12)"    stroke="rgba(45,74,53,0.28)"   strokeWidth="1" />

        {/* Country labels */}
        <text x={project(4.3, 50.5)[0]} y={project(4.3, 50.5)[1]}
          fill="rgba(200,151,58,0.28)" fontSize="9" letterSpacing="2" textAnchor="middle"
          fontFamily="'Jost', sans-serif">BELGIUM</text>
        <text x={project(9.5, 51.0)[0]} y={project(9.5, 51.0)[1]}
          fill="rgba(255,255,255,0.11)" fontSize="9" letterSpacing="2" textAnchor="middle"
          fontFamily="'Jost', sans-serif">GERMANY</text>

        {/* ── Return route (drawn first, behind outbound) ── */}
        <a href={returnMeta.mapsHref} target="_blank" rel="noopener noreferrer">
          <title>{returnMeta.title}</title>
          <g className="return-group">
            {/* Glow */}
            <path className="return-glow" d={returnD} fill="none"
              stroke="rgba(200,151,58,0.10)" strokeWidth="5"
              filter="url(#line-glow)" strokeLinejoin="round" strokeLinecap="round" />
            {/* Dashed line */}
            <path className="return-line" d={returnD} fill="none"
              stroke="rgba(200,151,58,0.30)" strokeWidth="1.2"
              strokeDasharray="4,5" strokeLinejoin="round" strokeLinecap="round" />
            {/* Wide invisible hit area */}
            <path d={returnD} fill="none" stroke="transparent" strokeWidth="12"
              strokeLinejoin="round" strokeLinecap="round" />
            {/* Label */}
            {(() => {
              const mid = legReturn[returnMeta.labelPtIdx]
              const [x, y] = project(mid[0], mid[1])
              return (
                <text className="return-label"
                  x={x + returnMeta.labelOff[0]} y={y + returnMeta.labelOff[1]}
                  fill="rgba(200,151,58,0.38)" fontSize="8.5"
                  textAnchor="middle" fontFamily="'Jost', sans-serif" letterSpacing="0.05em">
                  {returnMeta.km} return
                </text>
              )
            })()}
          </g>
        </a>

        {/* ── Outbound legs (each separately clickable) ── */}
        {legs.map((leg) => {
          const d   = waypointsToD(leg.pts)
          const mid = leg.pts[leg.labelPtIdx] ?? leg.pts[Math.floor(leg.pts.length / 2)]
          const [lx, ly] = project(mid[0], mid[1])
          return (
            <a key={leg.km} href={leg.mapsHref} target="_blank" rel="noopener noreferrer">
              <title>{leg.title}</title>
              <g className="leg-group">
                {/* Glow layer */}
                <path className="leg-glow" d={d} fill="none"
                  stroke="rgba(200,151,58,0.20)" strokeWidth="6"
                  filter="url(#line-glow)" strokeLinejoin="round" strokeLinecap="round" />
                {/* Visible line */}
                <path className="leg-line" d={d} fill="none"
                  stroke="rgba(200,151,58,0.70)" strokeWidth="2"
                  strokeLinejoin="round" strokeLinecap="round" />
                {/* Wide invisible hit area */}
                <path d={d} fill="none" stroke="transparent" strokeWidth="14"
                  strokeLinejoin="round" strokeLinecap="round" />
                {/* Km label */}
                <text className="leg-label"
                  x={lx + leg.labelOff[0]} y={ly + leg.labelOff[1]}
                  fill="rgba(200,151,58,0.60)" fontSize="8.5" textAnchor="middle"
                  fontFamily="'Jost', sans-serif" letterSpacing="0.05em">
                  {leg.km}
                </text>
              </g>
            </a>
          )
        })}

        {/* ── Stop markers ── */}
        {stops.map((stop, i) => {
          const [x, y]    = project(stop.lon, stop.lat)
          const isHome    = i === 0
          const dotR      = isHome ? 7 : 5
          const color     = isHome ? '#c8973a' : '#e8c97a'
          const ringColor = isHome ? 'rgba(200,151,58,0.30)' : 'rgba(232,201,122,0.18)'
          const [lx, ly]  = stop.labelOffset
          const label     = stop.flag ? `${stop.flag} ${stop.city}` : stop.city

          const marker = (
            <g className="stop-group">
              {/* Outer pulse ring */}
              <circle className="stop-outer" cx={x} cy={y} r={dotR + 6}
                fill="none" stroke={ringColor} strokeWidth="1.5" />
              {/* Glow */}
              <circle cx={x} cy={y} r={dotR} fill={color} filter="url(#dot-glow)" />
              {/* Donut */}
              <circle cx={x} cy={y} r={dotR}     fill={color} />
              <circle cx={x} cy={y} r={dotR - 2} fill="#1a1410" />
              <circle cx={x} cy={y} r={dotR - 4} fill={color} />
              {/* Wide hit area */}
              <circle cx={x} cy={y} r={dotR + 8} fill="transparent" />
              {/* Label */}
              <text className="stop-label"
                x={x + lx} y={y + ly}
                fill={isHome ? '#e8c97a' : '#faf7f2'}
                fontSize={isHome ? '11' : '10'}
                fontWeight={isHome ? '500' : '400'}
                textAnchor={stop.anchor}
                fontFamily="'Jost', sans-serif"
                letterSpacing="0.03em"
              >{label}</text>
            </g>
          )

          // Home stop has no link
          if (!stop.href) return marker

          return (
            <a key={i} href={stop.href}>
              <title>Day {i}: {stop.city}</title>
              {marker}
            </a>
          )
        })}

        {/* ── Compass rose ── */}
        {(() => {
          const cx = VIEW_W - 44, cy = VIEW_H - 44, r = 16
          return (
            <g opacity="0.35">
              <circle cx={cx} cy={cy} r={r + 4} fill="none" stroke="rgba(200,151,58,0.3)" strokeWidth="1" />
              <line x1={cx} y1={cy - r} x2={cx} y2={cy + r} stroke="rgba(200,151,58,0.6)" strokeWidth="1" />
              <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke="rgba(200,151,58,0.6)" strokeWidth="1" />
              <polygon points={`${cx},${cy - r} ${cx - 4},${cy - 4} ${cx + 4},${cy - 4}`} fill="rgba(200,151,58,0.8)" />
              <text x={cx} y={cy - r - 5} fill="rgba(200,151,58,0.7)" fontSize="7.5"
                textAnchor="middle" fontFamily="'Jost', sans-serif">N</text>
            </g>
          )
        })()}

        {/* ── Scale bar ── */}
        {(() => {
          const [x1] = project(3.0, 47.3)
          const [x2] = project(5.7, 47.3)
          const y = VIEW_H - 28
          return (
            <g opacity="0.4">
              <line x1={x1} y1={y} x2={x2} y2={y} stroke="rgba(200,151,58,0.6)" strokeWidth="1.5" />
              <line x1={x1} y1={y - 4} x2={x1} y2={y + 4} stroke="rgba(200,151,58,0.6)" strokeWidth="1.5" />
              <line x1={x2} y1={y - 4} x2={x2} y2={y + 4} stroke="rgba(200,151,58,0.6)" strokeWidth="1.5" />
              <text x={(x1 + x2) / 2} y={y - 7} fill="rgba(200,151,58,0.6)" fontSize="7.5"
                textAnchor="middle" fontFamily="'Jost', sans-serif">~200 km</text>
            </g>
          )
        })()}

        {/* Border */}
        <rect width={VIEW_W} height={VIEW_H} fill="none" rx="12"
          stroke="rgba(200,151,58,0.15)" strokeWidth="1.5" />
      </svg>
    </div>
  )
}
