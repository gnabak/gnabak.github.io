import type { CollectionEntry } from 'astro:content';

export function sortPostsByDate(
	posts: CollectionEntry<'blog'>[]
): CollectionEntry<'blog'>[] {
	return posts.sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);
}

export function sortPostsByDateAsc(
	posts: CollectionEntry<'blog'>[]
): CollectionEntry<'blog'>[] {
	return posts.sort(
		(a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
	);
}

export function sortProjectsByDate(
	projects: CollectionEntry<'projects'>[]
): CollectionEntry<'projects'>[] {
	return projects.sort(
		(a, b) =>
			b.data.completedDate.valueOf() - a.data.completedDate.valueOf()
	);
}

export function sortProjectsByOrder(
	projects: CollectionEntry<'projects'>[]
): CollectionEntry<'projects'>[] {
	return projects.sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
}

export function filterDraftPosts(
	posts: CollectionEntry<'blog'>[]
): CollectionEntry<'blog'>[] {
	return posts.filter((post) => !post.data.draft);
}

export function getFeaturedPosts(
	posts: CollectionEntry<'blog'>[]
): CollectionEntry<'blog'>[] {
	return posts.filter((post) => post.data.featured && !post.data.draft);
}

export function getFeaturedProjects(
	projects: CollectionEntry<'projects'>[]
): CollectionEntry<'projects'>[] {
	return projects.filter((project) => project.data.featured);
}
