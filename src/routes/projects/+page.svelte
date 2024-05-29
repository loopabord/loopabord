<script>
	import { onMount } from 'svelte';
	import { createPromiseClient } from '@connectrpc/connect';
	import { createConnectTransport } from '@connectrpc/connect-web';
	import ProjectTable from './ProjectTable.svelte';
	import AddProjectForm from './AddProjectForm.svelte';
	import EditProjectForm from './EditProjectForm.svelte';
	import { ProjectFrontendService } from '../../gen/project/v1/project_connect';
	import { getContext } from 'svelte';
	import { PUBLIC_USER_URL } from '$env/static/public';

	const storeUser = getContext('user');
	let user;

	let projectList = [];
	let addProjectButtonActive = false;
	let editProject = null;

	// The transport defines what type of endpoint we're hitting.
	// In our example we'll be communicating with a Connect endpoint.
	const transport = createConnectTransport({
		baseUrl: PUBLIC_USER_URL
	});

	// Here we make the client itself, combining the service
	// definition with the transport.
	const projectServiceClient = createPromiseClient(ProjectFrontendService, transport);

	function createProject(project) {
		console.log(project.detail);
		project.detail.authorId = user.sub;
		project.detail.authorName = user.nickname;
		projectServiceClient.createProject({ project: project.detail }).then(() => readAllProjects());
	}

	function readProject(id) {
		projectServiceClient.readProject({ id: id }).then((r) => (editProject = r.project));
	}

	function readAllProjects() {
		projectServiceClient
			.readAllProjects({ authorId: user.sub })
			.then((r) => (projectList = r.projects));
	}

	function updateProject(project) {
		projectServiceClient.updateProject({ project: project }).then(() => readAllProjects());
	}

	function deleteProject() {
		projectServiceClient.deleteProject({ id: editProject.id }, {}).then(() => {
			readAllProjects();
			editProject = null;
		});
	}

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		const unsubscribe = storeUser.subscribe((result) => {
			user = result;
			console.log(user);
		});
		readAllProjects();

		return () => {
			unsubscribe();
		};
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
		bind:project={editProject}
		on:updateProject={(event) => updateProject(event.detail)}
		on:deleteProject={(event) => deleteProject(event.detail)}
		on:closeProjectForm={() => {
			editProject = null;
		}}
	/>
{/if}
