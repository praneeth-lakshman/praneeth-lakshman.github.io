<script>
	import { Heading, Span, P, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import Custombar from '../Custombar.svelte';
	import Footer from '../Footer.svelte';
	import { base } from '$app/paths';
</script>

<Custombar isActive="Science" />
<div class="text-center animate-in slide-in-from-bottom duration-1000">
	<Heading align="center" class="text-m md:text-5xl text-slate-200 pt-2 font-bold" color="white"
		><Span
			underline
			decorationClass="decoration-3 decoration-blue-500 decoration-double"
			class="dark:text-red-500">Science</Span
		></Heading
	>
	<br />
	<P italic align="center"><b>An analysis of the patterns that arise around us</b></P>
</div>
<br />
<br />
<div class="flex flex-wrap px-5 dark:text-white space-y-4">
	<div
		class="basis-full rounded-3xl border-4 border-red-200 p-5 bg-gradient-to-b from-purple-900/100 to-blue-600/100 md:bg-gradient-to-tr hover:bg-gradient-to-bl hover:border-purple-600"
	>
		<a href={base + '/Science/DeepDive'}>
			<Span underline decorationClass="decoration-wavy decoration-green-300"
				><P class="dark:text-purple-300 text-xl md:text-2xl pb-5" weight="black" align="center"
					>Deep Dive</P
				></Span
			>

			<P class="px-3 pb-5 md:text-l text-sm" align="center">
				Click here if you want to understand core topics within Physics, Biology, Chemistry, and
				Psychology - but also be able to explain it to others with ease.
			</P>
		</a>
	</div>

	<div
		class="basis-full rounded-3xl border-4 border-red-200 p-5 bg-gradient-to-b from-red-800/100 to-pink-400/100 md:bg-gradient-to-tr hover:bg-gradient-to-bl hover:border-pink-600"
	>
		<a href={base + '/Science/History'}>
			<Span underline decorationClass="decoration-wavy decoration-blue-300"
				><P class="dark:text-green-300 text-xl md:text-2xl pb-5" weight="black" align="center"
					>History of Science</P
				></Span
			>

			<P class="px-3 pb-5 md:text-l text-sm" align="center">
				Click here if you have ever wondered how science developed through the ages; not just in the
				Western world, but the global story of the pursuit of knowledge.
			</P>
		</a>
	</div>
	<div
		class="basis-full rounded-3xl border-4 border-red-200 p-5 bg-gradient-to-b from-lime-600/100 to-teal-600/100 md:bg-gradient-to-tr hover:bg-gradient-to-bl hover:border-green-600"
	>
		<a href={base + '/Science/Futurology'}>
			<Span underline decorationClass="decoration-wavy decoration-amber-300"
				><P class="dark:text-red-300 text-xl md:text-2xl pb-5" weight="black" align="center"
					>Futurology</P
				></Span
			>

			<P class="px-3 pb-5 md:text-l text-sm" align="center">
				Click here if you want to understand the coming waves of science and technology.
			</P>
		</a>
	</div>
</div>
<Footer />
