<script>
    	import {
		Footer,
		FooterLinkGroup,
		FooterLink,
        P
	} from 'flowbite-svelte';
</script>

<Footer class="md:absolute md:bottom-0 left-0 z-20 w-full">
	<P>Conversations at Twilight</P>
	<FooterLinkGroup
		ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
	>
		<FooterLink href="/About">About</FooterLink>
		<FooterLink href="/">Home</FooterLink>
		<FooterLink href="/">Contact</FooterLink>
		<FooterLink href="/">Links</FooterLink>
	</FooterLinkGroup>
</Footer>