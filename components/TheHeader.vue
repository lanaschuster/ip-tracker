<template>
  <header class="search-bar-header">
    <LargeTitle>IP Address Tracker</LargeTitle>
    <SearchInput />
    <TheLocationCard :items="items" class="location-card" />
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'ip address',
          content: '192.168.120.1',
        },
        {
          title: 'location',
          content: 'Foz do Iguaçu, PR, 1230',
        },
        {
          title: 'timezone',
          content: 'UTC-05:00',
        },
        {
          title: 'isp',
          content: 'TelecomFoz',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.search-bar-header {
  height: 320px;
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

@media screen and (max-width: 768px) {
  .search-bar-header {
    padding: 2rem;
    justify-content: flex-start;
  }
  .location-card {
    bottom: -220px;
  }
}
</style>
