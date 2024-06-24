<script>
	import { createEventDispatcher, onMount } from 'svelte';

	export let user = { name: '', id: '' };
	export let formName;
	export let deleteBtn;

	let firstInput;

	const dispatch = createEventDispatcher();

	function saveUser(event) {
		event.preventDefault();
		if (user.name != '') {
			dispatch('saveUser', user);
			dispatch('closeUserForm');
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
				{#if user}
					<input
						type="text"
						name="name"
						class="grow text-right"
						bind:value={user.name}
						bind:this={firstInput}
					/>
				{/if}
			</label><label class="input input-bordered flex items-center gap-2 text-right max-w-xl">
				Email
				{#if user}
					<input
						type="text"
						name="email"
						class="grow text-right"
						bind:value={user.email}
					/>
				{/if}
			</label>
			<div class="flex flex-row">
				<button class="btn btn-primary flex-grow">Save</button>
			</div>
			<div class="flex flex-row">
				<button class="btn btn-warning flex-grow" on:click={deleteUser}>Delete My Account</button>
			</div>
		</div>
	</form>
</div>
