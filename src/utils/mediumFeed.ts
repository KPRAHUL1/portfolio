import { useEffect, useState } from "react";

export interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  categories: string[];
}

/** Raw item shape returned by the rss2json API. */
interface RssItem {
  title?: string;
  pubDate?: string;
  link?: string;
  thumbnail?: string;
  content?: string;
  description?: string;
  categories?: string[];
}

const MEDIUM_USERNAME = "@kprahul";

// Posts whose title contains any of these (case-insensitive) are hidden
// from the site. Add or remove patterns here to change what's excluded.
const HIDDEN_TITLE_PATTERNS = ["best feeling"];

const FEED_URL = `https://medium.com/feed/${MEDIUM_USERNAME}`;
const RSS_API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
  FEED_URL
)}`;

/**
 * Medium often leaves `thumbnail` empty and embeds the cover image
 * inside the post content instead — grab the first <img> we can find.
 */
function extractImage(content?: string): string {
  const match = content?.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] ?? "";
}

/**
 * Fetches the latest posts from a Medium RSS feed using rss2json.
 */
function isHidden(title: string): boolean {
  const lower = title.toLowerCase();
  return HIDDEN_TITLE_PATTERNS.some((pattern) =>
    lower.includes(pattern.toLowerCase())
  );
}

/**
 * Fetches the latest posts from a Medium RSS feed using rss2json.
 */
export function useMediumPosts() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchPosts = async () => {
      try {
        const res = await fetch(RSS_API);
        if (!res.ok) throw new Error(`Failed to fetch feed (${res.status})`);
        const data = await res.json();

        if (data.status !== "ok") {
          throw new Error(data.message || "Feed could not be loaded");
        }

        const items: MediumPost[] = ((data.items ?? []) as RssItem[])
          .filter((item) => !isHidden(item.title ?? ""))
          .map((item) => ({
            title: item.title ?? "Untitled",
            pubDate: item.pubDate ?? "",
            link: item.link ?? "#",
            // rss2json's thumbnail is often empty for Medium; fall back to
            // the first image embedded in the post content/description
            thumbnail:
              item.thumbnail || extractImage(item.content) || extractImage(item.description),
            categories: item.categories ?? [],
          }));

        if (!cancelled) {
          setPosts(items);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Something went wrong"
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchPosts();
    return () => {
      cancelled = true;
    };
  }, []);

  return { posts, loading, error };
}
