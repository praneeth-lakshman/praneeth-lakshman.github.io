<script>
	import { Heading, Span, P, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import Custombar from '../Custombar.svelte';

	import { base } from '$app/paths';
</script>

<Custombar isActive="Philosophy" />
<div class="text-center animate-in slide-in-from-bottom duration-1000">
	<Heading align="center" class="text-m md:text-5xl text-slate-200 pt-2 font-bold" color="white"
		><Span
			underline
			decorationClass="decoration-3 decoration-blue-500 decoration-double"
			class="dark:text-red-500">Philosophy</Span
		></Heading
	>
	<br />
	<P italic align="center"><b>Noun: The Love of Wisdom</b></P>
</div>
<br />
<div class="flex flex-wrap px-5 dark:text-white space-y-2">
	<div
		class="basis-full rounded-3xl border-4 border-red-200 p-5 bg-gradient-to-b from-purple-900/100 to-blue-600/100 md:bg-gradient-to-tr hover:bg-gradient-to-bl hover:border-purple-600"
	>
		<a href={base + '/Philosophy/Ethics'}>
			<Span underline decorationClass="decoration-wavy decoration-green-300"
				><P class="dark:text-purple-300 text-xl md:text-2xl pb-5" weight="black" align="center"
					>Ethics</P
				></Span
			>

			<P class="px-3 pb-5 md:text-l text-sm" align="center">
				What is right? What should we do? Exploring the answers to these questions, by drawing upon
				our own pre-held beliefs and also examining the ideas of many philosophers.
			</P>
		</a>
	</div>

	<div
		class="basis-full rounded-3xl border-4 border-red-200 p-5 bg-gradient-to-b from-red-800/100 to-pink-400/100 md:bg-gradient-to-tr hover:bg-gradient-to-bl hover:border-pink-600"
	>
		<a href={base + '/Philosophy/Knowledge'}>
			<Span underline decorationClass="decoration-wavy decoration-blue-300"
				><P class="dark:text-green-300 text-xl md:text-2xl pb-5" weight="black" align="center"
					>Knowledge</P
				></Span
			>

			<P class="px-3 pb-5 md:text-l text-sm" align="center">
				Are we rational beings, or irrational animals? What does it mean <i>to know?</i> How much can
				we know? How do we know?
			</P>
		</a>
	</div>
	<div
		class="basis-full rounded-3xl border-4 border-red-200 p-5 bg-gradient-to-b from-lime-600/100 to-teal-600/100 md:bg-gradient-to-tr hover:bg-gradient-to-bl hover:border-green-600"
	>
		<a href={base + '/Philosophy/Logic'}>
			<Span underline decorationClass="decoration-wavy decoration-amber-300"
				><P class="dark:text-red-300 text-xl md:text-2xl pb-5" weight="black" align="center"
					>Logic</P
				></Span
			>

			<P class="px-3 pb-5 md:text-l text-sm" align="center">
				Understanding the world by using a set of rules to guide us in our examination.
			</P>
		</a>
	</div>
	<div
		class="basis-full rounded-3xl border-4 border-red-200 p-5 bg-gradient-to-b from-purplelove1 to-purplelove2 md:bg-gradient-to-tr hover:bg-gradient-to-bl hover:border-purplelove2"
	>
		<a href={base + '/Philosophy/Theology'}>
			<Span underline decorationClass="decoration-wavy decoration-grey-300"
				><P class="dark:text-blue-300 text-xl md:text-2xl pb-5" weight="black" align="center"
					>Theology</P
				></Span
			>

			<P class="px-3 pb-5 md:text-l text-sm" align="center">
				The philosophy of God and Religion, deliberated on both sides.
			</P>
		</a>
	</div>
</div>
