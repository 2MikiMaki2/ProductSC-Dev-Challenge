<script setup>
import { Search, Logs, Plus, Maximize2 } from 'lucide-vue-next'
import { usePlayerStore } from '@/stores/player'

const player = usePlayerStore()
const filters = ['Playlists', 'Podcasts', 'Albums', 'Artists']
</script>

<template>
  <div class="library">
    <header class="library-header">
      <h2>Your Library</h2>
      <div class="header-actions">
        <button class="icon-btn" title="Create" aria-label="Create">
          <Plus :size="18" />
        </button>
        <button class="icon-btn" title="Expand" aria-label="Expand">
          <Maximize2 :size="18" />
        </button>
      </div>
    </header>

    <div class="filter-pills">
      <button v-for="f in filters" :key="f" class="pill">{{ f }}</button>
    </div>

    <div class="list-controls">
      <button class="icon-btn" title="Search library" aria-label="Search library">
        <Search :size="18" />
      </button>
      <div class="sort-label">
        <span>Recents</span>
        <Logs :size="16" />
      </div>
    </div>

    <div class="library-list">
      <button
        v-for="track in player.tracks"
        :key="track.id"
        class="library-row"
        :class="{ active: track.id === player.currentTrackId }"
        @click="player.playTrack(track.id)"
      >
        <div class="row-art" :style="{ backgroundColor: track.color }" />
        <div class="row-meta">
          <div class="row-title">{{ track.album }}</div>
          <div class="row-sub">Album • {{ track.artist }}</div>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.library {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.library-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.library-header h2 {
  margin: 0;
  font-size: 16px;
  color: var(--text-muted);
}

.header-actions {
  display: flex;
  gap: 8px;
}

.filter-pills {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none;
}

.filter-pills::-webkit-scrollbar { display: none; }

.pill {
  flex-shrink: 0;
  border: none;
  border-radius: 500px;
  padding: 6px 12px;
  background: var(--bg-card-hover);
  color: var(--text-primary);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}

.pill:hover { background: #3a3a3a; }

.list-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sort-label {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-muted);
  font-size: 13px;
}

.library-list {
  display: flex;
  flex-direction: column;
}

.library-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background: none;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.library-row:hover { background: var(--bg-card-hover); }
.library-row.active .row-title { color: var(--accent); }

.row-art {
  width: 48px;
  height: 48px;
  border-radius: 4px;
  flex-shrink: 0;
}

.row-meta { min-width: 0; }

.row-title {
  color: var(--text-primary);
  font-size: 14px;
  margin-bottom: 2px;
}

.row-sub {
  color: var(--text-muted);
  font-size: 12px;
}

.row-title, .row-sub {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>