<script lang="ts">
	import { page } from "$app/stores";
import { A, Heading, P, Secondary } from "flowbite-svelte";

    export let date: String, title: String, subtitle: String = "";

    export let slug: String = title.replaceAll(" ", "-");
</script>
<div class="border-4 p-3 rounded-xl">
    <A href={$page.url.pathname + "/" + slug}>
    <Heading tag="h2" class="md:text-left">{title} <Secondary class="ml-2">{subtitle}</Secondary></Heading>
    <br/>
    <P italic class="text-center">Published: {date}</P>
    </A>
</div>