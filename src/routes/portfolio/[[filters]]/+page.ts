export async function load({ params }) {
	return { filters: params.filters?.split('&') || [] };
}
