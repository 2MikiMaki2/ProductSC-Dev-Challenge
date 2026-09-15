<script setup>
import CarouselRow from './CarouselRow.vue'
import TrackList from './TrackList.vue'
import { usePlayerStore } from '@/stores/player'

const player = usePlayerStore()
</script>

<template>
  <div class="browse">
    <TrackList v-if="player.searchQuery" />

    <template v-else>
      <CarouselRow title="Made for you" :items="player.tracks.slice(0, 8)" />
      <CarouselRow title="Jump back in" :items="player.tracks.slice(5, 13)" />
      <CarouselRow title="Recently played" :items="player.tracks.slice(2, 10)" />
    </template>
  </div>
</template>

<style scoped>
.browse { padding: 8px; }
</style>