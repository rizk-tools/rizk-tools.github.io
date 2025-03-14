<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Mail, SendHorizonal, Shield, Lock, CheckCircle2 } from '@lucide/svelte';

	let email = '';
	let isLoading = false;
	let showSuccess = false;
	let showError = false;
	let errorMessage = 'Oops! Something went wrong, please try again';
	let showForm = true;

	function rateLimit(): void {
		showError = true;
		errorMessage = 'Too many signups, please try again in a little while';
	}

	async function submitHandler(event: SubmitEvent): Promise<void> {
		event.preventDefault();

		// Compare current time with time of previous sign up
		const timestamp = Date.now();
		const previousTimestamp = localStorage.getItem('loops-form-timestamp');

		// If last sign up was less than a minute ago, display error
		if (previousTimestamp && Number(previousTimestamp) + 60000 > timestamp) {
			rateLimit();
			return;
		}

		localStorage.setItem('loops-form-timestamp', timestamp.toString());

		isLoading = true;

		try {
			const formBody = `userGroup=rizk-waitlist&mailingLists=&email=${encodeURIComponent(email)}`;
			const response = await fetch(
				'https://app.loops.so/api/newsletter-form/cll15d16p0251lb0o8a2us5o1',
				{
					method: 'POST',
					body: formBody,
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}
			);

			if (response.ok) {
				// If response successful, display success
				showSuccess = true;
				showForm = false;
				email = '';
			} else {
				// If response unsuccessful, display error message
				const data = await response.json();
				showError = true;
				errorMessage = data.message ? data.message : response.statusText;
			}
		} catch (error) {
			// Check for cloudflare error
			if (error instanceof Error && error.message === 'Failed to fetch') {
				rateLimit();
				return;
			}

			// If error caught, display error message if available
			showError = true;
			if (error instanceof Error) {
				errorMessage = error.message;
			}
			localStorage.removeItem('loops-form-timestamp');
		} finally {
			isLoading = false;
		}
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

			{#if showForm}
				<form
					class="mx-auto mt-10 max-w-md lg:mt-12"
					on:submit={submitHandler}
					action="https://app.loops.so/api/newsletter-form/cll15d16p0251lb0o8a2us5o1"
					method="POST"
				>
					<div
						class="relative grid grid-cols-[1fr_auto] items-center rounded-full border border-shark-700 bg-shark-900/50 pr-3 shadow-lg backdrop-blur-sm transition-all duration-200 focus-within:border-electric-lime-400/50 focus-within:shadow-electric-lime-400/10"
					>
						<Mail
							class="pointer-events-none absolute inset-y-0 left-5 my-auto h-5 w-5 text-shark-400"
						/>

						<input
							placeholder="your@company.com"
							class="h-14 w-full bg-transparent pl-12 text-white placeholder:text-shark-500 focus:outline-none"
							type="email"
							bind:value={email}
							required
						/>

						<div class="md:pr-1.5 lg:pr-0">
							<Button
								type="submit"
								aria-label="submit"
								class="rounded-full bg-electric-lime-400 text-black hover:bg-electric-lime-500"
								disabled={isLoading}
							>
								{#if isLoading}
									<span class="hidden md:block">Please wait...</span>
									<SendHorizonal
										class="relative mx-auto h-5 w-5 animate-pulse md:hidden"
										strokeWidth={2}
									/>
								{:else}
									<span class="hidden md:block">Join Now</span>
									<SendHorizonal class="relative mx-auto h-5 w-5 md:hidden" strokeWidth={2} />
								{/if}
							</Button>
						</div>
					</div>
					{#if showError}
						<p class="mt-3 text-sm text-red-500">
							{errorMessage}
						</p>
					{:else}
						<p class="mt-3 text-xs text-shark-500">
							By joining, you agree to our Terms of Service and Privacy Policy.
						</p>
					{/if}
				</form>
			{/if}

			{#if showSuccess}
				<div
					class="mx-auto mt-10 max-w-md rounded-lg border border-electric-lime-400/30 bg-shark-900/50 p-6 lg:mt-12"
				>
					<CheckCircle2 class="mx-auto mb-4 h-12 w-12 text-electric-lime-400" />
					<h3 class="mb-2 text-xl font-semibold text-white">Thanks for joining!</h3>
					<p class="text-white/70">We'll be in touch with updates about our launch.</p>
				</div>
			{/if}
		</div>
	</div>
</section>
