<script setup>
import BrowseView from './components/BrowseView.vue';
/*
import LibraryView from './components/LibraryView.vue';
import InfoView from './components/InfoView.vue';
*/
import SearchBarView from './components/SearchBarView.vue';
import PlayBarView from './components/PlayBarView.vue';
</script>

<template>
  <div class="layout-container">
    <div class="top-bar-slot">
      <SearchBarView />
    </div>

    <div class="columns-container">
      <div class="column library-column">
        <!-- <LibraryView /> -->
      </div>
      <div class="column browse-column">
        <BrowseView />
      </div>
      <div class="column info-column">
        <!-- <InfoView /> -->
      </div>
    </div>

    <div class="play-bar-slot">
      <PlayBarView />
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--bg-base);
}

.top-bar-slot,
.play-bar-slot {
  height: 70px;
  background-color: var(--bg-base);
}

.columns-container {
  min-height: 0;
  display: flex;
  flex: 1;
  gap: 6px;
  padding: 0 8px 6px;
}

.column {
  overflow-y: auto;
  min-height: 0;
  padding: 10px;
  background-color: var(--bg-elevated);
  border-radius: 10px;
}

.library-column { flex: 1; }
.browse-column { flex: 2; }
.info-column { flex: 1; }
</style>