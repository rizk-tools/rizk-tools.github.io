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
				'Take command of your AI responses with real-time policy enforcement, preventing unpredictable behavior before it happens.',
			icon: Shield
		},
		{
			title: 'Privacy Protection',
			description:
				'Implement robust policies to safeguard personal and confidential data from unauthorized AI exposure.',
			icon: Lock
		},
		{
			title: 'Compliance Made Easy',
			description:
				'Stay compliant with GDPR, HIPAA, SOC 2, and other regulations through automated policy enforcement.',
			icon: ScrollText
		},
		{
			title: 'Proactive Protection',
			description:
				'Prevent issues before they occur with runtime policy enforcement, eliminating the need for costly post-deployment fixes.',
			icon: Zap
		}
	];
</script>

<section class="bg-gray-900 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Core Features</h2>
			<p class="mt-4 text-xl text-gray-400">
				Tools to ensure AI systems operate within defined parameters.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each features as feature}
				<div class="group relative">
					<div
						class="flex h-full flex-col rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-sm transition-all duration-300 hover:border-gray-600"
					>
						<div
							class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-700 p-3"
						>
							<svelte:component this={feature.icon} class="h-6 w-6 text-gray-300" />
						</div>
						<h3 class="mb-2 text-xl font-medium text-gray-200">
							{feature.title}
						</h3>
						<p class="flex-grow text-gray-400">
							{feature.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
