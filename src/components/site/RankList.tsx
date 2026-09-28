import Link from 'next/link'
import type { LinkCategory } from '../../lib/link-data'
import { exitHref, EXIT_LINK_REL } from '../../lib/exit-link'
import { RANK_LIMIT } from '../../data/site-config'
import { CategoryIcon } from './CategoryIcon'
import { PingBadge } from './PingBadge'

function rankClasses(rank: number): { row: string; badge: string } {
  if (rank === 1) return { row: ' rank-1-item', badge: 'juso-badge rank-1' }
  if (rank === 2) return { row: ' rank-2-item', badge: 'juso-badge rank-2' }
  if (rank === 3) return { row: ' rank-3-item', badge: 'juso-badge rank-3' }
  return { row: '', badge: 'juso-badge rank-def' }
}

export function RankBox({ category }: { category: LinkCategory }) {
  return (
    <div className="jusocon-box">
      <Link href={`/category/${category.slug}`} className="jusocon-box-head">
        <div className="jusocon-box-title">
          <div className="cat-head-left">
            <span className="cat-head-icon"><CategoryIcon icon={category.icon} /></span>
            <span style={{ fontSize: '14px', fontWeight: 850 }}>{category.name}</span>
          </div>
          <span className="cat-head-pointer" aria-hidden="true">👉</span>
        </div>
      </Link>
      <div className="jusocon-box-list">
        {category.items.slice(0, RANK_LIMIT).map((site, index) => {
          const rank = index + 1
          const cls = rankClasses(rank)
          return (
            <a
              key={site.url}
              className={`jusocon-row${cls.row}`}
              href={exitHref(site.url)}
              target="_blank"
              rel={EXIT_LINK_REL}
            >
              <span className={cls.badge}>{rank}</span>
              <span className={`juso-name ellipsis-box ${rank === 1 ? 'highlight-1' : ''}`} title={site.name}>{site.name}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export function RankGrid({ categories }: { categories: LinkCategory[] }) {
  return <div className="jusocon-rank-grid">{categories.map((category) => <RankBox key={category.slug} category={category} />)}</div>
}

export function RankPageList({ category }: { category: LinkCategory }) {
  return (
    <div className="page-list-card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {category.items.slice(0, RANK_LIMIT).map((site, index) => {
          const rank = index + 1
          const cls = rankClasses(rank)
          return (
            <div
              key={site.url}
              className={`jusocon-row stretched-card${cls.row}`}
              style={{ padding: '10px 12px', borderBottom: '1px solid var(--border-subtle)' }}
            >
              <span className={cls.badge}>{rank}</span>
              <a
                className={`juso-name ellipsis-box stretched-link ${rank === 1 ? 'highlight-1' : ''}`}
                href={exitHref(site.url)}
                target="_blank"
                rel={EXIT_LINK_REL}
                title={site.name}
                style={{ fontSize: '14.5px', marginLeft: '4px' }}
              >
                {site.name}
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <PingBadge name={site.name} status={site.status} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
