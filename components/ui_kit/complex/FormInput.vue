<template>
  <div class="form-input">
    <label :for="id">{{ name }}</label>
    <input :id="id" :type="type" required>
  </div>

</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.form-input {
  display: flex;
  flex-direction: column;

  label {
    font-size: 12px;
    user-select: none;
    margin-bottom: 4px;
  }
  input {
    margin: 0;
    width: 100%;
    height: 40px;
    border: 1px solid #BCBCBC;
    border-radius: 5px;
    padding-left: 10px;
    transition: all 0.1s linear;
  }

  input:focus {
    outline: 2px solid #007AFF;
    box-shadow: 0 0 8px #007AFF80;
  }
}




</style>