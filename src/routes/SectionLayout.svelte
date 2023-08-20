<script lang="ts">
	import { Heading, P, Span } from "flowbite-svelte";

    export let title: String, description: String;
</script>

	<div
		class="text-center md:align-middle md:h-[50vh] animate-in slide-in-from-bottom duration-1000 md:col-span-3 sm:pb-8"
	>
		<div class="md:flex md:flex-col md:justify-center md:h-[80vh] md:items-center">
			<Heading
				align="center"
				class="text-m md:text-5xl text-slate-200 pt-2 font-bold"
				color="white"
			>
				<Span
					underline
					decorationClass="decoration-3 decoration-blue-500 decoration-double"
					class="dark:text-green-300">{title}</Span
				></Heading
			>
			<br />
			<P italic align="center"
				><b>{description}</b></P
			>
		</div>
	</div>