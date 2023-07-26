<script lang="ts">
	import Custombar from './Custombar.svelte';

	import { GradientButton, P, Span, Avatar } from 'flowbite-svelte';
	import Footer from './Footer.svelte';
	import PageHeading from './PageHeading.svelte';
	import AboutMe from './AboutMe.svelte';
	console.log("loaded");
</script>

<div class="basis-full md:basis-6/12 rounded-3xl border-4 p-5 bg-blue-900/100 border-pink-200">
		<Span underline decorationClass="decoration-sky-500 decoration-wavy decoration-green-300"
			><P class="dark:text-purple-300 text-xl md:text-2xl pb-5" weight="black" align="center"
				>What this website is</P
			></Span
		>
		<P class="px-3 pb-5 md:text-xl text-sm" align="left">
			<i>Dear reader, </i>
			<br /><br />
			Our world is a vibrant interaction between the elements of the nature and the stories of the lives
			who were nurtured by it. One of us cannot unravel this tapestry by ourselves; we require the collaboration
			of those around us. I intend for my journey, brief though as it is, to be a small paving in the
			way of others. I don't know what I'll learn, what I'll discover, what I'll understand - but I can
			find joy in the fact that my steps are not done alone.
		</P>
		<P class="px-3 pb-5 md:text-xl text-sm" align="right">
			In our world, there is no shortage of novelties and familiarities. We are surrounded by things
			we do not know, things we think we know, and things that we do not know if we know. Many ask:
			Why bother exploring? However, if we do not explore, if we do not ask those questions that nag
			us, if we do not attempt to find patterns and solutions, what are we? There is no solace in
			the answer; only calmness in knowing that we tried.
		</P>
		<P class="px-3 pb-5 md:text-xl text-sm" align="left">
			This website aims to document my steps into becoming a more informed individual. You will see
			two different voices in all my blogs, as I try to accurately depict the process in my mind
			whilst learning. I aim for this website to shine light on ideas that have not previously been
			given a second thought; to explore the meaning behind things we take for granted; and to make
			sure that, by the end of each article, you can come away feeling like you have learnt
			something. Thank you for your time and support.
		</P>
	</div>

<style>
</style>

