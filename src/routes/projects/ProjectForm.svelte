<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import Page from '../+page.svelte';

	export let project;
	export let formName;

	let firstInput;

	const dispatch = createEventDispatcher();

	function saveProject(event) {
		event.preventDefault();
		if (project.name != '') {
			dispatch('saveProject', project);
			dispatch('closeProjectForm');
			event.target.reset();
		}
	}

	onMount(() => {
		if (firstInput) {
			firstInput.focus();
		}
	});
</script>

<div class="divider divider-horizontal hidden md:flex"></div>
<div class="grid flex-grow rounded-box max-w-xl">
	<form on:submit={saveProject} class="max-w-xl">
		<div class="flex flex-col gap-4 pb-10 max-w-xl">
			<div class="flex flex-row justify-between items-center">
				<div class="text-xl">{formName}</div>
				<button
					type="button"
					class="btn btn-square btn-xs btn-outline border-none"
					on:click={() => dispatch('closeProjectForm')}
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

			<label class="input input-bordered flex items-center gap-2 text-right max-w-xl">
				Name
				<input
					type="text"
					name="name"
					class="grow text-right"
					bind:value={project.name}
					bind:this={firstInput}
				/>
			</label>
			<label class="input input-bordered flex items-center gap-2">
				Description
				<input
					type="text"
					name="description"
					class="grow text-right"
					bind:value={project.description}
				/>
			</label>
			<label class="input input-bordered flex items-center gap-2">
				Participants
				<input
					type="text"
					name="description"
					class="grow text-right"
					bind:value={project.collaborators}
				/>
			</label>
			<div class="flex flex-row">
				<!-- <button type="button" class="btn btn-error mr-2" on:click={delete}>Delete</button> -->
				<button class="btn btn-primary flex-grow">Save</button>
			</div>
		</div>
	</form>
</div>