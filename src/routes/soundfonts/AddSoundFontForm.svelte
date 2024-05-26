<script>
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	let firstInput;
	let soundfont = {
		guid: '',
		name: '',
		description: '',
		url: '',
		version: '',
		date: ''
	};

	function addSoundFont(event) {
		event.preventDefault();

		if (soundfont.name != '' && soundfont.description != '') {
			dispatch('addSoundFont', soundfont);
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
<div class="grid flex-grow rounded-box max-w-xl">
	<form on:submit={addSoundFont}>
		<div class="flex flex-col gap-4 pb-10">
			<div class="flex flex-row justify-between items-center">
				<div class="text-xl">Add a new soundfont</div>
				<button
					type="button"
					class="btn btn-square btn-xs btn-outline border-none"
					on:click={() => dispatch('hideAddSoundFont')}
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
					bind:value={soundfont.name}
					bind:this={firstInput}
				/>
			</label>
			<label class="input input-bordered flex items-center gap-2">
				Description
				<input
					type="text"
					name="description"
					class="grow text-right"
					placeholder=""
					bind:value={soundfont.description}
				/>
			</label>
			<label class="input input-bordered flex items-center gap-2">
				Version
				<input
					type="text"
					name="description"
					class="grow text-right"
					placeholder=""
					bind:value={soundfont.url}
				/>
			</label>
			<label class="form-control w-full max-w-full">
				<div class="label">
					<span class="label-text">Upload a soundfont</span>
				</div>
				<label class="input input-bordered flex items-center justify-end pr-0 bg-neutral">
					<input
						type="file"
						class="file-input text-right items-center bg-base-100 h-full"
						style="background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));border:none"
					/>
				</label>
			</label>
			<button type="submit" class="btn btn-primary">Create</button>
		</div>
	</form>
</div>