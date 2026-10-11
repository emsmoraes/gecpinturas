import { useLanguage } from '@/i18n/language'

// Proyección equirectangular simple del sur de Alicante
const LON_MIN = -1.0
const LAT_MAX = 38.42
const COS_LAT = Math.cos((38.15 * Math.PI) / 180)
const SCALE = 1102
const W = 570
const H = 573

const project = (lon: number, lat: number) => ({
  x: (lon - LON_MIN) * COS_LAT * SCALE,
  y: (LAT_MAX - lat) * SCALE,
})

const COAST: [number, number][] = [
  [-0.4, 38.42], [-0.43, 38.38], [-0.46, 38.355], [-0.48, 38.342], [-0.5, 38.33], [-0.51, 38.31],
  [-0.52, 38.29], [-0.525, 38.27], [-0.52, 38.25], [-0.513, 38.235], [-0.508, 38.22], [-0.503, 38.212],
  [-0.525, 38.2], [-0.545, 38.19], [-0.565, 38.186], [-0.59, 38.175], [-0.615, 38.155], [-0.635, 38.125],
  [-0.646, 38.095], [-0.655, 38.06], [-0.662, 38.03], [-0.672, 38.0], [-0.678, 37.975], [-0.7, 37.955],
  [-0.72, 37.935], [-0.74, 37.92], [-0.755, 37.9],
]

const toPath = (points: [number, number][]) =>
  points.map(([lon, lat], i) => {
    const { x, y } = project(lon, lat)
    return `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(' ')

const LAND = `${toPath(COAST)} L0 ${H} L0 0 Z`
const COAST_LINE = toPath(COAST)

type Town = { name: string; lon: number; lat: number; main?: boolean; label: 'left' | 'right' | 'above' | 'below' }

const TOWNS: Town[] = [
  { name: 'Elche', lon: -0.698, lat: 38.267, main: true, label: 'left' },
  { name: 'Santa Pola', lon: -0.556, lat: 38.192, main: true, label: 'right' },
  { name: 'Gran Alacant', lon: -0.523, lat: 38.226, main: true, label: 'right' },
  { name: 'Guardamar del Segura', lon: -0.655, lat: 38.089, label: 'right' },
  { name: 'Torrevieja', lon: -0.686, lat: 37.98, label: 'right' },
  { name: 'Ciudad Quesada / Rojales', lon: -0.72, lat: 38.075, label: 'below' },
  { name: 'Almoradí', lon: -0.792, lat: 38.109, label: 'above' },
  { name: 'Orihuela', lon: -0.944, lat: 38.085, label: 'right' },
]

const labelProps = (pos: Town['label'], main?: boolean) => {
  const gap = main ? 14 : 10
  switch (pos) {
    case 'left': return { dx: -gap, dy: 4, textAnchor: 'end' as const }
    case 'right': return { dx: gap, dy: 4, textAnchor: 'start' as const }
    case 'above': return { dx: 0, dy: -gap, textAnchor: 'middle' as const }
    case 'below': return { dx: 0, dy: gap + 10, textAnchor: 'middle' as const }
  }
}

export function ServiceMap() {
  const { t } = useLanguage()
  const alicante = project(-0.49, 38.345)
  const tabarca = project(-0.472, 38.166)
  const lagoon = project(-0.7, 37.997)
  const lagoon2 = project(-0.706, 38.042)
  const mainZone = project(-0.61, 38.23)
  const vegaBaja = project(-0.8, 38.07)

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={t.area.mapLabel} className="h-auto w-full">
      <defs>
        <pattern id="sea-lines" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(-30)">
          <line x1="0" y1="7" x2="14" y2="7" stroke="var(--color-ink)" strokeOpacity="0.06" strokeWidth="1.2" />
        </pattern>
        <radialGradient id="zone-glow">
          <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width={W} height={H} fill="url(#sea-lines)" />
      <path d={LAND} fill="white" />
      <path d={COAST_LINE} fill="none" stroke="var(--color-ink)" strokeOpacity="0.25" strokeWidth="1.5" strokeLinejoin="round" />

      {/* Lagunas de Torrevieja y La Mata */}
      <ellipse cx={lagoon.x} cy={lagoon.y} rx="13" ry="26" fill="#f6c9d4" opacity="0.7" transform={`rotate(-10 ${lagoon.x} ${lagoon.y})`} />
      <ellipse cx={lagoon2.x} cy={lagoon2.y} rx="9" ry="17" fill="var(--color-sand)" stroke="var(--color-ink)" strokeOpacity="0.08" />

      {/* Isla de Tabarca */}
      <ellipse cx={tabarca.x} cy={tabarca.y} rx="7" ry="2.5" fill="white" stroke="var(--color-ink)" strokeOpacity="0.25" />
      <text x={tabarca.x} y={tabarca.y + 16} textAnchor="middle" className="fill-ink/35 text-[9px] italic">Tabarca</text>

      {/* Zonas */}
      <ellipse cx={mainZone.x} cy={mainZone.y} rx="135" ry="95" fill="url(#zone-glow)" />
      <ellipse
        cx={vegaBaja.x}
        cy={vegaBaja.y}
        rx="155"
        ry="72"
        fill="var(--color-brand)"
        fillOpacity="0.08"
        stroke="var(--color-brand-deep)"
        strokeOpacity="0.35"
        strokeDasharray="4 5"
        transform={`rotate(-6 ${vegaBaja.x} ${vegaBaja.y})`}
      />
      <text x={vegaBaja.x - 95} y={vegaBaja.y + 62} className="fill-brand-deep text-[13px] font-semibold tracking-[0.2em] uppercase">
        Vega Baja
      </text>

      <text
        x="490"
        y="430"
        textAnchor="middle"
        transform="rotate(-68 490 430)"
        className="fill-ink/30 text-[13px] tracking-[0.35em] uppercase italic"
      >
        {t.area.sea}
      </text>

      {/* Alicante como referencia */}
      <circle cx={alicante.x} cy={alicante.y} r="3.5" fill="var(--color-ink)" fillOpacity="0.3" />
      <text x={alicante.x - 9} y={alicante.y + 4} textAnchor="end" className="fill-ink/40 text-[13px]">Alicante</text>

      {TOWNS.map(town => {
        const { x, y } = project(town.lon, town.lat)
        const label = labelProps(town.label, town.main)
        return (
          <g key={town.name}>
            {town.main && <circle cx={x} cy={y} r="13" fill="var(--color-brand)" fillOpacity="0.25" />}
            <circle
              cx={x}
              cy={y}
              r={town.main ? 6.5 : 4.5}
              fill={town.main ? 'var(--color-brand)' : 'white'}
              stroke="var(--color-ink)"
              strokeWidth={town.main ? 2.5 : 2}
            />
            <text
              x={x + label.dx}
              y={y + label.dy}
              textAnchor={label.textAnchor}
              paintOrder="stroke"
              stroke="white"
              strokeWidth="4"
              strokeLinejoin="round"
              className={town.main ? 'fill-ink text-[18px] font-bold' : 'fill-ink/75 text-[14px] font-medium'}
            >
              {town.name}
            </text>
          </g>
        )
      })}

      {/* Norte */}
      <g transform="translate(538 34)" className="fill-ink/40">
        <path d="M0 -14 L6 6 L0 2 L-6 6 Z" />
        <text y="22" textAnchor="middle" className="text-[10px] font-semibold">N</text>
      </g>
    </svg>
  )
}
