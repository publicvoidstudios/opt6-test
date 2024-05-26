<template>
  <section-element>
    <div class="flex">
      <div class="form">
        <h1-header>Проверьте штрафы и зарегестрируйтесь в 1 клик</h1-header>
        <form-element @toggleModal="toggleModal"></form-element>
      </div>
      <div class="image">
        <img src="../../public/notebook.png" alt="Изображение ноутбука с открытым приложением для поиска штрафов">
      </div>
    </div>
    <video-modal :hidden="modalHidden" @toggleModal="toggleModal"></video-modal>
  </section-element>
</template>

<script setup>
import { ref } from 'vue'

const modalHidden = ref(true)

const emit = defineEmits(['toggleModal']);

const toggleModal = () => {
  modalHidden.value = !modalHidden.value
  emit('toggleModal');
}

</script>

<style lang="scss" scoped>

.flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;

  .form {
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    h1 {
      font-size: 28px;
      margin: 0;
      text-align: center;
      width: 100%;
    }
  }

  .image {
    order: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;

    img {
      max-width: 100%;
      height: auto;
    }
  }
}

/*Adaptive CSS*/
/*Tablets*/
@media (min-width: 768px) {
  .flex {
    flex-wrap: wrap;
    margin-top: 80px;
    .form {
      width: auto;
      h1 {
        font-size: 24px;
        text-align: start;
      }
    }

    .image {
      margin-left: 0;
      align-items: center;
      width: auto;
    }
  }
}

/*Small laptops and tablets*/
@media (min-width: 992px) {
  .flex {
    flex-wrap: nowrap;
    margin-top: 80px;
    .form {
      order: 1;
      width: auto;
      h1 {
        font-size: 34px;
        text-align: start;
      }
    }

    .image {
      order: 2;
      margin-left: 0;
      align-items: center;
      width: auto;
    }
  }
}
/*PC, Laptop*/
@media (min-width: 1200px) {
  .flex {
    flex-wrap: nowrap;
    margin-top: 80px;
    .form {
      order: 1;
      width: auto;
      h1 {
        font-size: 41px;
        text-align: start;
      }
    }

    .image {
      order: 2;
      margin-left: -20px;
      align-items: flex-start;
      width: 100%;
    }
  }
}
</style>