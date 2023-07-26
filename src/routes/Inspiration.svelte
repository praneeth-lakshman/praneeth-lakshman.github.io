<script lang="ts">
  import WhatWebsite from './WhatWebsite.svelte';

	import Custombar from './Custombar.svelte';

	import { GradientButton, P, Span, Avatar } from 'flowbite-svelte';
	import Footer from './Footer.svelte';
	import PageHeading from './PageHeading.svelte';
	import AboutMe from './AboutMe.svelte';
	console.log("loaded");
</script>

<div
		class="basis-full md:basis-3/12 text-fuchsia-400 rounded-3xl border-4 p-5 bg-gradient-to-t from-purple-900/100 to-blue-900/100 md:bg-gradient-to-l border-pink-200"
	>
		<Span underline decorationClass="decoration-sky-500 decoration-wavy decoration-green-300 ">
			<P class="dark:text-fuchsia-300 text-xl md:text-2xl pb-5" weight="black" align="center"
				>Some inspiration</P
			>
		</Span>
		<P italic class="text-l md:text-xl">Wisdom begins in wonder</P>
		<P class="text-l md:text-xl" align="right">- Socrates</P>
		<br />
		<P italic class="text-l md:text-xl"
			>Whoever fights monsters should see to it that in the process he does not become a monster.
			And if you gaze long enough into an abyss, the abyss will gaze back into you.
		</P>
		<P class="text-l md:text-xl" align="right">- Nietzsche</P>

		<br />
		<P italic class="text-l md:text-xl"
			>I know of no better life purpose than to perish in attempting the great and the impossible.
		</P>
		<P class="text-l md:text-xl" align="right">- Nietzsche</P> <br />
		<P italic class="text-l md:text-xl"
			>The sweetest and most inoffensive path of life leads through the avenues of science and
			learning; and whoever can either remove any obstructions in this way, or open up any new
			prospect, ought so far to be esteemed a benefactor to mankind.
		</P>
		<P class="text-l md:text-xl" align="right">- Hume</P>
	</div>

<style>
</style>

