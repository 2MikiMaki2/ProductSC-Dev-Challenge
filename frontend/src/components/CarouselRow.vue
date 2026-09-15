<script setup>
import { ref } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { usePlayerStore } from '@/stores/player'

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
        <button class="arrow" @click="scrollRow(-1)" aria-label="Scroll left">
          <ChevronLeft :size="20" />
        </button>
        <button class="arrow" @click="scrollRow(1)" aria-label="Scroll right">
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
        <div class="card-art" :style="{ backgroundColor: track.color }" />
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
  color: #fff;
}

.row-arrows { display: flex; gap: 4px; }

.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background: #1f1f1f;
  color: #b3b3b3;
  cursor: pointer;
  transition: color 0.15s, background-color 0.15s;
}

.arrow:hover { color: #fff; background: #2a2a2a; }

.row-scroller {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scrollbar-width: none;
}

.row-scroller::-webkit-scrollbar { display: none; }

.card {
  flex: 0 0 160px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #0f0f0f;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s;
}

.card:hover { background: #282828; }

.card-art {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 6px;
  margin-bottom: 12px;
}

.card-title {
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
}

.card-sub {
  color: #b3b3b3;
  font-size: 13px;
}

.card-title, .card-sub {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>