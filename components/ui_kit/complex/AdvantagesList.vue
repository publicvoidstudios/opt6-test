<template>
  <ul class="list">
    <advantage-element
        src="/_nuxt/assets/unlimit.svg"
        alt="иконка бесконечности"
        title="Неограниченый автопарк"
        description="Можно добавить неограниченное кол-во машин и водителей"
    />
    <advantage-element
        src="/_nuxt/assets/map.svg"
        alt="иконка карты"
        title="Сокращение затрат до 50%"
        description="Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке"
    />
    <advantage-element
        src="/_nuxt/assets/security.svg"
        alt="иконка щита"
        title="Безопасность"
        description="Данные передаются в зашифрованном виде, они доступны только получателю"
    />
    <advantage-element
        src="/_nuxt/assets/notification.svg"
        alt="иконка бесконечности"
        title="Уведомление о погашении"
        description="Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП"
    />
    <advantage-element
        src="/_nuxt/assets/paycheck.svg"
        alt="иконка карты"
        title="Квитанция об оплате"
        description="После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате."
    />
    <advantage-element
        src="/_nuxt/assets/history.svg"
        alt="иконка щита"
        title="Все история сохраняется по каждой машине"
        description="Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам"
    />
  </ul>
</template>

<script setup>

</script>

<style scoped>
.list {
  padding: 0;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

/*Adaptive CSS*/
/*Mobile devices*/
@media (min-width: 576px) {

}

/*Tablets*/
@media (min-width: 768px) {

}

/*Small laptops and tablets*/
@media (min-width: 992px) {
  .list {
    gap: 35px;
  }
}

/*PC, Laptop*/
@media (min-width: 1200px) {
  .list {
    gap: 35px;
  }
}
</style>