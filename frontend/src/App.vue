<script setup>
/*import BrowseView from './components/BrowseView.vue';
import LibraryView from './components/LibraryView.vue';
import InfoView from './components/InfoView.vue';
*/
import SearchBarView from './components/SearchBarView.vue';

</script>

<template>
  <div class="layout-container">
    <div class="search-bar">
      <SearchBarView />
    </div>

    <div class="columns-container">
      <div class="column library-column">
        <!-- <LibraryView /> -->     
      </div>
      <div class="column browse-column">
        <!-- <BrowseView /> -->
      </div>
      <div class="column info-column">
        <!-- <InfoView /> -->
      </div>
    </div>

    <div class="play-bar"></div>

  </div>
</template>

<style scoped>

.layout-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: black;
}

.columns-container {
  min-height: 0;
  display: flex;
  flex: 1;
  background-color: black;
  gap: 6px;
  padding: 0px 8px 6px;
}

.search-bar {
  height: 70px;
  background-color: black;
  color: white;
}

.column {
  overflow-y: auto;
  min-height: 0;
  padding: 10px;
  color: white;
  background-color: #181818;
  border-radius: 10px;
}

.library-column {
  flex: 1;
}

.browse-column {
  flex: 2;
}

.info-column {
  flex: 1;
}

.play-bar {
  height: 70px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
