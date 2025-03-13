<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Mail, SendHorizonal, Shield, Lock, CheckCircle2 } from '@lucide/svelte';
</script>

<section class="bg-black py-16 md:py-32">
	<div class="mx-auto max-w-5xl px-6">
		<div class="text-center">
			<h2
				class="text-balance bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-4xl font-semibold text-transparent lg:text-5xl"
			>
				Secure AI Compliance
			</h2>
			<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
				Join the waitlist and be among the first to access our AI guardrails management platform.
				Get 3 months free at launch.
			</p>

			<div class="mt-8 flex flex-wrap items-center justify-center gap-8">
				<div class="flex items-center gap-3 rounded-full bg-slate-900/50 px-6 py-2.5">
					<Shield class="size-5 text-indigo-500" />
					<span class="text-sm text-slate-300">Guaranteed Compliance</span>
				</div>
				<div class="flex items-center gap-3 rounded-full bg-slate-900/50 px-6 py-2.5">
					<Lock class="size-5 text-indigo-500" />
					<span class="text-sm text-slate-300">Secure Data</span>
				</div>
				<div class="flex items-center gap-3 rounded-full bg-slate-900/50 px-6 py-2.5">
					<CheckCircle2 class="size-5 text-indigo-500" />
					<span class="text-sm text-slate-300">Minutes to Setup</span>
				</div>
			</div>

			<form class="mx-auto mt-10 max-w-md lg:mt-12">
				<div
					class="relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border border-slate-800 bg-slate-900/50 pr-3 shadow-lg shadow-indigo-500/10 transition-all duration-200 has-[input:focus]:ring-2 has-[input:focus]:ring-indigo-500/20"
				>
					<Mail
						class="pointer-events-none absolute inset-y-0 left-5 my-auto size-5 text-indigo-500"
					/>

					<input
						placeholder="your@company.com"
						class="h-14 w-full bg-transparent pl-12 text-slate-300 placeholder:text-slate-500 focus:outline-none"
						type="email"
						required
					/>

					<div class="md:pr-1.5 lg:pr-0">
						<Button
							type="submit"
							aria-label="submit"
							class="rounded-(--radius) bg-indigo-500 text-white hover:bg-indigo-600"
						>
							<span class="hidden md:block">Join Now</span>
							<SendHorizonal class="relative mx-auto size-5 md:hidden" strokeWidth={2} />
						</Button>
					</div>
				</div>
			</form>
		</div>
	</div>
</section>
