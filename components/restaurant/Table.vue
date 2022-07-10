<script lang="ts" setup>
import restaurants from '@/data.json';

const restaurantsOrganized = {
  first: [...restaurants].splice(0, 25),
  seconde: [...restaurants].splice(25, 25),
};
console.log('restaurantsOrganized: ', restaurantsOrganized);
</script>

<template>
  <table class="border border-solid border-collapse">
    <thead>
      <tr>
        <th class="border border-blue-500">State</th>
        <th class="border border-blue-500">City</th>
      </tr>
    </thead>
    <tbody>
      <RestaurantRow v-for="restaurant in restaurantsOrganized.first" :key="restaurant" />
    </tbody>
  </table>
</template>
