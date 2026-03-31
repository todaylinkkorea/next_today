import { getPostBySlug, getPosts } from '@/lib/wp';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// 빌드 시 알려진 slug를 정적으로 미리 생성
export async function generateStaticParams() {
  const posts = await getPosts(1, 100);
  return posts.map((post) => ({ slug: post.slug }));
}

export const revalidate = 3600; // 1시간마다 재검증

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  
  const rawExcerpt = post.excerpt.rendered.replace(/<[^>]+>/g, '').trim();

  return {
    title: `${post.title.rendered} | 오늘링크 Doc`,
    description: rawExcerpt || '오늘링크 문서 페이지입니다.',
    openGraph: {
       title: post.title.rendered,
       description: rawExcerpt,
    }
  };
}

export default async function DynamicPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <article className="section" aria-label="게시글 본문" style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--color-border)', marginTop: '20px' }}>
      <div className="section-head" style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
        <div>
          <h1 
            style={{ fontSize: '32px', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.3 }} 
            dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
          />
          <div className="muted" style={{ fontSize: '14px' }}>
            {new Date(post.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </div>
      
      <div 
        className="wp-content"
        style={{ lineHeight: 1.8, fontSize: '16px', color: '#111827' }}
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
}
