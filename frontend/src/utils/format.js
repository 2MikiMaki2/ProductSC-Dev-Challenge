export function artCover(cover) {
  return {
    backgroundImage: `url("${cover}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
}

export function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = String(seconds % 60).padStart(2, '0')
  return `${mins}:${secs}`
}