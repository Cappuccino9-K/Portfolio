<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <div class="bg-red">asdssasd</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 반응형 데이터 정의
const message = ref('Hello, World!')
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}
h1 {
  color: #42b883; /* Vue 공식 로고 색상 */
  font-size: 3rem;
}
</style>