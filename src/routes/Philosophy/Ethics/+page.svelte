<script>
	import { Heading, Span, P, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import Custombar from '../../Custombar.svelte';
	import {Ethics as list} from '../../listOfArticles'
	import BlogCardLayout from '../../BlogCardLayout.svelte';
	import SectionLayout from '../../SectionLayout.svelte';
</script>

<Custombar isActive="Philosophy" />
<Breadcrumb aria-label="Default breadcrumb example" class="pl-3">
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="/Philosophy">Philosophy</BreadcrumbItem>
	<BreadcrumbItem>Ethics</BreadcrumbItem>
</Breadcrumb>


<div class="md:grid md:grid-cols-5 md:overscroll-contain">

	<SectionLayout title="Ethics" description="What is right? What should we do?"/>
<BlogCardLayout {list} />
</div>