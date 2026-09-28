'use client'

import { useEffect, useId, useRef, type RefObject } from 'react'

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

interface LayerOptions {
  initialFocus?: string
  onClose: () => void
  layerEls?: RefObject<HTMLElement | null>[]
}

interface LayerEntry {
  id: string
  trap: HTMLElement
  layerEls: HTMLElement[]
  inerted: HTMLElement[]
  opener: HTMLElement | null
  addedTabIndex: boolean
  onClose: () => void
}

const layerStack: LayerEntry[] = []
let scrollLockCount = 0
let savedOverflow = ''
let savedPaddingRight = ''
let keydownListening = false

function focusables(root: HTMLElement): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
    (element) => element.getClientRects().length > 0 && element.getAttribute('aria-hidden') !== 'true',
  )
}

function isExcluded(element: HTMLElement): boolean {
  return element.tagName === 'SCRIPT' || element.tagName === 'STYLE' || element.id === 'toss-toast'
}

function inertOutsideLayers(layerElements: HTMLElement[]): HTMLElement[] {
  const inerted: HTMLElement[] = []
  const roots = layerElements.filter((element) => document.contains(element))

  const visit = (element: HTMLElement) => {
    if (isExcluded(element) || element.hasAttribute('inert')) return
    if (roots.some((root) => root === element)) return

    const nestedLayer = roots.some((root) => element.contains(root))
    if (!nestedLayer) {
      element.setAttribute('inert', '')
      inerted.push(element)
      return
    }

    Array.from(element.children).forEach((child) => {
      if (child instanceof HTMLElement) visit(child)
    })
  }

  Array.from(document.body.children).forEach((child) => {
    if (!(child instanceof HTMLElement)) return
    if (isExcluded(child) || child.hasAttribute('inert')) return
    visit(child)
  })

  return inerted
}

function lockScroll() {
  if (scrollLockCount > 0) {
    scrollLockCount += 1
    return
  }

  const body = document.body
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
  savedOverflow = body.style.overflow
  savedPaddingRight = body.style.paddingRight
  body.style.overflow = 'hidden'
  if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`
  body.setAttribute('data-scroll-locked', '')
  scrollLockCount = 1
}

function unlockScroll() {
  if (scrollLockCount === 0) return
  scrollLockCount -= 1
  if (scrollLockCount > 0) return

  const body = document.body
  body.style.overflow = savedOverflow
  body.style.paddingRight = savedPaddingRight
  body.removeAttribute('data-scroll-locked')
}

function handleKeyDown(event: KeyboardEvent) {
  const top = layerStack[layerStack.length - 1]
  if (!top) return

  if (event.key === 'Escape') {
    event.preventDefault()
    top.onClose()
    return
  }
  if (event.key !== 'Tab') return

  const list = focusables(top.trap)
  if (list.length === 0) {
    event.preventDefault()
    top.trap.focus()
    return
  }

  const first = list[0]
  const last = list[list.length - 1]
  const active = document.activeElement
  if (!top.trap.contains(active)) {
    event.preventDefault()
    first.focus()
  } else if (event.shiftKey && active === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && active === last) {
    event.preventDefault()
    first.focus()
  }
}

function startKeydownListener() {
  if (keydownListening) return
  document.addEventListener('keydown', handleKeyDown)
  keydownListening = true
}

function stopKeydownListener() {
  if (!keydownListening || layerStack.length > 0) return
  document.removeEventListener('keydown', handleKeyDown)
  keydownListening = false
}

function closeLayer(entry: LayerEntry) {
  const index = layerStack.indexOf(entry)
  if (index === -1) return
  layerStack.splice(index, 1)
  entry.inerted.forEach((element) => element.removeAttribute('inert'))
  if (entry.addedTabIndex) entry.trap.removeAttribute('tabindex')
  unlockScroll()
  if (entry.opener && entry.opener !== document.body && document.contains(entry.opener)) {
    entry.opener.focus({ preventScroll: true })
  }
  stopKeydownListener()
}

export function useLayer(
  open: boolean,
  ref: RefObject<HTMLElement | null>,
  opts: LayerOptions,
) {
  const layerId = useId()
  const onCloseRef = useRef(opts.onClose)
  const optionsRef = useRef(opts)

  useEffect(() => {
    onCloseRef.current = opts.onClose
    optionsRef.current = opts
  }, [opts])

  useEffect(() => {
    if (!open || !ref.current) return

    const trap = ref.current
    const { initialFocus, layerEls } = optionsRef.current
    const layerElements = [trap, ...(layerEls ?? []).map((layerRef) => layerRef.current).filter(
      (element): element is HTMLElement => element !== null,
    )]
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const addedTabIndex = !trap.hasAttribute('tabindex')
    if (addedTabIndex) trap.setAttribute('tabindex', '-1')

    const entry: LayerEntry = {
      id: layerId,
      trap,
      layerEls: layerElements,
      inerted: inertOutsideLayers(layerElements),
      opener,
      addedTabIndex,
      onClose: () => onCloseRef.current(),
    }
    layerStack.push(entry)
    lockScroll()
    startKeydownListener()

    const target = (initialFocus ? trap.querySelector<HTMLElement>(initialFocus) : null)
      ?? focusables(trap)[0]
      ?? trap
    target.focus({ preventScroll: true })

    return () => closeLayer(entry)
  }, [layerId, open, ref])
}
