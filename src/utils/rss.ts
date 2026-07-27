export const RSS_URL = "https://www.linexic.top/rss.xml";

export function formatDate(value: string | undefined): string {
	if (!value) return "";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "";
	return date.toLocaleDateString("zh-CN", {
		year: "numeric",
		month: "short",
		day: "2-digit",
	});
}

export function textFrom(value = ""): string {
	return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function excerptFrom(item: { contentSnippet?: string; summary?: string; content?: string; "content:encoded"?: string }): string {
	const raw =
		item.contentSnippet ||
		item.summary ||
		item.content ||
		item["content:encoded"] ||
		"";
	const cleaned = textFrom(String(raw));
	return cleaned.length > 120 ? `${cleaned.slice(0, 120)}…` : cleaned;
}

export interface RssArticle {
	title?: string;
	link?: string;
	isoDate?: string;
	pubDate?: string;
	contentSnippet?: string;
	summary?: string;
	content?: string;
	"content:encoded"?: string;
}

export interface RssData {
	feedTitle: string;
	feedLink: string;
	articles: RssArticle[];
}

export async function fetchRssData(url = RSS_URL): Promise<RssData> {
	const response = await fetch(url);
	if (!response.ok) throw new Error(`HTTP ${response.status}`);
	const xml = await response.text();
	const doc = new DOMParser().parseFromString(xml, "text/xml");

	const feedTitle = doc.querySelector("channel > title")?.textContent || "最新文章";
	const feedLink = doc.querySelector("channel > link")?.textContent || RSS_URL;

	const items = Array.from(doc.querySelectorAll("item")).slice(0, 6);
	const articles: RssArticle[] = items.map((item) => ({
		title: item.querySelector("title")?.textContent || "",
		link: item.querySelector("link")?.textContent || "",
		pubDate: item.querySelector("pubDate")?.textContent || "",
		isoDate: item.querySelector("isoDate")?.textContent || item.querySelector("pubDate")?.textContent || "",
		contentSnippet: item.querySelector("description")?.textContent || "",
	}));

	return { feedTitle, feedLink, articles };
}