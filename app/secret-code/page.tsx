import type { Metadata } from "next";
import { Breadcrumbs, ExternalLink, FAQ, SecretCodeCard, SiteShell } from "../ui";
import { courses, partnerUrl, siteUrl, type FAQItem } from "../site-data";

const pageUrl = `${siteUrl}/secret-code/`;
const heroImage = `${siteUrl}/assets/og/secret-code.jpg`;
const screenshots = [
  { file: "6", title: "공식 홈페이지에서 회원가입 선택", alt: "엔지니어랩 홈페이지 오른쪽 상단의 회원가입 버튼이 빨간색으로 표시된 화면", body: "엔지니어랩 홈페이지 오른쪽 상단의 ‘회원가입’을 선택합니다.", width: 936, height: 936 },
  { file: "7", title: "가입 양식의 시크릿 코드 칸에 e7288 입력", alt: "일반 가입 양식 하단의 시크릿 코드 입력란과 회원가입 버튼이 보이는 화면", body: "일반 가입 양식 아래쪽 ‘시크릿 코드’ 입력란에 e7288을 입력합니다. 화면에 보이는 다른 가입 정보와 동의 항목도 확인한 뒤 가입을 진행합니다.", width: 936, height: 1872 },
  { file: "8", title: "쿠폰 발급 안내 메시지 확인", alt: "회원가입 완료 화면 위에 파트너스 제휴 할인쿠폰 발행과 마이페이지 쿠폰함 확인을 안내하는 메시지", body: "제공된 사례 화면에서는 가입 완료 뒤 파트너스 제휴 할인쿠폰 발행 메시지가 나타납니다. 메시지는 마이페이지의 쿠폰함을 확인하라고 안내합니다.", width: 936, height: 936 },
  { file: "9", title: "마이페이지 쿠폰함에서 확인", alt: "마이페이지 쿠폰함에 파트너스 4+2만원 할인권 e7288과 2025년 11월 3일부터 12월 3일까지의 기간이 표시된 사례 화면", body: "마이페이지의 ‘쿠폰함’에서 쿠폰명과 사용 기간을 확인합니다. 이 캡처는 2025년 11월 3일~12월 3일에 표시된 과거 사례이며, 현재 발급이나 사용 가능 기간을 뜻하지 않습니다.", width: 936, height: 936 },
] as const;

export const metadata: Metadata = {
  title: "엔지니어랩 시크릿코드 e7288 6만원 할인쿠폰 받는 법",
  description: "엔지니어랩 시크릿코드 e7288 입력 위치와 쿠폰함 확인 방법을 실제 가입 화면 4장으로 안내합니다. 과거 쿠폰 사례와 현재 조건 확인 사항을 구분했습니다.",
  alternates: { canonical: "/secret-code/" },
  openGraph: { title: "엔지니어랩 시크릿코드 e7288 이용 방법", description: "실제 화면으로 보는 회원가입, 코드 입력, 발급 메시지와 쿠폰함 확인", url: pageUrl, images: [{ url: heroImage, width: 1200, height: 630, alt: "엔지니어랩 시크릿코드 안내 대표 이미지" }] },
  twitter: { card: "summary_large_image", title: "엔지니어랩 시크릿코드 e7288 이용 방법", description: "실제 화면으로 보는 코드 입력과 쿠폰함 확인", images: [heroImage] },
};

