import { fetchPosts } from '$lib/posts/posts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const posts = await fetchPosts();

	const sortedPosts = posts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(sortedPosts);
};
