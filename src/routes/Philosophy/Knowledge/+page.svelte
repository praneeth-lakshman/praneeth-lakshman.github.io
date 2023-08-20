<script>
	import { Heading, Span, P, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import Custombar from '../../Custombar.svelte';
	import Footer from '../../Footer.svelte';
		import {Knowledge as list} from '../../listOfArticles'
	import BlogCard from '../../BlogCard.svelte';
	import BlogCardLayout from '../../BlogCardLayout.svelte';
	import SectionLayout from '../../SectionLayout.svelte';
</script>

<Custombar isActive="Philosophy" />
<Breadcrumb aria-label="Default breadcrumb example" class="pl-3">
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="/Philosophy">Philosophy</BreadcrumbItem>
	<BreadcrumbItem>Knowledge</BreadcrumbItem>
</Breadcrumb>


<div class="md:grid md:grid-cols-5 md:overscroll-contain">

	<SectionLayout title="Knowledge" description="Are we rational beings, or irrational animals? What does it mean to know?" />
<BlogCardLayout {list} />
</div>