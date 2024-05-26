<template>
  <div class="notification">
    {{ message }}
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const { message } = defineProps({
    message: {
      type: String,
      required: true,
      default: 'Default notification message'
    }
  });
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.notification {
  display: none;

  align-items: center;
  justify-content: center;
  text-align: center;

  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, 50%);
  padding: 10px;
  margin: 10px 0;
  width: 50%;
  height: 50%;
  background-color: $color-item-background;
  border: 1px solid $color-item-outline;
  border-radius: 5px;
  box-shadow: 0 0 4px 0px #0008;
  color: $color-primary;
  font-weight: bold;/*
  */


}

.show {
  display: flex;
  animation: fade 3s ease-in-out forwards;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>