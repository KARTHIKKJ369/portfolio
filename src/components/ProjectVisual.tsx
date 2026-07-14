// Deterministic abstract "schematic" visuals — no real screenshots exist for
// these projects, so rather than fake one, each project gets a distinct
// generative line-art panel derived from its index. Keeps the premium/
// engineering feel without inventing content.

const palette = ['var(--accent)', 'var(--border-strong)', 'var(--muted)']

function CircuitPattern({ seed }: { seed: number }) {
  const nodes = Array.from({ length: 6 }, (_, i) => ({
    x: 20 + ((i * 37 + seed * 13) % 260),
    y: 20 + ((i * 53 + seed * 29) % 160),
  }))
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      {nodes.map((n, i) =>
        i > 0 ? (
          <line
            key={`l-${i}`}
            x1={nodes[i - 1].x} y1={nodes[i - 1].y} x2={n.x} y2={n.y}
            stroke={palette[i % palette.length]} strokeWidth="1" opacity="0.5"
          />
        ) : null
      )}
      {nodes.map((n, i) => (
        <circle key={`c-${i}`} cx={n.x} cy={n.y} r={i === 0 ? 5 : 3} fill={palette[i % palette.length]} opacity="0.9" />
      ))}
    </svg>
  )
}

function WavePattern({ seed }: { seed: number }) {
  const amp = 20 + (seed % 3) * 8
  const path1 = `M0,100 Q75,${100 - amp} 150,100 T300,100`
  const path2 = `M0,110 Q75,${110 + amp * 0.6} 150,110 T300,110`
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <path d={path1} fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.7" />
      <path d={path2} fill="none" stroke="var(--muted)" strokeWidth="1" opacity="0.4" />
      {Array.from({ length: 5 }, (_, i) => (
        <circle key={i} cx={30 + i * 60} cy={100} r="2.5" fill="var(--accent)" opacity="0.8" />
      ))}
    </svg>
  )
}

function GridPattern({ seed }: { seed: number }) {
  const cols = 8
  const rows = 5
  const active = new Set(Array.from({ length: 6 }, (_, i) => (i * 7 + seed * 5) % (cols * rows)))
  return (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      {Array.from({ length: rows }, (_, r) =>
        Array.from({ length: cols }, (_, c) => {
          const idx = r * cols + c
          const isActive = active.has(idx)
          return (
            <rect
              key={idx}
              x={c * 37 + 4} y={r * 37 + 4} width="4" height="4"
              fill={isActive ? 'var(--accent)' : 'var(--border-strong)'}
              opacity={isActive ? 0.9 : 0.4}
            />
          )
        })
      )}
    </svg>
  )
}

const patterns = [CircuitPattern, WavePattern, GridPattern]

export default function ProjectVisual({ index }: { index: number }) {
  const Pattern = patterns[index % patterns.length]
  return (
    <div className="w-full h-full flex items-center justify-center bg-[var(--bg-elevated)]">
      <Pattern seed={index} />
    </div>
  )
}
