import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

interface ContextType {
	site: string;
}

export async function get(context: ContextType) {
	const posts = (await getCollection("blog")).sort(
		(a, b) =>
			new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf(),
	);
 
	return rss({
		title: "Minecraft-Esssentails Blog",
		description: "A blog about the Library/Package minecraft-esssentails",
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/blog/${post.slug}`,
		})),
		customData: "<language>en-us</language>",
	});
 }