import type { PageLoad } from './$types';

export async function load({ params }: PageLoad) {
	const post = await import(`../${params.slug}.md`);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		metadata: post.metadata,
		content: post.default
	};
}
