<script lang="ts">
	import { Shield, Lock, ScrollText, Zap } from '@lucide/svelte';

	type Feature = {
		title: string;
		description: string;
		icon: any;
	};

	const features: Feature[] = [
		{
			title: 'Runtime Control',
			description:
				'Provides real-time policy enforcement for AI responses, helping to manage unexpected behavior during operation.',
			icon: Shield
		},
		{
			title: 'Privacy Protection',
			description:
				'Offers policy implementation options designed to protect personal and confidential data from AI system access.',
			icon: Lock
		},
		{
			title: 'Compliance Framework',
			description:
				'Supports adherence to regulatory standards including GDPR, HIPAA, SOC 2, and other relevant regulations.',
			icon: ScrollText
		},
		{
			title: 'Preventative Measures',
			description:
				'Enables runtime policy enforcement to address potential issues before deployment, reducing the need for later corrections.',
			icon: Zap
		}
	];
</script>

<section class="bg-neutral-900 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl">Core Features</h2>
			<p class="mt-4 text-xl text-neutral-400">
				System capabilities for AI operation within defined parameters.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each features as feature}
				<div class="group relative">
					<div
						class="flex h-full flex-col rounded-xl border border-neutral-700 bg-neutral-800 p-6 shadow-sm transition-all duration-300 hover:border-neutral-600"
					>
						<div
							class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-700 p-3"
						>
							<svelte:component this={feature.icon} class="h-6 w-6 text-neutral-300" />
						</div>
						<h3 class="mb-2 text-xl font-medium text-neutral-200">
							{feature.title}
						</h3>
						<p class="flex-grow text-neutral-400">
							{feature.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
