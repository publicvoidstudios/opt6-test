<template>
  <div class="modal" :class="{ 'visually-hidden' : hidden }" >
    <div class="modal-container">
      <span @click="toggleModal" class="close-btn">
        <img src="../../../public/cross.svg" alt="">
      </span>
      <iframe
          v-if="!hidden"
          width="960" height="532"
          src="https://www.youtube.com/embed/jNQXAC9IVRw?si=atoRu3QFLVEh65Ee"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  hidden: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['toggleModal'])

const toggleModal = () => {
  emit('toggleModal')
}
</script>

<style lang="scss" scoped>
.visually-hidden {
  display: none !important;
}
.modal {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
  width: 100%;

  &-container {
    display: flex;
    flex-direction: column;

    iframe {
      width: 90vw;
      height: 60vw;
    }
  }

  .close-btn {
    scale: 2;
    margin: 20px;
    padding: 0;
    align-self: flex-end;
    cursor: pointer;
    user-select: none;
  }
}

/*Adaptive CSS*/
/*Mobile devices*/
@media (min-width: 576px) {
  .modal {
    &-container {
      iframe {
        width: 540px;
        height: 320px;
      }
    }

    .close-btn {
      scale: 1.75;
      margin: 7px;
    }
  }
}
/*Tablets*/
@media (min-width: 768px) {
  .modal {
    &-container {
      iframe {
        width: 720px;
        height: 400px;
      }
    }

    .close-btn {
      scale: 1.5;
      margin: 5px;
    }
  }
}

/*Small laptops and tablets*/
@media (min-width: 992px) {
  .modal {
    &-container {
      iframe {
        width: 960px;
        height: 532px;
      }
    }


    .close-btn {
      scale: 1;
      margin: 5px 0;
    }
  }
}
/*PC, Laptop*/
@media (min-width: 1200px) {
  .modal {
    &-container {
      iframe {
        width: 960px;
        height: 532px;
      }
    }

    .close-btn {
      scale: 1;
      margin: 5px 0;
    }
  }
}
</style>