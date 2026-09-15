<script setup>
import { Search, House, CircleUserRound, ChevronLeft, ChevronRight, DiscAlbum } from 'lucide-vue-next'
import { usePlayerStore } from '@/stores/player'
const player = usePlayerStore()
</script>

<template>
    <div class="bar-container">
        <div class="bar-left">
            <button class="button back-button" aria-label="Go Back" title="Go Back">
                <ChevronLeft :size="24" />
            </button>
            <button class="button forward-button" aria-label="Go Forward" title="Go Forward">
                <ChevronRight :size="24" />
            </button>
        </div>

        <div class="bar-center">
            <button class="button home-button" aria-label="Home" title="Home">
                <House :size="24"/>
            </button>

            <div class="search-field">
                <Search :size="24" />
                <input type="text" placeholder="What do you want to play?" v-model="player.searchQuery" />

                <div class="divider"></div>

                <button class="button disc-button" aria-label="Browse" title="Browse">
                    <DiscAlbum :size="24" />
                </button>
            </div>
        </div>

        <div class="bar-right">
            <button class="button profile-button" aria-label="Profile" title="Profile">
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
    align-items:center;
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

.search-field {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #242424;
  border-radius: 500px;
  padding: 0 14px;
  height: 40px;
  width: 340px;
  color: #b3b3b3;
}

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

.home-button, .profile-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #242424;
}

.home-button:hover,
.profile-button:hover,
.disc-button:hover {
  transform: scale(1.05);
}

.back-button:hover,
.forward-button:hover {
  transform: scale(1.1);
}

.search-field:hover {
    color: #fff;
    box-shadow: inset 0 0 0 2px #fff;
}

.search-field:focus-within {
  background-color: #2a2a2a;
  box-shadow: inset 0 0 0 2px #fff;
}

.search-field input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  min-width: 0;
}

.divider {
  width: 1px;
  height: 24px;
  background-color: #7c7c7c;
  flex-shrink: 0;
}
</style>
