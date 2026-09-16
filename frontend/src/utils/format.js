export function artGradient(color) {
  return { background: `linear-gradient(135deg, ${color} 0%, ${color}66 100%)` }
}

export function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = String(seconds % 60).padStart(2, '0')
  return `${mins}:${secs}`
}