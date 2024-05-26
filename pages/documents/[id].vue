<template>
  <section-element>
    <h2 class="visually-hidden">{{document?.title}}</h2>
    <nav class="tiny-nav">
      <nuxt-link to="/">Главная страница</nuxt-link>
      <span class="bullet">&nbsp;&nbsp;&nbsp;<img src="../../public/dot.svg" alt="Точка">&nbsp;&nbsp;&nbsp;</span>
      <nuxt-link to="/documents">Документы</nuxt-link>
      <span class="bullet">&nbsp;&nbsp;&nbsp;<img src="../../public/dot.svg" alt="Точка">&nbsp;&nbsp;&nbsp;</span>
      <nuxt-link :to="'/documents/' + id" style="color: #8f8f8f">{{document?.title}}</nuxt-link>
    </nav>
    <article class="article">
      <h2 class="article-title">{{ document?.title }}</h2>
      <h3 class="article-header">Заголовок 1</h3>
      <p class="article-text">Представленная тележка-дозатор обеспечивает высококачественную обработку любых территорий сыпучими противогололедными реагентами самых разных типов, включая такие тяжелые, как гранитная и мраморная крошка, песок и пескосоляные смеси. Тележка прекрасно подходит для использования во дворах многоквартирных домов, обработки территорий промышленных предприятий, востребована владельцами магазинов, различных коммерческих компаний. Кроме того, она может использоваться для высева семян на газонах, теннисных кортах и других территориях.
      </p>
      <p class="article-text">Представленная тележка-дозатор обеспечивает высококачественную обработку любых территорий сыпучими противогололедными реагентами самых разных типов, включая такие тяжелые, как гранитная и мраморная крошка, песок и пескосоляные смеси.
      </p>
      <h3 class="article-header">Заголовок 2</h3>
      <p class="article-text">
        Представленная тележка-дозатор обеспечивает высококачественную обработку любых территорий сыпучими противогололедными реагентами самых разных типов, включая такие тяжелые, как гранитная и мраморная крошка, песок и пескосоляные смеси.
      </p>
      <h3 class="article-header">Заголовок 3</h3>
      <p class="article-text">
        Представленная тележка-дозатор обеспечивает высококачественную обработку любых территорий сыпучими противогололедными реагентами самых разных типов, включая такие тяжелые, как гранитная и мраморная крошка, песок и пескосоляные смеси. Тележка прекрасно подходит для использования во дворах многоквартирных домов, обработки территорий промышленных предприятий, востребована владельцами магазинов, различных коммерческих компаний. Кроме того, она может использоваться для высева семян на газонах, теннисных кортах и других территориях.

      </p>

      <p class="article-text">Представленная тележка-дозатор обеспечивает высококачественную обработку любых территорий сыпучими противогололедными реагентами самых разных типов, включая такие тяжелые, как гранитная и мраморная крошка, песок и пескосоляные смеси.
      </p>
    </article>
  </section-element>

</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '~/store/index.js'

// Get document ID from route params
const { id } = useRoute().params
// Use store as a variable
const store = useStore()

// Define a computed property to retrieve the document by ID
const document = computed(() => {
  return store.documents.find(doc => doc.id === parseInt(id))
})
</script>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";

.tiny-nav {
  font-size: 13px;
  padding: 0;
  margin: 20px 0 0;

  .bullet {
    font-size: 13px;
  }

  a {
    text-decoration: none;
    color: $font-color-dark;
  }
}

.article {

  &-title {
    font-size: 41px;
    line-height: 120%;
    font-weight: bold;
    margin: 20px 0 40px;
    padding: 0;
  }

  &-header {
    font-size: 41px;
    line-height: 120%;
    font-weight: bold;
    margin: 30px 0 25px;
    color: #383838;
    padding: 0;
  }

  &-text {
    font-size: 18px;
    line-height: 120%;
    margin: 0 0 15px;
    padding: 0;
  }
}

.visually-hidden {
  display: none;
}
</style>