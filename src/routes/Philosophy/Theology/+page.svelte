<script>
	import { Heading, Span, P, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import Custombar from '../../Custombar.svelte';
	import Footer from '../../Footer.svelte';
</script>

<Custombar isActive="Philosophy" />
<Breadcrumb aria-label="Default breadcrumb example" class="pl-3">
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="/Philosophy">Philosophy</BreadcrumbItem>
	<BreadcrumbItem>Theology</BreadcrumbItem>
</Breadcrumb>
<div class="text-center animate-in slide-in-from-bottom duration-1000">
	<Heading align="center" class="text-m md:text-5xl text-slate-200 pt-2 font-bold" color="white"
		><Span
			underline
			decorationClass="decoration-3 decoration-blue-500 decoration-double"
			class="dark:text-green-300">Theology</Span
		></Heading
	>
	<br />
	<P italic align="center"><b>Understanding the <i>why</i> behind God</b></P>
</div>
<br />
<br />
<br />
<br />
<br />
<Heading align="center" class="text-m md:text-5xl text-slate-200 pt-2 font-bold" color="white"
	>Content Will Be Added Soon; Thank you!</Heading
>
<Footer />
