import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs, ExternalLink, FAQ, SiteShell } from "../ui";
import { courses, getCourse, partnerUrl, siteUrl, verifiedDate } from "../site-data";

export function generateStaticParams() { return courses.map((course) => ({ slug: course.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  const url = `/${course.slug}/`;
  return {
    title: course.metaTitle,
    description: course.description,
    alternates: { canonical: url },
    openGraph: {
      title: course.metaTitle,
      description: course.description,
      url: `${siteUrl}${url}`,
      images: [{ url: `${siteUrl}${course.ogImage}`, width: 1200, height: 630, alt: course.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: course.metaTitle,
      description: course.description,
      images: [`${siteUrl}${course.ogImage}`],
    },
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();
  const currentPath = `/${course.slug}/`;
  const related = course.related.map((item) => getCourse(item)).filter(Boolean);
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "WebPage", name: course.title, description: course.description, url: `${siteUrl}${currentPath}`, image: `${siteUrl}${course.ogImage}`, primaryImageOfPage: { "@type": "ImageObject", url: `${siteUrl}${course.ogImage}`, width: 1200, height: 630, caption: course.ogAlt }, inLanguage: "ko-KR", dateModified: verifiedDate },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "홈", item: siteUrl }, { "@type": "ListItem", position: 2, name: course.name, item: `${siteUrl}${currentPath}` }] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: course.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ];
  return <SiteShell currentPath={currentPath}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <section className="guide-hero"><div className="container"><Breadcrumbs current={course.name} /><div className="guide-hero-grid"><div><p className="eyebrow">{course.name} COURSE GUIDE</p><h1>{course.title}</h1><p className="guide-lead">{course.summary}</p><div className="button-row"><a className="button primary" href="#curriculum">학습 과정 확인하기</a><a className="text-link" href="#instructors">관련 강사 살펴보기 <span aria-hidden="true">↓</span></a></div></div><aside className="quick-box"><strong>이 과정의 주요 대상</strong><p>{course.audience}</p><a href="#checklist">수강 전 체크리스트 <span aria-hidden="true">→</span></a></aside></div></div></section>

    <div className="container guide-layout"><aside className="toc" aria-label="페이지 목차"><strong>목차</strong><a href="#needed">이 과정이 필요한 경우</a><a href="#curriculum">학습 과정</a><a href="#instructors">관련 강사</a><a href="#criteria">강의 선택 기준</a><a href="#checklist">수강 전 체크리스트</a><a href="#faq">자주 묻는 질문</a></aside><article className="guide-content">
      <section id="needed"><p className="section-kicker">시작 전 점검</p><h2>이 과정이 필요한 경우</h2><ul className="feature-list">{course.needs.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul></section>
      <section id="curriculum"><p className="section-kicker">학습 흐름</p><h2>{course.name} 공부는 이렇게 연결해 보세요</h2><div className="curriculum-list">{course.curriculum.map((item, index) => <div key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div></section>
      <section id="instructors"><p className="section-kicker">관련 강사</p><h2>담당 영역과 설명 방식을 비교하세요</h2><p className="section-intro">강사 사진 대신 담당 분야 중심으로 정리했습니다. 경력과 실제 개설 강의는 최신 공식 페이지에서 확인하세요.</p><div className="instructor-grid">{course.instructors.map((instructor) => <article key={instructor.name}><span className="avatar">{instructor.initials}</span><div><h3>{instructor.name}</h3><strong>{instructor.role}</strong><p>{instructor.note}</p></div></article>)}</div></section>
      <section id="criteria"><p className="section-kicker">선택 기준</p><h2>샘플 강의와 상품 구성에서 확인할 점</h2><ol className="number-list">{course.criteria.map((item, index) => <li key={item}><span>{index + 1}</span>{item}</li>)}</ol><div className="fit-grid"><div><h3>잘 맞을 수 있는 학습자</h3><ul>{course.fits.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="caution"><h3>추가 확인이 필요한 경우</h3><ul>{course.cautions.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
      <section id="checklist" className="checklist-box"><p className="section-kicker">결제 전 확인</p><h2>수강 전 체크리스트</h2><ul>{course.checklist.map((item) => <li key={item}><span aria-hidden="true"></span>{item}</li>)}</ul></section>
      <section><p className="section-kicker">함께 살펴보기</p><h2>관련 과정</h2><div className="related-links">{related.map((item) => item && <Link key={item.slug} href={`/${item.slug}/`}><strong>{item.name}</strong><span>{item.title} <b aria-hidden="true">→</b></span></Link>)}<Link href="/secret-code/"><strong>시크릿코드·할인쿠폰</strong><span>e7288 입력 순서 확인하기 <b aria-hidden="true">→</b></span></Link></div></section>
      <section id="faq"><p className="section-kicker">자주 묻는 질문</p><h2>{course.name} 강의를 확인할 때</h2><FAQ items={course.faqs} /></section>
      <section className="inline-cta"><div><span>6만원 할인쿠폰</span><h2>가입 전 시크릿코드 e7288을 확인하세요</h2><p>회원가입 단계에서 코드를 입력한 뒤 쿠폰함과 결제 화면에서 적용 여부를 확인하세요.</p></div><ExternalLink className="button warm" href={partnerUrl}>공식 페이지에서 혜택 확인하기</ExternalLink></section>
      <p className="verified">정보 확인일: {verifiedDate}</p><p className="article-disclosure">본 페이지는 강의 선택을 돕기 위한 비공식 정보입니다. 실제 강의 구성, 강사, 혜택 조건은 공식 페이지에서 최종 확인해야 합니다.</p>
    </article></div>
  </SiteShell>;
}
