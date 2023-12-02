<script lang="ts">
	let selectedExample: Example | null = null;

	interface Example {
		id: number;
		question: string;
	}

	const examples: Array<Example> = [
		{ id: 1, question: 'What is your favorite color?' },
		{ id: 2, question: 'How old are you?' },
		{ id: 3, question: 'What is your favorite food?' }
	];

	export function selectExample(example: Example) {
		selectedExample = example;
	}
</script>
