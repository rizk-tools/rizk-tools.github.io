<script>
	import GridBeam from './GridBeam.svelte';
	import Waitlist from './waitlist.svelte';
	import { Button } from '$lib/components/ui/button';
	import Hero from '$lib/assets/hero.svelte';
	import { Github } from '@lucide/svelte';
</script>

<section id="hero" class="relative overflow-hidden py-20 md:py-32">
	<div class="bg-grid-white/[0.02] absolute inset-0 bg-[size:30px_30px]"></div>

	<GridBeam class="relative z-10">
		<div class="container mx-auto px-4">
			<div class="flex flex-col items-center justify-between gap-12 md:flex-row">
				<div class="grid max-w-xl gap-6 animate-in">
					<h1 class="text-4xl font-bold text-white md:text-6xl">
						Keep Your AI <span class="gradient-text">Safe & Compliant</span>
					</h1>
					<p class="text-lg text-white/80">
						Your AI agents should be powerful, but also responsible. Rizk helps you enforce
						<span class="font-semibold text-electric-lime-400">policy-driven guardrails</span>
						into your AI agents with minimal code.
					</p>

					<Waitlist />

					<div class="mt-2 flex items-center gap-4">
						<a
							href="https://github.com/rizk"
							class="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-shark-700 px-4 text-sm text-white/90 transition-colors hover:bg-shark-800 hover:text-white"
						>
							<Github class="h-4 w-4" />
							GitHub
						</a>
						<span class="text-shark-500">•</span>
						<span class="text-sm text-shark-400">Open Source</span>
					</div>
				</div>

				<div class="relative w-full max-w-md">
					<div
						class="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-electric-lime-400 to-amethyst-500 opacity-30 blur-xl"
					></div>
					<div
						class="relative rounded-lg border border-shark-800 bg-shark-900/50 p-6 backdrop-blur-sm"
					>
						<Hero />
					</div>
				</div>
			</div>
		</div>
	</GridBeam>
</section>
