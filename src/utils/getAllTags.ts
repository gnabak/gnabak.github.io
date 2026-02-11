import type { CollectionEntry } from 'astro:content';

export interface TagWithCount {
	name: string;
	count: number;
}

export function getAllTags(posts: CollectionEntry<'blog'>[]): TagWithCount[] {
	const tagCounts = new Map<string, number>();

	posts.forEach((post) => {
		if (post.data.tags) {
			post.data.tags.forEach((tag) => {
				tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
			});
		}
	});

	return Array.from(tagCounts.entries())
		.map(([name, count]) => ({ name, count }))
		.sort((a, b) => b.count - a.count);
}

export function getPostsByTag(
	posts: CollectionEntry<'blog'>[],
	tag: string
): CollectionEntry<'blog'>[] {
	return posts.filter(
		(post) =>
			post.data.tags && post.data.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
	);
}

export function getUniqueTags(posts: CollectionEntry<'blog'>[]): string[] {
	const tags = new Set<string>();
	posts.forEach((post) => {
		if (post.data.tags) {
			post.data.tags.forEach((tag) => tags.add(tag));
		}
	});
	return Array.from(tags).sort();
}

// Generate a consistent color for each tag based on its name
export function getTagColor(tag: string): string {
	const colors = [
		'from-pink-500 to-purple-500',
		'from-blue-500 to-cyan-500',
		'from-purple-500 to-pink-500',
		'from-orange-500 to-pink-500',
		'from-green-500 to-emerald-500',
		'from-cyan-500 to-blue-500',
		'from-violet-500 to-purple-500',
		'from-fuchsia-500 to-pink-500',
	];

	// Simple hash function to get consistent color for tag
	let hash = 0;
	for (let i = 0; i < tag.length; i++) {
		hash = tag.charCodeAt(i) + ((hash << 5) - hash);
	}

	return colors[Math.abs(hash) % colors.length];
}
