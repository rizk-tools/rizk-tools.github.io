<script>
	import { LayerCake, Svg } from 'layercake';
	import { scaleBand } from 'd3-scale';
	import { onMount } from 'svelte';

	// Sample data for the chart
	const data = [
		{ day: 'Mon', value: 40, status: 'compliant' },
		{ day: 'Tue', value: 60, status: 'compliant' },
		{ day: 'Wed', value: 30, status: 'compliant' },
		{ day: 'Thu', value: 70, status: 'compliant' },
		{ day: 'Fri', value: 50, status: 'compliant' },
		{ day: 'Sat', value: 20, status: 'compliant' },
		{ day: 'Sun', value: 90, status: 'violation' },
		{ day: 'Mon', value: 40, status: 'compliant' },
		{ day: 'Tue', value: 60, status: 'compliant' },
		{ day: 'Wed', value: 50, status: 'compliant' }
	];

	let hoveredIndex = -1;
	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<div class="chart-container">
	<!-- Y-axis labels - positioned to the right of the chart -->
	<div
		class="pointer-events-none absolute right-[-24px] top-0 z-10 flex h-full flex-col justify-between text-[8px] text-white/40"
	>
		<div>100%</div>
		<div>75%</div>
		<div>50%</div>
		<div>25%</div>
		<div>0%</div>
	</div>

	<div class="chart-inner">
		<LayerCake
			{data}
			x="day"
			y="value"
			xScale={scaleBand().paddingInner(0.2).paddingOuter(0.1)}
			yDomain={[0, 100]}
			padding={{ top: 0, right: 15, bottom: 0, left: 0 }}
		>
			<Svg>
				<!-- Grid lines -->
				<line x1="0%" y1="25%" x2="100%" y2="25%" class="stroke-shark-800/30 stroke-[1px]" />
				<line x1="0%" y1="50%" x2="100%" y2="50%" class="stroke-shark-800/30 stroke-[1px]" />
				<line x1="0%" y1="75%" x2="100%" y2="75%" class="stroke-shark-800/30 stroke-[1px]" />

				<!-- Bars -->
				{#each data as d, i}
					<rect
						x={i * (100 / data.length) + '%'}
						y={100 - d.value + '%'}
						width={(100 / data.length) * 0.8 + '%'}
						height={d.value + '%'}
						class={d.status === 'violation'
							? 'fill-amethyst-500/70 transition-colors duration-200 hover:fill-amethyst-500/90'
							: 'fill-electric-lime-400/70 transition-colors duration-200 hover:fill-electric-lime-400/90'}
						rx="2"
						on:mouseenter={() => (hoveredIndex = i)}
						on:mouseleave={() => (hoveredIndex = -1)}
					/>
				{/each}
			</Svg>
		</LayerCake>
	</div>

	<!-- Tooltip -->
	{#if hoveredIndex >= 0 && mounted}
		<div
			class="pointer-events-none absolute z-10 rounded border border-shark-800 bg-shark-950/90 px-2 py-1 text-xs text-white shadow-lg"
			style="left: {hoveredIndex * (100 / data.length) + (100 / data.length) * 0.4}%; top: {100 -
				data[hoveredIndex].value -
				10}%; transform: translate(-50%, -100%);"
		>
			<div class="font-medium">{data[hoveredIndex].day}</div>
			<div class="flex items-center gap-1">
				<div
					class={data[hoveredIndex].status === 'violation'
						? 'h-2 w-2 rounded-full bg-amethyst-500'
						: 'h-2 w-2 rounded-full bg-electric-lime-400'}
				></div>
				<span>{data[hoveredIndex].value}%</span>
			</div>
		</div>
	{/if}
</div>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.chart-inner {
		width: 100%;
		height: 100%;
		padding-right: 25px; /* Add padding to make room for the y-axis labels */
	}
</style>
