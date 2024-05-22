<template>
  <button :type="type">
    <img v-if="imageStart" :src="imageStart" :alt="alt">
    <span v-if="spanStart">{{ spanStart }} </span>
    {{ name }}
    <span v-if="spanEnd"> {{ spanEnd }}</span>
    <img v-if="imageEnd" :src="imageEnd" :alt="alt">
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  imageStart: {
    type: String,
    default: null
  },
  imageEnd: {
    type: String,
    default: null
  },
  alt: {
    type: String,
    default: 'Картинка на кнопке'
  },
  spanStart: {
    type: String,
    default: null
  },
  spanEnd: {
    type: String,
    default: null
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

button {
  background-color: $color-secondary;
  height: 45px;
  border: 1px solid $color-primary;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 20px;
  gap: 4px;
  font-size: 18px;
  span {
    font-size: 15px;
    color: $color-primary-emphasis;
  }
}

button:hover {
  background-color: $color-primary;
  color: $font-color-light;
  span {
    color: $font-color-light;
  }
  img {
    filter: grayscale(100%) invert(100%) brightness(300%);
  }
}
</style>