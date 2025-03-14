<script lang="ts">
	// Scroll down to see the original Component
	import { cn } from '$lib/utils';
	import AnimatedBeam from './AnimatedBeam.svelte';
	import Circle from './Circle.svelte';
	import { UserIcon } from '@lucide/svelte';

	import Anthropic from '$lib/assets/ai/anthropic.svelte';
	import DeepSeek from '$lib/assets/ai/deepseek.svelte';
	import Gemini from '$lib/assets/ai/gemini.svelte';
	import Ollama from '$lib/assets/ai/ollama.svelte';
	import OpenAI from '$lib/assets/ai/openai.svelte';

	import Rizk from '$lib/assets/Rizk.png';

	let containerRef;
	// Circles
	let div1Ref: any;
	let div2Ref: any;
	let div3Ref: any;
	let div4Ref: any;
	let div5Ref: any;
	let div6Ref: any;
	let div7Ref: any;
	let className: any = '';
	export { className as class };
</script>

<div
	bind:this={containerRef}
	class={cn('relative flex w-full items-center justify-center overflow-hidden p-10', className)}
>
	<div class="flex h-full w-full max-w-lg flex-row items-center justify-between gap-10">
		<div class="flex flex-col justify-center gap-2">
			<!-- Div 1 -->
			<Circle>
				<OpenAI bind:that={div1Ref} />
			</Circle>
			<!-- Div 2 -->
			<Circle>
				<Anthropic bind:that={div2Ref} />
			</Circle>
			<!-- Div 3 -->
			<Circle>
				<Gemini bind:that={div3Ref} />
			</Circle>
			<!-- Div 4 -->
			<Circle>
				<Ollama bind:that={div4Ref} />
			</Circle>
			<!-- Div 5 -->
			<Circle>
				<DeepSeek bind:that={div5Ref} />
			</Circle>
		</div>
		<div class="flex flex-col justify-center">
			<!-- Div 6 -->
			<Circle class="h-20 w-20 bg-neutral-700">
				<div bind:this={div6Ref} class="flex items-center justify-center">
					<img src={Rizk} class="h-auto w-40" alt="Rizk" />
				</div>
			</Circle>
		</div>
		<div class="flec-col flex justify-center">
			<!-- Div 7 -->
			<Circle class="size-14">
				<div bind:this={div7Ref}>
					<UserIcon class="size-8 text-white" />
				</div>
			</Circle>
		</div>
	</div>

	<AnimatedBeam bind:containerRef bind:fromRef={div1Ref} bind:toRef={div6Ref} />
	<AnimatedBeam bind:containerRef bind:fromRef={div2Ref} bind:toRef={div6Ref} />
	<AnimatedBeam bind:containerRef bind:fromRef={div3Ref} bind:toRef={div6Ref} />
	<AnimatedBeam bind:containerRef bind:fromRef={div4Ref} bind:toRef={div6Ref} />
	<AnimatedBeam bind:containerRef bind:fromRef={div5Ref} bind:toRef={div6Ref} />
	<AnimatedBeam bind:containerRef bind:fromRef={div6Ref} bind:toRef={div7Ref} />
</div>
