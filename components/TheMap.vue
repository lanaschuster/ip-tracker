<template>
  <div id="map-wrap">
    <client-only>
      <l-map :zoom="13" :center="[lat, lng]">
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker :lat-lng="[lat, lng]">
          <l-icon :icon-url="icon" />
        </l-marker>
      </l-map>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    lng: {
      type: [String, Number],
      required: true,
    },
    lat: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    icon() {
      return require('~/assets/images/icon-location.svg')
    },
  },
}
</script>

<style lang="scss" scoped>
#map-wrap {
  height: 100%;
}
</style>
