<template>
  <div class="search-input">
    <input type="text" placeholder="Search for any IP address or domain" />
    <button title="Search">
      <img src="~/assets/images/icon-arrow.svg" alt="Search" />
    </button>
  </div>
</template>

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
    border-radius: 1rem 0 0 1rem;
    width: 448px;
    border: none;
  }

  button {
    cursor: pointer;
    padding: 1rem 2rem;
    background: $color-dark;
    border-radius: 0 1rem 1rem 0;

    &:hover {
      background: $color-very-dark-gray;
    }
  }
}

@media screen and (max-width: 768px) {
  .search-input {
    input {
      width: 100%;
    }
  }
}
</style>
