'use client'

import { useSiteUi } from './SiteUiProvider'

export function Toast() {
  const { toastState } = useSiteUi()

  return (
    <div
      id="toss-toast"
      className={`toss-toast-bar${toastState.active ? ' active' : ''}`}
      role="status"
      aria-live="polite"
    >
      <span style={{ fontSize: '18px' }} id="toast-icon">{toastState.icon}</span>
      <span id="toast-msg">{toastState.message}</span>
    </div>
  )
}
