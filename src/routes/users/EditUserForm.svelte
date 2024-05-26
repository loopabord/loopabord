<script>
	import { createEventDispatcher, onMount } from 'svelte';
	export let index;
	export let user;
	let firstInput;

	const dispatch = createEventDispatcher();

	function updateUser(event) {
		event.preventDefault();

		if (user.name != '' && user.email != '') {
			dispatch('updateUser', user);
			dispatch('hideEditUser');
			event.target.reset();
		}
	}

	function deleteUser() {
		dispatch('deleteUser', user.guid);
	}

	onMount(() => {
		if (firstInput) {
			firstInput.focus();
		}
	});
</script>

<div class="divider divider-horizontal hidden md:flex"></div>
<div class="grid flex-grow card rounded-box" id="editUserForm">
	<form on:submit={updateUser}>
		<div class="flex flex-col gap-4 pb-10">
			<div class="flex flex-row justify-between items-center">
				<div class="text-xl">Edit user</div>
				<button
					type="button"
					class="btn btn-square btn-xs btn-outline border-none"
					on:click={() => dispatch('hideEditUser')}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/></svg
					>
				</button>
			</div>

			<label class="input input-bordered flex items-center gap-2 text-right">
				Name
				<input
					type="text"
					name="name"
					class="grow text-right"
					bind:value={user.name}
					bind:this={firstInput}
				/>
			</label>
			<label class="input input-bordered flex items-center gap-2">
				Email
				<input type="text" name="email" class="grow text-right" bind:value={user.email} />
			</label>
			<label class="input input-bordered flex items-center gap-2">
				Role
				<select name="role" class="bg-base-100 ml-auto text-right" bind:value={user.role}>
					<option selected value="guest">Guest</option>
					<option value="compliance-manager">Compliance Manager</option>
					<option value="customer">Customer</option>
					<option value="researcher">Researcher</option>
					<option value="administrator">Administrator</option>
				</select>
			</label>
			<div class="flex flex-row">
				<button type="button" class="btn btn-error mr-2" on:click={deleteUser}>Delete User</button>
				<button class="btn btn-primary flex-grow">Save</button>
			</div>
		</div>
	</form>
</div>
