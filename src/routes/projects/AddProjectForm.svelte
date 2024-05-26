<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import ProjectForm from './ProjectForm.svelte';

	let project = { tasks: [] };
	let formName = 'Create new project';

	const dispatch = createEventDispatcher();

	function addProject(project) {
		dispatch('addProject', project.detail);
	}
</script>

<ProjectForm
	bind:project
	bind:formName
	on:closeProjectForm={() => {
		dispatch('closeProjectForm');
	}}
	on:saveProject={addProject}
></ProjectForm>
