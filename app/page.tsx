import type { Metadata } from "next";
import Link from "next/link";
import { CourseGrid, FAQ, SiteShell, SecretCodeCard, ExternalLink } from "./ui";
import { courses, homeFaqs, partnerUrl, siteUrl, verifiedDate } from "./site-data";

export const metadata: Metadata = {
  title: "엔지니어랩 강의 안내와 시크릿코드 할인쿠폰 가이드",
  description: "엔지니어랩 전기·소방 자격증과 공기업 NCS 강의를 비교하고 시크릿코드 e7288로 6만원 할인쿠폰을 확인하는 방법을 안내합니다.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "엔지니어랩 강의와 할인 혜택을 한눈에",
    description: "과정별 선택 기준과 시크릿코드 e7288 이용 순서를 확인하세요.",
    url: siteUrl,
    images: [{ url: `${siteUrl}/assets/og/engineerlab-guide-home.jpg`, width: 1200, height: 630, alt: "전기·소방 자격증 학습 자료가 놓인 엔지니어랩 정보 가이드 대표 이미지" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "엔지니어랩 강의와 할인 혜택을 한눈에",
    description: "과정별 선택 기준과 시크릿코드 e7288 이용 순서를 확인하세요.",
    images: [`${siteUrl}/assets/og/engineerlab-guide-home.jpg`],
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "엔지니어랩 가이드",
  url: siteUrl,
  inLanguage: "ko-KR",
  description: "전기·소방 자격증과 공기업·NCS 강의 선택을 돕는 비공식 정보 가이드",
  image: `${siteUrl}/assets/og/engineerlab-guide-home.jpg`,
};

export default function Home() {
  return (
    <SiteShell currentPath="/">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />
      <section className="hero section-pad" aria-labelledby="home-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">전기·소방 자격증부터 공기업 전기직까지</p>
            <h1 id="home-title">엔지니어랩 강의와<br />할인 혜택을 한눈에</h1>
            <p className="hero-lead">과정별 강의 선택 기준과 학습 흐름, 회원가입 때 사용할 시크릿코드까지 필요한 정보를 차분하게 비교해 보세요.</p>
            <div className="button-row">
              <ExternalLink className="button primary" href={partnerUrl}>시크릿코드 e7288로 가입하기</ExternalLink>
              <a className="button secondary" href="#courses">강의 분야 살펴보기</a>
            </div>
            <p className="fine-print">쿠폰 대상 상품·유효기간·중복 할인 조건은 공식 페이지에서 최종 확인해야 합니다.</p>
          </div>
          <SecretCodeCard compact />
        </div>
      </section>

      <section className="section-pad compact-section" aria-labelledby="overview-title">
        <div className="container intro-grid">
          <div>
            <p className="section-kicker">학습 구조</p>
            <h2 id="overview-title">강의 수보다 먼저 볼 것은<br />나에게 맞는 학습 흐름입니다</h2>
          </div>
          <div className="prose">
            <p>엔지니어랩에서는 전기·소방 분야 자격증과 공기업 취업 준비 과정을 확인할 수 있습니다. 온라인 VOD는 반복 수강, 배속, 모바일 학습에 적합하지만 수강 기간과 이용 범위는 과정마다 다를 수 있습니다.</p>
            <p>필기 이론에서 기출문제, 실기 대비, 파이널 학습으로 이어지는지 확인하고, 오프라인 과정이나 첨삭·모의고사가 필요하다면 선택한 상품에 포함되는지 공식 페이지에서 비교하세요.</p>
          </div>
        </div>
      </section>

      <section id="courses" className="section-pad tint-section" aria-labelledby="courses-title">
        <div className="container">
          <div className="section-heading">
            <div><p className="section-kicker">분야별 안내</p><h2 id="courses-title">준비 목표에 맞는 과정부터 확인하세요</h2></div>
            <p>자격증 종류와 현재 학습 단계가 다르면 확인해야 할 강의 구성도 달라집니다.</p>
          </div>
          <CourseGrid courses={courses} />
        </div>
      </section>

      <section className="section-pad" aria-labelledby="criteria-title">
        <div className="container split-panel">
          <div>
            <p className="section-kicker">수강 전 판단 기준</p>
            <h2 id="criteria-title">결제 전에 아홉 가지를 확인하세요</h2>
            <p className="muted">유명한 강의인지보다 내 일정과 취약 과목에 맞는 구성이 있는지가 더 중요합니다.</p>
          </div>
          <ul className="check-grid">
            {["비전공자도 이해할 수 있는 설명", "필기 개념과 실기 문제의 연결", "기출문제 풀이 과정과 반복 범위", "실기 답안 작성 방법", "시험일까지 완강 가능한 분량", "교재와 강의 순서의 연결", "모바일·배속 수강 조건", "질문 답변과 첨삭 지원 여부", "수강 기간과 최신 시험 기준"].map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section-pad dark-section" aria-labelledby="steps-title">
        <div className="container">
          <p className="section-kicker light">시크릿코드 이용 순서</p>
          <h2 id="steps-title">회원가입부터 결제까지 4단계</h2>
          <ol className="step-grid">
            {["전용 프로모션 페이지에 접속합니다.", "회원가입 과정에서 e7288을 입력합니다.", "가입 후 쿠폰함에서 6만원 쿠폰 발급 여부를 확인합니다.", "결제 화면에서 쿠폰을 선택하고 최종 금액을 확인합니다."].map((step, index) => <li key={step}><span>{index + 1}</span><p>{step}</p></li>)}
          </ol>
          <div className="center-row"><Link className="button warm" href="/secret-code/">시크릿코드 입력 순서 자세히 보기</Link></div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="faq-title">
        <div className="container narrow"><p className="section-kicker">자주 묻는 질문</p><h2 id="faq-title">강의와 할인 혜택을 확인할 때</h2><FAQ items={homeFaqs} /></div>
      </section>

      <section className="section-pad final-cta">
        <div className="container final-cta-inner">
          <div><p className="section-kicker">가입 전 마지막 확인</p><h2>회원가입을 완료하기 전에 시크릿코드를 확인하세요</h2><p>발급 여부와 최종 적용 조건은 연결되는 공식 페이지에서 확인하세요.</p></div>
          <ExternalLink className="button primary" href={partnerUrl}>e7288 입력하고 6만원 쿠폰 확인하기</ExternalLink>
        </div>
      </section>
      <p className="verified container">정보 확인일: {verifiedDate}</p>
    </SiteShell>
  );
}
