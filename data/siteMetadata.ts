import type { PlinyConfig } from 'pliny/config'

interface ExtendedPlinyConfig extends PlinyConfig {
  navStyle: 'default' | 'fixed' | 'dynamic'
}

const siteMetadata: ExtendedPlinyConfig = {
  title: 'Blog Universo Temático',
  author: 'Pedro Erick',
  headerTitle: 'Blog Universo Temático',
  description: 'Confira as publicações mais recentes e fique por dentro das novidades do blog.',
  language: 'pt-br',
  theme: 'system',
  siteUrl: 'https://tailwind-nextjs-starter-blog-alternative.vercel.app',
  siteRepo: 'https://github.com/Erick-Leite/Meu-Blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  image: `${process.env.BASE_PATH || ''}/static/images/social-banner.jpg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/social-banner.jpg`,
  // mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'erickleite338@gmail.com',
  github: 'https://github.com/Erick-Leite',
  x: 'https://x.com/erickleite338',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  // linkedin: 'https://www.linkedin.com',
  // threads: 'https://www.threads.net',
  // instagram: 'https://www.instagram.com',
  // medium: 'https://medium.com',
  // bluesky: 'https://bsky.app/',
  locale: 'pt-br',
  navStyle: 'dynamic',
  analytics: {
    // Se você deseja usar um provedor de análises, é necessário adicioná-lo à
    // política de segurança de conteúdo no arquivo `next.config.ts`.
    // Suporta Plausible, Simple Analytics, Umami, Posthog ou Google Analytics.
    umamiAnalytics: {
      // Uma variável de ambiente foi utilizada para este site a fim de evitar que
      // outros usuários clonem o ID de análise
      umamiWebsiteId: process.env.NEXT_UMAMI_ID ?? '', // ex.: 123e4567-e89b-12d3-a456-426614174000
      // Você também pode precisar substituir o script se estiver armazenando dados nos EUA - ex.:
      // src: 'https://us.umami.is/script.js'
      // Lembre-se de adicionar 'us.umami.is' no `next.config.ts` como um domínio permitido para a CSP
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // ex.: tailwind-nextjs-starter-blog-alternative.vercel.app
    // Se você estiver hospedando seu próprio Plausible.
    //   src: '', // ex.: https://plausible.my-domain.com/js/script.js
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // ex.: 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // ex.: G-XXXXXXX
    // },
  },
  newsletter: {
    // Por favor, adicione seu arquivo .env e modifique-o de acordo com sua seleção
    provider: 'buttondown',
  },
  comments: {
    // Se você deseja usar um provedor de análises, é necessário adicioná-lo à
    // política de segurança de conteúdo no arquivo `next.config.ts`.
    // Selecione um provedor e utilize as variáveis de ambiente associadas
    // https://vercel.com/docs/environment-variables
    provider: 'giscus',
    giscusConfig: {
      // Visite o link abaixo e siga os passos na seção "configuração"
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO ?? '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID ?? '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ?? '',
      mapping: 'pathname',
      reactions: '1', // Reações com emoji: 1 = habilitar / 0 = desabilitar
      // Envia metadados da discussão periodicamente para a janela pai: 1 = habilitar / 0 = desabilitar
      metadata: '0',
      // Exemplo de tema: light, dark, dark_dimmed, dark_high_contrast,
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // Tema quando em modo escuro
      darkTheme: 'transparent_dark',
      // Se a opção de tema acima estiver definida como 'custom'
      // forneça um link abaixo para o seu arquivo CSS de tema customizado.
      // ex.: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // Isto corresponde ao `data-lang="en"` nas configurações do giscus
      lang: 'pt',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // caminho para carregar os documentos para pesquisa
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // O ID da aplicação fornecido pela Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Chave de API pública: é seguro incluí-la no commit
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

export default siteMetadata
