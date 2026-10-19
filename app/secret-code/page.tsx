import type { Metadata } from "next";
import { Breadcrumbs, ExternalLink, FAQ, SecretCodeCard, SiteShell } from "../ui";
import { courses, partnerUrl, siteUrl, type FAQItem } from "../site-data";

const pageUrl = `${siteUrl}/secret-code/`;
const heroImage = `${siteUrl}/assets/og/secret-code-e7288-square.jpg`;
const screenshots = [
  { file: "6", title: "공식 홈페이지에서 회원가입 선택", alt: "엔지니어랩 홈페이지 오른쪽 상단의 회원가입 버튼이 빨간색으로 표시된 화면", body: "엔지니어랩 홈페이지 오른쪽 상단의 ‘회원가입’을 선택합니다.", width: 936, height: 936 },
  { file: "7", title: "가입 양식의 시크릿 코드 칸에 e7288 입력", alt: "일반 가입 양식 하단의 시크릿 코드 입력란과 회원가입 버튼이 보이는 화면", body: "일반 가입 양식 아래쪽 ‘시크릿 코드’ 입력란에 e7288을 입력합니다. 화면에 보이는 다른 가입 정보와 동의 항목도 확인한 뒤 가입을 진행합니다.", width: 936, height: 1872 },
  { file: "8", title: "쿠폰 발급 메시지 확인", alt: "회원가입 완료 화면 위에 파트너스 제휴 할인쿠폰 발급 안내가 표시된 화면", body: "가입을 마치면 쿠폰 발급 메시지가 나타납니다.", width: 936, height: 936 },
  { file: "9", title: "마이페이지 쿠폰함에서 확인", alt: "마이페이지 쿠폰함에 파트너스 4+2만원 할인권 e7288과 사용 기간이 표시된 화면", body: "‘마이페이지 → 쿠폰함’에서 발급된 할인권과 사용 기간을 확인하세요.", width: 936, height: 936 },
] as const;

export const metadata: Metadata = {
  title: "엔지니어랩 시크릿코드 e7288 6만원 할인쿠폰 받는 법",
  description: "엔지니어랩 할인받는 방법: 회원가입 시 시크릿코드 e7288을 입력해 6만원 할인쿠폰을 받으세요. 입력 위치, 쿠폰함 확인, 대상 인강과 30일 사용 조건을 안내합니다.",
  alternates: { canonical: "/secret-code/" },
  openGraph: { title: "엔지니어랩 시크릿코드 e7288 | 6만원 할인쿠폰", description: "회원가입 화면에 e7288 입력, 쿠폰함 확인, 인강 결제 시 사용", url: pageUrl, images: [{ url: heroImage, width: 1200, height: 1200, type: "image/jpeg", alt: "엔지니어랩 시크릿코드 e7288, 6만원 할인쿠폰" }] },
  twitter: { card: "summary_large_image", title: "엔지니어랩 시크릿코드 e7288 | 6만원 할인쿠폰", description: "회원가입 화면에 e7288 입력, 쿠폰함 확인, 인강 결제 시 사용", images: [heroImage] },
};

