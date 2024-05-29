<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import UserForm from './UserForm.svelte';

	let formName = 'User details';
	let deleteBtn = true;

	export let user;

	const dispatch = createEventDispatcher();

	function updateUser(event) {
		if (user.name != '') {
			dispatch('updateUser', user);
			dispatch('closeUserForm');
		}
	}

	function deleteUser(event) {
		dispatch('deleteUser', user);
		dispatch('closeUserForm');
	}
</script>

<UserForm
	bind:user
	bind:formName
	bind:deleteBtn
	on:closeUserForm={() => {
		dispatch('closeUserForm');
	}}
	on:saveUser={updateUser}
	on:deleteUser={deleteUser}
></UserForm>
