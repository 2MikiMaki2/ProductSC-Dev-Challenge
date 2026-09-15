// src/stores/player.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import tracksData from '@/data/tracks.json'

export const usePlayerStore = defineStore('player', () => {
  // state
  const tracks = ref(tracksData)
  const currentTrackId = ref(null)
  const isPlaying = ref(false)
  const searchQuery = ref('')

  // getters
  const currentTrack = computed(() =>
    tracks.value.find(t => t.id === currentTrackId.value) ?? null
  )

  const filteredTracks = computed(() => {
    
  })

  // actions
  function playTrack(id) {
    currentTrackId.value = id
    isPlaying.value = true
  }

  return { tracks, currentTrackId, isPlaying, searchQuery, currentTrack, filteredTracks, playTrack }
})