<template>
  <div class="w-screen flex justify-center">
    <div class="root bg-slate-200">
      <h2>Create an Account</h2>
      <p>
        <input type="text" placeholder="email" />
      </p>
      <p>
        <input type="password" placeholder="Password" />
      </p>
      <p>
        <input type="text" placeholder="Confirm Password" />
      </p>
      <p>
        <input name="field" v-model="value" /> <span>{{ errorMessage }}</span>
      </p>
      <button>submit</button>
    </div>
  </div>
</template>

<script setup>
import { z } from 'zod';
import { useField } from 'vee-validate';

const FormSchema = z.object({
  email: z.string().email(),
  password: z.literal(),
  confirm: z.literal(),
});
const isRequired = (value) => (value ? true : 'This field is required');
const { value, errorMessage } = useField('field', isRequired);
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
  @apply btn-primary bg-blue-600 text-stone-50 outline-none hover:bg-blue-500;
}
</style>
