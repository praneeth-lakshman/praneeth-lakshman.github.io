<script>
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import Custombar from '../../Custombar.svelte';
	import SectionLayout from '../../SectionLayout.svelte';
	import BlogCardLayout from '../../BlogCardLayout.svelte';
	import {Ideologies as list} from '../../listOfArticles';
</script>

<Custombar isActive="Politics" />
<Breadcrumb aria-label="Default breadcrumb example" class="pl-3">
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="/Politics">Politics and Economics</BreadcrumbItem>
	<BreadcrumbItem>Ideologies</BreadcrumbItem>
</Breadcrumb>

<div class="md:grid md:grid-cols-5 md:overscroll-contain">
	<SectionLayout title="Ideologies" description="Political and economical ideologies, discussed" />
<BlogCardLayout {list}/>
</div>
