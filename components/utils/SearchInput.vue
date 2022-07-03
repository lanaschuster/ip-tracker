<template>
  <div class="search-input">
    <input
      v-model="query"
      type="text"
      placeholder="Search for any IP address or domain"
    />
    <button title="Search" @click="$emit('search', query)">
      <img src="~/assets/images/icon-arrow.svg" alt="Search" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    defaultQuery: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      query: '',
    }
  },
  mounted() {
    if (this.defaultQuery) {
      this.query = this.defaultQuery
      this.$emit('search', this.query)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';

.search-input {
  height: fit-content;
  display: flex;
  column-gap: 0;

  input {
    font-size: $font-size;
    font-family: $font-family;
    padding: 1rem 2rem;
    outline: none;
    border-radius: $border-radius 0 0 $border-radius;
    width: 448px;
    border: none;
  }

  button {
    cursor: pointer;
    padding: 1rem 2rem;
    background: $color-dark;
    border-radius: 0 $border-radius $border-radius 0;

    &:hover {
      background: $color-very-dark-gray;
    }
  }
}

@media screen and (max-width: 1024px) {
  .search-input {
    input {
      width: 100%;
    }
  }
}
</style>
