import { getPosts } from '@/lib/wp';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '오늘링크 Doc — 최신 정보와 아티클',
  description: '웹사이트 최적화, 보안, 링크 모음 관련 다양한 정보를 제공하는 오늘링크 공식 문서 및 블로그입니다.',
};

export const runtime = 'edge';

export default async function ArticlesPage() {
  let posts: any[] = [];
  let errorMsg: string | null = null;

  try {
    const result = await getPosts(1, 20);
    posts = Array.isArray(result) ? result : [];
  } catch (err: any) {
    errorMsg = err?.message || String(err);
  }

  return (
    <section className="section" aria-label="오늘링크 아티클">
      <div className="section-head">
        <div>
          <div className="muted">콘텐츠 허브</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.03em', marginTop: 4 }}>
            오늘링크 Doc
          </h1>
        </div>
        <div className="muted">운영 공지 및 유용한 정보 모음</div>
      </div>

      {errorMsg && (
        <div style={{ padding: '16px 20px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 12, color: '#b91c1c', marginBottom: 20 }}>
          <strong>API 오류:</strong> {errorMsg}
        </div>
      )}

      {!errorMsg && posts.length === 0 && (
        <p style={{ padding: '40px 0', color: 'var(--color-text-muted)', textAlign: 'center' }}>
          게시글이 존재하지 않습니다.
        </p>
      )}

      {posts.length > 0 && (
        <div className="cards">
          {posts.map((post) => {
            const rawExcerpt = (post.excerpt?.rendered || '').replace(/<[^>]+>/g, '').trim();
            const dateStr = post.date
              ? new Date(post.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
              : '';

            return (
              <article
                key={post.id}
                className="card"
                style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
              >
                <div
                  style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.4 }}
                  dangerouslySetInnerHTML={{ __html: post.title?.rendered || '제목 없음' }}
                />

                {rawExcerpt && (
                  <p
                    className="muted"
                    style={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {rawExcerpt}
                  </p>
                )}

                {dateStr && (
                  <div className="muted" style={{ fontSize: 13, marginTop: 'auto' }}>
                    {dateStr}
                  </div>
                )}

                <div style={{ marginTop: 10 }}>
                  <Link
                    href={`/${post.slug || post.id}`}
                    className="btn-dark"
                    prefetch={false}
                  >
                    자세히 보기
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
