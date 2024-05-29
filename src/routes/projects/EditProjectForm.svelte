<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import ProjectForm from './ProjectForm.svelte';

	let formName = 'Project details';
	let deleteBtn = true;

	export let project;

	const dispatch = createEventDispatcher();

	function updateProject(event) {
		if (project.name != '') {
			dispatch('updateProject', project);
			dispatch('closeProjectForm');
		}
	}

	function deleteProject(event) {
		dispatch('deleteProject', project);
		dispatch('closeProjectForm');
	}
</script>

<ProjectForm
	bind:project
	bind:formName
	bind:deleteBtn
	on:closeProjectForm={() => {
		dispatch('closeProjectForm');
	}}
	on:saveProject={updateProject}
	on:deleteProject={deleteProject}
></ProjectForm>
