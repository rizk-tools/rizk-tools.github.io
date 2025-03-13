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

<div class="text-white dark:bg-gray-100">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="text-3xl font-extrabold sm:text-4xl">All the features you want</h2>
			<p class="mt-4 text-lg dark:text-gray-600">
				Pellentesque viverra, leo id euismod laoreet, nunc risus molestie orci, vel faucibus quam
				justo id mauris.
			</p>
		</div>
		<dl
			class="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8"
		>
			{#each features as feature}
				<div class="flex">
					<svelte:component
						this={feature.icon}
						class="h-6 w-6 flex-shrink-0 dark:text-violet-600"
					/>
					<div class="ml-3">
						<dt class="text-lg font-medium">{feature.title}</dt>
						<dd class="mt-2 dark:text-gray-600">{feature.description}</dd>
					</div>
				</div>
			{/each}
		</dl>
	</div>
</div>