const faqs: FAQItem[] = [
  { question: "e7288은 어디에 입력하나요?", answer: "회원가입 화면 아래쪽 ‘시크릿 코드’ 입력란에 영문 소문자 e와 숫자 7288을 붙여 입력하세요." },
  { question: "발급된 쿠폰은 어디에서 보나요?", answer: "가입 후 ‘마이페이지 → 쿠폰함’에서 ‘파트너스 4+2만원 할인권 e7288’과 사용 기간을 확인하세요." },
  { question: "쿠폰은 언제까지 사용할 수 있나요?", answer: "발급일로부터 30일간 사용할 수 있습니다. 정확한 만료일은 마이페이지 쿠폰함에서 확인하세요." },
  { question: "쿠폰을 교재에도 적용할 수 있나요?", answer: "교재에는 적용되지 않습니다. 교재는 별도 구매이며, 쿠폰은 상품당 1개만 적용되고 다른 쿠폰과 중복 사용할 수 없습니다." },
  { question: "이미 가입한 회원은 어떻게 하나요?", answer: "회원가입 화면의 시크릿 코드는 신규 가입 시 입력하는 항목입니다. 이미 가입했다면 파트너 페이지에 로그인해 표시되는 쿠폰 안내를 확인하세요." },
];
const eligibleProducts = [
  { instructor: "김상훈", names: ["전기(4종) + 공기업 올패스", "전기기사 단기패스", "전기산업기사 단기패스", "전기공사(산업)기사 단기패스", "전기기사 단기패스 - 필기", "전기산업기사 단기패스 - 필기", "전기공사(산업)기사 단기패스 - 필기", "전기기사 단기패스 - 실기", "전기산업기사 단기패스 - 실기", "전기공사(산업)기사 단기패스 - 실기", "전기 쌍기사 종합패스", "공기업 전기직 프리패스", "공기업 전기직 필기패스"] },
  { instructor: "조경필", names: ["전기기사 종합패스", "전기기사 필기패스", "전기기사 실기패스"] },
  { instructor: "심승아·이종오", names: ["쌍기사 종합패스", "단기패스 전기분야"] },
  { instructor: "이종오", names: ["단기패스 기계분야"] },
];

