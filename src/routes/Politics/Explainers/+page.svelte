<script>
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import Custombar from '../../Custombar.svelte';
	import {Explainers as list} from '../../listOfArticles';
	import SectionLayout from '../../SectionLayout.svelte';
	import BlogCardLayout from '../../BlogCardLayout.svelte';
</script>

<Custombar isActive="Politics" />
<Breadcrumb aria-label="Default breadcrumb example" class="pl-3">
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="/Politics">Politics and Economics</BreadcrumbItem>
	<BreadcrumbItem>Explainers</BreadcrumbItem>
</Breadcrumb>


<div class="md:grid md:grid-cols-5 md:overscroll-contain">
	<SectionLayout title="Explainers on Politics and Economics" description="Concepts broken down for easy digestion" />
	<BlogCardLayout {list} />
</div>
