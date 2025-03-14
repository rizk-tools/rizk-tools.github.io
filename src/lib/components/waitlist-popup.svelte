<script lang="ts">
	import { Mail, SendHorizontal } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';

	export let isOpen = false;
	export let onOpenChange: (open: boolean) => void;

	let email = '';
	let isLoading = false;
	let showSuccess = false;
	let showError = false;
	let errorMessage = 'Oops! Something went wrong, please try again';
	let showForm = true;

	function rateLimit(): void {
		showError = true;
		errorMessage = 'Too many signups, please try again in a little while';
		showForm = false;
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

	function resetForm(): void {
		showSuccess = false;
		showError = false;
		errorMessage = 'Oops! Something went wrong, please try again';
		showForm = true;
	}

	function handleClose() {
		if (showSuccess) {
			// Reset the form when closing after success
			setTimeout(() => {
				resetForm();
			}, 300); // Delay to allow animation to complete
		}
		onOpenChange(false);
	}
</script>

<Dialog.Root bind:open={isOpen} onOpenChange={handleClose}>
	<Dialog.Portal>
		<Dialog.Overlay class="bg-black/60" />
		<Dialog.Content class="border border-gray-700 bg-[#3a3a3a] p-0 shadow-md sm:max-w-md">
			<div class="p-6">
				<Dialog.Title class="text-center text-2xl font-bold text-white">
					{#if showSuccess}
						Thank You!
					{:else}
						Join Our Waitlist
					{/if}
				</Dialog.Title>

				<Dialog.Description class="mt-2 text-center text-gray-400">
					{#if !showSuccess}
						Get early access to our platform.
					{/if}
				</Dialog.Description>

				{#if showForm}
					<div class="mt-6">
						<form
							class="space-y-4"
							on:submit={submitHandler}
							action="https://app.loops.so/api/newsletter-form/cll15d16p0251lb0o8a2us5o1"
							method="POST"
						>
							<div class="relative rounded-md border border-gray-600 bg-gray-700/50">
								<Mail
									class="pointer-events-none absolute inset-y-0 left-3 my-auto h-5 w-5 text-gray-400"
								/>
								<input
									placeholder="your@company.com"
									class="h-12 w-full bg-transparent pl-10 pr-3 text-white placeholder:text-gray-500 focus:outline-none"
									type="email"
									bind:value={email}
									required
								/>
							</div>

							{#if showError}
								<p class="text-sm text-red-400">
									{errorMessage}
								</p>
							{/if}

							<Button
								type="submit"
								class="h-12 w-full rounded-md bg-electric-lime-400 font-medium text-black hover:bg-electric-lime-500"
								disabled={isLoading}
							>
								{#if isLoading}
									<span class="flex items-center justify-center"> Please wait... </span>
								{:else}
									<span class="flex items-center justify-center gap-2">
										Join Waitlist
										<SendHorizontal class="h-4 w-4" />
									</span>
								{/if}
							</Button>
						</form>
					</div>
				{/if}

				{#if showSuccess}
					<div class="mt-6 text-center">
						<p class="text-white/80">
							We'll be in touch with updates about our launch. Get ready for a secure AI experience!
						</p>
						<Button
							variant="outline"
							class="mt-6 border-gray-600 bg-gray-700 text-white hover:bg-gray-600"
							on:click={handleClose}
						>
							Close
						</Button>
					</div>
				{/if}
			</div>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
