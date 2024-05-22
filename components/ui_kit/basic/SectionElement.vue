<template>
  <section>
    <slot></slot>
  </section>
</template>

<script setup>

</script>

<style  scoped>
section {
  width: 90%;
  margin: 0 auto 80px;
}

@media (min-width: 576px) {
  section {
    width: 540px; /* Small devices (tablets, 576px and up) */
  }
}
@media (min-width: 768px) {
  section {
    width: 720px; /* Medium devices (desktops, 768px and up) */
  }
}
@media (min-width: 992px) {
  section {
    width: 960px; /* Large devices (desktops, 992px and up) */
  }
}
@media (min-width: 1200px) {
  section {
    width: 1200px; /* Extra large devices (large desktops, 1200px and up) */
  }
}
</style>