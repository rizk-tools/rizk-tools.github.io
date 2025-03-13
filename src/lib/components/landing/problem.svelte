<script>
	import {
		ArrowRight,
		Search,
		AlertTriangle,
		AlertCircle,
		Lock,
		ScrollText,
		DollarSign,
		XCircle,
		CheckCircle
	} from '@lucide/svelte';
</script>

<section class="relative py-24">
	<div class="container relative mx-auto max-w-6xl px-4">
		<div class="space-y-16">
			<!-- Main Problem Statement -->
			<div class="mx-auto max-w-3xl text-center">
				<div
					class="mb-6 inline-flex items-center justify-center rounded-full bg-zinc-900/50 p-4 ring-1 ring-zinc-800"
				>
					<Search class="h-8 w-8 text-zinc-100" />
				</div>
				<h2
					class="mb-6 bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-4xl font-bold text-transparent"
				>
					The Problem: AI Without Guardrails is a Risk
				</h2>
				<p class="text-lg leading-relaxed text-zinc-400">
					AI is powerful, but without the right controls, it can become a liability. Businesses
					deploying AI agents face serious risks if they don't enforce strict policies on how AI
					interacts with users and handles data.
				</p>
			</div>

			<!-- What Could Go Wrong Section -->
			<div
				class="relative transform-gpu rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-lg backdrop-blur transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80"
			>
				<div
					class="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent"
				/>

				<h3 class="mb-8 flex items-center gap-2 text-2xl font-semibold text-zinc-100">
					<div class="rounded-lg bg-amber-400/10 p-2">
						<AlertTriangle class="h-6 w-6 text-amber-400" />
					</div>
					What Could Go Wrong?
				</h3>
				<div class="grid gap-8 md:grid-cols-2">
					<div class="space-y-6">
						<div
							class="group flex items-start gap-4 rounded-lg p-2 transition-colors hover:bg-zinc-800/50"
						>
							<div class="rounded-lg bg-red-400/10 p-2">
								<AlertCircle class="h-6 w-6 shrink-0 text-red-400" />
							</div>
							<div>
								<h4 class="font-medium text-zinc-100">Unpredictable Responses</h4>
								<p class="mt-2 text-zinc-400">
									AI models can generate misleading, biased, or inappropriate answers.
								</p>
							</div>
						</div>
						<div
							class="group flex items-start gap-4 rounded-lg p-2 transition-colors hover:bg-zinc-800/50"
						>
							<div class="rounded-lg bg-amber-400/10 p-2">
								<Lock class="h-6 w-6 shrink-0 text-amber-400" />
							</div>
							<div>
								<h4 class="font-medium text-zinc-100">Privacy Violations</h4>
								<p class="mt-2 text-zinc-400">
									AI may expose sensitive data, creating legal and compliance issues.
								</p>
							</div>
						</div>
					</div>
					<div class="space-y-6">
						<div
							class="group flex items-start gap-4 rounded-lg p-2 transition-colors hover:bg-zinc-800/50"
						>
							<div class="rounded-lg bg-blue-400/10 p-2">
								<ScrollText class="h-6 w-6 shrink-0 text-blue-400" />
							</div>
							<div>
								<h4 class="font-medium text-zinc-100">Regulatory Non-Compliance</h4>
								<p class="mt-2 text-zinc-400">
									Violating GDPR, HIPAA, or SOC 2 can lead to heavy fines and reputational damage.
								</p>
							</div>
						</div>
						<div
							class="group flex items-start gap-4 rounded-lg p-2 transition-colors hover:bg-zinc-800/50"
						>
							<div class="rounded-lg bg-emerald-400/10 p-2">
								<DollarSign class="h-6 w-6 shrink-0 text-emerald-400" />
							</div>
							<div>
								<h4 class="font-medium text-zinc-100">Costly Fixes & PR Nightmares</h4>
								<p class="mt-2 text-zinc-400">
									Detecting and correcting AI failures after deployment can be expensive and
									damaging.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Current Solutions Section -->
			<div
				class="relative transform-gpu rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-lg backdrop-blur transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80"
			>
				<div
					class="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent"
				/>

				<h3 class="mb-8 flex items-center gap-2 text-2xl font-semibold text-zinc-100">
					<div class="rounded-lg bg-red-400/10 p-2">
						<XCircle class="h-6 w-6 text-red-400" />
					</div>
					Current Solutions Aren't Enough
				</h3>
				<div class="space-y-5">
					<div
						class="group flex items-center gap-4 rounded-lg p-2 transition-colors hover:bg-zinc-800/50"
					>
						<div class="rounded-lg bg-red-400/10 p-2">
							<XCircle class="h-5 w-5 shrink-0 text-red-400" />
						</div>
						<p class="text-zinc-400">
							<span class="font-medium text-zinc-100">Hardcoding Filters</span> is rigid and doesn't
							scale.
						</p>
					</div>
					<div
						class="group flex items-center gap-4 rounded-lg p-2 transition-colors hover:bg-zinc-800/50"
					>
						<div class="rounded-lg bg-red-400/10 p-2">
							<XCircle class="h-5 w-5 shrink-0 text-red-400" />
						</div>
						<p class="text-zinc-400">
							<span class="font-medium text-zinc-100">Relying on LLM Providers</span> leaves your compliance
							to third parties.
						</p>
					</div>
					<div
						class="group flex items-center gap-4 rounded-lg p-2 transition-colors hover:bg-zinc-800/50"
					>
						<div class="rounded-lg bg-red-400/10 p-2">
							<XCircle class="h-5 w-5 shrink-0 text-red-400" />
						</div>
						<p class="text-zinc-400">
							<span class="font-medium text-zinc-100">Manual Audits</span> are time-consuming and reactive,
							not preventive.
						</p>
					</div>
				</div>
			</div>

			<!-- Solution Section -->
			<div
				class="relative transform-gpu rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-lg backdrop-blur transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/80"
			>
				<div
					class="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent"
				/>

				<h3 class="mb-6 flex items-center gap-2 text-2xl font-semibold text-zinc-100">
					<div class="rounded-lg bg-emerald-400/10 p-2">
						<CheckCircle class="h-6 w-6 text-emerald-400" />
					</div>
					The Solution: Proactive Policy Enforcement
				</h3>
				<p class="mb-8 text-lg leading-relaxed text-zinc-400">
					Instead of fixing AI failures after they happen, Rizk prevents them in real-time by
					enforcing security, compliance, and ethical guidelines at the model level.
				</p>
				<a
					href="#how-it-works"
					class="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-zinc-100 to-white px-6 py-3 text-zinc-900 transition-all duration-300 hover:from-white hover:to-white"
				>
					See How It Works
					<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
				</a>
			</div>

			<!-- Transition to Providers -->
		</div>
	</div>
</section>
