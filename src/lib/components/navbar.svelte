<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Rizk from '$lib/assets/Rizk.svelte';
</script>

<header class="p-4 dark:bg-gray-100 dark:text-gray-800">
	<div class="container mx-auto flex h-16 justify-between">
		<div class="flex w-full justify-between">
			<a
				rel="noopener noreferrer"
				href="#"
				aria-label="Back to homepage"
				class="flex items-center p-2"
			>
				<Rizk />
			</a>

			<div class="flex items-center gap-4">
				<ul class="flex items-stretch space-x-3">
					<li class="flex">
						<a
							rel="noopener noreferrer"
							href="#"
							class="-mb-1 flex items-center border-b-2 px-4 text-white">Link</a
						>
					</li>
				</ul>

				<Button>Log in</Button>
			</div>
		</div>
	</div>
</header>
