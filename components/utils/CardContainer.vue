<template>
  <div class="card-container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  background: $color-light;
  border-radius: $border-radius;
  height: fit-content;
  width: fit-content;
}
</style>
