<script lang="ts">
	import { Heading, Span, P, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import Custombar from '../../Custombar.svelte';
	import Footer from '../../Footer.svelte';
	import {Futurology as list} from '../../listOfArticles';
	import BlogCard from '../../BlogCard.svelte';
	import BlogCardLayout from '../../BlogCardLayout.svelte';
	import SectionLayout from '../../SectionLayout.svelte';
</script>

<Custombar isActive="Science" />
<Breadcrumb aria-label="Default breadcrumb example" class="pl-3">
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="/Science">Science</BreadcrumbItem>
	<BreadcrumbItem>Futurology</BreadcrumbItem>
</Breadcrumb>

<div class="md:grid md:grid-cols-5 md:overscroll-contain">
	
	<SectionLayout title="Futurology" description="Science at the edge of today, base of tomorrow" />
<BlogCardLayout {list} />
</div>
