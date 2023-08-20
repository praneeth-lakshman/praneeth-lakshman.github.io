<script>
	import { Heading, P, Span } from 'flowbite-svelte';
	import Custombar from '../Custombar.svelte';
	import Footer from '../Footer.svelte';
	import { base } from '$app/paths';
</script>

<Custombar isActive="Art" />
<div class="text-center animate-in slide-in-from-bottom duration-1000">
	<Heading align="center" class="text-m md:text-5xl text-slate-200 pt-2 font-bold" color="white"
		><Span
			underline
			decorationClass="decoration-3 decoration-blue-500 decoration-double"
			class="dark:text-red-500">Art</Span
		></Heading
	>
	<br />
	<P italic align="center"><b>The condensed, yet fully realised, human spirit</b></P>
</div>
<br />

<div class="flex flex-wrap px-5 dark:text-white space-y-2">
	<div
		class="basis-full rounded-3xl border-4 border-red-200 p-5 bg-gradient-to-b from-purple-900/100 to-blue-600/100 md:bg-gradient-to-tr hover:bg-gradient-to-bl hover:border-purple-600"
	>
		<a href={base + '/Art/Judging'}>
			<Span underline decorationClass="decoration-wavy decoration-green-300"
				><P class="dark:text-purple-300 text-xl md:text-2xl pb-5" weight="black" align="center"
					>Judging</P
				></Span
			>

			<P class="px-3 pb-5 md:text-l text-sm" align="center">
				Click here to understand ways and methods to try and analyse pieces of art, no matter the medium. 
			</P>
		</a>
	</div>

	<div
		class="basis-full rounded-3xl border-4 border-red-200 p-5 bg-gradient-to-b from-lime-600/100 to-teal-600/100 md:bg-gradient-to-tr hover:bg-gradient-to-bl hover:border-green-600"
	>
		<a href={base + '/Art/Music'}>
			<Span underline decorationClass="decoration-wavy decoration-amber-300"
				><P class="dark:text-red-300 text-xl md:text-2xl pb-5" weight="black" align="center"
					>Music</P
				></Span
			>

			<P class="px-3 pb-5 md:text-l text-sm" align="center">
				My journey with music, and an exploration of what it means to create music and consume it too.
			</P>
		</a>
	</div>
	<div
		class="basis-full rounded-3xl border-4 border-red-200 p-5 bg-gradient-to-b from-purplelove1 to-purplelove2 md:bg-gradient-to-tr hover:bg-gradient-to-bl hover:border-purplelove2"
	>
		<a href={base + '/Art/Poems'}>
			<Span underline decorationClass="decoration-wavy decoration-grey-300"
				><P class="dark:text-blue-300 text-xl md:text-2xl pb-5" weight="black" align="center"
					>Poems</P
				></Span
			>

			<P class="px-3 pb-5 md:text-l text-sm" align="center">
				Some of my own, some analyses on the works of others.
			</P>
		</a>
	</div>
	<div
		class="basis-full rounded-3xl border-4 border-red-200 p-5 bg-gradient-to-b from-greenbeach1 to-greenbeach2 md:bg-gradient-to-tr hover:bg-gradient-to-bl hover:border-greenbeach2"
	>
		<a href={base + '/Art/VideoGames'}>
			<Span underline decorationClass="decoration-wavy decoration-red-600"
				><P class="dark:text-amber-300 text-xl md:text-2xl pb-5" weight="black" align="center"
					>Video Games</P
				></Span
			>

			<P class="px-3 pb-5 md:text-l text-sm" align="center">
				Understanding the art within, and produced by, video games. 
			</P>
		</a>
	</div>
</div>
