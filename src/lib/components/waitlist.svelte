<script lang="ts">
	import { onMount } from 'svelte';

	let email = '';
	let isLoading = false;
	let showSuccess = false;
	let showError = false;
	let errorMessage = 'Oops! Something went wrong, please try again';
	let showBackButton = false;
	let showForm = true;

	function rateLimit(): void {
		showError = true;
		errorMessage = 'Too many signups, please try again in a little while';
		showForm = false;
		showBackButton = true;
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
		showForm = false;

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
			showBackButton = true;
		}
	}

	function resetForm(): void {
		showSuccess = false;
		showError = false;
		errorMessage = 'Oops! Something went wrong, please try again';
		showBackButton = false;
		showForm = true;
	}
</script>

<div class="newsletter-form-container">
	{#if showForm}
		<form
			class="newsletter-form flex gap-2"
			on:submit={submitHandler}
			action="https://app.loops.so/api/newsletter-form/cll15d16p0251lb0o8a2us5o1"
			method="POST"
		>
			<input
				class="newsletter-form-input"
				name="newsletter-form-input"
				type="email"
				placeholder="you@example.com"
				required
				bind:value={email}
				style="sans-serif; color: rgb(0, 0, 0); font-size: 14px; margin: 0px 10px 0px 0px; width: 100%; max-width: 300px; min-width: 100px; background: rgb(255, 255, 255); border: 1px solid rgb(209, 213, 219); box-sizing: border-box; box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px; border-radius: 6px; padding: 8px 12px;"
			/>
			<button
				type="submit"
				class="newsletter-form-button"
				style="background: rgb(13, 148, 136); font-size: 14px; color: rgb(255, 255, 255); sans-serif; display: flex; width: min-content; max-width: 300px; white-space: nowrap; height: 38px; align-items: center; justify-content: center; flex-direction: row; padding: 9px 17px; box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px; border-radius: 6px; text-align: center; font-style: normal; font-weight: 500; line-height: 20px; border: none; cursor: pointer;"
				disabled={isLoading}
			>
				{#if isLoading}
					Please wait...
				{:else}
					Join Waitlist
				{/if}
			</button>
		</form>
	{/if}

	{#if showSuccess}
		<div
			class="newsletter-success"
			style="display: flex; align-items: center; justify-content: center; width: 100%;"
		>
			<p
				class="newsletter-success-message"
				style="sans-serif; color: rgb(0, 0, 0); font-size: 14px;"
			>
				Thanks! We'll be in touch!
			</p>
		</div>
	{/if}

	{#if showError}
		<div
			class="newsletter-error"
			style="display: flex; align-items: center; justify-content: center; width: 100%;"
		>
			<p
				class="newsletter-error-message"
				style="sans-serif; color: rgb(185, 28, 28); font-size: 14px;"
			>
				{errorMessage}
			</p>
		</div>
	{/if}

	{#if showBackButton}
		<button
			class="newsletter-back-button"
			type="button"
			on:click={resetForm}
			style="color:#6b7280;font: 14px, sans-serif;margin:10px auto;text-align:center;display:block;background:transparent;border:none;cursor:pointer"
		>
			&larr; Back
		</button>
	{/if}
</div>
