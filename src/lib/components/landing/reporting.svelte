<script lang="ts">
	import { FileText, Download, Share2, Clock, FileCheck, FileSearch } from '@lucide/svelte';

	type ReportType = {
		title: string;
		description: string;
		icon: any;
	};

	const reportTypes: ReportType[] = [
		{
			title: 'Compliance Audit Reports',
			description:
				'Comprehensive documentation of all AI interactions and policy enforcements for regulatory audits.',
			icon: FileCheck
		},
		{
			title: 'Incident Analysis',
			description:
				'Detailed breakdowns of policy violations with root cause analysis and remediation recommendations.',
			icon: FileSearch
		},
		{
			title: 'Executive Summaries',
			description:
				'High-level overviews of AI system compliance status designed for leadership and stakeholders.',
			icon: FileText
		}
	];
</script>

<section id="reporting" class="relative overflow-hidden bg-[#080808] py-24">
	<div class="bg-grid-white/[0.02] absolute inset-0 bg-[size:30px_30px]"></div>

	<div class="container relative z-10 mx-auto px-4">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
				<span class="gradient-text">Compliance Documentation</span>
			</h2>
			<p class="text-xl text-white/70">
				Comprehensive reporting that proves your AI systems operate within defined boundaries
			</p>
		</div>

		<div class="grid gap-12 md:grid-cols-2">
			<!-- Left Column: Report Types -->
			<div>
				<div class="mb-8 space-y-8">
					{#each reportTypes as report, i}
						<div
							class="transform-gpu rounded-xl border border-shark-800 bg-shark-900/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-shark-700 hover:bg-shark-900/80"
							style="animation-delay: {i * 150}ms;"
						>
							<div class="mb-4 flex items-start gap-4">
								<div
									class="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-electric-lime-400/20 to-amethyst-500/20 p-3"
								>
									<svelte:component this={report.icon} class="h-6 w-6 text-electric-lime-400" />
								</div>
								<div>
									<h3 class="mb-2 text-xl font-medium text-white">{report.title}</h3>
									<p class="text-white/70">{report.description}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<div
					class="transform-gpu rounded-xl border border-shark-800 bg-shark-900/50 p-6 shadow-lg backdrop-blur-sm"
				>
					<h3 class="mb-4 text-xl font-medium text-white">Report Features</h3>
					<ul class="space-y-3">
						<li class="flex items-center gap-3">
							<div class="rounded-full bg-electric-lime-400/20 p-1">
								<Download class="h-4 w-4 text-electric-lime-400" />
							</div>
							<span class="text-white/80">Export in multiple formats (PDF, CSV, JSON)</span>
						</li>
						<li class="flex items-center gap-3">
							<div class="rounded-full bg-electric-lime-400/20 p-1">
								<Share2 class="h-4 w-4 text-electric-lime-400" />
							</div>
							<span class="text-white/80">Secure sharing with stakeholders and auditors</span>
						</li>
						<li class="flex items-center gap-3">
							<div class="rounded-full bg-electric-lime-400/20 p-1">
								<Clock class="h-4 w-4 text-electric-lime-400" />
							</div>
							<span class="text-white/80">Automated scheduling and distribution</span>
						</li>
					</ul>
				</div>
			</div>

			<!-- Right Column: Report Preview -->
			<div class="relative">
				<!-- Report Document Preview -->
				<div class="relative mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-2xl">
					<!-- Report Header -->
					<div class="border-b border-gray-200 bg-gray-50 p-6">
						<div class="flex items-center justify-between">
							<div>
								<div class="text-xs font-medium uppercase text-gray-500">Compliance Report</div>
								<div class="text-lg font-bold text-gray-900">AI Policy Enforcement Summary</div>
							</div>
							<div
								class="flex h-10 w-10 items-center justify-center rounded-full bg-electric-lime-400"
							>
								<FileText class="h-5 w-5 text-black" />
							</div>
						</div>
					</div>

					<!-- Report Content -->
					<div class="p-6">
						<!-- Executive Summary -->
						<div class="mb-6">
							<h3 class="mb-3 text-sm font-medium uppercase text-gray-500">Executive Summary</h3>
							<div class="space-y-2 text-sm text-gray-700">
								<p>
									This report provides an overview of AI policy enforcement activities for the
									period ending June 30, 2023. During this period, the system processed 152,847
									interactions with a compliance rate of 99.3%.
								</p>
							</div>
						</div>

						<!-- Compliance Metrics -->
						<div class="mb-6">
							<h3 class="mb-3 text-sm font-medium uppercase text-gray-500">Key Metrics</h3>
							<div class="grid grid-cols-2 gap-4">
								<div class="rounded-lg bg-gray-100 p-3">
									<div class="text-xs text-gray-500">Total Interactions</div>
									<div class="text-lg font-bold text-gray-900">152,847</div>
								</div>
								<div class="rounded-lg bg-gray-100 p-3">
									<div class="text-xs text-gray-500">Policy Enforcements</div>
									<div class="text-lg font-bold text-gray-900">1,074</div>
								</div>
								<div class="rounded-lg bg-gray-100 p-3">
									<div class="text-xs text-gray-500">Compliance Rate</div>
									<div class="text-lg font-bold text-green-600">99.3%</div>
								</div>
								<div class="rounded-lg bg-gray-100 p-3">
									<div class="text-xs text-gray-500">Critical Violations</div>
									<div class="text-lg font-bold text-red-600">12</div>
								</div>
							</div>
						</div>

						<!-- Policy Breakdown -->
						<div>
							<h3 class="mb-3 text-sm font-medium uppercase text-gray-500">
								Policy Enforcement Breakdown
							</h3>
							<div class="grid grid-cols-3 items-center gap-2">
								<span class="text-sm text-gray-700">Data Privacy</span>
								<div class="h-2 w-32 flex-1 overflow-hidden rounded-full bg-gray-200">
									<div class="h-full bg-electric-lime-400" style="width: 70%;"></div>
								</div>
								<span class="ml-auto text-sm font-medium text-gray-900">70%</span>
								<span class="text-sm text-gray-700">Content Safety</span>
								<div class="h-2 w-32 flex-1 overflow-hidden rounded-full bg-gray-200">
									<div class="h-full bg-electric-lime-400" style="width: 20%;"></div>
								</div>
								<span class="ml-auto text-sm font-medium text-gray-900">20%</span>
								<span class="text-sm text-gray-700">Security</span>
								<div class="h-2 w-32 flex-1 overflow-hidden rounded-full bg-gray-200">
									<div class="h-full bg-electric-lime-400" style="width: 10%;"></div>
								</div>
								<span class="ml-auto text-sm font-medium text-gray-900">10%</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Decorative Elements -->
				<div
					class="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-amethyst-500/20 blur-3xl"
				></div>
				<div
					class="absolute -left-10 top-10 h-32 w-32 rounded-full bg-electric-lime-400/30 blur-3xl"
				></div>
			</div>
		</div>

		<div class="mt-16 text-center">
			<a
				href="#docs"
				class="inline-flex items-center justify-center gap-2 rounded-md bg-electric-lime-400 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-electric-lime-500"
			>
				Learn More About Reporting
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
