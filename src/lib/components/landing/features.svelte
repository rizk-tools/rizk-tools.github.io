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

<section id="features" class="section-padding relative overflow-hidden bg-[#0c0c0c]">
	<div class="bg-grid-white/[0.02] absolute inset-0 bg-[size:30px_30px]"></div>

	<div class="container relative z-10 mx-auto px-4">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
				<span class="gradient-text">Core Features</span>
			</h2>
			<p class="text-xl text-white/70">
				System capabilities for AI operation within defined parameters.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each features as feature, i}
				<div class="card-hover group" style="animation-delay: {i * 100}ms;">
					<div
						class="flex h-full flex-col rounded-xl border border-shark-800 bg-shark-900/50 p-6 backdrop-blur-sm"
					>
						<div
							class="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-electric-lime-400/20 to-amethyst-500/20 p-3"
						>
							<svelte:component this={feature.icon} class="h-6 w-6 text-electric-lime-400" />
						</div>
						<h3 class="mb-3 text-xl font-medium text-white">
							{feature.title}
						</h3>
						<p class="flex-grow text-white/70">
							{feature.description}
						</p>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-16 text-center">
			<a
				href="#docs"
				class="inline-flex items-center justify-center gap-2 rounded-md bg-electric-lime-400 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-electric-lime-500"
			>
				Explore All Features
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
				>
			</a>
		</div>
	</div>
</section>
