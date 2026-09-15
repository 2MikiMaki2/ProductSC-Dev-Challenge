<script setup>
import { usePlayerStore } from '@/stores/player'

const player = usePlayerStore()

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = String(seconds % 60).padStart(2, '0')
  return `${mins}:${secs}`
}
</script>

<template>
  <div class="track-list">
    <p v-if="player.filteredTracks.length === 0" class="empty">
      No results for "{{ player.searchQuery }}"
    </p>

    <button
      v-for="(track, index) in player.filteredTracks"
      :key="track.id"
      class="track-row"
      :class="{ active: track.id === player.currentTrackId }"
      @click="player.playTrack(track.id)"
    >
      <span class="track-index">{{ index + 1 }}</span>
      <div class="track-art" :style="{ backgroundColor: track.color }" />
      <div class="track-meta">
        <div class="track-title">{{ track.title }}</div>
        <div class="track-artist">{{ track.artist }}</div>
      </div>
      <span class="track-album">{{ track.album }}</span>
      <span class="track-duration">{{ formatDuration(track.duration) }}</span>
    </button>
  </div>
</template>

<style scoped>
.track-list { display: flex; flex-direction: column; }

.empty { color: #b3b3b3; padding: 24px 0; }

.track-row {
  display: grid;
  grid-template-columns: 24px 40px 1fr 1fr 48px;
  align-items: center;
  gap: 16px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background: none;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.track-row:hover { background: #2a2a2a; }
.track-row.active .track-title { color: #1db954; }

.track-index { color: #b3b3b3; font-size: 14px; }

.track-art {
  width: 40px;
  height: 40px;
  border-radius: 4px;
}

.track-title { color: #fff; font-size: 15px; }
.track-artist { color: #b3b3b3; font-size: 13px; }
.track-album { color: #b3b3b3; font-size: 13px; }
.track-duration { color: #b3b3b3; font-size: 13px; text-align: right; }

.track-album, .track-title, .track-artist {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>