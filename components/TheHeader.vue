<template>
  <header class="search-bar-header">
    <LargeTitle>IP Address Tracker</LargeTitle>
    <SearchInput default-query="8.8.8.8" @search="search" />
    <TheLocationCard :items="items" class="location-card" />
  </header>
</template>

<script>
export default {
  data() {
    return {
      ipAddress: '--',
      location: '--',
      timezone: '--',
      isp: '--',
      lng: '',
      lat: '',
    }
  },
  computed: {
    items() {
      return [
        {
          title: 'ip address',
          content: this.ipAddress,
        },
        {
          title: 'location',
          content: this.location,
        },
        {
          title: 'timezone',
          content: this.timezone,
        },
        {
          title: 'isp',
          content: this.isp,
        },
      ]
    },
  },
  methods: {
    search(query) {
      const url = `${process.env.IP_API_URL}country,city?apiKey=${process.env.IP_API_KEY}&ipAddress=${query}`
      this.$axios
        .get(url)
        .then((result) => {
          this.ipAddress = result.data.ip
          this.location = `${result.data.location.country}, ${result.data.location.city}, ${result.data.location.region}`
          this.timezone = result.data.location.timezone
          this.isp = result.data.isp
          this.lng = result.data.location.lng
          this.lat = result.data.location.lat

          this.$emit('coordinates', { lat: this.lat, lng: this.lng })
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style scoped lang="scss">
.search-bar-header {
  height: 100%;
  background: url('~/assets/images/pattern-bg.png');
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 24px;
  position: relative;
}
.location-card {
  position: absolute;
  bottom: -100px;
}

@media screen and (max-width: 1124px) {
  .search-bar-header {
    padding: 2rem;
    justify-content: flex-start;
  }
  .location-card {
    bottom: -300px;
  }
}
</style>
