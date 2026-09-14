<script setup></script>

<template>
  <div class="layout-container">
    <div class="search-bar"></div>

    <div class="columns-container">
      <div class="column library-column"></div>
      <div class="column browse-column"></div>
      <div class="column info-column"></div>
    </div>

    <div class="play-bar"></div>

  </div>
</template>

<style scoped>

.layout-container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full screen height */
  background-color: black;
}

.columns-container {
  display: flex;
  flex: 1;
  background-color: black;
}

.search-bar {
  height: 50px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.column {
  padding: 10px;
  color: white;
  background-color: #333;
  border-radius: 10px;
  margin: 5px;
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
  height: 80px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
