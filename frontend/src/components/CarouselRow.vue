<script setup>
import { ref } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { usePlayerStore } from '@/stores/player'
import { artGradient } from '@/utils/format'

defineProps({
  title: String,
  items: Array
})

const player = usePlayerStore()
const scroller = ref(null)

function scrollRow(direction) {
  scroller.value.scrollBy({ left: direction * 400, behavior: 'smooth' })
}
</script>

<template>
  <section class="row">
    <div class="row-header">
      <h2>{{ title }}</h2>
      <div class="row-arrows">
        <button class="icon-btn arrow" @click="scrollRow(-1)" aria-label="Scroll left">
          <ChevronLeft :size="20" />
        </button>
        <button class="icon-btn arrow" @click="scrollRow(1)" aria-label="Scroll right">
          <ChevronRight :size="20" />
        </button>
      </div>
    </div>

    <div class="row-scroller" ref="scroller">
      <button
        v-for="track in items"
        :key="track.id"
        class="card"
        @click="player.playTrack(track.id)"
      >
        <div class="card-art" :style="artGradient(track.color)" />
        <div class="card-title">{{ track.title }}</div>
        <div class="card-sub">{{ track.artist }}</div>
      </button>
    </div>
  </section>
</template>

<style scoped>
.row { margin-bottom: 32px; }

.row-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.row-header h2 {
  margin: 0;
  font-size: 22px;
  color: var(--text-primary);
}

.row-arrows { display: flex; gap: 4px; }

.arrow {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: var(--text-primary);
  background: var(--bg-elevated);
}

.arrow:hover { background: var(--bg-card-hover); }

.row-scroller {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scrollbar-width: none;
}

.row-scroller::-webkit-scrollbar { display: none; }

.card {
  flex: 0 0 160px;
  min-width: 0;
  padding: 12px;
  border: none;
  border-radius: var(--radius-card);
  background: var(--bg-card);
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s;
}

.card:hover { background: var(--bg-card-hover); }

.card-art {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 6px;
  margin-bottom: 12px;
}

.card-title {
  color: var(--text-primary);
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
}

.card-sub {
  color: var(--text-muted);
  font-size: 13px;
}

.card-title, .card-sub {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>