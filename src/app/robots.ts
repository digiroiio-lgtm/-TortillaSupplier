import { MetadataRoute } from 'next';

// Explicit allow list for AI/LLM crawlers so the site's B2B tortilla content
// surfaces in generative answer engines (ChatGPT, Claude, Perplexity, Google
// AI Overviews, Bing Copilot, etc.). This is a GEO / AEO (Answer Engine
// Optimisation) baseline — without an explicit User-agent block, some AI
// crawlers behave more conservatively when they see only a "*" rule.
// Each block explicitly re-affirms /api/ is off-limits.
const AI_BOTS = [
  'GPTBot',            // OpenAI training crawler
  'OAI-SearchBot',     // OpenAI ChatGPT Search
  'ChatGPT-User',      // ChatGPT user-triggered browsing
  'ClaudeBot',         // Anthropic training crawler
  'Claude-Web',        // Anthropic legacy identifier
  'anthropic-ai',      // Anthropic user-triggered browsing
  'PerplexityBot',     // Perplexity indexing crawler
  'Perplexity-User',   // Perplexity user-triggered browsing
  'Google-Extended',   // Google Gemini / Vertex opt-in
  'Applebot',          // Apple Search / Spotlight
  'Applebot-Extended', // Apple Intelligence opt-in
  'CCBot',             // Common Crawl (feeds many models)
  'cohere-ai',         // Cohere
  'Meta-ExternalAgent',// Meta Llama-family crawler
  'Meta-ExternalFetcher',
  'Bytespider',        // ByteDance / Doubao
  'Amazonbot',         // Amazon
  'DuckAssistBot',     // DuckDuckGo AI answers
  'MistralAI-User',    // Mistral / Le Chat
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: '/api/',
      })),
    ],
    sitemap: [
      'https://tortillasupplier.com/sitemap.xml',
      'https://tortillasupplier.com/sitemap-products.xml',
      'https://tortillasupplier.com/sitemap-guides.xml',
      'https://tortillasupplier.com/sitemap-categories.xml',
      'https://tortillasupplier.com/sitemap-blog.xml',
    ],
    host: 'https://tortillasupplier.com',
  };
}
