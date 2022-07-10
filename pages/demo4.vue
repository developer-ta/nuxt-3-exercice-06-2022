<template>
	<div class="">
		<lazyText v-if="show" />
		<button @click="handleClick">显示/隐藏</button>
	</div>
</template>

<script setup>
import { ref } from "vue";
const show = ref(false);
const handleClick = () => {
	show.value = (!show.value);
};
</script>

