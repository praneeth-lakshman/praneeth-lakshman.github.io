<script lang="ts">
	import { Heading, Span, P, Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import Custombar from '../../Custombar.svelte';
	import BlogCard from '../../BlogCard.svelte';
	import SectionLayout from '../../SectionLayout.svelte';
	import BlogCardLayout from '../../BlogCardLayout.svelte';
	import {History as list} from '../../listOfArticles';
</script>

<Custombar isActive="Politics" />
<Breadcrumb aria-label="Default breadcrumb example" class="pl-3">
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="/Politics">Politics and Economics</BreadcrumbItem>
	<BreadcrumbItem>History of Politics and Economics</BreadcrumbItem>
</Breadcrumb>

<div class="md:grid md:grid-cols-5 md:overscroll-contain">
	<SectionLayout
		title="History of Society"
		description="Understanding the global, not just the Western, development of civilisation through the lens
			of economics and politics"
	/>
	<BlogCardLayout {list} />
</div>
