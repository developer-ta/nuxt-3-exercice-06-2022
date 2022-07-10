<template>
	<div>
		<header class="prose">
			<h1>slot custom!!!!!!!</h1>
			<slot name="custom">
				<Footer />
			</slot>

		</header>
		<main>
			<slot />
		</main>
	</div>
</template>