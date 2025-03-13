<script lang="ts">
	type Items = {
		title: string;
		description: string | string[];
	};

	const items: Items[] = [
		{
			title: 'What is Rizk?',
			description:
				'Rizk is an open-source policy enforcement tool for AI agents. It helps developers and security teams define, apply, and audit compliance rules in real-time, ensuring AI operates within ethical and legal boundaries.'
		},
		{
			title: 'How does Rizk work?',
			description:
				'Rizk provides a lightweight SDK that integrates with your AI agent. You define policies as code, similar to tests, and Rizk enforces them at runtime—blocking or modifying responses that violate your rules.'
		},
		{
			title: 'Will this slow down my AI?',
			description:
				'No. Rizk is designed to be ultra-fast, adding less than 5ms of latency to AI responses. Everything runs locally, so there are no external API calls or performance bottlenecks.'
		},
		{
			title: 'What kind of policies can I enforce?',
			description: [
				'Data privacy (prevent AI from exposing sensitive information)',
				'Bias & ethics (filter out harmful, discriminatory, or misleading responses)',
				'Compliance (ensure AI follows regulations like GDPR, HIPAA, and SOC 2)',
				'Custom business rules (align AI behavior with internal policies)'
			]
		},
		{
			title: 'Can I use Rizk with my existing AI stack?',
			description:
				"Yes. Rizk works with LangChain, LlamaIndex, AutoGPT, OpenAI, and custom-built AI agents. If you're using an LLM-powered chatbot or automation, Rizk can integrate seamlessly."
		},
		{
			title: 'Is Rizk really open-source?',
			description:
				'Yes! Rizk is fully open-source, meaning you can inspect the code, contribute, and modify it to fit your needs. Our goal is to build a transparent, community-driven solution for AI safety and compliance.'
		},
		{
			title: 'How do I get started?',
			description: [
				'Simple. Install the SDK and define your policies in minutes:',
				'1. Install the package: pip install rizk-sdk',
				'2. Import and use:',
				'from rizk import PolicyEngine',
				'engine = PolicyEngine(policies="your_policies.co")',
				'safe_response = engine.apply(your_ai_response)',
				'Check out the docs for more details.'
			]
		},
		{
			title: 'Why should I join the beta?',
			description: [
				"By signing up for the beta, you'll get:",
				'🚀 Early access to new features',
				'💡 Direct input on development',
				'🔐 Exclusive compliance templates',
				'Join the beta and help shape the future of AI policy enforcement.'
			]
		}
	];
</script>

<section class="scroll-py-16 py-16 text-white md:scroll-py-32 md:py-32">
	<div class="mx-auto max-w-5xl px-6">
		<div class="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
			<div class="text-center lg:text-left">
				<h2 class="mb-4 text-3xl font-semibold md:text-4xl">
					Frequently <br class="hidden lg:block" /> Asked <br class="hidden lg:block" />
					Questions
				</h2>
				<p>Everything you need to know about Rizk and how it can help you enforce AI policies.</p>
			</div>

			<div class="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
				{#each items as item}
					<div class="py-6">
						<h3 class="font-medium">{item.title}</h3>
						{#if Array.isArray(item.description)}
							{#each item.description as line}
								<p class="text-muted-foreground mt-4">{line}</p>
							{/each}
						{:else}
							<p class="text-muted-foreground mt-4">{item.description}</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
