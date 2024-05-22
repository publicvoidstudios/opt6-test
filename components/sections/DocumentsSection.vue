<template>
  <section-element class="section">
    <h2-header>Документы</h2-header>
    <div class="slider-container">
      <ul class="slider" id="slider">
        <li v-for="doc in documents" class="item">
          <div class="item-container">
            <h3 class="item-title">{{ doc.title }}</h3>
            <p class="item-text">{{ doc.text }}</p>
            <nuxt-link class="item-button" :to="'/documents/' + doc.id">Перейти</nuxt-link>
          </div>
        </li>
      </ul>
      <div class="slider-controls">
        <button type="button" @click="prevSlide">
          <img src="@/assets/arrow_left.png" alt="стрелка влево">
        </button>
        <button type="button" @click="nextSlide">
          <img src="@/assets/arrow_right.png" alt="стрелка вправо">
        </button>
      </div>
      <slider-radio :slides-count="radioButtonsCount" :current-slide="currentSlide" @switchSlide="switchSlide"></slider-radio>
    </div>
  </section-element>

</template>

<script setup>
import { ref } from "vue"
import { useStore } from "~/store/index.js"

const store = useStore()

const documents = store.documents
let slider = ref(null)
let scrollAmount = ref(50)
let currentSlide = ref(0)
const totalElements = documents.length

//region Logic to define amount of radio buttons based on screen size. Adaptive slider logic.
const getRadioButtonsCount = () => {
  if (window?.innerWidth < 576) {
    return 6;
  } else if (window?.innerWidth > 576 && window?.innerWidth < 992) {
    return 3;
  } else {
    return 2;
  }
}
const radioButtonsCount = ref(getRadioButtonsCount())
const updateRadioButtonsCount = () => {
  radioButtonsCount.value = getRadioButtonsCount();
  maxVisibleElements.value = totalElements / radioButtonsCount.value;
}
//endregion

const maxVisibleElements = ref(totalElements/radioButtonsCount);

// region Functions defining slider and it's width
const getSlider = () => {
  slider.value = document.getElementById("slider")
}

const getScrollAmount = () => {
  scrollAmount.value = slider.value.clientWidth;
}
//endregion

//region Scrolling functions
// Scroll forwards function
const nextSlide = () => {
  if (currentSlide.value < radioButtonsCount.value - 1 && slider.value) {
    currentSlide.value += 1
    slider.value.scrollBy({left: scrollAmount.value, behavior: 'smooth'});
  } else if (currentSlide.value === radioButtonsCount.value - 1 && slider.value) {
    currentSlide.value = 0
    slider.value.scrollTo({left: 0, behavior: 'smooth'});
  }
}

// Scroll backwards function
const prevSlide = () => {
  if (currentSlide.value > 0 && slider) {
    currentSlide.value -= 1
    slider.value.scrollBy({left: -scrollAmount.value, behavior: 'smooth'});
  } else if (currentSlide.value === 0 && slider) {
    currentSlide.value = radioButtonsCount.value - 1
    slider.value.scrollTo({left: scrollAmount.value * radioButtonsCount.value, behavior: 'smooth'});
  }
}

// Scroll to slide function
const switchSlide = (index) => {
  currentSlide.value = index;
  if(slider.value) {
    slider.value.scrollTo({left: index * scrollAmount.value, behavior: 'smooth'});
  }
}
//endregion

onMounted(() => {
  updateRadioButtonsCount();
  window.addEventListener('resize', updateRadioButtonsCount);
  getSlider();
  getScrollAmount();
  window.addEventListener("resize", getScrollAmount);
});

</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.section {
  width: 100%;
  padding-left: 0;
  padding-right: 0;

  h2 {
    margin-bottom: 20px;
  }
  .slider-container {
    position: relative;
    margin-bottom: 5px;
    .slider {
      display: flex;
      overflow-x: auto;
      scrollbar-width: none;
      scroll-snap-type: x proximity;
      padding: 20px 5%;
      .item {
        flex: 0 0 100%;
        display: flex;
        justify-content: center;

        &-container {
          width: 80%;
          height: 240px;
          border: 1px solid $color-item-outline;
          border-radius: 10px;
          box-shadow: 0 0 20px #00000012;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        &-title {
          font-size: 15px;
          font-weight: bold;
          color: $color-primary-emphasis;
          margin: 25px 25px 15px 25px;
          line-height: 120%;
        }
        &-text {
          font-size: 11px;
          margin: 0 25px;
          line-height: 120%;
        }
        &-button {
          text-decoration: none;
          color: $font-color-light;
          background-color: $color-primary;
          font-size: 18px;
          margin: auto 10%;
          border-radius: 7px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 45px;
          width: 80%;
          position: absolute;
          bottom: 20px;
          &:hover {
            background-color: $color-primary-emphasis;
          }
        }

      }
    }
    .slider-controls {
      position: absolute;
      top: 50%;
      transform: translateY(-35%);
      width: 100%;
      display: flex;
      justify-content: space-between;
      user-select: none;
      button {
        background: none;
        border: none;
        cursor: pointer;
        &:hover {
          img {
            filter: brightness(110%);
          }
        }
      }
    }
  }
}

/*Adaptive CSS*/
/*Mobile devices*/
@media (min-width: 576px) {
  .section {
    width: 540px;
    .slider-container {
      .slider {
        padding: 20px 10px;
        .item {
          flex: 0 0 50%;
          &-container {
            width: 240px;
            height: 300px;
          }
          &-title {
            font-size: 20px;
            margin: 25px 25px 15px 25px;
          }
          &-text {
            font-size: 14px;
            margin: 0 25px;
          }
          &-button {
            font-size: 18px;
            margin: 0 10%;
            height: 45px;
            width: 80%;
            bottom: 25px;
          }
        }
      }
    }
  }
}
/*Tablets*/
@media (min-width: 768px) {
  .section {
    width: 720px;
    .slider-container {
      .slider {
        padding: 20px 10px;
        .item {
          flex: 0 0 50%;
          &-container {
            width: 320px;
            height: 350px;
          }
          &-title {
            font-size: 28px;
            margin: 25px 25px 15px 25px;
          }
          &-text {
            font-size: 16px;
            margin: 0 25px;
          }
          &-button {
            font-size: 18px;
            margin: 0 10%;
            height: 45px;
            width: 80%;
            bottom: 25px;
          }
        }
      }
    }
  }
}
/*Small laptops and tablets*/
@media (min-width: 992px) {
  .section {
    width: 940px;
    .slider-container {
      .slider {
        padding: 20px 10px;
        .item {
          flex: 0 0 33.333%;
          &-container {
            width: 260px;
            height: 350px;
          }
          &-title {
            font-size: 28px;
            margin: 25px 25px 15px 25px;
          }
          &-text {
            font-size: 16px;
            margin: 0 25px;
          }
          &-button {
            font-size: 18px;
            margin: 0 10%;
            height: 45px;
            width: 80%;
            bottom: 25px;
          }
        }
      }
    }
  }
}
/*PC, Laptop*/
@media (min-width: 1200px) {
  .section {
    width: 1148px;

    .slider-container {
      .slider {
        padding: 20px 10px;
        .item {
          flex: 0 0 33.333%;
          &-container {
            width: 340px;
            height: 450px;
          }
          &-title {
            font-size: 31px;
            margin: 25px 25px 15px 25px;
          }
          &-text {
            font-size: 18px;
            margin: 0 25px;
          }
          &-button {
            font-size: 18px;
            margin: 0 25px;
            height: 45px;
            width: 288px;
            bottom: 25px;
          }
        }
      }
    }
  }
}

</style>