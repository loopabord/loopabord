<script>
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	let firstInput;

	function addUser(event) {
		event.preventDefault();

		let user = {
			name: event.target.querySelector('input[name="name"]').value,
			email: event.target.querySelector('input[name="email"]').value,
			role: event.target.querySelector('select[name="role"]').value
		};

		if (user.name != '' && user.email != '') {
			dispatch('addUser', user);
			event.target.reset();
			if (firstInput) {
				firstInput.focus();
			}
		}
	}

	onMount(() => {
		if (firstInput) {
			firstInput.focus();
		}
	});
</script>

<div class="divider divider-horizontal hidden md:flex"></div>
<div class="grid flex-grow card rounded-box">
	<form on:submit={addUser}>
		<div class="flex flex-col gap-4 pb-10">
			<div class="flex flex-row justify-between items-center">
				<div class="text-xl">Create new user</div>
				<button
					type="button"
					class="btn btn-square btn-xs btn-outline border-none"
					on:click={() => dispatch('hideAddUser')}
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
					placeholder=""
					bind:this={firstInput}
				/>
			</label>
			<label class="input input-bordered flex items-center gap-2">
				Email
				<input type="text" name="email" class="grow text-right" placeholder="" />
			</label>
			<label class="input input-bordered flex items-center gap-2">
				Role
				<select name="role" class="bg-base-100 ml-auto text-right">
					<option selected value="guest">Guest</option>
					<option value="compliance-manager">Compliance Manager</option>
					<option value="customer">Customer</option>
					<option value="researcher">Researcher</option>
					<option value="administrator">Administrator</option>
				</select>
			</label>
			<button type="submit" class="btn btn-primary">Create</button>
		</div>
	</form>
</div>
