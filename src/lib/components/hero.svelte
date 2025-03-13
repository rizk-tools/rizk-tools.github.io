<script>
	import GridBeam from './GridBeam.svelte';
	import Waitlist from './waitlist.svelte';
	import { Button } from '$lib/components/ui/button';
	import HeroVideo from '$lib/assets/hero.webm';
	import { Github } from '@lucide/svelte';
</script>

<div class="dark:bg-grid-white/[0.05] bg-grid-black/[0.07] h-[400px] w-full py-20">
	<GridBeam class="flex items-start justify-start">
		<div class="container mx-auto flex gap-4">
			<div class="grid gap-2">
				<h1 class="max-w-sm text-4xl font-bold text-white sm:text-5xl">
					Keep Your AI Safe & Compliant
				</h1>
				<p class="max-w-lg text-white">
					Your AI agents should be powerful, but also responsible. Rizk helps you enforce <span
						class="text-electric-lime-400">policy-driven guardrails</span
					> into your AI agents with minimal code.
				</p>

				<Waitlist />

				<Button variant="outline" class="w-fit">
					<Github class="h-4 w-4" />
					GitHub</Button
				>
			</div>

			<div class="w-full max-w-xs">
				<video class="w-full" src={HeroVideo} autoplay muted loop />
			</div>
		</div>
	</GridBeam>
</div>
