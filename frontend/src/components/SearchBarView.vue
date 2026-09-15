<script setup>
import { Search, House, CircleUserRound, ChevronLeft, ChevronRight, DiscAlbum } from 'lucide-vue-next'
import { usePlayerStore } from '@/stores/player'
const player = usePlayerStore()
</script>

<template>
  <div class="bar-container">
    <div class="bar-left">
      <button class="icon-btn nudge" aria-label="Go Back" title="Go Back">
        <ChevronLeft :size="24" />
      </button>
      <button class="icon-btn nudge" aria-label="Go Forward" title="Go Forward">
        <ChevronRight :size="24" />
      </button>
    </div>

    <div class="bar-center">
      <button class="icon-btn icon-btn--circle grow" aria-label="Home" title="Home">
        <House :size="24" />
      </button>

      <div class="search-field">
        <Search :size="24" />
        <input type="text" placeholder="What do you want to play?" v-model="player.searchQuery" />

        <div class="divider"></div>

        <button class="icon-btn grow" aria-label="Browse" title="Browse">
          <DiscAlbum :size="24" />
        </button>
      </div>
    </div>

    <div class="bar-right">
      <button class="icon-btn icon-btn--circle grow" aria-label="Profile" title="Profile">
        <CircleUserRound :size="24" />
      </button>
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

.bar-left {
  display: flex;
  align-items: center;
  gap: 4px;
}

.bar-center {
  display: flex;
  align-items: center;
  gap: 8px;
}

.bar-right {
  display: flex;
  justify-content: flex-end;
}

.grow:hover { transform: scale(1.05); }
.nudge:hover { transform: scale(1.1); }

.search-field {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--bg-input);
  border-radius: 500px;
  padding: 0 14px;
  height: 40px;
  width: 340px;
  color: var(--text-muted);
}

.search-field:hover {
  color: var(--text-primary);
  box-shadow: inset 0 0 0 2px var(--text-primary);
}

.search-field:focus-within {
  background-color: var(--bg-card-hover);
  box-shadow: inset 0 0 0 2px var(--text-primary);
}

.search-field input {
  flex: 1;
  min-width: 0;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 14px;
}

.search-field input::placeholder {
  color: var(--text-muted);
}

.divider {
  width: 1px;
  height: 24px;
  background-color: #7c7c7c;
  flex-shrink: 0;
}
</style>