<template>
  <button :type="type"><img v-if="imageStart" :src="imageStart" :alt="alt">{{ name }}<img v-if="imageEnd" :src="imageEnd" :alt="alt"><slot></slot></button>
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
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

button {
  position: relative;
  height: 45px;
  background-color: $color-primary;
  border-radius: 7px;
  padding: 11px 20px;
  color: $font-color-light;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border: none;
  margin-right: 21px;
  img {
    margin-left: 4px;
    position: relative;
    width: 14px;
    height: 12px;
    top: 2px;
  }
}

button:hover {
  background-color: $color-primary-emphasis;
}
</style>