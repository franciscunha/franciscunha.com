import { error } from '@sveltejs/kit';

export type ProjectMetadata = {
	name: string;
	cover: string;
	highlight: boolean;
	summary: string;
	year: number;
	order: number;
	tags: string[];
	sidebar: string[];
};

export async function load_project(id: string) {
	try {
		const post = await import(`../content/${id}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, e as string);
	}
}

export async function load_metadata(id: string) {
	return (await load_project(id)).meta;
}

const eagerly_load_all_projects = () =>
	import.meta.glob('../content/*.md', { eager: true }) as {
		[path: string]: { metadata: ProjectMetadata };
	};

const project_id_from_path = (path: string) => path.split('/')[2].split('.')[0];

const sort_projects = (projects: { [id: string]: ProjectMetadata }) =>
	Object.entries(projects)
		// flatten {id: meta} to {id, ...meta}[]
		.map(([id, meta]) => ({ id, ...meta }))
		// sort {id, ...meta}[] by year and order
		.sort((a, b) => (a.year === b.year ? a.order - b.order : b.year - a.year));

export function get_all_project_ids() {
	const paths = Object.keys(import.meta.glob('../content/*.md', { eager: false }));
	const ids = paths.map(project_id_from_path);
	return ids;
}

export function get_all_metadata() {
	const files = eagerly_load_all_projects();
	const meta: { [id: string]: ProjectMetadata } = {};

	for (const path in files) {
		meta[project_id_from_path(path)] = files[path].metadata;
	}

	return meta;
}

export function get_sorted_projects() {
	return sort_projects(get_all_metadata());
}

export function get_all_tags() {
	const files = eagerly_load_all_projects();
	let tags: string[] = [];

	for (const path in files) {
		tags = [...tags, ...files[path].metadata.tags];
	}

	return [...new Set(tags)];
}

export function get_highlighted() {
	return get_sorted_projects()
		.filter((p) => p.highlight)
		.map((p) => p.id);
}
