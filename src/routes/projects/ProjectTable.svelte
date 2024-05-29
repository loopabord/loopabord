<script>
	import { createEventDispatcher } from 'svelte';
	export let projectList = [];
	export let addProjectButtonActive = false;
	const dispatch = createEventDispatcher();
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
					{#if !addProjectButtonActive}
						<th class="text-right"
							><button class="btn btn-primary btn-xs" on:click={() => dispatch('showAddProject')}
								>Add Project</button
							></th
						>
					{:else}
						<th></th>
					{/if}
				</tr>
			</thead>
			<tbody>
				{#if projectList.length > 0}
					{#each projectList as project, index}
						<tr class="hover">
							<td></td>
							<td class="capitalize">{project.name}</td>
							<td class="capitalize">{project.description}</td>
							<td class="capitalize">{project.authorName}</td>
							<td><button class="hover:underline" on:click={() => dispatch('openEditProject', project.id)}>Details</button></td>
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
