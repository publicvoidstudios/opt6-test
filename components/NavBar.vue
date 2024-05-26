<template>
  <header class="nav">
    <nav class="container">
      <div class="nav-part">
        <nuxt-link to="/">
          <img src="../public/compas.png" alt="Compas logo">
        </nuxt-link>
        <ul>
          <li>
            <nuxt-link to="/tariffs">Тарифы</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contacts">Контакты</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="nav-part">
        <ul>
          <li>
            <nuxt-link class="link-bold" to="tel:+74951184422">+7 495 118-44-22</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/login">Вход</nuxt-link>
          </li>
          <li>
            <nuxt-link class="link-btn" to="/register">Регистрация</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>


</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "assets/scss/variables.scss";



.nav {
  background: linear-gradient(to right, #000000 30%, #1c2734 70%);

  .container {
    width: 100%;
    height: 112px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .nav-part {
      display: flex;
      align-items: center;

      a {
        margin-right: 30px;
        text-decoration: none;
        font-size: 15px;
        color: $font-color-light;
        font-weight: lighter;
      }

      ul {
        display: flex;
        list-style: none;
        padding: 0;
      }

      .link-btn {
        font-size: 15px;
        background-color: $color-primary;
        border-radius: 7px;
        padding: 9px 18px;
        transition: all 0.2s ease-in-out;
        margin-right: 0;

        &:hover {
          background-color: $color-primary-emphasis;
        }
      }

      .link-bold {
        font-weight: bold;
      }
    }
  }
}

/*Adaptive CSS*/
/*Mobile devices*/
@media (min-width: 576px) {
  .container {
    max-width: 540px;
    height: 112px !important;
    flex-direction: column;

    .nav-part {
      a {
        font-size: 15px;
      }
    }
  }
}
/*Tablets*/
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    height: 112px !important;
    flex-direction: column;

    .nav-part {
      a {
        font-size: 18px !important;
      }
      .link-btn {
        font-size: 15px !important;
      }
    }
  }
}
/*Small laptops and tablets*/
@media (min-width: 992px) {
  .container {
    max-width: 960px;
    height: 56px !important;
    flex-direction: row !important;
    .nav-part {
      a {
        font-size: 18px !important;
      }
      .link-btn {
        font-size: 15px !important;
      }
    }
  }
}
/*PC, Laptop*/
@media (min-width: 1200px) {
  .container {
    max-width: 1190px;
    height: 56px !important;
    flex-direction: row !important;
    .nav-part {
      a {
        font-size: 18px !important;
      }

      .link-btn {
        font-size: 15px !important;
        margin-right: 30px !important;
      }
    }
  }
}



</style>