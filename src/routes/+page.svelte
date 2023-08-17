<script lang="ts">
	import Inspiration from './Inspiration.svelte';
	import WhatWebsite from './WhatWebsite.svelte';
	import Custombar from './Custombar.svelte';
	import { GradientButton } from 'flowbite-svelte';
	import Footer from './Footer.svelte';
	import PageHeading from './PageHeading.svelte';
	import AboutMe from './AboutMe.svelte';
	console.log('loaded');
</script>

<Custombar />
<PageHeading />
<div class="pt-10" />
<div class="items-center flex justify-center basis-full">
	<GradientButton color="redToYellow" size="xl"><b>Read the Latest Article</b></GradientButton>
</div>

<div class="pt-10" />
<div
	class="flex flex-wrap md:flex-nowrap px-5 dark:text-white space-y-4 md:space-y-0 lg:space-x-2 xl:space-x-4"
>
	<AboutMe />
	<WhatWebsite />
	<Inspiration />
</div>
<Footer />

<style>
</style>
