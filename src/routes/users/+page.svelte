<script>
	import { onMount } from 'svelte';
	import { createPromiseClient } from '@connectrpc/connect';
	import { createConnectTransport } from '@connectrpc/connect-web';
	import UserTable from './UserTable.svelte';
	import AddUserForm from './AddUserForm.svelte';
	import EditUserForm from './EditUserForm.svelte';
	import { UserService } from '../../gen/user/v1/user_connect';

	let userList = [];
	let addUserButtonActive = false;
	let editUser;

	// The transport defines what type of endpoint we're hitting.
	// In our example we'll be communicating with a Connect endpoint.
	const transport = createConnectTransport({
		baseUrl: 'http://localhost:8080'
	});

	// Here we make the client itself, combining the service
	// definition with the transport.
	const userServiceClient = createPromiseClient(UserService, transport);

	function createUser(user) {
		userServiceClient.createUser(user.detail).then(() => readAllUsers());
	}

	function readUser(guid) {
		userServiceClient.readUser({ guid: guid }).then((r) => (editUser = r));
	}

	function readAllUsers() {
		userServiceClient.readAllUsers({}).then((r) => (userList = r.users));
	}

	function updateUser(user) {
		userServiceClient.updateUser(user).then(() => readAllUsers());
	}

	function deleteUser(guid) {
		userServiceClient.deleteUser({ guid: guid }, {}).then(() => {
			readAllUsers();
			editUser = null;
		});
	}

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		readAllUsers();
	});
</script>

<UserTable
	{userList}
	{addUserButtonActive}
	on:showAddUser={() => {
		addUserButtonActive = true;
		scrollToTop();
	}}
	on:showEditUser={(event) => {
		readUser(event.detail);
		scrollToTop();
	}}
/>

{#if addUserButtonActive}
	<AddUserForm
		on:addUser={createUser}
		on:hideAddUser={() => {
			addUserButtonActive = false;
		}}
	/>
{/if}

{#if editUser != null}
	<EditUserForm
		bind:user={editUser}
		on:updateUser={(event) => updateUser(event.detail)}
		on:deleteUser={(event) => deleteUser(event.detail)}
		on:hideEditUser={() => {
			editUser = null;
		}}
	/>
{/if}
