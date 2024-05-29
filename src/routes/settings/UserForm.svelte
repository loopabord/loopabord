<script>
	import { createEventDispatcher, onMount } from 'svelte';

	export let user;
	export let formName;
	export let deleteBtn;

	let firstInput;

	const dispatch = createEventDispatcher();

	function saveUser(event) {
		event.preventDefault();
		if (user.name != '') {
			dispatch('saveUser', user);
			dispatch('closeUserForm');
			event.target.reset();
		}
	}

	function deleteUser(event) {
		dispatch('deleteUser', user);
		dispatch('closeUserForm');
	}

	onMount(() => {
		if (firstInput) {
			firstInput.focus();
		}
	});
</script>

<div class="grid flex-grow rounded-box max-w-xl">
	<form on:submit={saveUser} class="max-w-xl">
		<div class="flex flex-col gap-4 pb-10 max-w-xl">
			<div class="flex flex-row justify-between items-center">
				<div class="text-xl">{formName}</div>
			</div>

			<label class="input input-bordered flex items-center gap-2 text-right max-w-xl">
				Name
				<input
					type="text"
					name="name"
					class="grow text-right"
					bind:value={user.name}
					bind:this={firstInput}
				/>
			</label>
		</div>
	</form>
</div>
