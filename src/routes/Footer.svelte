<script>
	import { Footer, FooterLinkGroup, FooterLink, P } from 'flowbite-svelte';
	import { base } from '$app/paths';
</script>

<br />
<br />
<br />
<br />
<br />
<footer
	class="bg-opacity-75
	  bg-sky-950
             text-3xl text-white text-center
             border-t-4 border-red-500
             fixed
             inset-x-0
             bottom-0
             p-4"
>
	<P>Conversations at Twilight</P>
	<FooterLinkGroup
		ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
	>
		<FooterLink href="{base}/About">About</FooterLink>
		<FooterLink href="{base}/">Home</FooterLink>
		<FooterLink href="{base}/">Contact</FooterLink>
		<FooterLink href="{base}/">Links</FooterLink>
	</FooterLinkGroup>
</footer>
