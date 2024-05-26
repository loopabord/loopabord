<script>
	import { onMount } from 'svelte';
	import { createPromiseClient } from '@connectrpc/connect';
	import { createConnectTransport } from '@connectrpc/connect-web';
	import SoundFontTable from './SoundFontTable.svelte';
	import AddSoundFontForm from './AddSoundFontForm.svelte';
	import EditSoundFontForm from './EditSoundFontForm.svelte';
	// import { SoundFontService } from '../../gen/soundfont/v1/soundfont_connect';
	// import { SoundFontService } from '../../gen/soundfont_connect';

	let soundfontList = [];
	let addSoundFontButtonActive = false;
	let editSoundFont;
	let soundfontDetail = null;

	// The transport defines what type of endpoint we're hitting.
	// In our example we'll be communicating with a Connect endpoint.
	// const transport = createConnectTransport({
	// 	baseUrl: 'http://localhost:8080'
	// });

	// Here we make the client itself, combining the service
	// definition with the transport.
	// const soundfontServiceClient = createPromiseClient(SoundFontService, transport);

	function createSoundFont(soundfont) {
		// soundfontServiceClient.createSoundFont(soundfont.detail).then(() => readAllSoundFonts());
	}

	function getSoundFont(guid) {
		// soundfontServiceClient.getSoundFont({ guid: guid }).then((r) => (editSoundFont = r));
	}

	function readAllSoundFonts() {
		// soundfontServiceClient.readAllSoundFonts({}).then((r) => (soundfontList = r.soundfont));
	}

	function updateSoundFont(soundfont) {
		// soundfontServiceClient.updateSoundFont(soundfont).then(() => readAllSoundFonts());
	}

	function deleteSoundFont(guid) {
		// soundfontServiceClient.deleteSoundFont({ guid: guid }, {}).then(() => {
		// 	readAllSoundFonts();
		// 	editSoundFont = null;
		// });
	}

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		// readAllSoundFonts();
	});
</script>

{#if soundfontDetail == null}
<SoundFontTable
	{soundfontList}
	{addSoundFontButtonActive}
	on:showAddSoundFont={() => {
		addSoundFontButtonActive = true;
		scrollToTop();
	}}
	on:openEditSoundFont={(event) => {
		editSoundFont = event.detail;
		scrollToTop();
	}}
/>
{/if}

{#if addSoundFontButtonActive}
	<AddSoundFontForm
		on:addSoundFont={createSoundFont}
		on:hideAddSoundFont={() => {
			addSoundFontButtonActive = false;
		}}
	/>
{/if}

{#if editSoundFont != null}
	<EditSoundFontForm
		bind:soundfontId={editSoundFont}
		on:updateSoundFont={(event) => updateSoundFont(event.detail)}
		on:deleteSoundFont={(event) => deleteSoundFont(event.detail)}
		on:closeEditForm={() => {
			editSoundFont = null;
		}}
	/>
{/if}