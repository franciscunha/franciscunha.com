import { load_project } from '$lib/load_project.js';

export async function load({ params }) {
	return load_project(params.slug);
}
