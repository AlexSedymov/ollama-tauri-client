import { writable } from 'svelte/store';

export const promptMessageStore = writable('');

export const exampleStore = writable([
	{ id: 1, question: 'What is your favorite color?' },
	{ id: 2, question: 'How old are you?' },
	{ id: 3, question: 'What is your favorite food?' }
]);

promptMessageStore.subscribe((value) => {
	console.log(value);
});
