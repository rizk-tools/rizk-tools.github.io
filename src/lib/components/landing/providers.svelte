<script lang="ts">
	import AnimatedBeamMultipleInput from '$lib/components/ui/AnimatedBeamMultipleInput/AnimatedBeamMultipleInput.svelte';
</script>

<section class="relative py-16">
	<div class="container relative mx-auto max-w-6xl px-4">
		<div class="space-y-12">
			<div class="mx-auto max-w-3xl text-center">
				<h3 class="mb-4 text-2xl font-semibold text-zinc-100">
					Works With Your Favorite AI Providers
				</h3>
				<p class="text-lg leading-relaxed text-zinc-400">
					Rizk seamlessly integrates with leading AI providers, allowing you to maintain control
					while leveraging the best language models for your needs.
				</p>
			</div>

			<div class="relative">
				<AnimatedBeamMultipleInput />

				<div class="mt-8 text-center">
					<p class="text-sm text-zinc-500">
						Rizk works with OpenAI, Anthropic, Google AI, and other leading providers.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