export default function SecretCodePage() {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "WebPage", name: "엔지니어랩 시크릿코드 e7288 6만원 할인쿠폰 받는 법", url: pageUrl, inLanguage: "ko-KR", image: heroImage, primaryImageOfPage: { "@type": "ImageObject", url: heroImage, width: 1200, height: 1200, caption: "엔지니어랩 시크릿코드 e7288, 6만원 할인쿠폰" }, dateModified: "2026-10-19" },
    { "@context": "https://schema.org", "@type": "HowTo", name: "엔지니어랩 가입 화면에서 시크릿코드 e7288 입력과 쿠폰함 확인", inLanguage: "ko-KR", step: screenshots.map((step, index) => ({ "@type": "HowToStep", position: index + 1, name: step.title, text: step.body, image: `${siteUrl}/assets/secret-code/step-${step.file}.webp`, url: `${pageUrl}#step-${index + 1}` })) },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ];
  return <SiteShell currentPath="/secret-code/"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <section className="guide-hero coupon-hero"><div className="container"><Breadcrumbs current="시크릿코드·할인쿠폰" /><div className="coupon-hero-grid"><div><p className="eyebrow">SECRET CODE GUIDE</p><h1>엔지니어랩 시크릿코드<br /><em>e7288</em>로 6만원 할인쿠폰 받는 방법</h1><p className="guide-lead">엔지니어랩 회원가입 화면의 ‘시크릿 코드’ 칸에 e7288을 입력하세요. 가입 후 마이페이지 쿠폰함에서 할인권을 확인하고, 인강 결제 시 사용하면 됩니다.</p></div><SecretCodeCard /></div></div></section>
    <div className="container guide-layout"><aside className="toc"><strong>목차</strong><a href="#discount-answer">할인 핵심 정보</a><a href="#screenshots">쿠폰 받는 순서</a><a href="#terms">쿠폰 조건</a><a href="#products">대상상품 목록</a><a href="#existing-members">기존 회원 안내</a><a href="#payment">결제 전 확인</a><a href="#faq">자주 묻는 질문</a></aside><article className="guide-content">
      <section id="discount-answer" className="discount-answer"><div><p className="section-kicker">할인 핵심 정보</p><h2>엔지니어랩 할인, 어떻게 받나요?</h2><p>엔지니어랩 회원가입 화면의 ‘시크릿 코드’ 칸에 <strong>e7288</strong>을 입력하면 6만원 할인쿠폰이 발급됩니다. 가입 후 <strong>마이페이지 → 쿠폰함</strong>에서 확인하고, 대상 인강을 결제할 때 쿠폰을 선택하세요.</p><dl><div><dt>시크릿코드</dt><dd>e7288</dd></div><div><dt>할인쿠폰</dt><dd>4만원 + 2만원, 총 6만원</dd></div><div><dt>사용 기간</dt><dd>발급일로부터 30일</dd></div><div><dt>교재</dt><dd>쿠폰 적용 제외·별도 구매</dd></div></dl><ExternalLink className="button primary" href={partnerUrl}>e7288로 할인쿠폰 받기</ExternalLink></div><img src="/assets/og/secret-code-e7288-square.jpg" alt="엔지니어랩 시크릿코드 e7288과 6만원 할인쿠폰 안내" width="1200" height="1200" loading="lazy" decoding="async" /></section>
      <section id="screenshots"><p className="section-kicker">화면으로 따라하기</p><h2>회원가입부터 쿠폰함 확인까지</h2><ol className="screenshot-steps">{screenshots.map((step, index) => <li id={`step-${index + 1}`} key={step.file}><div className="screenshot-copy"><span className="step-number">{index + 1}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></div><figure><img src={`/assets/secret-code/step-${step.file}.webp`} alt={step.alt} width={step.width} height={step.height} loading={index === 0 ? "eager" : "lazy"} decoding="async" />{index === 3 && <figcaption>사진 속 사용기간(2025.11.03~12.03)은 지난 예시입니다. 내 쿠폰의 만료일은 쿠폰함에서 확인하세요.</figcaption>}</figure></li>)}</ol><ExternalLink className="button primary" href={partnerUrl}>e7288 입력하고 쿠폰 받기</ExternalLink></section>
      <section id="terms" className="alert-box"><p className="section-kicker">사용 전 확인</p><h2>쿠폰 사용 조건</h2><ul><li>발급일로부터 30일간 사용</li><li>상품당 쿠폰 1개 적용</li><li>교재 제외, 다른 쿠폰과 중복 적용 불가</li><li>교재는 모두 별도 구매</li></ul></section>
      <section id="products"><p className="section-kicker">대상 인강</p><h2>쿠폰 대상상품</h2><p>아래 목록에서 필요한 강의를 찾고, 결제 화면에서 쿠폰을 선택하세요.</p><div className="product-groups">{eligibleProducts.map((group) => <div key={group.instructor}><h3>{group.instructor}</h3><ul>{group.names.map((name) => <li key={name}>{name}</li>)}</ul></div>)}</div><p>교재는 쿠폰 적용 대상에서 제외되며 별도 구매입니다.</p><ExternalLink className="button primary" href={partnerUrl}>대상 강의 보고 쿠폰 받기</ExternalLink></section>
      <section id="existing-members"><p className="section-kicker">기존 회원</p><h2>이미 가입했다면</h2><p>파트너 페이지에 로그인해 표시되는 쿠폰 안내와 본인 쿠폰함을 확인하세요.</p><ExternalLink className="button primary" href={partnerUrl}>로그인하고 쿠폰 확인하기</ExternalLink></section>
      <section id="payment" className="checklist-box"><p className="section-kicker">결제 전</p><h2>쿠폰 적용 후 결제금액 확인</h2><ul>{["마이페이지 쿠폰함에서 발급 여부와 만료일 확인", "결제 화면에서 사용할 쿠폰 선택", "교재 별도 구매 금액과 최종 결제금액 확인"].map((item) => <li key={item}><span aria-hidden="true"></span>{item}</li>)}</ul><ExternalLink className="button primary" href={partnerUrl}>쿠폰 받고 인강 살펴보기</ExternalLink></section>
      <section><p className="section-kicker">강의 살펴보기</p><h2>과정별 안내도 확인하세요</h2><div className="related-links">{courses.map((course) => <a key={course.slug} href={`/${course.slug}/`}><strong>{course.name}</strong><span>{course.title} <b aria-hidden="true">→</b></span></a>)}</div></section>
      <section id="faq"><p className="section-kicker">자주 묻는 질문</p><h2>시크릿코드와 쿠폰 확인</h2><FAQ items={faqs} /></section>
    </article></div></SiteShell>;
}
