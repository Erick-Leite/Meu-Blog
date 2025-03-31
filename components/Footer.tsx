import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  const ICON_SIZE = 6

  return (
    <footer>
      <div className="mt-16 mb-8 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={ICON_SIZE} />
          <SocialIcon kind="github" href={siteMetadata.github} size={ICON_SIZE} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={ICON_SIZE} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={ICON_SIZE} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={ICON_SIZE} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={ICON_SIZE} />
          <SocialIcon kind="bluesky" href={siteMetadata.bluesky} size={ICON_SIZE} />
          <SocialIcon kind="x" href={siteMetadata.x} size={ICON_SIZE} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={ICON_SIZE} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={ICON_SIZE} />
          <SocialIcon kind="medium" href={siteMetadata.medium} size={ICON_SIZE} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}
