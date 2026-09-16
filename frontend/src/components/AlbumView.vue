<script setup>
import { ChevronLeft, Play, Pause } from 'lucide-vue-next'
import { usePlayerStore } from '@/stores/player'
import { formatDuration, artCover } from '@/utils/format'

const player = usePlayerStore()
</script>

<template>
  <div class="album">
    <button class="icon-btn back" @click="player.closeAlbum()" title="Back" aria-label="Back">
      <ChevronLeft :size="22" />
    </button>

    <header class="album-hero">
      <div class="hero-art" :style="artCover(player.albumTracks[0]?.cover)" />
      <div class="hero-meta">
        <span class="hero-kind">Album</span>
        <h1>{{ player.selectedAlbum }}</h1>
        <p class="hero-sub">
          {{ player.albumTracks[0]?.artist }} • {{ player.albumTracks.length }} songs
        </p>
      </div>
    </header>

    <div class="album-actions">
      <button class="play-album" @click="player.playAlbum()" aria-label="Play album">
        <Play :size="20" fill="currentColor" />
      </button>
    </div>

    <div class="album-tracks">
      <button
        v-for="(track, index) in player.albumTracks"
        :key="track.id"
        class="album-row"
        :class="{ active: track.id === player.currentTrackId }"
        @click="player.playTrack(track.id)"
      >
        <span class="row-index">{{ index + 1 }}</span>
        <div class="row-meta">
          <div class="row-title">{{ track.title }}</div>
          <div class="row-artist">{{ track.artist }}</div>
        </div>
        <span class="row-duration">{{ formatDuration(track.duration) }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.album { display: flex; flex-direction: column; gap: 16px; }

.back { align-self: flex-start; }

.album-hero {
  display: flex;
  align-items: flex-end;
  gap: 24px;
}

.hero-art {
  width: 180px;
  height: 180px;
  border-radius: var(--radius-card);
  flex-shrink: 0;
}

.hero-meta { min-width: 0; }

.hero-kind {
  font-size: 12px;
  color: var(--text-primary);
}

.hero-meta h1 {
  margin: 8px 0;
  font-size: 44px;
  line-height: 1.1;
  color: var(--text-primary);
}

.hero-sub {
  margin: 0;
  font-size: 13px;
  color: var(--text-muted);
}

.play-album {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: var(--accent);
  color: #000;
  cursor: pointer;
  transition: transform var(--transition-fast);
}

.play-album:hover { transform: scale(1.05); }

.album-tracks { display: flex; flex-direction: column; }

.album-row {
  display: grid;
  grid-template-columns: 24px 1fr 48px;
  align-items: center;
  gap: 16px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background: none;
  font: inherit;
  text-align: left;
  cursor: pointer;
  min-width: 0;
}

.album-row:hover { background: var(--bg-card-hover); }
.album-row.active .row-title { color: var(--accent); }

.row-index { color: var(--text-muted); font-size: 14px; }
.row-meta { min-width: 0; }
.row-title { color: var(--text-primary); font-size: 15px; }
.row-artist { color: var(--text-muted); font-size: 13px; }
.row-duration { color: var(--text-muted); font-size: 13px; text-align: right; }

.row-title, .row-artist {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>