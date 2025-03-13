<script lang="ts">
	import '../app.postcss';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Faqs from '$lib/components/landing/faqs.svelte';
	import CTA from '$lib/components/landing/cta.svelte';

	import { Spotlight } from '$lib/components/ui/spotlight';

	let { children } = $props();
</script>

<div class="relative h-dvh w-screen overflow-x-hidden bg-[#080808]">
	<Navbar />

	<Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#d1ff00" />

	{@render children()}

	<Faqs />
	<CTA />
	<Footer />
</div>
