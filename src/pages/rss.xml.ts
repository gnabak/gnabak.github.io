import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { sortPostsByDate, filterDraftPosts } from '@/utils/sortPosts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
	const allPosts = await getCollection('blog');
	const publishedPosts = filterDraftPosts(allPosts);
	const posts = sortPostsByDate(publishedPosts);

	return rss({
		title: 'Gustavo - Developer & Creator',
		description:
			'Thoughts, tutorials, and insights about web development, programming, and technology.',
		site: context.site?.toString() || 'https://your-domain.com',
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/blog/${post.slug}/`,
			categories: post.data.tags,
			author: post.data.author,
		})),
		customData: `<language>en-us</language>`,
		stylesheet: '/rss-styles.xsl',
	});
}
