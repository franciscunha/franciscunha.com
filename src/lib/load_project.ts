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