import type { KnowledgeSlice, Locale, LocalizedString } from '../../data/types'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'

interface KnowledgePieChartProps {
  slices: KnowledgeSlice[]
  summary: LocalizedString
}

const DEFAULT_COLORS = ['#008d9f', '#4a6a6e', '#8a9a9c', '#b5c4c6']
const SIZE = 120
const CENTER = SIZE / 2
const RADIUS = 44
const INNER_RADIUS = 26

function normalizeSlices(slices: KnowledgeSlice[]): { slice: KnowledgeSlice; value: number }[] {
  const total = slices.reduce((sum, s) => sum + s.value, 0)
  if (total <= 0) return slices.map((s) => ({ slice: s, value: 0 }))
  if (Math.abs(total - 100) < 0.01) {
    return slices.map((s) => ({ slice: s, value: s.value }))
  }
  return slices.map((s) => ({ slice: s, value: (s.value / total) * 100 }))
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  }
}

function describeArc(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  startAngle: number,
  endAngle: number,
) {
  const startOuter = polarToCartesian(cx, cy, outerR, endAngle)
  const endOuter = polarToCartesian(cx, cy, outerR, startAngle)
  const startInner = polarToCartesian(cx, cy, innerR, startAngle)
  const endInner = polarToCartesian(cx, cy, innerR, endAngle)
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1

  return [
    `M ${startOuter.x} ${startOuter.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 0 ${endOuter.x} ${endOuter.y}`,
    `L ${startInner.x} ${startInner.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 1 ${endInner.x} ${endInner.y}`,
    'Z',
  ].join(' ')
}

function buildAriaLabel(slices: { slice: KnowledgeSlice; value: number }[], locale: Locale) {
  return slices
    .map(({ slice, value }) => `${pickLocalized(slice.label, locale)} ${Math.round(value)}%`)
    .join(', ')
}

export function KnowledgePieChart({ slices, summary }: KnowledgePieChartProps) {
  const { locale } = useLocale()
  const normalized = normalizeSlices(slices)
  let angle = 0
  const segments = normalized.map(({ slice, value }, index) => {
    const sweep = (value / 100) * 360
    const start = angle
    const end = angle + sweep
    angle = end
    const color = slice.color ?? DEFAULT_COLORS[index % DEFAULT_COLORS.length]
    const midAngle = start + sweep / 2
    const labelPos = polarToCartesian(CENTER, CENTER, (RADIUS + INNER_RADIUS) / 2, midAngle)
    return {
      slice,
      value,
      color,
      path: describeArc(CENTER, CENTER, RADIUS, INNER_RADIUS, start, end),
      labelPos,
      showLabel: value >= 8,
    }
  })

  const ariaLabel = buildAriaLabel(normalized, locale)

  return (
    <div className="cv-knowledge">
      <div className="cv-knowledge__chart">
        <svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          role="img"
          aria-label={ariaLabel}
        >
          {segments.map((seg, i) => (
            <g key={i}>
              <path d={seg.path} fill={seg.color} />
              {seg.showLabel && (
                <text
                  x={seg.labelPos.x}
                  y={seg.labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="8"
                  fontWeight="700"
                  fill="#fff"
                >
                  {Math.round(seg.value)}%
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>
      <div className="cv-knowledge__legend">
        {segments.map((seg, i) => (
          <div key={i} className="cv-knowledge__legend-item">
            <span className="cv-knowledge__swatch" style={{ background: seg.color }} />
            <span>
              {pickLocalized(seg.slice.label, locale)} ({Math.round(seg.value)}%)
            </span>
          </div>
        ))}
      </div>
      <p className="cv-knowledge__summary">{pickLocalized(summary, locale)}</p>
    </div>
  )
}
