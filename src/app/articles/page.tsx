import { getPosts } from '@/lib/wp';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '오늘링크 Doc — 최신 정보와 아티클',
  description: '웹사이트 최적화, 보안, 링크 모음 관련 다양한 정보를 제공나는 오늘링크 공식 문서 및 블로그입니다.',
};

export const runtime = 'edge'; // Use Edge Runtime for Cloudflare Pages

export default async function ArticlesPage() {
  let posts: any[] = [];
  let errorMsg = null;

  try {
    posts = await getPosts(1, 20);
  } catch (err: any) {
    errorMsg = err.message || JSON.stringify(err);
  }

  return (
    <section className="section" aria-label="오늘링크 아티클">
      <div className="section-head">
        <div>
          <div className="muted">콘텐츠 허브</div>
          <h1 style={{ fontSize: 32 }}>오늘링크 Doc</h1>
        </div>
        <div className="muted">운영 공지 및 유용한 정보 모음</div>
      </div>
      
      {errorMsg && (
        <div style={{ padding: '20px', background: 'red', color: 'white' }}>
          <h3>치명적 에러 발생:</h3>
          <p>{errorMsg}</p>
        </div>
      )}

      {posts.length === 0 && !errorMsg ? (
        <p style={{ padding: '20px 0', color: 'var(--color-muted)' }}>게시글이 존재하지 않습니다.</p>
      ) : (
        <div className="cards">
          {posts.map((post) => {
            try {
              return (
                <article key={post.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div dangerouslySetInnerHTML={{ __html: post.title?.rendered || '제목 없음' }} style={{ fontSize: 18, fontWeight: 800 }} />
                  <div 
                    className="muted" 
                    style={{ fontSize: 14, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                    dangerouslySetInnerHTML={{ __html: (post.excerpt?.rendered || '').replace(/<[^>]+>/g, '') }} 
                  />
                  <div className="muted" style={{ fontSize: 13, marginTop: 'auto' }}>
                    {post.date ? new Date(post.date).toLocaleDateString('ko-KR') : '날짜 없음'}
                  </div>
                  <div className="card-actions" style={{ marginTop: '10px' }}>
                    <Link href={`/${post.slug || post.id}`} className="btn-dark" prefetch={false}>
                      자세히 보기
                    </Link>
                  </div>
                </article>
              );
            } catch (renderErr: any) {
              return <div key={post.id}>렌더링 에러: {renderErr.message}</div>;
            }
          })}
        </div>
      )}
    </section>
  );
}
