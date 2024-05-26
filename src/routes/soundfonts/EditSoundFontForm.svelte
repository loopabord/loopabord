<script>
	import { createEventDispatcher, onMount } from 'svelte';
	export let index;
	export let soundfontId;
	let firstInput;
	let soundfont = {
		guid: '173b950f-f584-11ee-b575-8cf8c5ed417b',
		name: 'soundfont1',
		author: 'me',
		description: 'best soundfont ever',
		version: '69'
	};

	const dispatch = createEventDispatcher();

	function updateSoundFont(event) {
		event.preventDefault();

		if (soundfont.name != '' && soundfont.email != '') {
			dispatch('updateSoundFont', soundfont);
			dispatch('closeEditForm');
			event.target.reset();
		}
	}

	function deleteSoundFont() {
		dispatch('deleteSoundFont', soundfont.guid);
	}

	onMount(() => {
		if (firstInput) {
			firstInput.focus();
		}
	});
</script>

<div class="divider divider-horizontal hidden md:flex"></div>
<div class="grid flex-grow card rounded-box" id="editSoundFontForm">
	<form on:submit={updateSoundFont}>
		<div class="flex flex-col gap-4 pb-10">
			<div class="flex flex-row justify-between items-center">
				<div class="text-xl">Update soundfont</div>
				<button
					type="button"
					class="btn btn-square btn-xs btn-outline border-none"
					on:click={() => dispatch('closeEditForm')}
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
					bind:value={soundfont.version}
				/>
			</label>
			<label class="form-control w-full max-w-full">
				<div class="label">
					<span class="label-text">Upload new soundfont version</span>
				</div>
				<label class="input input-bordered flex items-center justify-end pr-0 bg-neutral">
					<input
						type="file"
						class="file-input text-right items-center bg-base-100 h-full"
						style="background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));border:none"
					/>
				</label>
			</label>
			<button type="submit" class="btn btn-primary">Update</button>
		</div>
	</form>
</div>
