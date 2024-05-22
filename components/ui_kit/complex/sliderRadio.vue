<template>
  <div class="slider-radio">
    <div v-for="slide in slidesCount">
      <input :ref="'slide' + (slide - 1)" :id="'slider' + (slide - 1)" type="radio" name="slider" :checked="currentSlide === (slide - 1)" @change="goToSlide((slide - 1))">
      <label :for="'slider' + (slide - 1)"></label>
    </div>
  </div>
</template>

<script setup>
import{ defineProps, defineEmits } from 'vue'

defineProps({
  currentSlide: {
    type: Number,
    required: true
  },
  slidesCount: {
    type: Number,
    required: true,
    default: 2
  }
})

const emit = defineEmits(['switchSlide'])

const goToSlide = (index) => {
  emit('switchSlide', index);
  console.log('switchSlide event emitted')
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.slider-radio {
  position: absolute;
  right: 50%;
  transform: translate(50%);
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  input[type="radio"] {
    display: none;
  }
  input[type="radio"] + label {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  input[type="radio"] + label:before {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: $color-radio-unchecked;
    background-color: $color-radio-unchecked;
  }
  input[type="radio"]:checked + label:before {
    width: 10px;
    height: 10px;
    background-color: $color-radio-checked;
    border-color: $color-radio-checked;
  }
}
</style>