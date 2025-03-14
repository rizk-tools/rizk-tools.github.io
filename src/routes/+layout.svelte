<script lang="ts">
	import '../app.postcss';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Faqs from '$lib/components/landing/faqs.svelte';
	import CTA from '$lib/components/landing/cta.svelte';

	import { Spotlight } from '$lib/components/ui/spotlight';
	import { onMount } from 'svelte';

	let { children } = $props();
	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<div class="relative bg-[#080808]">
	<Navbar />

	<Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#d1ff00" />
	<Spotlight className="top-40 right-0 md:right-60 md:top-20" fill="#a94ffd" />

	<div
		class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f0e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
	></div>

	{@render children()}

	<Faqs />
	<CTA />
	<Footer />
</div>
