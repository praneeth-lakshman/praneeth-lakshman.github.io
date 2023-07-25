<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	export let listOfItems = ['Home', 'Science', 'Philosophy', 'Art', 'Politics', 'About'];
	export let isActive = 'Home';
	import { base } from '$app/paths';

	let zeroValues = new Array(listOfItems.length).fill(0);

	switch (isActive) {
		case 'Home':
			zeroValues[0] = 1;
			break;
		case 'Science':
			zeroValues[1] = 1;
			break;
		case 'Philosophy':
			zeroValues[2] = 1;
			break;
		case 'Art':
			zeroValues[3] = 1;
			break;
		case 'Politics':
			zeroValues[4] = 1;
			break;
		case 'About':
			zeroValues[5] = 1;
			break;
	}

	const truthValues = listOfItems.map(function (x, i) {
		return {
			name: x,
			active: !!zeroValues[i]
		};
	});
	console.log(truthValues);
</script>

<div class="relative px-8">
	<Navbar
		navClass="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 border-b"
		let:hidden
		let:toggle
	>
		<NavBrand href="/">
			<span
				class="self-center whitespace-nowrap text-xl font-semibold dark:text-white underline underline-offset-8"
				>Conversations at Twilight</span
			>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
			<!--       <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/services">Services</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi> -->
			{#each truthValues as { name, active }}
				{#if name === 'Home'}
					<NavLi href="{base}/" {active}>Home</NavLi>
				{:else}
					<NavLi href={base + '/' + name} {active}>{name}</NavLi>
				{/if}
			{/each}
		</NavUl>
	</Navbar>

	<div class="pb-20" />
</div>
