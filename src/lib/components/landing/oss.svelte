<script lang="ts">
	import { Check, Lock, ExternalLink } from '@lucide/svelte';
</script>

<section class="mx-auto max-w-4xl space-y-20 px-4 py-20">
	<h2
		class="text-2xl font-bold tracking-tight text-white md:mx-auto md:max-w-sm md:text-center md:text-3xl"
	>
		🚀 Built for Developers, Powered by Community
	</h2>
	<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-24">
		<img
			alt="Open Source"
			class="bg-primary-foreground h-80 w-full object-cover"
			src="https://images.unsplash.com/photo-1698044048234-2e7f6c4e6aca?q=80&amp;w=1000&amp;auto=format"
		/>
		<div>
			<h3 class="text-electric-lime-400 mb-2 text-xl font-semibold">Open Source & Transparent</h3>
			<p class="text-muted-foreground">
				AI governance shouldn't be a black box. Rizk is fully open-source, giving developers and
				security teams complete control over how policies are defined and enforced.
			</p>
			<ul class="text-muted-foreground my-6 space-y-3">
				<li>
					<Check class="mr-2 inline-block size-4 text-emerald-500" />
					<span
						>Transparent & Auditable – Review the code, contribute, or modify it to fit your needs</span
					>
				</li>
				<li>
					<Check class="mr-2 inline-block size-4 text-emerald-500" />

					<span
						>Customizable & Extensible – Define your own policies, adapt them to any AI stack</span
					>
				</li>
				<li>
					<Check class="mr-2 inline-block size-4 text-emerald-500" /><span
						>Community-Driven – Built with the input of developers, security experts, and AI
						researchers</span
					>
				</li>
			</ul>
			<a
				href="https://github.com/rizk-tools"
				class="[&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3"
				><span>Explore Rizk on GitHub</span>
				<ExternalLink class="size-4" />
			</a>
		</div>
	</div>
	<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-24">
		<img
			alt="Community"
			class="bg-primary-foreground h-80 w-full object-cover md:order-last"
			src="https://images.unsplash.com/photo-1698044048234-2e7f6c4e6aca?q=80&amp;w=1000&amp;auto=format"
		/>
		<div>
			<h3 class="text-electric-lime-400 mb-2 text-xl font-semibold">
				Join the Community & Help Shape Rizk
			</h3>
			<p class="text-muted-foreground">
				We believe the best AI tools are built together. Whether you're a developer, security
				engineer, or compliance expert, your insights matter.
			</p>
			<ul class="text-muted-foreground my-6 space-y-3">
				<li>
					<Check class="mr-2 inline-block size-4 text-emerald-500" />

					<span>Join the Conversation – Connect with other users, discuss best practices</span>
				</li>
				<li>
					<Check class="mr-2 inline-block size-4 text-emerald-500" />

					<span>Report Issues & Contribute – Help improve Rizk by reporting bugs</span>
				</li>
				<li>
					<svg
						width="24"
						height="24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke-linecap="round"
						stroke-linejoin="round"
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 inline-block size-4 text-emerald-500"
						><path
							d="m6 13.626 1.606 1.722c.886.95 1.329 1.424 1.825 1.574.436.131.9.096 1.315-.1.473-.224.852-.761 1.612-1.836L18 7"
						></path></svg
					><span>Stay Updated – Get the latest releases, security updates, and feature drops</span>
				</li>
			</ul>
			<div class="flex gap-4">
				<a
					href="#"
					class="[&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3"
					><span>Join Our Discord</span><svg
						width="24"
						height="24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke-linecap="round"
						stroke-linejoin="round"
						xmlns="http://www.w3.org/2000/svg"
						class="size-4"><path d="M4.5 12h15m0 0-5.625-6m5.625 6-5.625 6"></path></svg
					></a
				>
				<a
					href="#"
					class="[&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex h-9 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-3"
					><span>Follow Us</span><svg
						width="24"
						height="24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke-linecap="round"
						stroke-linejoin="round"
						xmlns="http://www.w3.org/2000/svg"
						class="size-4"><path d="M4.5 12h15m0 0-5.625-6m5.625 6-5.625 6"></path></svg
					></a
				>
			</div>
		</div>
	</div>
</section>
