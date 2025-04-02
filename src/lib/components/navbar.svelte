<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Rizk from '$lib/assets/Rizk.svelte';
	import { Github, FileText, Layers } from '@lucide/svelte';
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
				<Rizk that={{}} class="" />
			</a>

			<div class="flex items-center gap-4">
				<nav class="hidden items-center gap-2 md:flex">
					<a
						href="#features"
						class="inline-flex h-8 items-center justify-center gap-2 rounded-md px-3 text-xs text-white/80 transition-colors hover:bg-shark-800 hover:text-white"
					>
						<Layers class="h-4 w-4" />
						Features
					</a>
					<a
						href="http://docs.rizk.tools/"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex h-8 items-center justify-center gap-2 rounded-md px-3 text-xs text-white/80 transition-colors hover:bg-shark-800 hover:text-white"
					>
						<FileText class="h-4 w-4" />
						Docs
					</a>
					<a
						href="https://github.com/rizk-tools"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex h-8 items-center justify-center gap-2 rounded-md px-3 text-xs text-white/80 transition-colors hover:bg-shark-800 hover:text-white"
					>
						<Github class="h-4 w-4" />
						GitHub
					</a>
				</nav>

				<div class="flex items-center">
					<a href="https://app.rizk.tools/auth/signup" target="_blank" rel="noopener noreferrer">
						<Button
							variant="default"
							size="sm"
							class="bg-electric-lime-400 text-black hover:bg-electric-lime-500"
						>
							Get Started
						</Button>
					</a>
				</div>
			</div>
		</div>
	</div>
</header>

<!-- Spacer to prevent content from being hidden behind fixed navbar -->
<div class="h-16"></div>
