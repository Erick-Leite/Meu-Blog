'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import useDetectScroll from '@smakss/react-scroll-direction'
import { useMediaQuery } from '@hooks'
import { motion, useAnimate } from 'motion/react'
import clsx from 'clsx'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from './Logo'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const { navStyle } = siteMetadata

const NAV_DEFAULT = navStyle === 'default'
const NAV_FIXED = navStyle === 'fixed'
const NAV_DYNAMIC = navStyle === 'dynamic'

const TRIGGER_HEIGHT = 96

const Header = () => {
  const [scope, animate] = useAnimate()
  const { scrollPosition, scrollDir } = useDetectScroll({ thr: 20 })
  const [navState, setNavState] = useState({
    isVisible: true,
    isDynamic: false,
    isFloating: false,
  })
  const navDimensionsRef = useRef({
    width: '100%',
    floatingWidth: '96%',
    floatingTop: '1vw',
  })

  const isMd = useMediaQuery('screen and (min-width: 768px)')
  const isXl = useMediaQuery('screen and (min-width: 1280px)')

  const updateNavStateOnScroll = useCallback(() => {
    const SCROLL_TOP = scrollPosition.top
    const SCROLL_UP = scrollDir === 'up'

    setNavState((prevState) => ({
      ...prevState,
      isVisible: SCROLL_TOP <= TRIGGER_HEIGHT,
      isDynamic: SCROLL_TOP > TRIGGER_HEIGHT,
      isFloating: SCROLL_TOP > TRIGGER_HEIGHT && SCROLL_UP,
    }))
  }, [scrollPosition.top, scrollDir])

  useEffect(() => {
    if (NAV_DYNAMIC) {
      updateNavStateOnScroll()
    }
  }, [updateNavStateOnScroll])

  const updateNavDimensions = useCallback(() => {
    let width = '100%'
    let floatingWidth = '96%'
    let floatingTop = '1vw'

    if (isXl) {
      width = '67rem'
      floatingWidth = '65.5rem'
      floatingTop = '0.8rem'
    } else if (isMd) {
      width = '48rem'
      floatingWidth = '46.5rem'
      floatingTop = '0.48rem'
    }

    navDimensionsRef.current = { width, floatingWidth, floatingTop }
    animate(
      scope.current,
      {
        top: navState.isFloating ? floatingTop : undefined,
        width: navState.isDynamic ? floatingWidth : width,
      },
      { duration: 0 }
    )
  }, [isMd, isXl, animate, scope, navState.isFloating, navState.isDynamic])

  useEffect(() => {
    if (NAV_DYNAMIC) {
      updateNavDimensions()
    }
  }, [updateNavDimensions])

  const handleNavAnimation = useCallback(() => {
    const { isVisible, isDynamic, isFloating } = navState
    const { width, floatingWidth, floatingTop } = navDimensionsRef.current
    const duration = 0.5

    const MUST_SHOW_NAV = isVisible && !isDynamic && !isFloating
    const MUST_HIDE_NAV = !isVisible && isDynamic && !isFloating
    const MUST_SHOW_FLOATING_NAV = isFloating

    if (MUST_SHOW_NAV) {
      animate(scope.current, { top: 0, height: '6rem', width }, { duration })
    } else if (MUST_HIDE_NAV) {
      animate(scope.current, { top: '-4.2rem', height: '4.2rem' }, { duration })
      animate(scope.current, { width: floatingWidth }, { delay: duration })
    } else if (MUST_SHOW_FLOATING_NAV) {
      animate(scope.current, { top: floatingTop }, { duration })
    }
  }, [navState, navDimensionsRef, animate, scope])

  useEffect(() => {
    if (NAV_DYNAMIC) {
      handleNavAnimation()
    }
  }, [handleNavAnimation])

  return (
    <header className="h-[6rem] print:hidden">
      <motion.nav
        className={clsx('flex h-[6rem] items-center justify-between bg-white dark:bg-gray-950', {
          'fixed inset-x-0 top-0 z-50': NAV_FIXED || NAV_DYNAMIC,
          'rounded-md bg-white/30 backdrop-blur dark:bg-gray-950/30': NAV_DYNAMIC,
          'mx-auto px-4 sm:px-6 md:w-[48rem] xl:w-[67rem]': !NAV_DEFAULT,
          'shadow-md shadow-gray-200 dark:shadow-gray-800': navState.isDynamic,
        })}
        ref={scope}
      >
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hover:text-primary-800 dark:hover:text-primary-200 block font-medium text-gray-900 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
          </div>
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </motion.nav>
    </header>
  )
}

export default Header
