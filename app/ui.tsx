import type { Course, FAQItem } from "./site-data";
import { navigation, partnerUrl } from "./site-data";
import { CopyCodeButton } from "./copy-code";
import Link from "next/link";

export function ExternalLink({ href, className = "", children }: { href: string; className?: string; children: React.ReactNode }) {
  return <a href={href} className={className} target="_blank" rel="sponsored nofollow noopener noreferrer">{children}<span className="external-icon" aria-hidden="true">↗</span><span className="sr-only"> (외부 사이트 새 창)</span></a>;
}

function LogoMark() {
  return <span className="logo-mark" aria-hidden="true"><span></span><span></span><span></span></span>;
}

function Header({ currentPath }: { currentPath: string }) {
  return <>
    <div className="notice-bar"><div className="container"><strong>시크릿코드 e7288</strong><span>회원가입하고 6만원 할인쿠폰 받기</span><Link href="/secret-code/">이용 방법</Link></div></div>
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="엔지니어랩 가이드 홈"><LogoMark /><span><strong>엔지니어랩</strong><small>GUIDE</small></span></Link>
        <nav className="desktop-nav" aria-label="주요 메뉴">{navigation.map((item) => <Link key={item.href} href={item.href} aria-current={currentPath === item.href ? "page" : undefined}>{item.label}</Link>)}</nav>
        <ExternalLink href={partnerUrl} className="header-cta">e7288로 쿠폰 받기</ExternalLink>
        <details className="mobile-nav"><summary aria-label="메뉴 열기"><span></span><span></span><span></span></summary><nav aria-label="모바일 메뉴">{navigation.map((item) => <Link key={item.href} href={item.href} aria-current={currentPath === item.href ? "page" : undefined}>{item.label}</Link>)}<ExternalLink href={partnerUrl}>6만원 쿠폰 확인하기</ExternalLink></nav></details>
      </div>
    </header>
  </>;
}

function Footer() {
  return <footer className="site-footer" id="site-footer"><div className="container footer-grid"><div><Link className="brand footer-brand" href="/"><LogoMark /><span><strong>엔지니어랩</strong><small>INFORMATION GUIDE</small></span></Link><p>전기·소방 자격증과 공기업 취업 준비 과정의 선택 기준을 정리했습니다.</p></div><div><h2>강의 가이드</h2>{navigation.slice(1, 7).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div><div><h2>이용 안내</h2><Link href="/secret-code/">시크릿코드·할인쿠폰</Link><Link href="/disclosure/">정보 제공 및 제휴 고지</Link><Link href="/privacy/">개인정보처리방침</Link></div></div></footer>;
}

export function SiteShell({ currentPath, children }: { currentPath: string; children: React.ReactNode }) {
  return <><a className="skip-link" href="#main-content">본문 바로가기</a><Header currentPath={currentPath} /><main id="main-content">{children}</main><Footer /><div className="mobile-coupon"><ExternalLink href={partnerUrl}>e7288로 6만원 쿠폰 확인</ExternalLink></div></>;
}

function CourseIcon({ type }: { type: Course["icon"] }) {
  const paths: Record<Course["icon"], React.ReactNode> = {
    bolt: <path d="M13 2 5 14h6l-1 8 8-13h-6l1-7Z" />,
    meter: <><circle cx="12" cy="12" r="8" /><path d="m12 12 4-3M8 17h8" /></>,
    tools: <><path d="m14 7 3-3 3 3-3 3M4 20l9-9" /><path d="m7 3 4 4-4 4-4-4 4-4Z" /></>,
    book: <><path d="M4 4h6a2 2 0 0 1 2 2v14a3 3 0 0 0-3-3H4V4Z" /><path d="M20 4h-6a2 2 0 0 0-2 2v14a3 3 0 0 1 3-3h5V4Z" /></>,
    building: <><path d="M4 21V8l8-5 8 5v13M8 11h2m4 0h2M8 15h2m4 0h2M10 21v-3h4v3" /></>,
    shield: <><path d="M12 3 4.5 6v5.5c0 4.7 3.1 8 7.5 9.5 4.4-1.5 7.5-4.8 7.5-9.5V6L12 3Z" /><path d="m9 12 2 2 4-4" /></>,
  };
  return <span className="course-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</svg></span>;
}

export function CourseGrid({ courses }: { courses: Course[] }) {
  return <div className="course-grid">{courses.map((course, index) => <article className="course-card" key={course.slug}><div className="course-card-top"><CourseIcon type={course.icon} /><span>0{index + 1}</span></div><h3>{course.name}</h3><p>{course.summary.split(".")[0]}.</p><p className="audience"><strong>추천 대상</strong>{course.audience.split(",")[0]}</p><Link href={`/${course.slug}/`}>{course.name} 강의 선택 기준 확인하기 <span aria-hidden="true">→</span></Link></article>)}</div>;
}

export function SecretCodeCard({ compact = false }: { compact?: boolean }) {
  return <aside className={`code-card${compact ? " compact" : ""}`} aria-label="시크릿코드 안내"><div className="code-card-label"><span>COUPON GUIDE</span><strong>6만원 할인쿠폰</strong></div><div className="code-display"><small>회원가입 시 입력할 코드</small><strong>e7288</strong><CopyCodeButton /></div><ExternalLink className="button primary full" href={partnerUrl}>회원가입하고 쿠폰 받기</ExternalLink><p>가입 화면의 ‘시크릿 코드’ 칸에 e7288을 입력하세요.</p></aside>;
}

export function FAQ({ items }: { items: FAQItem[] }) {
  return <div className="faq-list">{items.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">＋</span></summary><p>{item.answer}</p></details>)}</div>;
}

export function Breadcrumbs({ current }: { current: string }) {
  return <nav className="breadcrumbs" aria-label="현재 위치"><ol><li><Link href="/">홈</Link></li><li aria-current="page">{current}</li></ol></nav>;
}
