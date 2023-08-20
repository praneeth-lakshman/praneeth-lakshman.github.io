<script lang="ts">
	import BlogCard from "./BlogCard.svelte";


type BlogC = {
    title: string;
    date: string;
    subtitle: string;
}

export let list: Array<BlogC>;

</script>

<div
		class="text-center md:align-middle md:h-[50vh] animate-in slide-in-from-bottom duration-1000 md:col-span-2"
	>
		<div
			class="md:flex md:flex-col md:justify-center md:h-[80vh] md:items-left md:pr-[20px] space-y-1 pt-8"
		>
            {#each list as card}}
            <BlogCard title={card.title} date={card.date} subtitle={card.subtitle} />
            {/each}
		</div>
	</div>