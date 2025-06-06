<script lang="ts">
	import GridBeam from './GridBeam.svelte';
	import { Button } from '$lib/components/ui/button';
	import HeroImg from '$lib/assets/screenshot.png';
	import { Github } from '@lucide/svelte';
	import WaitlistPopup from './waitlist-popup.svelte';

	let isWaitlistPopupOpen = $state(false);

	function handleOpenWaitlistPopup() {
		isWaitlistPopupOpen = true;
	}

	function handleWaitlistPopupOpenChange(open: boolean) {
		isWaitlistPopupOpen = open;
	}
</script>

<section id="hero" class="relative overflow-hidden py-20 md:py-32">
	<div class="bg-grid-white/[0.02] absolute inset-0 bg-[size:30px_30px]"></div>

	<GridBeam class="relative z-10">
		<div class="container mx-auto px-4">
			<div class="flex flex-col items-center justify-between gap-x-24 gap-y-12 md:flex-row">
				<div class="grid gap-6 animate-in">
					<h1 class="text-4xl font-bold text-white md:text-6xl">
						Keep Your AI <span class="gradient-text">Safe & Compliant</span>
					</h1>
					<p class="text-lg text-white/80">
						Your AI agents should be powerful, but also responsible. Rizk helps you enforce
						<span class="font-semibold text-electric-lime-400">policy-driven guardrails</span>
						into your AI agents with minimal code.
					</p>

					<div class="flex flex-col gap-4 sm:flex-row">
						<Button
							class="w-full rounded-md bg-electric-lime-400 text-black hover:bg-electric-lime-500 sm:w-auto"
							onclick={handleOpenWaitlistPopup}
						>
							Join Waitlist
						</Button>

						<a
							href="https://github.com/rizk-tools"
							class="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-shark-700 px-4 text-sm text-white/90 transition-colors hover:bg-shark-800 hover:text-white"
						>
							<Github class="h-4 w-4" />
							GitHub
						</a>
					</div>
				</div>

				<div class="relative max-w-3xl">
					<div
						class="absolute -inset-0.5 rounded bg-gradient-to-r from-electric-lime-400 to-amethyst-500 opacity-30 blur-xl"
					></div>
					<div class="relative rounded bg-shark-900/50 backdrop-blur-sm">
						<img src={HeroImg} alt="Hero Image" class="h-full w-full object-cover" />
					</div>
				</div>
			</div>
		</div>
	</GridBeam>

	<WaitlistPopup isOpen={isWaitlistPopupOpen} onOpenChange={handleWaitlistPopupOpenChange} />
</section>
