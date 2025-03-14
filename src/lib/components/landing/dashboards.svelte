<script lang="ts">
	import { ArrowRight, Shield, AlertCircle, CheckCircle } from '@lucide/svelte';
	import PolicyEnforcementChart from '$lib/components/charts/PolicyEnforcementChart.svelte';
</script>

<section id="dashboards" class="relative overflow-hidden bg-[#0c0c0c] py-24">
	<div class="bg-grid-white/[0.02] absolute inset-0 bg-[size:30px_30px]"></div>

	<div class="container relative z-10 mx-auto px-4">
		<div class="grid gap-16 md:grid-cols-2">
			<!-- Left Column: Text Content -->
			<div class="flex flex-col justify-center">
				<div>
					<div
						class="mb-6 inline-flex items-center rounded-full border border-electric-lime-400/20 bg-electric-lime-400/10 px-3 py-1 text-sm text-electric-lime-400"
					>
						<Shield class="mr-2 h-4 w-4" />
						<span>Advanced Visualization</span>
					</div>
				</div>

				<h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">
					<span class="gradient-text">Actionable Dashboards</span> for Complete Oversight
				</h2>

				<p class="mb-8 text-lg text-white/70">
					Transform complex AI behavior data into clear, actionable insights with our purpose-built
					dashboards. Monitor compliance in real-time and identify potential issues before they
					escalate.
				</p>

				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="rounded-lg bg-green-400/10 p-2">
							<CheckCircle class="h-5 w-5 text-green-400" />
						</div>
						<div>
							<h3 class="mb-1 text-lg font-medium text-white">Executive Summaries</h3>
							<p class="text-white/70">
								High-level compliance overviews designed for leadership teams and stakeholders who
								need quick status updates.
							</p>
						</div>
					</div>

					<div class="flex items-start gap-4">
						<div class="rounded-lg bg-amber-400/10 p-2">
							<AlertCircle class="h-5 w-5 text-amber-400" />
						</div>
						<div>
							<h3 class="mb-1 text-lg font-medium text-white">Technical Deep Dives</h3>
							<p class="text-white/70">
								Detailed technical dashboards that provide engineers and data scientists with
								granular insights into AI behavior.
							</p>
						</div>
					</div>
					<!-- 
					<div class="mt-8">
						<a
							href="#docs"
							class="inline-flex items-center justify-center gap-2 text-electric-lime-400 hover:text-electric-lime-300"
						>
							Learn more about our dashboard capabilities
							<ArrowRight class="h-4 w-4" />
						</a>
					</div> -->
				</div>
			</div>

			<!-- Right Column: Dashboard Mockup -->
			<div class="relative">
				<!-- Dashboard Frame -->
				<div
					class="relative overflow-hidden rounded-xl border border-shark-800 bg-shark-900/80 shadow-2xl backdrop-blur-sm"
				>
					<!-- Dashboard Header -->
					<div class="border-b border-shark-800 bg-shark-950/50 p-4">
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<div class="h-3 w-3 rounded-full bg-red-500"></div>
								<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
								<div class="h-3 w-3 rounded-full bg-green-500"></div>
							</div>
							<div class="text-sm font-medium text-white/80">AI Policy Compliance Dashboard</div>
							<div class="w-20"></div>
						</div>
					</div>

					<!-- Dashboard Content -->
					<div class="p-6">
						<!-- Dashboard Stats Row -->
						<div class="mb-6 grid grid-cols-3 gap-4">
							<div class="rounded-lg border border-shark-800 bg-shark-950/50 p-4">
								<div class="mb-1 text-sm text-white/60">Policy Violations</div>
								<div class="text-2xl font-bold text-white">12</div>
								<div class="mt-2 text-xs text-red-400">+2 from yesterday</div>
							</div>
							<div class="rounded-lg border border-shark-800 bg-shark-950/50 p-4">
								<div class="mb-1 text-sm text-white/60">Compliance Score</div>
								<div class="text-2xl font-bold text-white">98.7%</div>
								<div class="mt-2 text-xs text-green-400">+0.3% from yesterday</div>
							</div>
							<div class="rounded-lg border border-shark-800 bg-shark-950/50 p-4">
								<div class="mb-1 text-sm text-white/60">AI Interactions</div>
								<div class="text-2xl font-bold text-white">5,432</div>
								<div class="mt-2 text-xs text-white/60">Last 24 hours</div>
							</div>
						</div>

						<!-- Chart with LayerCake -->
						<div class="mb-6 h-40 rounded-lg border border-shark-800 bg-shark-950/50 p-4">
							<div class="mb-2 text-sm font-medium text-white/80">Policy Enforcement Trend</div>
							<div class="relative h-24 pr-6">
								<PolicyEnforcementChart />
							</div>
						</div>

						<!-- Recent Alerts Table -->
						<div class="rounded-lg border border-shark-800 bg-shark-950/50 p-4">
							<div class="mb-3 text-sm font-medium text-white/80">Recent Policy Alerts</div>
							<div class="space-y-2">
								<div class="flex items-center justify-between rounded-md bg-red-500/10 p-2 text-xs">
									<span class="font-medium text-white">Data Privacy Violation</span>
									<span class="text-white/60">2 minutes ago</span>
								</div>
								<div
									class="flex items-center justify-between rounded-md bg-amber-500/10 p-2 text-xs"
								>
									<span class="font-medium text-white">Content Policy Warning</span>
									<span class="text-white/60">15 minutes ago</span>
								</div>
								<div
									class="flex items-center justify-between rounded-md bg-green-500/10 p-2 text-xs"
								>
									<span class="font-medium text-white">Policy Override Approved</span>
									<span class="text-white/60">1 hour ago</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Decorative Elements -->
				<div
					class="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-electric-lime-400/30 blur-3xl"
				></div>
				<div
					class="absolute -left-10 top-20 h-40 w-40 rounded-full bg-amethyst-500/20 blur-3xl"
				></div>
			</div>
		</div>
	</div>
</section>
