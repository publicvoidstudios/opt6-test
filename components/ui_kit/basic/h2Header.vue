<template>
  <h2>
    <slot></slot>
  </h2>
</template>

<script setup>

</script>

<style scoped>
h2 {
  font-weight: bold;
  font-size: 20px;
  text-align: center;
}

/*Adaptive CSS*/
/*Mobile devices*/
@media (min-width: 576px) {
  h2 {
    font-size: 20px;
  }
}
/*Tablets*/
@media (min-width: 768px) {
  h2 {
    font-size: 24px;
  }
}

/*Small laptops and tablets*/
@media (min-width: 992px) {
  h2 {
    font-size: 30px;
  }
}
/*PC, Laptop*/
@media (min-width: 1200px) {
  h2 {
    font-size: 34px;
  }
}
</style>