<script>
	import { createEventDispatcher, onMount } from 'svelte';

	export let user;

	const dispatch = createEventDispatcher();
</script>

<div
	class="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]"
>
	<div class="w-full navbar backdrop-blur">
		<!-- Button to expand navigation menu on mobile -->
		<div class="flex-none lg:hidden">
			<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-6 h-6 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path></svg
				>
			</label>
		</div>
		<div class="flex-1 px-2 mx-2"></div>
		<div class="flex-none hidden lg:block">
			<ul class="menu menu-horizontal">
				<li>
					<label class="swap swap-rotate">
						<input type="checkbox" class="theme-controller" value="dark" />

						<!-- sun icon -->
						<svg
							class="swap-off fill-current w-5 h-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							><path
								d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
							/></svg
						>

						<!-- moon icon -->
						<svg
							class="swap-on fill-current w-5 h-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							><path
								d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
							/></svg
						>
					</label>
				</li>
				{#if user != undefined}
					<li>
						<details>
							<summary
								><div class="avatar">
									<div class="w-5 rounded-full">
										<img src={user.picture} alt="Profile Picture" />
									</div>
								</div>
								{user.nickname}</summary
							>
							<ul class="p-2 bg-base-100 rounded-t-none" style="margin-top:0px!important;margin-inline-start:1rem!important;">
								<li>
									<a href="/settings">Settings</a>
								</li>
								<li><button on:click={() => dispatch('logout')}>Sign Out</button></li>
							</ul>
						</details>
					</li>
				{/if}
			</ul>
		</div>
	</div>
</div>
