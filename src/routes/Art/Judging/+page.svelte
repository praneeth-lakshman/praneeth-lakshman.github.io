<script>
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	import Custombar from '../../Custombar.svelte';
	import SectionLayout from '../../SectionLayout.svelte';
	import {Judging as list} from '../../listOfArticles'
	import BlogCardLayout from '../../BlogCardLayout.svelte';
</script>

<Custombar isActive="Art" />
<Breadcrumb aria-label="Default breadcrumb example" class="pl-3">
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="/Art">Art</BreadcrumbItem>
	<BreadcrumbItem>Judging</BreadcrumbItem>
</Breadcrumb>

<div class="md:grid md:grid-cols-5 md:overscroll-contain">

	<SectionLayout title="Judging Art" description="Join my exploration as I find out: what makes art good?" />
<BlogCardLayout {list} />
</div>
