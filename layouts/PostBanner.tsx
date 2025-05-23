import clsx from 'clsx/lite'
import { ReactNode } from 'react'
import Image from '@/components/Image'
import Bleed from 'pliny/ui/Bleed'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostMinimal({ content, next, prev, children }: LayoutProps) {
  const { slug, title, coverImage } = content
  const url = coverImage?.url || 'https://picsum.photos/seed/picsum/800/400'
  const { width, height } = coverImage ?? {}
  const { parentClass, childClass, parentStyle, childStyle } = coverImage?.banner ?? {}
  const hasImageWidthClass = childClass?.includes('w-')
  const isVertical = width && height ? width < height : false
  const defaultImageWidthClass = isVertical ? 'w-[50%]' : 'w-[100%]'

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div>
          <div className="space-y-1 pb-10 text-center dark:border-gray-700">
            <div className="w-full">
              <Bleed>
                <div
                  className={clsx('flex justify-center first-letter:relative', parentClass)}
                  style={parentStyle}
                >
                  <Image
                    src={url}
                    alt={title}
                    width={width ?? 800}
                    height={height ?? 400}
                    className={clsx(childClass, !hasImageWidthClass && defaultImageWidthClass)}
                    style={childStyle}
                  />
                </div>
              </Bleed>
            </div>
            <div className="relative pt-10">
              <PageTitle>{title}</PageTitle>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none py-4">{children}</div>
          {siteMetadata.comments && (
            <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300" id="comment">
              <Comments slug={slug} />
            </div>
          )}
          <footer>
            <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
              {prev && prev.path && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/${prev.path}`}
                    className="text-primary-800 hover:text-primary-900 dark:text-primary-200 dark:hover:text-primary-100"
                    aria-label={`Postagem anterior: ${prev.title}`}
                  >
                    &larr; {prev.title}
                  </Link>
                </div>
              )}
              {next && next.path && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/${next.path}`}
                    className="text-primary-800 hover:text-primary-900 dark:text-primary-200 dark:hover:text-primary-100"
                    aria-label={`Próxima postagem: ${next.title}`}
                  >
                    {next.title} &rarr;
                  </Link>
                </div>
              )}
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
