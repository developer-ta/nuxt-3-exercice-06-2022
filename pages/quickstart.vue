<template>
  <div class="w-screen flex justify-center">
    <div class="root bg-slate-200">
      <h2 class="title is-2 has-text-centered my-6">VeeValidate Quickstart</h2>

      <VForm class="card p-6 has-background-light">
        <VField name="field" :rules="isRequired" class="input" placeholder="Enter text" />

        <VErrorMessage name="field" class="help is-danger" />
      </VForm>
      <button>submit</button>
    </div>
  </div>
</template>

<script setup>
const isRequired = (value) => {
  if (value && value.trim()) {
    return true;
  }
  return 'This is required right now!';
};
</script>
<style scoped>
.root {
  @apply container w-96 mx-auto my-0 mt-24 rounded-2xl p-7;
}
input {
  @apply border-0 outline-0 border-b-2 border-solid border-violet-300 text-base w-[99%] py-1 pl-5  rounded-md;
  margin: 10px 0 5px 0;
}
button {
  @apply btn-primary  bg-blue-600 text-stone-50 outline-none hover:bg-blue-500;
}
</style>
