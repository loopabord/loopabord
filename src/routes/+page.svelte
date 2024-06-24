<script>
	import { onMount } from 'svelte';
	import { getContext } from 'svelte';

	const storeUser = getContext('user');
	let storedUser;
	let result = '';

	onMount(() => {
		const unsubscribe = storeUser.subscribe(($storedUser) => {
			storedUser = $storedUser;

			if (storedUser) {
				fetch(
					`https://functionloopabord.azurewebsites.net/api/httpTrigger1?name=${storedUser.name}`,
					{
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						}
					}
				)
					.then((response) => {
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.text();
					})
					.then((data) => {
						result = data;
					})
					.catch((error) => {
						console.error('There was a problem with the fetch operation:', error);
						result = 'Error fetching data';
					});
			}
		});

		return () => {
			unsubscribe();
		};
	});
</script>

<div>
	<p>{result}</p>
	<br />
	<p>Running Loopabord version 20.</p>
</div>
