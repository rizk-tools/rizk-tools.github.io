<script lang="ts">
	import ricardo from '$lib/assets/ricardo.png';
	import carlos from '$lib/assets/carlos.png';
	import fernando from '$lib/assets/fernando.png';

	const team = [
		{
			name: 'Ricardo Sandoval',
			image: ricardo,
			items: [
				'10+yr risk manager scaling models for $20B portfolio',
				'Ex-CTO of GenAI startup',
				'Leads AI Tinkerers-Mty + Latam AI Builders community'
			],
			socials: []
		},
		{
			name: 'Carlos Osuna',
			image: carlos,
			items: [
				'Ex-Founder Oha (Currently Kontigo) & Economía Digital',
				'Lead GenAI Engineer',
				'Shipped Enterprise grade GenAI from Dubai to Latam'
			],
			socials: []
		},
		{
			name: 'Fernando de la Rosa',
			image: fernando,
			items: [
				'Scaled LunaNotes.io to 15k users & Tweet-to-threads to 6k users.',
				'Full-stack engineer',
				'Early startup experience, shipped Healthtech software.'
			],
			socials: []
		}
	];
</script>

<div class="py-6 sm:py-8 lg:py-12">
	<div class="mx-auto max-w-screen-xl px-4 md:px-8">
		<div class="mb-10 md:mb-16">
			<h2 class="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">
				Meet our Team
			</h2>

			<p class="mx-auto max-w-screen-md text-center text-white md:text-lg">
				We are a team of experienced professionals who are passionate about building products that
				help people.
			</p>
		</div>

		<div class="flex justify-center gap-4">
			{#each team as person}
				<div class="bg-shark-900 flex flex-1 flex-col items-center rounded-lg p-4 lg:p-8">
					<div
						class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32"
					>
						<img
							src={person.image}
							loading="lazy"
							alt={person.name}
							class="h-full w-full object-cover object-center"
						/>
					</div>

					<div>
						<div class="text-electric-lime-400 text-center font-bold md:text-lg">
							{person.name}
						</div>

						<ul>
							{#each person.items as item}
								<li class="text-shark-300 mb-3 text-center text-sm md:mb-4 md:text-base">
									{item}
								</li>
							{/each}
						</ul>

						<div class="flex justify-center">
							<div class="flex gap-4">
								{#each person.socials as social}
									<a
										href={social.url}
										target="_blank"
										class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
									>
										<svg
											class="h-5 w-5"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
											/>
										</svg>
									</a>
								{/each}
							</div>
						</div>
						<!-- social - end -->
					</div>
				</div>
				<!-- person - end -->
			{/each}
		</div>
	</div>
</div>
