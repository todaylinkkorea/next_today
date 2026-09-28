'use client'

import type { LinkStatus } from '../../lib/link-data'
import { useSiteUi } from './SiteUiProvider'

const PING_STATUS = {
  ok: { cls: 'ok', label: '🟢 원활', icon: '🟢', msg: '접속 원활합니다.' },
  maintenance: { cls: 'maintenance', label: '🔴 점검', icon: '🔴', msg: '현재 점검 중입니다. 잠시 후 다시 시도해 주세요.' },
} as const

export function PingBadge({ name, status }: { name: string; status: LinkStatus }) {
  const { toast } = useSiteUi()
  const pingStatus = PING_STATUS[status === 'maintenance' ? 'maintenance' : 'ok']

  return (
    <button
      type="button"
      className={`ping-status-badge ${pingStatus.cls}`}
      style={{ border: 0, font: 'inherit' }}
      onClick={(event) => {
        event.preventDefault()
        event.stopPropagation()
        toast(`${name} 사이트는 ${pingStatus.msg}`, pingStatus.icon)
      }}
    >
      <span className="pulse-ping-dot" />
      <span>{pingStatus.label}</span>
    </button>
  )
}
