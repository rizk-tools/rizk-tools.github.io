<script lang="ts">
	import ricardo from '$lib/assets/ricardo.png';
	import carlos from '$lib/assets/carlos.png';
	import fernando from '$lib/assets/fernando.png';
	import { Linkedin } from '@lucide/svelte';

	const team = [
		{
			name: 'Ricardo Sandoval',
			role: 'Co-founder & CEO',
			image: ricardo,
			items: [
				'10+yr risk manager scaling models for $20B portfolio',
				'Ex-CTO of GenAI startup',
				'Leads AI Tinkerers-Mty + Latam AI Builders community'
			],
			linkedin: 'https://linkedin.com/in/ricardosandoval'
		},
		{
			name: 'Carlos Osuna',
			role: 'Co-founder & CTO',
			image: carlos,
			items: [
				'Ex-Founder Oha (Currently Kontigo) & Economía Digital',
				'Lead GenAI Engineer',
				'Shipped Enterprise grade GenAI from Dubai to Latam'
			],
			linkedin: 'https://linkedin.com/in/carlososuna'
		},
		{
			name: 'Fernando de la Rosa',
			role: 'Co-founder & CPO',
			image: fernando,
			items: [
				'Scaled LunaNotes.io to 15k users & Tweet-to-threads to 6k users.',
				'Full-stack engineer',
				'Early startup experience, shipped Healthtech software.'
			],
			linkedin: 'https://linkedin.com/in/fernandodelarosa'
		}
	];
</script>

<section class="bg-shark-950/50 py-16 sm:py-20 lg:py-24">
	<div class="mx-auto max-w-screen-xl px-4 md:px-8">
		<div class="mb-12 md:mb-16">
			<h2 class="font-display text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
				Meet our Team
			</h2>

			<p class="text-shark-200 mx-auto mt-6 max-w-2xl text-center text-lg">
				We are a team of experienced professionals who are passionate about building products that
				help people.
			</p>
		</div>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each team as person}
				<div
					class="bg-shark-900/50 hover:bg-shark-900/70 group relative overflow-hidden rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 lg:p-8"
				>
					<div class="flex flex-col items-center">
						<div class="relative mb-6">
							<div
								class="from-electric-lime-400/50 to-electric-lime-600/50 group-hover:from-electric-lime-400 group-hover:to-electric-lime-600 absolute -inset-1 rounded-full bg-gradient-to-br blur transition-all duration-300"
							/>
							<div
								class="border-shark-800 relative h-28 w-28 overflow-hidden rounded-full border-2 md:h-32 md:w-32"
							>
								<img
									src={person.image}
									loading="lazy"
									alt={person.name}
									class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
								/>
							</div>
						</div>

						<div class="text-center">
							<h3 class="text-electric-lime-400 text-xl font-bold md:text-2xl">
								{person.name}
							</h3>
							<p class="text-shark-300 mt-1 text-sm">{person.role}</p>

							<ul class="mt-6 space-y-3">
								{#each person.items as item}
									<li class="text-shark-300 text-sm md:text-base">
										{item}
									</li>
								{/each}
							</ul>

							{#if person.linkedin}
								<a
									href={person.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									class="bg-shark-800/50 text-shark-300 hover:bg-shark-800 mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors duration-300 hover:text-white"
								>
									<Linkedin class="h-4 w-4" />
									<span>Connect on LinkedIn</span>
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
