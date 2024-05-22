<template>
  <li class="element">
    <img :src="src" :alt="alt">
    <div class="element-text">
      <b>{{ title }}</b>
      <p>{{ description }}</p>
    </div>
  </li>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true,
    default: 'Иконка'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }

})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.element {
  display: flex;
  align-items: center;

  background-color: $color-item-background;
  border-radius: 10px;
  border: 1px solid $color-item-outline;

  width: 100%;

  img {
    margin-right: 15px;
    margin-left: 20px;
    width: 30px;
  }

  .element-text {
    margin: 24px 20px 24px 0;
    padding: 0;

    b {
      font-size: 15px;
      line-height: 120%;
      color: $color-primary-emphasis;
      padding: 0;
      margin: 0;
    }
    p {
      font-size: 12px;
      line-height: 120%;
      margin: 10px 0 0;

    }
  }
}

/*Adaptive CSS*/
/*Mobile devices*/
@media (min-width: 576px) {
  .element {
    width: 100%;
    img {
      width: 30px;
    }
    .element-text {
      b {
        font-size: 16px;
      }
      p {
        font-size: 14px;
      }
    }
  }
}
/*Tablets*/
@media (min-width: 768px) {
  .element {
    width: 320px;
    img {
      width: 40px;
    }
    .element-text {
      b {
        font-size: 16px;
      }
      p {
        font-size: 14px;
      }
    }
  }
}

/*Small laptops and tablets*/
@media (min-width: 992px) {
  .element {
    width: 320px;
    img {
      width: 50px;
    }
    .element-text {
      b {
        font-size: 16px;
      }
      p {
        font-size: 14px;
      }
    }
  }
}
/*PC, Laptop*/
@media (min-width: 1200px) {
  .element {
    width: 360px;
    img {
      width: 60px;
    }
    .element-text {
      b {
        font-size: 18px;
      }
      p {
        font-size: 15px;
      }
    }
  }
}
</style>