import { error } from "@sveltejs/kit";

export async function load_project(id: string) {
    try {
        const post = await import(`../content/${id}.md`);

        return {
            content: post.default,
            meta: post.metadata
        }
    } catch(e) {
        error(404);   
    }
}

export async function load_metadata(id: string) {
    try {
        const post = await import(`../content/${id}.md`);
        return post.metadata;
    } catch(e) {
        error(404);
    }
}

export function get_all_project_ids() {
    const paths = Object.keys(import.meta.glob("../content/*.md"));
    const ids = paths.map(path => path.split('/')[2].split('.')[0]);
    return ids;
}

export function get_all_tags() {
    const files = import.meta.glob("../content/*.md", {eager: true});
    let tags: string[] = [];
    for (const path in files) {
        tags = [...tags, ...files[path].metadata.tags];
    }
    return [...new Set(tags)]; 
}