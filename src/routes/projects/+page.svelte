<script>
	import { onMount } from 'svelte';
	import { createPromiseClient } from '@connectrpc/connect';
	import { createConnectTransport } from '@connectrpc/connect-web';
	import ProjectTable from './ProjectTable.svelte';
	import AddProjectForm from './AddProjectForm.svelte';
	import EditProjectForm from './EditProjectForm.svelte';
	import { ProjectFrontendService } from '../../gen/project/v1/project_connect';

	let projectList = [];
	let addProjectButtonActive = false;
	let editProject = null;

	// The transport defines what type of endpoint we're hitting.
	// In our example we'll be communicating with a Connect endpoint.
	const transport = createConnectTransport({
		baseUrl: 'http://localhost:8080'
	});

	// Here we make the client itself, combining the service
	// definition with the transport.
	const projectServiceClient = createPromiseClient(ProjectFrontendService, transport);

	function createProject(project) {
		projectServiceClient.createProject(project.detail).then(() => readAllProjects());
	}

	function readProject(id) {
		projectServiceClient.readProject({ id: id }).then((r) => (editProject = r));
	}

	function readAllProjects() {
		projectServiceClient.readAllProjects({}).then((r) => (projectList = r.projects));
	}

	function updateProject(project) {
		// projectServiceClient.updateProject(project).then(() => readAllProjects());
	}

	function deleteProject(guid) {
		// projectServiceClient.deleteProject({ guid: guid }, {}).then(() => {
		// 	readAllProjects();
		// 	editProject = null;
		// });
	}

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		// readAllProjects();
	});
</script>

<ProjectTable
	{projectList}
	{addProjectButtonActive}
	on:showAddProject={() => {
		addProjectButtonActive = true;
		scrollToTop();
	}}
	on:openEditProject={(event) => {
		readProject(event.detail);
		scrollToTop();
	}}
/>

{#if addProjectButtonActive}
	<AddProjectForm
		on:addProject={createProject}
		on:closeProjectForm={() => {
			addProjectButtonActive = false;
		}}
	/>
{/if}

{#if editProject != null}
	<EditProjectForm
		bind:projectId={editProject}
		on:updateProject={(event) => updateProject(event.detail)}
		on:deleteProject={(event) => deleteProject(event.detail)}
		on:closeProjectForm={() => {
			editProject = null;
		}}
	/>
{/if}
