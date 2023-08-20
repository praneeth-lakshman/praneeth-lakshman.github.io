<script lang="ts">
	import { Heading, Span, P, A, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import Custombar from '../../Custombar.svelte';
	import BlogCard from '../../BlogCard.svelte';
	import {Deepdive as list} from '../../listOfArticles';
	import BlogCardLayout from '../../BlogCardLayout.svelte';
	import SectionLayout from '../../SectionLayout.svelte';
</script>

<Custombar isActive="Science" />
<Breadcrumb aria-label="Default breadcrumb example" class="pl-3">
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="/Science">Science</BreadcrumbItem>
	<BreadcrumbItem>Deep Dive</BreadcrumbItem>
</Breadcrumb>
<div class="md:grid md:grid-cols-5 md:overscroll-contain">

	<SectionLayout title="Deep Dive" description="More specific articles on Psychology, Physics, Chemistry and Biology" />
<BlogCardLayout {list} />
</div>
