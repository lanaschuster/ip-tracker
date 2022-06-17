<template>
  <p
    class="main-title"
    :class="{
      'light-text': color === 'light',
      'dark-text': color === 'dark',
    }"
  >
    <slot></slot>
  </p>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'light',
      validator: (color) => /light|dark/.test(color),
    },
  },
}
</script>
