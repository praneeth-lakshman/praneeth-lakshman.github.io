<script>
	import { Heading, Span, P, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import Custombar from '../../Custombar.svelte';
	import BlogCard from '../../BlogCard.svelte';
	import {HistoryScience as list} from '../../listOfArticles';
	import BlogCardLayout from '../../BlogCardLayout.svelte';
	import SectionLayout from '../../SectionLayout.svelte';

</script>

<Custombar isActive="Science" />
<Breadcrumb aria-label="Default breadcrumb example" class="pl-3">
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="/Science">Science</BreadcrumbItem>
	<BreadcrumbItem>History of Science</BreadcrumbItem>
</Breadcrumb>
<div class="md:grid md:grid-cols-5 md:overscroll-contain">
	
	<SectionLayout title="History of Science" description="Detailing the spider-web throughout time of scientific discoveries" />
	<BlogCardLayout {list} />
</div>
