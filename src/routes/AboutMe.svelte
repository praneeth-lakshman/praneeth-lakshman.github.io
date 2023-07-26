<script>
    import { Avatar, P, Span } from 'flowbite-svelte';
    </script>
    <div
		class="basis-full md:basis-3/12 rounded-3xl border-4 border-pink-200 p-5 bg-gradient-to-b from-purple-900/100 to-blue-900/100 md:bg-gradient-to-r"
	>
		<Span underline decorationClass="decoration-sky-500 decoration-double"
			><P class="dark:text-cyan-300 text-xl md:text-2xl pb-5" weight="black" align="center"
				>About me
			</P></Span
		>
		<div class="flex items-center space-x-4">
			<Avatar src="avatar.png" border class="ring-red-400 dark:ring-red-300" size="lg" />
			<div class="space-y-1 font-medium text-xl dark:text-white">
				<div>Praneeth L</div>
				<div class="text-sm text-amber-500 dark:text-amber-400">
					Creator of <i>Conversations at Twilight</i>
				</div>
			</div>
		</div>
		<br /><br />
		<P class="text-l md:text-xl align-middle">
			I am a diligent, focused and persevering student who has just finished his GCSEs. Having a
			vast array of varied experiences and, as such, distinctive skills allows me to keep pursing my
			distinct interests whilst always looking for the patterns between them. 
		</P> <br />
				<P class="text-l md:text-xl align-middle">
			I've always wanted a platform where I can share my ideas with like-minded people, and to hold conversations with them about things that are currently on my mind. This blog allows me to document all of these conversations I have, with either myself or the people around me. 
		</P> <br />
	</div>