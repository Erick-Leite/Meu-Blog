import type { PlinyConfig } from 'pliny/config'

interface ExtendedPlinyConfig extends PlinyConfig {
  navStyle: 'default' | 'fixed' | 'dynamic'
}

const siteMetadata: ExtendedPlinyConfig = {
  title: 'Next.js Starter Blog',
  author: 'Super Erick',
  headerTitle: 'TailwindBlog',
  description: 'A blog created with Next.js and Tailwind.css',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://tailwind-nextjs-starter-blog-alternative.vercel.app',
  siteRepo: 'https://github.com/Erick-Leite/tailwind-nextjs-starter-blog-alternative',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  image: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'address@yoursite.com',
  github: 'https://github.com',
  x: 'https://x.com',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  threads: 'https://www.threads.net',
  instagram: 'https://www.instagram.com',
  medium: 'https://medium.com',
  bluesky: 'https://bsky.app/',
  locale: 'en-US',
  navStyle: 'dynamic',
  analytics: {
    // If you want to use an analytics provider, you need to add it to the
    // content security policy in the `next.config.ts` file.
    // Supports Plausible, Simple Analytics, Umami, Posthog, or Google Analytics.
    umamiAnalytics: {
      // An environment variable was used for this site to prevent other users from cloning the analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID ?? '', // e.g.: 123e4567-e89b-12d3-a456-426614174000
      // You might also need to override the script if you are storing data in the USA - e.g.:
      // src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in `next.config.ts` as an allowed domain for the CSP
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g.: tailwind-nextjs-starter-blog-alternative.vercel.app
    // If you are hosting your own Plausible.
    //   src: '', // e.g.: https://plausible.my-domain.com/js/script.js
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g.: 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g.: G-XXXXXXX
    // },
  },
  newsletter: {
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    // If you want to use an analytics provider, you need to add it to the
    // content security policy in the `next.config.ts` file.
    // Select a provider and use the associated environment variables
    // https://vercel.com/docs/environment-variables
    provider: 'giscus',
    giscusConfig: {
      // Visit the link below and follow the steps in the "configuration" section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO ?? '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID ?? '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ?? '',
      mapping: 'pathname',
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // Example theme: light, dark, dark_dimmed, dark_high_contrast,
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // Theme when in dark mode
      darkTheme: 'transparent_dark',
      // If the above theme option is set to 'custom'
      // please provide a link below to your custom theme CSS file.
      // e.g.: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in the giscus settings
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load the documents for search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it's safe to include it in the commit
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

export default siteMetadata
