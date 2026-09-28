'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

const TOAST_DURATION_MS = 3200

export interface ToastState {
  message: string
  icon: string
  active: boolean
}

interface SiteUiContextValue {
  drawerOpen: boolean
  openDrawer: () => void
  closeDrawer: () => void
  searchOpen: boolean
  openSearch: () => void
  closeSearch: () => void
  toast: (message: string, icon?: string) => void
  toastState: ToastState
}

const SiteUiContext = createContext<SiteUiContextValue | undefined>(undefined)

export function SiteUiProvider({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [toastState, setToastState] = useState<ToastState>({
    message: '',
    icon: '🎁',
    active: false,
  })
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openDrawer = useCallback(() => setDrawerOpen(true), [])
  const closeDrawer = useCallback(() => setDrawerOpen(false), [])
  const openSearch = useCallback(() => setSearchOpen(true), [])
  const closeSearch = useCallback(() => setSearchOpen(false), [])
  const toast = useCallback((message: string, icon = '🎁') => {
    if (toastTimerRef.current !== null) clearTimeout(toastTimerRef.current)
    setToastState({ message, icon, active: true })
    toastTimerRef.current = setTimeout(() => {
      setToastState((current) => ({ ...current, active: false }))
      toastTimerRef.current = null
    }, TOAST_DURATION_MS)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        openSearch()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [openSearch])

  useEffect(() => () => {
    if (toastTimerRef.current !== null) clearTimeout(toastTimerRef.current)
  }, [])

  const value = useMemo<SiteUiContextValue>(() => ({
    drawerOpen,
    openDrawer,
    closeDrawer,
    searchOpen,
    openSearch,
    closeSearch,
    toast,
    toastState,
  }), [closeDrawer, closeSearch, drawerOpen, openDrawer, openSearch, searchOpen, toast, toastState])

  return <SiteUiContext.Provider value={value}>{children}</SiteUiContext.Provider>
}

export function useSiteUi(): SiteUiContextValue {
  const context = useContext(SiteUiContext)
  if (!context) throw new Error('useSiteUi must be used within SiteUiProvider')
  return context
}
