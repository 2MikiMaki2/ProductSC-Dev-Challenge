<script setup>
import { X, Heart, MoreHorizontal } from 'lucide-vue-next'
import { usePlayerStore } from '@/stores/player'

const player = usePlayerStore()
</script>

<template>
  <div class="info" v-if="player.currentTrack">
    <header class="info-header">
      <h2>{{ player.currentTrack.album }}</h2>
      <div class="header-actions">
        <button class="icon-btn" title="More" aria-label="More">
          <MoreHorizontal :size="18" />
        </button>
        <button class="icon-btn" title="Close" aria-label="Close">
          <X :size="18" />
        </button>
      </div>
    </header>

    <div class="hero-art" :style="{ backgroundColor: player.currentTrack.color }" />

    <div class="now-playing">
      <div class="np-text">
        <div class="np-title">{{ player.currentTrack.title }}</div>
        <div class="np-artist">{{ player.currentTrack.artist }}</div>
      </div>
      <button class="icon-btn" title="Save" aria-label="Save">
        <Heart :size="20" />
      </button>
    </div>

    <section class="panel">
      <h3>Credits</h3>
      <div class="credit-row">
        <span class="credit-name">{{ player.currentTrack.artist }}</span>
        <span class="credit-role">Main Artist</span>
      </div>
      <div class="credit-row">
        <span class="credit-name">{{ player.currentTrack.album }}</span>
        <span class="credit-role">Album</span>
      </div>
    </section>

    <section class="panel">
      <h3>Next in queue</h3>
      <button
        v-for="track in player.queue"
        :key="track.id"
        class="queue-row"
        @click="player.playTrack(track.id)"
      >
        <div class="queue-art" :style="{ backgroundColor: track.color }" />
        <div class="queue-meta">
          <div class="queue-title">{{ track.title }}</div>
          <div class="queue-artist">{{ track.artist }}</div>
        </div>
      </button>
    </section>
  </div>

  <div class="info empty" v-else>
    <p>Nothing playing</p>
  </div>
</template>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info.empty {
  color: var(--text-muted);
  font-size: 14px;
  align-items: center;
  padding-top: 40px;
}

.info-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.info-header h2 {
  margin: 0;
  font-size: 15px;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.header-actions { display: flex; gap: 4px; }

.hero-art {
  width: 100%;
  aspect-ratio: 1;
  border-radius: var(--radius-card);
}

.now-playing {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.np-text { min-width: 0; }

.np-title {
  color: var(--text-primary);
  font-size: 20px;
  font-weight: 700;
}

.np-artist {
  color: var(--text-muted);
  font-size: 13px;
}

.np-title, .np-artist {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.panel {
  background: var(--bg-card);
  border-radius: var(--radius-card);
  padding: 16px;
}

.panel h3 {
  margin: 0 0 12px;
  font-size: 15px;
  color: var(--text-primary);
}

.credit-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.credit-name { color: var(--text-primary); font-size: 13px; }
.credit-role { color: var(--text-muted); font-size: 12px; }

.queue-row {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 6px;
  border: none;
  border-radius: 4px;
  background: none;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.queue-row:hover { background: var(--bg-card-hover); }

.queue-art {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  flex-shrink: 0;
}

.queue-meta { min-width: 0; }

.queue-title {
  color: var(--text-primary);
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.queue-artist {
  color: var(--text-muted);
  font-size: 12px;
}
</style>