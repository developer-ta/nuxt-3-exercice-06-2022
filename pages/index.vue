<script setup></script>

<template>
  <div class="min-h-screen">
    <Nav />

    <main class="py-[5%] flex items-center justify-between text-center flex-col">
      <section class="prose">
        <h1>index.vue | path='/'</h1>
        <h1 class="title-primary">Welcome to the restaurantly</h1>
        <a class="">Go to restaurants</a>
        <NuxtLink to="/demo-1">
          <h1>page demo-1</h1>
        </NuxtLink>
        <NuxtLink to="/good-jspang/demo2-8">
          <h1>page demo-2</h1>
        </NuxtLink>
        <NuxtLink to="/parent/child">
          <h1>parente-child</h1>
        </NuxtLink>
        <NuxtLink to="/parent/child-2">
          <h1>child-2</h1>
        </NuxtLink>


      </section>

      <section>
        <p class=""></p>
        <div class="">
          <template>
            <div class="">
              <h2 class=""></h2>
              <ul class="">
                <template>
                  <li class=""></li>
                </template>
              </ul>
              <ul class="">
                <li class="">
                  <NuxtLink>Get Started</NuxtLink>
                </li>
              </ul>
            </div>
          </template>
        </div>
      </section>
    </main>
  </div>
</template>
