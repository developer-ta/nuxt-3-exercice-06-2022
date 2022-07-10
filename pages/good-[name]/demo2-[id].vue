<template>
  <div class="prose">
    <h1>demo2-id.vue | id= {{ id }}</h1>
    <h1>demo2-id.vue | name= {{ name }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const route = useRoute();
const id = ref(route.params.id);
const name = ref(route.params.name);
</script>

<style scoped>
h1 {
  @apply title-primary;
}
</style>
