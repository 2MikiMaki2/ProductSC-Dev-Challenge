<script setup>
import { usePlayerStore } from '@/stores/player'
import { formatDuration, artCover } from '@/utils/format'

const player = usePlayerStore()
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
      <div class="track-art" :style="artCover(track.cover)" />
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

.empty { color: var(--text-muted); padding: 24px 0; }

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

.track-row:hover { background: var(--bg-card-hover); }
.track-row.active .track-title { color: var(--accent); }

.track-index { color: var(--text-muted); font-size: 14px; }

.track-art {
  width: 40px;
  height: 40px;
  border-radius: 4px;
}

.track-title { color: var(--text-primary); font-size: 15px; }
.track-artist,
.track-album,
.track-duration { color: var(--text-muted); font-size: 13px; }

.track-duration { text-align: right; }

.track-album, .track-title, .track-artist {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>