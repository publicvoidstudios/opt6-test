<template>
  <section-element>
    <nav>
      <nuxt-link to="/">Главная страница</nuxt-link>
      <span> &bullet; </span>
      <nuxt-link to="/documents">Документы</nuxt-link>
    </nav>
    <documents-section></documents-section>
  </section-element>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";


a {
  text-decoration: none;
  color: $font-color-dark;
}

</style>