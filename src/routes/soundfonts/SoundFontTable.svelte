<script>
    import { createEventDispatcher } from 'svelte';
    export let soundfontList = [];
    export let addSoundFontButtonActive = false;
    const dispatch = createEventDispatcher();

    function handleDownload(filename) {
        dispatch('downloadFile', { filename });
    }
</script>

<div class="grid flex-grow card rounded-box">
    <div class="overflow-x-auto overflow-y-auto" style="max-height: 100%">
        <table class="table">
            <thead class="sticky-header bg-100">
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Author</th>
                    {#if !addSoundFontButtonActive}
                        <th class="text-right">
                            <button class="btn btn-primary btn-xs" on:click={() => dispatch('showAddSoundFont')}>Add SoundFont</button>
                        </th>
                    {:else}
                        <th></th>
                    {/if}
                </tr>
            </thead>
            <tbody>
                {#if soundfontList.length > 0}
                    {#each soundfontList as soundfont, index}
                        <tr class="hover">
                            <td></td>
                            <td>{soundfont.name}</td>
                            <td>{soundfont.description}</td>
                            <td>{soundfont.author}</td>
                            <td class="flex">
                                {#if soundfont.name === 'MCNBS_3_3_4.sf2'}
                                    <button class="btn btn-secondary btn-xs ml-auto" on:click={() => handleDownload(soundfont.name)}>Download</button>
                                {:else}
                                    <button class="hover:underline" on:click={() => dispatch('openEditSoundFont', soundfont.guid)}>Details</button>
                                {/if}
                            </td>
                        </tr>
                    {/each}
                {/if}
            </tbody>
        </table>
    </div>
</div>

<style>
    /* Create numbered list */
    table {
        counter-reset: css-counter 1;
    }

    table tr:not(:first-child) {
        counter-increment: css-counter 1;
    }

    table tr td:first-child::before {
        content: counter(css-counter);
    }

    .sticky-header {
        position: sticky;
        top: 0;
    }
    .table {
        max-height: 100%; /* Set the maximum height for the table */
        overflow-y: auto; /* Enable vertical scrolling */
    }
</style>