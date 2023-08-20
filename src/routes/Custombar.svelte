<script lang="ts">
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		DropdownDivider,
		Chevron
	} from 'flowbite-svelte';
	export let listOfItems = ['Home', 'Science', 'Philosophy', 'Art', 'Politics', 'About'];
	export let isActive: string;
	let scienceActive: boolean,
		philoActive: boolean,
		artActive: boolean,
		polActive: boolean,
		abtActive: boolean = false;
	import { base } from '$app/paths';

	let zeroValues = new Array(listOfItems.length).fill(0);

	switch (isActive) {
		case 'Science':
			scienceActive = true;
			break;
		case 'Philosophy':
			philoActive = true;
			break;
		case 'Art':
			artActive = true;
			break;
		case 'Politics':
			polActive = true;
			break;
		case 'About':
			abtActive = true;
			break;
	}
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
			<NavLi id="science" class="cursor-pointer" active={scienceActive}
				><Chevron aligned>Science</Chevron></NavLi
			>
			<NavLi id="philo" class="cursor-pointer" active={philoActive}
				><Chevron aligned>Philosophy</Chevron></NavLi
			>
			<NavLi id="art" class="cursor-pointer" active={artActive}
				><Chevron aligned>Art</Chevron></NavLi
			>
			<NavLi id="pol" class="cursor-pointer" active={polActive}
				><Chevron aligned>Politics and Economy</Chevron></NavLi
			>
			<NavLi id="abt" href={base + '/' + 'About'} active={abtActive}>About</NavLi>
			<Dropdown triggeredBy="#science" class="w-44 z-20">
				<DropdownItem href={base + '/' + 'Science'}>Overview of Science</DropdownItem>
				<DropdownDivider />
				<DropdownItem href={base + '/' + 'Science/DeepDive'}>Deep Dive</DropdownItem>
				<DropdownItem href={base + '/' + 'Science/History'}>History of Science</DropdownItem>
				<DropdownItem href={base + '/' + 'Science/Futurology'}>Futurology</DropdownItem>
			</Dropdown>
			<Dropdown triggeredBy="#philo" class="w-44 z-20">
				<DropdownItem href={base + '/' + 'Philosophy'}>Overview of Philosophy</DropdownItem>
				<DropdownDivider />
				<DropdownItem href={base + '/' + 'Philosophy/Logic'}>Logic</DropdownItem>
				<DropdownItem href={base + '/' + 'Philosophy/Knowledge'}>Knowledge</DropdownItem>
				<DropdownItem href={base + '/' + 'Philosophy/Ethics'}>Ethics</DropdownItem>
				<DropdownItem href={base + '/' + 'Philosophy/Theology'}>Theology</DropdownItem>
			</Dropdown>
			<Dropdown triggeredBy="#art" class="w-44 z-20">
				<DropdownItem href={base + '/' + 'Art'}>Overview of Art</DropdownItem>
				<DropdownDivider />
				<DropdownItem href={base + '/' + 'Art/Judging'}>Judging art</DropdownItem>
				<DropdownItem href={base + '/' + 'Art/Music'}>Music</DropdownItem>
				<DropdownItem href={base + '/' + 'Art/Poems'}>Poems</DropdownItem>
				<DropdownItem href={base + '/' + 'Art/VideoGames'}>Video Games</DropdownItem>
			</Dropdown>
			<Dropdown triggeredBy="#pol" class="w-44 z-20">
				<DropdownItem href={base + '/' + 'Politics'}>Overview of P&E</DropdownItem>
				<DropdownDivider />
				<DropdownItem href={base + '/' + 'Politics/Ideologies'}>Ideologies</DropdownItem>
				<DropdownItem href={base + '/' + 'Politics/Explainers'}>Explainers</DropdownItem>
				<DropdownItem href={base + '/' + 'Politics/History'}>History of P&E</DropdownItem>
			</Dropdown>
		</NavUl>
	</Navbar>

	<div class="pb-20" />
</div>
