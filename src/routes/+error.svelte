<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<div class="flex min-h-screen flex-col items-center justify-center bg-[#080808] text-white">
	<div class="container mx-auto px-4 py-16 text-center">
		<h1 class="mb-4 text-6xl font-bold text-electric-lime-400">
			{$page.status}: {$page.error?.message || 'Error'}
		</h1>
		<p class="mb-8 text-xl text-white/80">
			{#if $page.status === 404}
				The page you're looking for doesn't exist.
			{:else}
				Something went wrong. Please try again later.
			{/if}
		</p>
		<a
			href={`${base}/`}
			class="inline-flex items-center rounded-md bg-electric-lime-400 px-6 py-3 text-lg font-medium text-black transition-colors hover:bg-electric-lime-500"
		>
			Go back home
		</a>
	</div>
</div>
