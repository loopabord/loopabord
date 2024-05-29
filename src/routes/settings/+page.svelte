<script>
	import { onMount } from 'svelte';
	import { createPromiseClient } from '@connectrpc/connect';
	import { createConnectTransport } from '@connectrpc/connect-web';
	import EditUserForm from './EditUserForm.svelte';
	import { UserFrontendService } from '../../gen/user/v1/user_connect';
	import { getContext } from 'svelte';
	import { PUBLIC_USER_URL } from '$env/static/public';

	const storeUser = getContext('user');
	let storedUser;

	let userList = [];
	let editUser = { id: '', name: '' };

	// The transport defines what type of endpoint we're hitting.
	// In our example we'll be communicating with a Connect endpoint.
	const transport = createConnectTransport({
		baseUrl: PUBLIC_USER_URL
	});

	// Here we make the client itself, combining the service
	// definition with the transport.
	const userServiceClient = createPromiseClient(UserFrontendService, transport);

	function createUser(user) {
		userServiceClient.createUser({ user: user }).then(() => readAllUsers());
	}

	function readUser(id) {
		userServiceClient.readUser({ id: id }).then((r) => {
			editUser = r.user;
			if (editUser == null) {
				editUser = { id: storedUser.sub, name: storedUser.nickname };
				createUser(editUser);
			}
		});
	}

	function readAllUsers() {
		userServiceClient.readAllUsers({ authorId: user.sub }).then((r) => (userList = r.users));
	}

	function updateUser(user) {
		userServiceClient.updateUser({ user: user }).then(() => readAllUsers());
	}

	function deleteUser() {
		userServiceClient.deleteUser({ id: editUser.id }, {}).then(() => {
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
		const unsubscribe = storeUser.subscribe((result) => {
			storedUser = result;
			readUser(storedUser.sub);
		});

		return () => {
			unsubscribe();
		};
	});
</script>

<EditUserForm
	bind:user={editUser}
	on:updateUser={(event) => updateUser(event.detail)}
	on:deleteUser={(event) => deleteUser(event.detail)}
	on:closeUserForm={() => {
		editUser = null;
	}}
/>
