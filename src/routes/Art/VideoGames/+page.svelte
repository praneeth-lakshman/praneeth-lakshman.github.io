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
	<BreadcrumbItem>Video Games</BreadcrumbItem>
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
					class="dark:text-green-300">Video games</Span
				></Heading
			>
			<br />
			<P italic align="center"
				><b>Appreciating video games as an art form, and discussing it with the same integrity as other
			mediums of art</b></P
			>
		</div>
	</div>
	<div
		class="text-center md:align-middle md:h-[50vh] animate-in slide-in-from-bottom duration-1000 md:col-span-2"
	>
		<div
			class="md:flex md:flex-col md:justify-center md:h-[80vh] md:items-left md:pr-[20px] space-y-4 pt-8"
		>
			<BlogCard title="The importance of perspective" date="18th August" subtitle="" />
			<BlogCard
				title="Why the medium of video games is the future"
				date="18th August"
				subtitle="(but only in a certain way)"
			/>
			<BlogCard
				title="Clunky controls and immersive story-telling"
				date="18th August"
				subtitle="How you can have both"
			/>
			<BlogCard
				title="Why video games are currently chained in potential"
				date="18th August"
				subtitle=""
			/>
		</div>
	</div>
</div>
