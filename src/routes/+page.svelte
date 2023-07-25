<script>
	import Custombar from './Custombar.svelte';

	import { GradientButton, Heading, P, Span, Avatar } from 'flowbite-svelte';
	import Footer from './Footer.svelte';
	let decoration = 'text-m md:text-5xl text-slate-200 pt-2 font-bold';
	let textOpacities = [100, 50, 25];
</script>

<Custombar isActive="Home" />
<div class="text-center animate-in slide-in-from-bottom duration-1000">
	{#each textOpacities as opacity}
		<Heading align="center" class={decoration + ' opacity-' + opacity} color="white"
			>Welcome to a <Span
				underline
				decorationClass="decoration-3 decoration-teal-200 decoration-double"
				class="dark:text-rose-400">Journey.</Span
			></Heading
		>
	{/each}
</div>
<div class="pt-10" />
<div class="items-center flex justify-center basis-full">
	<GradientButton color="redToYellow" size="xl"><b>Read the Latest Article</b></GradientButton>
</div>

<div class="pt-10" />
<div
	class="flex flex-wrap md:flex-nowrap px-5 dark:text-white space-y-4 md:space-y-0 lg:space-x-2 xl:space-x-4"
>
	<div
		class="basis-full md:basis-3/12 rounded-3xl border-4 border-pink-200 p-5 bg-gradient-to-b from-purple-900/100 to-blue-900/100 md:bg-gradient-to-r"
	>
		<Span underline decorationClass="decoration-sky-500 decoration-wavy decoration-green-300"
			><P class="dark:text-cyan-500 text-xl md:text-2xl pb-5" weight="black" align="center"
				>About me
			</P></Span
		>
		<div class="flex items-center space-x-4">
			<Avatar src="avatar.png" border class="ring-red-400 dark:ring-red-300" size="lg" />
			<div class="space-y-1 font-medium text-2xl dark:text-white">
				<div>Praneeth L</div>
				<div class="text-l text-amber-500 dark:text-amber-400">
					Creator of <i>Conversations at Twilight</i>
				</div>
			</div>
		</div>
		<br /><br />
		<P class="text-l md:text-xl align-middle">
			I am a diligent, focused and persevering student who has just finished his GCSEs. Having a
			vast array of varied experiences and, as such, distinctive skills allows me to keep pursing my
			distinct interests whilst always looking for the patterns between them. 
		</P> <br />
				<P class="text-l md:text-xl align-middle">
			I've always wanted a platform where I can share my ideas with like-minded people, and to hold conversations with them about things that are currently on my mind. This blog allows me to document all of these conversations I have, with either myself or the people around me. 
		</P> <br />
	</div>
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
</div>
<Footer />

<style>
</style>
