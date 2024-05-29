<script>
	import '../app.css';
	import { page } from '$app/stores';
	import NavigationMenu from './NavigationMenu.svelte';
	import TopBar from './TopBar.svelte';
	import { Auth0Client, User } from '@auth0/auth0-spa-js';
	import { onMount } from 'svelte';
	import { replaceState } from '$app/navigation';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	let user;
	let storeUser = writable(user);

	setContext('user', storeUser);

	const auth0 = new Auth0Client({
		domain: 'dev-6vml6vq4imkmq68m.us.auth0.com',
		clientId: '0wwbCdnErWPkH1nfaerKHeMDyLG2lTy1'
	});

	async function login() {
		await auth0.loginWithRedirect({
			authorizationParams: {
				redirect_uri: 'http://localhost:5173/',
				audience: 'https://loopabord.nl'
			}
		});
	}

	async function logout() {
		await auth0.logout();
	}

	onMount(async () => {
		if ($page.url.search) {
			await auth0
				.handleRedirectCallback()
				.then(async () => {
					user = await auth0.getUser();
					storeUser.set(user);
					let token = await auth0.getTokenSilently({
						authorizationParams: { audience: 'https://loopabord.nl' }
					});
					document.cookie = `token=${token}; Secure; Path=/;`;
				})
				.catch((e) => {
					console.log(e);
				});

			replaceState($page.url.pathname, $page.state);
		} else {
			// Attempt to get the user if there's no search parameter in the URL
			user = await auth0.getUser();
			if (!user) {
				login();
			} else {
				storeUser.set(user);
				let token = await auth0.getTokenSilently({
					authorizationParams: { audience: 'https://loopabord.nl' }
				});
				document.cookie = `token=${token}; Secure; Path=/;`;
			}
		}
	});
</script>

<!-- Tailwind helper element to show navigation menu by default in large windows -->
<div class="drawer lg:drawer-open">
	<!-- Tailwind helper element to show navigation menu by default in large windows -->
	<div class="drawer-content flex flex-col">
		<TopBar on:login={login} on:logout={logout} {user} />
		<!-- Padding and alignment of main content -->
		<div class="max-w-[100vw] px-6 pb-16 xl:pr-2 h-full">
			<div class="flex flex-col-reverse justify-between gap-6 xl:flex-row h-full">
				<div class="prose prose-sm md:prose-base w-full h-full flex-grow pt-10">
					<div class="xl:container mx-auto sm:px-16 h-full flex-col">
						<!-- Display route name as a heading -->
						<h1 id="heading" class="text-2xl font-bold capitalize">
							{$page.route.id?.split('/')[1] ? $page.route.id?.split('/')[1] : 'Dashboard'}
						</h1>
						<div class="h-4"></div>
						<div class="flex w-full h-full md:flex-row flex-col-reverse">
							<!-- Route content -->
							<slot />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Tailwind helper element to hide navigation menu by default in small windows -->
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<NavigationMenu />
</div>
