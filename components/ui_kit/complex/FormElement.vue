<template>
  <form action="#">
    <div class="form-input" id="form_input_1">
      <label for="car_num">Номер автомобиля</label>
      <input @change="resetWarning(car_num)" ref="car_num" id="car_num" type="text" required>
    </div>
    <div class="form-input" id="form_input_2">
      <label for="region">Регион</label>
      <input @change="resetWarning(region)" ref="region" id="region" type="text" required>
    </div>
    <div class="form-input" id="form_input_3">
      <label for="ts_reg">Свидетельство о регистрации ТС</label>
      <input @change="resetWarning(ts_reg)" ref="ts_reg" id="ts_reg" type="text" required>
    </div>
    <button-primary @click.prevent="submitForm" name="Проверить штрафы" type="submit" image-end="/_nuxt/assets/arrow_narrow.svg" alt="Arrow right"></button-primary>
    <button-secondary @click="showVideo" name="О сервисе" type="button" image-start="/_nuxt/assets/yt_vid_icon.svg" alt="Icon of video" span-end="(1 мин. 20 сек)"/>
    <p class="disclaimer">Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту</p>
    <notification :class="{ 'show' : showNotification }" :message="notificationMessage"></notification>
  </form>
</template>

<script setup>
import{ ref, defineEmits } from 'vue'

const emit = defineEmits(['toggleModal']);

const showVideo = () => {
  emit('toggleModal');
}

let showNotification = ref(false);
let notificationMessage = ref('');

const car_num = ref(null);
const region = ref(null);
const ts_reg = ref(null);

const submitForm = () => {
  //Get all inputs
  const inputs = [
    car_num.value,
    region.value,
    ts_reg.value
  ]
  let valid;

  valid = !!(car_num.value?.value?.trim() && region.value?.value?.trim() && ts_reg.value?.value?.trim());

  console.log(inputs)
  //Check if all fields are filled
  inputs.forEach(input => {
    //If value is empty
    if (!input.value.trim()) {
      // add class to classlist
      input.classList.add('warning')
    } else {
      input.classList.remove('warning')
    }
  })

  if(valid) {
    showNotification.value = true
    setTimeout(() => {
      showNotification.value = false
    }, 3000)
    notificationMessage.value = 'Ваша заявка отправлена!'

    inputs.forEach(input => {
      input.value = '';
    })
  }
}

const resetWarning = (input) => {
  input.classList.remove('warning');
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

form {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;

  .form-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    min-width: 100%;
    max-width: 100%;
    width: 100%;

    label {
      font-size: 12px;
      user-select: none;
      margin-bottom: 4px;
    }

    input {
      margin: 0;
      width: 100%;
      height: 40px;
      border: 1px solid $color-form-outline;
      border-radius: 5px;
      box-sizing: border-box;
      padding: 0 0 0 10px;
    }

    input:focus {
      outline: 2px solid $color-input-outline;
      box-shadow: 0 0 8px $font-color-gray;
    }
  }

  button {
    margin-bottom: 15px;
    width: 100%;
  }

  .disclaimer {
    color: $font-color-gray-light;
    font-size: 13px;
    line-height: 120%;
    margin-top: 0px;
    width: 100%;
    text-align: center;
  }

  .warning {
    outline: 1px solid #ff3737 !important;
  }
}

/*Adaptive CSS*/
/*Tablets*/
@media (min-width: 768px) {
  form {
    flex-direction: row;
    width: 560px;

    .form-input {
      min-width: auto;
      margin-bottom: 0;
    }
    #form_input_1 {
      width: 320px;
      margin-right: 30px;
      margin-bottom: 15px;
    }

    #form_input_2 {
      width: 210px;
      margin-bottom: 15px;
    }

    #form_input_3 {
      width: 560px;
      margin-bottom: 15px;
    }

    button {
      margin-bottom: 0;
      width: auto;
    }

    .disclaimer {
      margin-top: 16px;
      text-align: start;
    }

  }
}

/*Small laptops and tablets*/
@media (min-width: 992px) {
  form {
    flex-direction: row;
    width: 560px;

    .form-input {
      min-width: auto;
      margin-bottom: 0;
    }
    #form_input_1 {
      width: 320px;
      margin-right: 30px;
      margin-bottom: 15px;
    }

    #form_input_2 {
      width: 210px;
      margin-bottom: 15px;
    }

    #form_input_3 {
      width: 560px;
      margin-bottom: 15px;
    }

    button {
      margin-bottom: 0;
      width: auto;
    }

    .disclaimer {
      margin-top: 16px;
      text-align: start;
    }

  }
}
/*PC, Laptop*/
@media (min-width: 1200px) {
  form {
    flex-direction: row;
    width: 560px;

    .form-input {
      min-width: auto;
      margin-bottom: 0;
    }
    #form_input_1 {
      width: 320px;
      margin-right: 30px;
      margin-bottom: 15px;
    }

    #form_input_2 {
      width: 210px;
      margin-bottom: 15px;
    }

    #form_input_3 {
      width: 560px;
      margin-bottom: 15px;
    }

    button {
      margin-bottom: 0;
      width: auto;
    }

    .disclaimer {
      margin-top: 16px;
      text-align: start;
    }

  }
}

</style>