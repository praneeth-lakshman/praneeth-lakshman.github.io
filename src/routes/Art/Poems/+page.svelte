<script>
	import { Heading, Span, P, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import Custombar from '../../Custombar.svelte';
	import Footer from '../../Footer.svelte';
	import BlogCard from '../../BlogCard.svelte';
</script>

<Custombar isActive="Art" />
<Breadcrumb aria-label="Default breadcrumb example" class="pl-3">
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="/Art">Art</BreadcrumbItem>
	<BreadcrumbItem>Poems</BreadcrumbItem>
</Breadcrumb>


<div class="md:grid md:grid-cols-5 md:overscroll-contain">
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
					class="dark:text-green-300">Poems</Span
				></Heading
			>
			<br />
			<P italic align="center"
				><b>Discussing poems of the past, and contributing some of my own to the future</b></P
			>
		</div>
	</div>
	<div
		class="text-center md:align-middle md:h-[50vh] animate-in slide-in-from-bottom duration-1000 md:col-span-2 "
	>
		<div
			class="md:flex md:flex-col md:justify-center md:h-[80vh] md:items-left md:pr-[20px] space-y-4 pt-8 "
		>
			<BlogCard title="I love Ozymandias" date="18th August" subtitle="I am very basic, yes"/>
			<BlogCard title="At what point does poetry become prose?" date="18th August" subtitle=""/>
			<BlogCard title="Language-specific poetic devices" date="18th August" subtitle=""/>
			<BlogCard title="The importance of non-white poets and their voices" date="18th August" subtitle="" />
		</div>
	</div>
</div>