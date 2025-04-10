interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Tailwind Nextjs Starter Blog Alternative',
    description: `Meu template de blog rico em recursos, construído com Next.js e Tailwind CSS. Uma alternativa personalizável a blogs estáticos gerados por Jekyll e Hugo.`,
    imgSrc: '/static/images/tailwind-blog.jpg',
    href: 'https://tailwind-nextjs-starter-blog-alternative.vercel.app/',
  },
  {
    title: 'Firebase Studio',
    description: `O Firebase Studio é um espaço de trabalho online com IA generativa (Gemini) integrado, que visa acelerar o desenvolvimento full-stack de aplicativos web e móveis, permitindo criar backends, frontends e implantá-los no Firebase, tudo em um só lugar.`,
    imgSrc: '/static/images/firebase-studio.png',
    href: 'https://firebase.studio/',
  },
]

export default projectsData
