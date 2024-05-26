<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import ProjectForm from './ProjectForm.svelte';

	export let projectId;
	let formName = "Project details"

	let project = projectId;

	const dispatch = createEventDispatcher();

	function updateProject(event) {
		event.preventDefault();

		if (project.name != '' && project.tasks.length > 0) {
			dispatch('updateProject', project);
			dispatch('closeProjectForm');
			event.target.reset();
		}
	}
</script>

<ProjectForm
	bind:project
	bind:formName
	on:closeProjectForm={() => {
		dispatch('closeProjectForm');
	}}
	on:saveProject={updateProject}
></ProjectForm>
