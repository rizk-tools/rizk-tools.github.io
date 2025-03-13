<script lang="ts">
	import Rizk from '$lib/assets/Rizk.svelte';
	import { Github, Twitter, Linkedin } from '@lucide/svelte';

	const links = [
		{
			title: 'Product',
			items: [
				{ title: 'Features', href: '#features' },
				{ title: 'Pricing', href: '#pricing' },
				{ title: 'Documentation', href: '#docs' }
			]
		},
		{
			title: 'Company',
			items: [
				{ title: 'About', href: '#about' },
				{ title: 'Team', href: '#team' },
				{ title: 'Careers', href: '#careers' }
			]
		},
		{
			title: 'Resources',
			items: [
				{ title: 'Blog', href: '#blog' },
				{ title: 'Community', href: '#community' },
				{ title: 'Contact', href: '#contact' }
			]
		}
	];

	const socialLinks = [
		{ icon: Github, href: 'https://github.com/rizk', label: 'GitHub' },
		{ icon: Twitter, href: 'https://twitter.com/rizk', label: 'Twitter' },
		{ icon: Linkedin, href: 'https://linkedin.com/company/rizk', label: 'LinkedIn' }
	];
</script>

<footer class="border-t border-shark-800 bg-[#080808] py-16 text-white/80">
	<div class="container mx-auto px-6">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-5">
			<div class="md:col-span-2">
				<a href="/" aria-label="go home" class="flex items-center">
					<Rizk />
				</a>

				<p class="mt-6 max-w-md text-shark-400">
					Rizk helps you enforce policy-driven guardrails into your AI agents with minimal code,
					keeping your AI safe and compliant.
				</p>

				<div class="mt-6 flex space-x-4">
					{#each socialLinks as link}
						<a
							href={link.href}
							class="flex h-10 w-10 items-center justify-center rounded-full border border-shark-800 text-shark-400 transition-colors hover:border-electric-lime-400 hover:text-electric-lime-400"
							target="_blank"
							rel="noopener noreferrer"
							aria-label={link.label}
						>
							<svelte:component this={link.icon} class="h-4 w-4" />
						</a>
					{/each}
				</div>
			</div>

			<div class="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-3">
				{#each links as section}
					<div>
						<h3 class="text-sm font-semibold uppercase tracking-wider text-shark-300">
							{section.title}
						</h3>
						<ul class="mt-4 space-y-3">
							{#each section.items as item}
								<li>
									<a
										href={item.href}
										class="text-shark-400 transition-colors hover:text-electric-lime-400"
									>
										{item.title}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>

		<div class="mt-12 border-t border-shark-800 pt-8">
			<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
				<p class="text-sm text-shark-500">
					&copy; {new Date().getFullYear()} Rizk. All rights reserved.
				</p>
				<div class="flex space-x-6 text-sm">
					<a href="#" class="text-shark-400 hover:text-electric-lime-400">Privacy Policy</a>
					<a href="#" class="text-shark-400 hover:text-electric-lime-400">Terms of Service</a>
					<a href="#" class="text-shark-400 hover:text-electric-lime-400">Cookie Policy</a>
				</div>
			</div>
		</div>
	</div>
</footer>
