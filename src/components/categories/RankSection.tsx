import { categories } from '@/data/categories';

export default function RankSection() {
  return (
    <section className="section" id="rank-section" aria-label="카테고리별 바로가기 랭킹">
      <div className="section-head">
        <div>
          <div className="muted">카테고리별 바로가기</div>
          <h2>카테고리 바로가기 모음</h2>
        </div>
        <div className="muted">클릭 시 바로 이동할 수 있는 랭킹형 목록</div>
      </div>

      <nav className="jump-bar" aria-label="카테고리 빠른 이동">
        {categories.map((cat, i) => (
          <a
            key={cat.id}
            className={`jump-chip${i === 0 ? ' active' : ''}`}
            href={`#${cat.id}`}
          >
            {cat.title}
          </a>
        ))}
      </nav>

      <div className="rank-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="rank-panel" id={cat.id}>
            <div className="rank-head">
              <div>
                <div className="rank-title">{cat.title}</div>
                <div className="rank-sub">{cat.sub}</div>
              </div>
            </div>
            <div className="rank-list">
              {cat.items.map((item, idx) => (
                <a
                  key={idx}
                  className="rank-item"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rank-left">
                    <div className="rank-num">{idx + 1}</div>
                    <div className="rank-name">{item.name}</div>
                  </div>
                  <span className="rank-go">바로가기</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
