// src/stores/player.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import tracksData from '@/data/tracks.json'

export const usePlayerStore = defineStore('player', () => {
  // state
  const tracks = ref(tracksData)
  const currentTrackId = ref(tracksData[0].id)
  const isPlaying = ref(false)
  const searchQuery = ref('')
  const currentTime = ref(0)

  // getters
  const currentTrack = computed(() =>
    tracks.value.find(t => t.id === currentTrackId.value) ?? null
  )

  const filteredTracks = computed(() => {
    if (!searchQuery.value) return tracks.value
    const query = searchQuery.value.toLowerCase()
    return tracks.value.filter(
      t => t.title.toLowerCase().includes(query) ||
          t.artist.toLowerCase().includes(query)
    )
  })

  const queue = computed(() => {
    const i = tracks.value.findIndex(t => t.id === currentTrackId.value)
    if (i === -1) return []
    return tracks.value.slice(i + 1, i + 5)
  })

  // actions
  function playTrack(id) {
    currentTrackId.value = id
    isPlaying.value = true
  }

  function togglePlay() {
    if (!currentTrackId.value) {
      playTrack(tracks.value[0].id)
      return
    }
    isPlaying.value = !isPlaying.value
  }

  function next() {
  const i = tracks.value.findIndex(t => t.id === currentTrackId.value)
  const nextTrack = tracks.value[(i + 1) % tracks.value.length]
  playTrack(nextTrack.id)
}

function previous() {
  const i = tracks.value.findIndex(t => t.id === currentTrackId.value)
  const prevIndex = (i - 1 + tracks.value.length) % tracks.value.length
  playTrack(tracks.value[prevIndex].id)
}

  return { tracks, currentTrackId, isPlaying, searchQuery, currentTime, currentTrack, filteredTracks, queue, playTrack, togglePlay, next, previous }
})