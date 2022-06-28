<template>
  <main>
    <TheHeader class="header" @coordinates="setMapCoordinates" />
    <TheMap :lat="lat" :lng="lng" class="map" />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      lat: '',
      lng: '',
    }
  },
  methods: {
    setMapCoordinates({ lat, lng }) {
      this.lat = lat
      this.lng = lng
    },
  },
}
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;

  .header {
    flex: 1;
  }
  .map {
    flex: 2;
  }
}
</style>
