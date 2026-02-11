import type { CollectionEntry } from 'astro:content';

export function getRelatedPosts(
	currentPost: CollectionEntry<'blog'>,
	allPosts: CollectionEntry<'blog'>[],
	limit: number = 3
): CollectionEntry<'blog'>[] {
	const currentTags = currentPost.data.tags || [];

	// Calculate relevance score based on shared tags
	const postsWithScores = allPosts
		.filter((post) => post.slug !== currentPost.slug && !post.data.draft)
		.map((post) => {
			const postTags = post.data.tags || [];
			const sharedTags = postTags.filter((tag) => currentTags.includes(tag));
			const score = sharedTags.length;

			return { post, score };
		})
		.filter((item) => item.score > 0) // Only posts with at least one shared tag
		.sort((a, b) => {
			// Sort by score first, then by date
			if (b.score !== a.score) {
				return b.score - a.score;
			}
			return b.post.data.pubDate.valueOf() - a.post.data.pubDate.valueOf();
		});

	return postsWithScores.slice(0, limit).map((item) => item.post);
}

export function getReadingTime(content: string): number {
	const wordsPerMinute = 200;
	const wordCount = content.trim().split(/\s+/).length;
	return Math.ceil(wordCount / wordsPerMinute);
}
