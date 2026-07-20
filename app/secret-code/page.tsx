import type { Metadata } from "next";
import { Breadcrumbs, ExternalLink, FAQ, SecretCodeCard, SiteShell } from "../ui";
import { courses, partnerUrl, siteUrl, verifiedDate, type FAQItem } from "../site-data";

const secretCodeImage = `${siteUrl}/assets/og/secret-code.jpg`;
const secretCodeImageAlt = "쿠폰 카드와 가입 서류로 시크릿코드 할인쿠폰 이용 방법을 표현한 대표 이미지";

export const metadata: Metadata = {
  title: "엔지니어랩 시크릿코드 e7288 6만원 할인쿠폰 받는 법",
  description: "신규 회원과 기존 회원이 엔지니어랩 6만원 할인쿠폰을 확인하는 절차, 시크릿코드 e7288 입력 시점과 결제 체크리스트를 안내합니다.",
  alternates: { canonical: "/secret-code/" },
  openGraph: {
    title: "엔지니어랩 시크릿코드 e7288 이용 방법",
    description: "회원가입 전 코드 입력부터 결제 화면 확인까지 순서대로 살펴보세요.",
    url: `${siteUrl}/secret-code/`,
    images: [{ url: secretCodeImage, width: 1200, height: 630, alt: secretCodeImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: "엔지니어랩 시크릿코드 e7288 이용 방법",
    description: "회원가입 전 코드 입력부터 결제 화면 확인까지 순서대로 살펴보세요.",
    images: [secretCodeImage],
  },
};

const faqs: FAQItem[] = [
  { question: "엔지니어랩 시크릿코드는 무엇인가요?", answer: "신규 회원이 회원가입 단계에서 입력해 할인쿠폰 발급 혜택을 확인하는 코드입니다. 이 가이드에서 안내하는 코드는 e7288입니다." },
  { question: "e7288은 어디에 입력하나요?", answer: "신규 회원가입 과정의 시크릿코드 입력란에 영문 소문자 e와 숫자 7288을 공백 없이 입력하세요." },
  { question: "회원가입 후 코드를 추가할 수 있나요?", answer: "가입 이후에는 시크릿코드 입력 방식으로 발급받기 어려울 수 있습니다. 가입 완료 전에 입력 여부를 확인하고, 이미 가입했다면 전용 프로모션 페이지의 기존 회원 절차를 확인하세요." },
  { question: "어떤 할인 혜택을 받을 수 있나요?", answer: "6만원 할인쿠폰 발급 혜택을 확인할 수 있습니다. 실제 대상 강의와 유효기간, 중복 할인 여부는 공식 페이지에서 확인해야 합니다." },
  { question: "쿠폰은 어디에서 확인하나요?", answer: "가입 후 마이페이지 또는 쿠폰함에서 발급 여부를 확인하고, 결제 화면에서 사용할 쿠폰을 직접 선택하세요." },
  { question: "결제 화면에 쿠폰이 보이지 않으면 어떻게 하나요?", answer: "쿠폰 발급 여부, 대상 상품, 유효기간, 로그인 계정을 먼저 확인하세요. 확인되지 않으면 엔지니어랩 공식 고객센터 안내를 이용해야 합니다." },
  { question: "기존 회원도 쿠폰을 받을 수 있나요?", answer: "전용 프로모션 페이지에 로그인한 뒤 특별 할인쿠폰 발급 배너가 제공되는지 확인하세요. 신규 회원의 코드 입력 방식과는 다릅니다." },
  { question: "모든 강의에 6만원 할인이 적용되나요?", answer: "모든 상품에 적용된다고 단정할 수 없습니다. 결제 전 공식 페이지에서 대상 상품과 최종 적용 금액을 확인하세요." },
];

export default function SecretCodePage() {
  const jsonLd = [{ "@context": "https://schema.org", "@type": "WebPage", name: metadata.title, url: `${siteUrl}/secret-code/`, image: secretCodeImage, primaryImageOfPage: { "@type": "ImageObject", url: secretCodeImage, width: 1200, height: 630, caption: secretCodeImageAlt }, inLanguage: "ko-KR", dateModified: verifiedDate }, { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }];
  return <SiteShell currentPath="/secret-code/"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><section className="guide-hero coupon-hero"><div className="container"><Breadcrumbs current="시크릿코드·할인쿠폰" /><div className="coupon-hero-grid"><div><p className="eyebrow">SECRET CODE GUIDE</p><h1>엔지니어랩 시크릿코드<br /><em>e7288</em>로 6만원 할인쿠폰 받는 방법</h1><p className="guide-lead">엔지니어랩 신규 회원은 회원가입 단계에서 시크릿코드 e7288을 입력하고 가입을 완료하면 6만원 할인쿠폰 발급 혜택을 확인할 수 있습니다. 발급된 쿠폰은 적용 가능한 강의의 결제 화면에서 직접 선택해야 합니다.</p></div><SecretCodeCard /></div></div></section>
  <div className="container guide-layout"><aside className="toc"><strong>목차</strong><a href="#new-members">신규 회원 이용 순서</a><a href="#cautions">입력 시 주의사항</a><a href="#existing-members">기존 회원 안내</a><a href="#payment">결제 체크리스트</a><a href="#faq">자주 묻는 질문</a></aside><article className="guide-content">
    <section id="new-members"><p className="section-kicker">신규 회원</p><h2>가입부터 결제까지 순서대로 확인하세요</h2><ol className="timeline">{["전용 프로모션 페이지에 접속합니다.", "회원가입을 선택하고 정보 입력을 시작합니다.", "시크릿코드 입력란에 e7288을 공백 없이 입력합니다.", "가입 완료 전 코드 입력 여부를 다시 확인합니다.", "가입 후 마이페이지 또는 쿠폰함을 확인합니다.", "수강할 강의를 선택하고 결제 화면으로 이동합니다.", "사용할 쿠폰을 직접 선택합니다.", "6만원 할인이 반영된 최종 금액을 확인한 뒤 결제합니다."].map((item, index) => <li key={item}><span>{index + 1}</span><p>{item}</p></li>)}</ol></section>
    <section id="cautions" className="alert-box"><p className="section-kicker">꼭 확인하세요</p><h2>코드 입력과 쿠폰 적용 주의사항</h2><ul>{["첫 글자는 영문 소문자 e입니다.", "e와 7288 사이에 공백을 넣지 않습니다.", "회원가입을 완료하기 전에 입력 여부를 확인합니다.", "가입 후 쿠폰함에서 발급 여부를 확인합니다.", "결제 화면에서 쿠폰을 직접 선택합니다.", "쿠폰 대상 강의와 유효기간은 공식 페이지에서 확인합니다.", "중복 할인 가능 여부는 결제 화면에서 확인합니다.", "프로모션은 변경되거나 종료될 수 있습니다."].map((item) => <li key={item}>{item}</li>)}</ul></section>
    <section id="existing-members"><p className="section-kicker">기존 회원</p><h2>이미 가입했다면 별도 발급 절차를 확인하세요</h2><p>기존 회원은 시크릿코드를 다시 입력하는 방식이 아니라 전용 프로모션 페이지에 로그인한 뒤 ‘특별 할인쿠폰 즉시 받기’ 배너가 제공되는지 확인해야 합니다. 신규 회원가입 절차와 섞지 말고 현재 로그인 계정의 쿠폰함을 확인하세요.</p><ExternalLink className="button primary" href={partnerUrl}>기존 회원 쿠폰 확인하기</ExternalLink></section>
    <section id="payment" className="checklist-box"><p className="section-kicker">결제 직전</p><h2>할인 적용 체크리스트</h2><ul>{["쿠폰함에 할인쿠폰이 있는가", "선택한 강의가 적용 대상인가", "결제 화면에서 쿠폰을 실제로 선택했는가", "최종 결제 금액이 변경됐는가", "쿠폰 유효기간이 지나지 않았는가", "다른 할인과 중복 적용되는가"].map((item) => <li key={item}><span aria-hidden="true"></span>{item}</li>)}</ul></section>
    <section><p className="section-kicker">강의 살펴보기</p><h2>쿠폰 확인 후 과정별 기준도 비교하세요</h2><div className="related-links">{courses.map((course) => <a key={course.slug} href={`/${course.slug}/`}><strong>{course.name}</strong><span>{course.title} <b aria-hidden="true">→</b></span></a>)}</div></section>
    <section id="faq"><p className="section-kicker">자주 묻는 질문</p><h2>시크릿코드와 쿠폰 이용 전 확인</h2><FAQ items={faqs} /></section><p className="verified">정보 확인일: {verifiedDate}</p><p className="article-disclosure">일부 링크는 제휴 링크일 수 있으며, 링크 이용으로 운영자에게 수익이 발생할 수 있습니다. 이용자의 결제 금액에 추가 비용이 붙는다는 의미는 아닙니다.</p>
  </article></div></SiteShell>;
}
