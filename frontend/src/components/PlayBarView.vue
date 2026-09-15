<script setup>
import { usePlayerStore } from '@/stores/player'
import {
  Play, Pause, SkipBack, SkipForward, Repeat, Shuffle,
  MicVocal, ListMusic, MonitorSpeaker, Volume2, PictureInPicture2, Maximize
} from 'lucide-vue-next'

const player = usePlayerStore()
</script>

<template>
  <div class="bar-container">
    <div class="track-info">
      <template v-if="player.currentTrack">
        <div class="bar-art" :style="{ backgroundColor: player.currentTrack.color }" />
        <div class="track-details">
          <div class="bar-title">{{ player.currentTrack.title }}</div>
          <div class="bar-sub">{{ player.currentTrack.artist }}</div>
        </div>
      </template>
    </div>

    <div class="media-controls">
      <button class="icon-btn" title="Shuffle" aria-label="Shuffle">
        <Shuffle :size="18" />
      </button>
      <button class="icon-btn" title="Previous" aria-label="Previous" @click="player.previous()">
        <SkipBack :size="20" fill="currentColor" />
      </button>
      <button class="icon-btn icon-btn--filled" title="Play" aria-label="Play" @click="player.togglePlay()">
        <Play :size="16" v-if="!player.isPlaying" fill="currentColor" />
        <Pause :size="16" v-else fill="currentColor" />
      </button>
      <button class="icon-btn" title="Next" aria-label="Next" @click="player.next()">
        <SkipForward :size="20" fill="currentColor" />
      </button>
      <button class="icon-btn" title="Repeat" aria-label="Repeat">
        <Repeat :size="18" />
      </button>
    </div>

    <div class="format-controls">
      <button class="icon-btn" title="Lyrics" aria-label="Lyrics"><MicVocal :size="18" /></button>
      <button class="icon-btn" title="Queue" aria-label="Queue"><ListMusic :size="18" /></button>
      <button class="icon-btn" title="Devices" aria-label="Devices"><MonitorSpeaker :size="18" /></button>
      <button class="icon-btn" title="Volume" aria-label="Volume"><Volume2 :size="18" /></button>
      <button class="icon-btn" title="Mini player" aria-label="Mini player"><PictureInPicture2 :size="18" /></button>
      <button class="icon-btn" title="Full screen" aria-label="Full screen"><Maximize :size="18" /></button>
    </div>
  </div>
</template>

<style scoped>
.bar-container {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  height: 100%;
}

.track-info {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.bar-art {
  width: 56px;
  height: 56px;
  border-radius: 4px;
  flex-shrink: 0;
}

.track-details { min-width: 0; }

.bar-title {
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 500;
}

.bar-sub {
  color: var(--text-muted);
  font-size: 12px;
}

.bar-title, .bar-sub {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.media-controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.format-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
}
</style>