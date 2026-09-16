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
  const selectedAlbum = ref(null)

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

  const albums = computed(() => {
    const map = new Map()
    for (const track of tracks.value) {
      if (!map.has(track.album)) {
        map.set(track.album, { name: track.album, artist: track.artist, cover: track.cover, tracks: [] })
      }
      map.get(track.album).tracks.push(track)
    }
    return [...map.values()]
  })

  const albumTracks = computed(() =>
    tracks.value.filter(t => t.album === selectedAlbum.value)
  )

  function openAlbum(name) { selectedAlbum.value = name }

  function closeAlbum() { selectedAlbum.value = null }

  function playAlbum() { if (albumTracks.value.length) playTrack(albumTracks.value[0].id) }

  // actions
  function playTrack(id) {
    currentTrackId.value = id
    isPlaying.value = true
  }

  function togglePlay() {
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

  return { tracks, currentTrackId, isPlaying, searchQuery, currentTime, currentTrack, selectedAlbum, filteredTracks, queue, playTrack, togglePlay, next, previous, albums, albumTracks, openAlbum, closeAlbum, playAlbum }
})