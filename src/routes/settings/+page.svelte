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
	let notification = '';

	// The transport defines what type of endpoint we're hitting.
	// In our example we'll be communicating with a Connect endpoint.
	const transport = createConnectTransport({
		baseUrl: PUBLIC_USER_URL
	});

	// Here we make the client itself, combining the service
	// definition with the transport.
	const userServiceClient = createPromiseClient(UserFrontendService, transport);

	function createUser(user) {
		userServiceClient.createUser({ user: user }); //.then(() => readAllUsers());
	}

	function readUser(id) {
		userServiceClient
			.readUser({ id: id })
			.then((r) => {
				editUser = r.user;
			})
			.catch((e) => {
				editUser = {
					id: storedUser.sub,
					name: storedUser.nickname,
					createdAt: storedUser.updated_at
				};
				console.log(editUser);
				createUser(editUser);
			});
	}

	function readAllUsers() {
		// userServiceClient.readAllUsers({}).then((r) => (userList = r.users));
	}

	async function updateUser(user) {
		notification = '';
		try {
			await userServiceClient.updateUser({ user: editUser });
			readAllUsers();
			notification = 'User updated successfully!';
		} catch (e) {
			notification = 'Failed to update user, try again later. ';
		}
		readUser(storedUser.sub);
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
		console.log(PUBLIC_USER_URL);
		const unsubscribe = storeUser.subscribe((result) => {
			storedUser = result;
			console.log(storedUser);
			readUser(storedUser.sub);
		});

		return () => {
			unsubscribe();
		};
	});
</script>
<div>

<EditUserForm
	bind:user={editUser}
	on:updateUser={(event) => updateUser(event.detail)}
	on:deleteUser={(event) => deleteUser(event.detail)}
	on:closeUserForm={() => {
		editUser = null;
	}}
/>
{#if notification}
	<div class="notification">{notification}</div>
{/if}
</div>