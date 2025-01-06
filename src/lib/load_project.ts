import { error } from "@sveltejs/kit";

export async function load_project(name: string) {
    try {
        const post = await import(`../content/${name}.md`);

        return {
            content: post.default,
            meta: post.metadata
        }
    } catch(e) {
        console.log(e);
        error(404);   
    }
}