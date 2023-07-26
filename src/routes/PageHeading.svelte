<script lang="ts">
	import { Heading, Span } from 'flowbite-svelte';
	let screenSize: number;
</script>

<svelte:window bind:innerWidth={screenSize} />
<div class="text-center animate-in slide-in-from-bottom duration-1000">
	{#if screenSize > 600}
		<Heading align="center" class="text-m md:text-5xl text-slate-200 pt-2 font-bold" color="white"
			>Welcome to a <Span
				underline
				decorationClass="decoration-3 decoration-teal-200 decoration-double"
				class="dark:text-rose-400">Journey.</Span
			></Heading
		>
		<Heading
			align="center"
			class="text-m md:text-5xl text-slate-200 pt-2 font-bold opacity-75"
			color="white"
			>Welcome to a <Span
				underline
				decorationClass="decoration-3 decoration-teal-200 decoration-double"
				class="dark:text-rose-400">Journey.</Span
			></Heading
		>
		<Heading
			align="center"
			class="text-m md:text-5xl text-slate-200 pt-2 font-bold opacity-50"
			color="white"
			>Welcome to a <Span
				underline
				decorationClass="decoration-3 decoration-teal-200 decoration-double"
				class="dark:text-rose-400">Journey.</Span
			></Heading
		>
	{:else}
		<Heading align="center" class="text-m md:text-5xl text-slate-200 pt-2 font-bold" color="white"
			>Welcome to a <Span
				underline
				decorationClass="decoration-3 decoration-teal-200 decoration-double"
				class="dark:text-rose-400">Journey.</Span
			></Heading
		>
	{/if}
</div>
