import type { FlatSite } from '../../lib/link-data'
import { exitHref, EXIT_LINK_REL } from '../../lib/exit-link'
import { CategoryIcon } from './CategoryIcon'
import { PingBadge } from './PingBadge'

const TOSS_BANNER_CLASSES = ['toss-banner-bg-1', 'toss-banner-bg-2', 'toss-banner-bg-3', 'toss-banner-bg-4'] as const

export function SiteCard({ site, index, metaLabel }: { site: FlatSite; index: number; metaLabel: string }) {
  const bannerBgClass = TOSS_BANNER_CLASSES[index % TOSS_BANNER_CLASSES.length]

  return (
    <article className={`toss-card-item stretched-card`}>
      <div className={`toss-card-banner ${bannerBgClass}`}>
        <div className="toss-banner-icon-wrap"><CategoryIcon icon={site.icon} /></div>
      </div>
      <div className="toss-card-content">
        <div className="min-w-0">
          <div className="toss-card-meta-row">
            <span className="toss-meta-category">{site.categoryName}</span>
            <span className="toss-meta-dot" />
            <span>{metaLabel}</span>
          </div>
          <h3 className="toss-card-title-text ellipsis-box" title={site.name}>
            <a className="stretched-link" href={exitHref(site.url)} target="_blank" rel={EXIT_LINK_REL}>{site.name}</a>
          </h3>
        </div>
        <div className="toss-card-footer">
          <PingBadge name={site.name} status={site.status} />
        </div>
      </div>
    </article>
  )
}
