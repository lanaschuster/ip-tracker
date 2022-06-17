<template>
  <header class="search-bar-header">
    <LargeTitle>IP Address Tracker</LargeTitle>
    <SearchInput />
  </header>
</template>

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
}

@media screen and (max-width: 768px) {
  .search-bar-header {
    padding: 2rem;
    justify-content: flex-start;
  }
}
</style>
