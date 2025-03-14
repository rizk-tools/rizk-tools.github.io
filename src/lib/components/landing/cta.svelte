<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Mail, SendHorizontal, Shield, Lock, CheckCircle2 } from '@lucide/svelte';
	import WaitlistPopup from '../waitlist-popup.svelte';

	let isWaitlistPopupOpen = $state(false);

	function handleOpenWaitlistPopup() {
		isWaitlistPopupOpen = true;
	}

	function handleWaitlistPopupOpenChange(open: boolean) {
		isWaitlistPopupOpen = open;
	}
</script>

<section class="section-padding relative overflow-hidden border-t border-shark-800 bg-[#080808]">
	<div class="bg-grid-white/[0.02] absolute inset-0 bg-[size:30px_30px]"></div>

	<div class="container relative z-10 mx-auto px-6">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-4 text-4xl font-bold text-white lg:text-5xl">
				<span class="gradient-text">Secure AI Compliance</span>
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-white/70">
				Join the waitlist and be among the first to access our AI guardrails management platform.
				Get 3 months free at launch.
			</p>

			<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
				<div
					class="flex items-center gap-3 rounded-full border border-shark-800 bg-shark-900/80 px-6 py-2.5 backdrop-blur-sm transition-all hover:border-electric-lime-400/30"
				>
					<Shield class="h-5 w-5 text-electric-lime-400" />
					<span class="text-sm text-white/80">Guaranteed Compliance</span>
				</div>
				<div
					class="flex items-center gap-3 rounded-full border border-shark-800 bg-shark-900/80 px-6 py-2.5 backdrop-blur-sm transition-all hover:border-electric-lime-400/30"
				>
					<Lock class="h-5 w-5 text-electric-lime-400" />
					<span class="text-sm text-white/80">Secure Data</span>
				</div>
				<div
					class="flex items-center gap-3 rounded-full border border-shark-800 bg-shark-900/80 px-6 py-2.5 backdrop-blur-sm transition-all hover:border-electric-lime-400/30"
				>
					<CheckCircle2 class="h-5 w-5 text-electric-lime-400" />
					<span class="text-sm text-white/80">Minutes to Setup</span>
				</div>
			</div>

			<div class="mx-auto mt-10 max-w-md lg:mt-12">
				<Button
					class="rounded-md bg-electric-lime-400 text-black hover:bg-electric-lime-500"
					onclick={handleOpenWaitlistPopup}
				>
					<span class="flex items-center gap-2">
						Join Waitlist
						<SendHorizontal class="h-4 w-4" strokeWidth={2} />
					</span>
				</Button>
			</div>
		</div>
	</div>

	<WaitlistPopup isOpen={isWaitlistPopupOpen} onOpenChange={handleWaitlistPopupOpenChange} />
</section>
