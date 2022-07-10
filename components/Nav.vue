<template>
  <div class="py-5 bg-gradient-to-tr from-violet-100 to-purple-50">
    <header class="flex items-center justify-between px-[5%] lg:px-[15%] h-8">
      <NuxtLink to="/" class="font-bold text-2xl lg:text-4xl">
        <div class=""><span class="text-primary"> R</span>estaurantly</div>
      </NuxtLink>

      <nav class="flex items-centre space-x-7 text-gray-600">
        <template v-for="(n, i) in links" :key="`NavLink-${i}`">
          <NuxtLink class="inline-block group" :to="n.link">
            <div class="flex flex-row items-centre space-x-2 nav-link">
              <Icon :icon="n.icon" class="w-4 h-5"></Icon>
              <span class="font-medium"> {{ n.name }} </span>
            </div>
            <div class="transition-hover"></div>
          </NuxtLink>
        </template>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
const links = [
  { name: 'Home', icon: 'ant-design:home-twotone', link: '/' },

  { name: 'Restaurant', icon: 'carbon:restaurant', link: '/restaurants' },
];
</script>
