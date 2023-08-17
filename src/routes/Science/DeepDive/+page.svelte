<script lang="ts">
	import { Heading, Span, P, A, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import Custombar from '../../Custombar.svelte';
	import Footer from '../../Footer.svelte';
	import { base } from '$app/paths';
</script>

<Custombar isActive="Science" />
<Breadcrumb aria-label="Default breadcrumb example" class="pl-3">
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="/Science">Science</BreadcrumbItem>
	<BreadcrumbItem>Deep Dive</BreadcrumbItem>
</Breadcrumb>
<div class="md:grid md:grid-cols-2 md:overscroll-contain">
	<div
		class="text-center md:align-middle md:h-[50vh] animate-in slide-in-from-bottom duration-1000"
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
					class="dark:text-green-300">Deep Dive</Span
				></Heading
			>
			<br />
			<P italic align="center"
				><b>More specific articles on Psychology, Physics, Chemistry and Biology</b></P
			>
		</div>
	</div>
	<div
		class="text-center md:align-middle md:h-[50vh] animate-in slide-in-from-bottom duration-1000"
	>
		<div class="md:flex md:flex-col md:justify-center md:h-[80vh] md:items-center"><P italic>Content will be added soon</P></div>
	</div>
</div>
<br />
<br />
<br />
<br />

<Footer />
