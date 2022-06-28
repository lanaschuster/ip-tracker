<template>
  <CardContainer class="location-card">
    <div class="content">
      <div
        v-for="(item, i) in items"
        :key="`location_item_${i}`"
        class="location-item"
      >
        <p class="card-title">{{ item.title }}</p>
        <LargeTitle color="dark">{{ item.content }}</LargeTitle>
      </div>
    </div>
  </CardContainer>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.location-card {
  z-index: 1000;
}
.content {
  display: flex;
  padding: 2rem 1rem;
}
.location-item {
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
}

@media screen and (max-width: 1124px) {
  .content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  .location-item {
    align-items: center;
    padding: 1rem;
  }
}
</style>
