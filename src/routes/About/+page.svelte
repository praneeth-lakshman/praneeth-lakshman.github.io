<script>
	import Custombar from '../Custombar.svelte';
	import { P, Avatar } from 'flowbite-svelte';
</script>

<Custombar isActive="About" />

<div class="grid place-items-center w-screen pt-8 animate-in slide-in-from-bottom duration-1000">
<div class="flex items-center space-x-4 p-8 border-[5px] rounded-3xl">
	<Avatar src="avatar.png" border class="ring-red-400 dark:ring-red-300" size="lg" />
	<div class="space-y-1 font-medium text-2xl dark:text-white">
		<div>Praneeth L</div>
		<div class="text-l text-amber-500 dark:text-amber-400">
			Creator of <i>Conversations at Twilight</i>
		</div>
	</div>
</div>
</div>