<script>
	import { Heading, Span, P, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import Custombar from '../../Custombar.svelte';
	import Footer from '../../Footer.svelte';
</script>

<Custombar isActive="Science" />
<Breadcrumb aria-label="Default breadcrumb example" class="pl-3">
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="/Science">Science</BreadcrumbItem>
	<BreadcrumbItem>History of Science</BreadcrumbItem>
</Breadcrumb>
<div class="text-center animate-in slide-in-from-bottom duration-1000">
	<Heading align="center" class="text-m md:text-5xl text-slate-200 pt-2 font-bold" color="white"
		><Span
			underline
			decorationClass="decoration-3 decoration-blue-500 decoration-double"
			class="dark:text-green-300">History of Science</Span
		></Heading
	>
	<br />
	<P italic align="center"
		><b>Detailing the spider-web throughout time of scientific discoveries</b></P
	>
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
