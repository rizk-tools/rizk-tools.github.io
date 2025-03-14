<script lang="ts">
	import { BarChart3, LineChart, PieChart, Activity, Gauge, Eye } from '@lucide/svelte';

	type TelemetryFeature = {
		title: string;
		description: string;
		icon: any;
	};

	const telemetryFeatures: TelemetryFeature[] = [
		{
			title: 'Real-time Monitoring',
			description:
				'Track AI interactions as they happen with comprehensive real-time monitoring that alerts you to policy violations instantly.',
			icon: Activity
		},
		{
			title: 'Compliance Dashboards',
			description:
				"Visualize your AI system's compliance status across all policies with intuitive dashboards designed for both technical and non-technical stakeholders.",
			icon: Gauge
		},
		{
			title: 'Detailed Analytics',
			description:
				'Gain deep insights into AI behavior patterns, policy trigger events, and performance metrics through comprehensive analytical tools.',
			icon: BarChart3
		},
		{
			title: 'Audit-Ready Reporting',
			description:
				'Generate detailed reports that document all AI interactions, policy enforcements, and compliance measures for regulatory audits and reviews.',
			icon: LineChart
		},
		{
			title: 'Risk Visualization',
			description:
				'Identify potential compliance hotspots and risk areas through advanced visualization tools that highlight patterns in AI behavior.',
			icon: PieChart
		},
		{
			title: 'Transparency Controls',
			description:
				'Maintain visibility into AI decision-making processes with transparency tools that explain how and why specific policies were enforced.',
			icon: Eye
		}
	];
</script>

<section id="telemetry" class="section-padding relative overflow-hidden bg-[#080808] py-24">
	<div class="bg-grid-white/[0.02] absolute inset-0 bg-[size:30px_30px]"></div>

	<div class="container relative z-10 mx-auto px-4">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
				<span class="gradient-text">Intelligent Insights</span>
			</h2>
			<p class="text-xl text-white/70">
				Comprehensive visibility into your AI's behavior and compliance status
			</p>
		</div>

		<div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each telemetryFeatures as feature, i}
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

		<div
			class="relative mx-auto max-w-4xl transform-gpu overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-lg backdrop-blur transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80"
		>
			<div
				class="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent"
			/>

			<h3 class="mb-8 text-2xl font-semibold text-zinc-100">Why Monitoring Matters</h3>

			<div class="space-y-6">
				<p class="text-lg text-zinc-400">
					In the rapidly evolving AI landscape, visibility isn't just a feature—it's a necessity.
					Rizk's telemetry and reporting tools provide the transparency you need to:
				</p>

				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<div class="mt-1 rounded-full bg-electric-lime-400/20 p-1">
							<div class="h-2 w-2 rounded-full bg-electric-lime-400"></div>
						</div>
						<p class="text-zinc-300">
							<span class="font-medium text-white">Demonstrate compliance</span> to regulators and stakeholders
							with comprehensive audit trails and documentation
						</p>
					</li>
					<li class="flex items-start gap-3">
						<div class="mt-1 rounded-full bg-electric-lime-400/20 p-1">
							<div class="h-2 w-2 rounded-full bg-electric-lime-400"></div>
						</div>
						<p class="text-zinc-300">
							<span class="font-medium text-white">Identify emerging risks</span> before they become
							compliance violations through pattern recognition and anomaly detection
						</p>
					</li>
					<li class="flex items-start gap-3">
						<div class="mt-1 rounded-full bg-electric-lime-400/20 p-1">
							<div class="h-2 w-2 rounded-full bg-electric-lime-400"></div>
						</div>
						<p class="text-zinc-300">
							<span class="font-medium text-white">Optimize policy enforcement</span> by understanding
							which guardrails are most frequently triggered and why
						</p>
					</li>
					<li class="flex items-start gap-3">
						<div class="mt-1 rounded-full bg-electric-lime-400/20 p-1">
							<div class="h-2 w-2 rounded-full bg-electric-lime-400"></div>
						</div>
						<p class="text-zinc-300">
							<span class="font-medium text-white">Build stakeholder trust</span> through transparent
							reporting on AI behavior and safety measures
						</p>
					</li>
				</ul>
			</div>
		</div>

		<!-- <div class="mt-16 text-center">
			<a
				href="#docs"
				class="inline-flex items-center justify-center gap-2 rounded-md bg-electric-lime-400 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-electric-lime-500"
			>
				Explore Reporting Features
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
		</div> -->
	</div>
</section>
