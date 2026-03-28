import { categories } from '@/data/categories';

export default function CategoryGrid() {
  return (
    <section className="section" id="categories" aria-label="주요 카테고리">
      <div className="section-head">
        <div>
          <div className="muted">카테고리 탐색</div>
          <h2>주요 카테고리</h2>
        </div>
        <div className="muted">카테고리 클릭 시 아래 해당 섹션으로 바로 이동</div>
      </div>
      <div className="category-grid">
        {categories.map((cat) => (
          <a key={cat.id} className="category" href={`#${cat.id}`}>
            <div className="category-icon" aria-hidden="true">{cat.icon}</div>
            <b>{cat.title}</b>
            <div className="muted">{cat.sub}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
