<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Rizk from '$lib/assets/Rizk.svelte';
	import { Github } from '@lucide/svelte';
</script>

<header
	class="fixed top-0 z-50 w-full border-b border-shark-800/50 bg-[#080808]/70 backdrop-blur-md"
>
	<div class="container mx-auto flex h-16 justify-between px-4">
		<div class="flex w-full items-center justify-between">
			<a
				rel="noopener noreferrer"
				href="#"
				aria-label="Back to homepage"
				class="flex items-center p-2 transition-transform hover:scale-105"
			>
				<Rizk />
			</a>

			<div class="flex items-center gap-4">
				<nav class="hidden md:block">
					<ul class="flex items-stretch space-x-6">
						<li class="flex">
							<a
								rel="noopener noreferrer"
								href="#features"
								class="flex items-center px-2 text-white/80 transition-colors hover:text-electric-lime-400"
								>Features</a
							>
						</li>
						<li class="flex">
							<a
								rel="noopener noreferrer"
								href="#problem"
								class="flex items-center px-2 text-white/80 transition-colors hover:text-electric-lime-400"
								>Problem</a
							>
						</li>
						<li class="flex">
							<a
								rel="noopener noreferrer"
								href="#team"
								class="flex items-center px-2 text-white/80 transition-colors hover:text-electric-lime-400"
								>Team</a
							>
						</li>
					</ul>
				</nav>

				<div class="flex items-center gap-2">
					<a
						href="https://github.com/rizk"
						class="hidden h-8 items-center justify-center gap-2 rounded-md px-3 text-xs text-white/80 transition-colors hover:bg-shark-800 hover:text-white sm:inline-flex"
					>
						<Github class="h-4 w-4" />
						GitHub
					</a>
					<Button
						variant="default"
						size="sm"
						class="bg-electric-lime-400 text-black hover:bg-electric-lime-500"
					>
						Get Started
					</Button>
				</div>
			</div>
		</div>
	</div>
</header>

<!-- Spacer to prevent content from being hidden behind fixed navbar -->
<div class="h-16"></div>
