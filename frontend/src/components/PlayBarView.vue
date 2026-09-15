<script setup>
import { usePlayerStore } from '@/stores/player'
import { 
    Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, MicVocal, ListMusic, MonitorSpeaker, Volume2, PictureInPicture2, Maximize } 
    from 'lucide-vue-next'

const player = usePlayerStore()
</script>

<template>
    <div class="media-bar">
        <div class="track-info" v-if="player.currentTrack">
            <div class="bar-art" :style="{ backgroundColor: player.currentTrack.color }" />
            <div class="track-details">
                <div class="bar-title">{{ player.currentTrack.title }}</div>
                <div class="bar-sub">{{ player.currentTrack.artist }}</div>
            </div>
        </div>
        <div v-else></div>

        <div class="media-controls">
            <button class="button play-button" @click="player.togglePlay()">
                <Play :size="16" v-if="!player.isPlaying" fill="black" />
                <Pause :size="16" v-else fill="black" />
            </button>

        </div>

        <div class="format-controls">

        </div>
    </div>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  color: #b3b3b3;
  padding: 0;
  font: inherit;
  cursor: pointer;
  transition: color 0.15s, transform 0.15s;
}

.button:hover {
  color: #fff;
}

.play-button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #fff !important;
  color: #000 !important;
}

.play-button:hover { transform: scale(1.06); }

.media-bar {
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

.media-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.format-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
}
</style>