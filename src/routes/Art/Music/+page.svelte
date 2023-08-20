<script>
	import { Heading, Span, P, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import Custombar from '../../Custombar.svelte';
	import {Music as list} from '../../listOfArticles'
	import BlogCardLayout from '../../BlogCardLayout.svelte';
	import SectionLayout from '../../SectionLayout.svelte';
</script>

<Custombar isActive="Art" />
<Breadcrumb aria-label="Default breadcrumb example" class="pl-3">
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="/Art">Art</BreadcrumbItem>
	<BreadcrumbItem>Music</BreadcrumbItem>
</Breadcrumb>


<div class="md:grid md:grid-cols-5 md:overscroll-contain">
	<SectionLayout title="Music" description="Discussing music and all its artistic brilliance from beat production to lyrical flair" />
<BlogCardLayout {list} />
</div>