const faqs: FAQItem[] = [
  { question: "e7288은 어디에 입력하나요?", answer: "제공된 일반 가입 화면에서는 양식 하단의 ‘시크릿 코드’ 입력란에 e7288을 입력합니다. 가입 화면 구성이 바뀌었을 수 있으므로 현재 화면을 확인하세요." },
  { question: "쿠폰 발급은 어디에서 확인하나요?", answer: "제공된 사례에는 가입 완료 후 발급 안내 메시지가 표시되고, 마이페이지 쿠폰함에 ‘파트너스 4+2만원 할인권 e7288’이 나타납니다. 현재 발급 여부는 본인 계정의 쿠폰함에서 확인해야 합니다." },
  { question: "캡처에 나온 쿠폰을 지금도 사용할 수 있나요?", answer: "캡처의 사용 기간은 2025년 11월 3일부터 12월 3일까지로 지난 사례입니다. 현재 혜택과 기한은 해당 캡처로 보장할 수 없으며 공식 파트너 페이지와 본인 쿠폰함에서 확인해야 합니다." },
  { question: "쿠폰 사용 조건은 무엇인가요?", answer: "사용자가 확인해 준 파트너 페이지 안내에는 발급일로부터 30일, 상품당 쿠폰 1개, 교재 제외 및 중복 적용 불가라고 적혀 있습니다. 교재는 별도 구매이며, 결제 전 현재 조건을 다시 확인하세요." },
  { question: "이미 가입한 회원도 e7288을 입력할 수 있나요?", answer: "제공된 화면은 신규 회원가입 사례입니다. 기존 회원의 코드 입력 또는 별도 발급 가능 여부는 이 화면만으로 확인할 수 없습니다. 공식 파트너 페이지와 본인 계정에서 확인하세요." },
];
const eligibleProducts = [
  { instructor: "김상훈", names: ["전기(4종) + 공기업 올패스", "전기기사 단기패스", "전기산업기사 단기패스", "전기공사(산업)기사 단기패스", "전기기사 단기패스 - 필기", "전기산업기사 단기패스 - 필기", "전기공사(산업)기사 단기패스 - 필기", "전기기사 단기패스 - 실기", "전기산업기사 단기패스 - 실기", "전기공사(산업)기사 단기패스 - 실기", "전기 쌍기사 종합패스", "공기업 전기직 프리패스", "공기업 전기직 필기패스"] },
  { instructor: "조경필", names: ["전기기사 종합패스", "전기기사 필기패스", "전기기사 실기패스"] },
  { instructor: "심승아·이종오", names: ["쌍기사 종합패스", "단기패스 전기분야"] },
  { instructor: "이종오", names: ["단기패스 기계분야"] },
];

