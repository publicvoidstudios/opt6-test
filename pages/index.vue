<template>
    <main :class="{'scroll-disabled' : modalActive}">
      <form-section @toggleModal="toggleModal"></form-section>
      <advantages-section></advantages-section>
      <documents-section></documents-section>
    </main>
</template>

<script setup>
const modalActive = ref(false);

const toggleModal = () => {
  modalActive.value = !modalActive.value

  if(modalActive.value) {
    document.body.classList.add('scroll-disabled');
  } else {
    document.body.classList.remove('scroll-disabled');
  }

};
</script>

<style lang="scss">
@import "assets/scss/variables";

* {
  transition: all 0.2s ease-in-out;
  font-family: $font-family;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body.scroll-disabled {
  overflow: hidden;
}

</style>