export default function SecretCodePage() {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "WebPage", name: "엔지니어랩 시크릿코드 e7288 6만원 할인쿠폰 받는 법", url: pageUrl, inLanguage: "ko-KR", image: heroImage },
    { "@context": "https://schema.org", "@type": "HowTo", name: "엔지니어랩 가입 화면에서 시크릿코드 e7288 입력과 쿠폰함 확인", inLanguage: "ko-KR", step: screenshots.map((step, index) => ({ "@type": "HowToStep", position: index + 1, name: step.title, text: step.body, image: `${siteUrl}/assets/secret-code/step-${step.file}.webp`, url: `${pageUrl}#step-${index + 1}` })) },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ];
  return <SiteShell currentPath="/secret-code/"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <section className="guide-hero coupon-hero"><div className="container"><Breadcrumbs current="시크릿코드·할인쿠폰" /><div className="coupon-hero-grid"><div><p className="eyebrow">SECRET CODE GUIDE</p><h1>엔지니어랩 시크릿코드<br /><em>e7288</em>로 6만원 할인쿠폰 받는 방법</h1><p className="guide-lead">제공된 가입 화면을 따라 시크릿코드 입력 위치와 쿠폰함 확인 방법을 살펴보세요. 캡처에 나온 쿠폰은 과거 사례입니다. 현재 혜택과 사용 기한은 공식 페이지에서 확인해야 합니다.</p></div><SecretCodeCard /></div></div></section>
    <div className="container guide-layout"><aside className="toc"><strong>목차</strong><a href="#screenshots">실제 화면 4단계</a><a href="#terms">쿠폰 조건</a><a href="#products">대상상품 목록</a><a href="#existing-members">기존 회원 안내</a><a href="#payment">결제 전 확인</a><a href="#faq">자주 묻는 질문</a></aside><article className="guide-content">
      <section id="screenshots"><p className="section-kicker">실제 화면 가이드</p><h2>회원가입부터 쿠폰함 확인까지</h2><p>아래 화면은 사용자가 제공한 가입·발급 사례입니다. 화면 구성은 변경될 수 있습니다.</p><ol className="screenshot-steps">{screenshots.map((step, index) => <li id={`step-${index + 1}`} key={step.file}><div className="screenshot-copy"><span className="step-number">{index + 1}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></div><figure><img src={`/assets/secret-code/step-${step.file}.webp`} alt={step.alt} width={step.width} height={step.height} loading={index === 0 ? "eager" : "lazy"} decoding="async" /><figcaption>{index === 3 ? "2025년 11월 3일~12월 3일에 표시된 과거 쿠폰 사례" : `제공된 화면 ${index + 1}`}</figcaption></figure></li>)}</ol></section>
      <section id="terms" className="alert-box"><p className="section-kicker">파트너 페이지 안내</p><h2>쿠폰 사용 조건을 확인하세요</h2><ul><li>발급일로부터 30일간 사용</li><li>상품당 쿠폰 1개 적용</li><li>교재 제외, 다른 쿠폰과 중복 적용 불가</li><li>교재는 모두 별도 구매</li></ul><p>위 조건은 사용자가 현재 파트너 페이지에서 확인해 준 내용입니다. 적용 상품과 실제 기한은 발급 후 본인 쿠폰함 및 결제 화면에서 다시 확인하세요.</p></section>
      <section id="products"><p className="section-kicker">제공된 대상상품 HTML 기준</p><h2>목록에 표시된 강의 상품</h2><p>사용자가 제공한 ‘대상상품 보기’ HTML에 표시된 19개 상품명입니다. 상품 구성과 쿠폰 적용 여부는 변경될 수 있으므로 결제 화면에서 확인하세요.</p><div className="product-groups">{eligibleProducts.map((group) => <div key={group.instructor}><h3>{group.instructor}</h3><ul>{group.names.map((name) => <li key={name}>{name}</li>)}</ul></div>)}</div><p>교재는 대상상품 목록에 포함되지 않으며 별도 구매입니다.</p></section>
      <section id="existing-members"><p className="section-kicker">기존 회원</p><h2>이미 가입한 경우</h2><p>제공된 네 장의 화면은 신규 회원가입 사례입니다. 기존 회원의 코드 입력이나 별도 발급 절차는 이 화면만으로 확인할 수 없습니다. 아래 공식 파트너 페이지에서 현재 안내를 확인하세요.</p><ExternalLink className="button primary" href={partnerUrl}>공식 파트너 페이지 확인하기</ExternalLink></section>
      <section id="payment" className="checklist-box"><p className="section-kicker">결제 전</p><h2>본인 계정에서 확인할 항목</h2><ul>{["마이페이지 쿠폰함의 실제 발급 여부와 유효기간", "선택한 상품에 쿠폰이 표시되는지", "상품당 1개 및 중복 적용 제한", "교재 별도 구매 금액", "최종 결제 금액"].map((item) => <li key={item}><span aria-hidden="true"></span>{item}</li>)}</ul></section>
      <section><p className="section-kicker">강의 살펴보기</p><h2>과정별 안내도 확인하세요</h2><div className="related-links">{courses.map((course) => <a key={course.slug} href={`/${course.slug}/`}><strong>{course.name}</strong><span>{course.title} <b aria-hidden="true">→</b></span></a>)}</div></section>
      <section id="faq"><p className="section-kicker">자주 묻는 질문</p><h2>시크릿코드와 쿠폰 확인</h2><FAQ items={faqs} /></section><p className="verified">화면 제공 사례: 2025년 11월 · 페이지 수정: 2026년 10월 19일</p><p className="article-disclosure">본 사이트는 비공식 정보 가이드입니다. 일부 링크는 제휴 링크일 수 있으며, 이용자의 결제 금액에 추가 비용이 붙는다는 의미는 아닙니다.</p>
    </article></div></SiteShell>;
}
