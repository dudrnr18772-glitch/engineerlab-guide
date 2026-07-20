import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://engineerlab-guide.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "엔지니어랩 강의 안내와 시크릿코드 할인쿠폰 가이드",
    template: "%s | 엔지니어랩 가이드",
  },
  description:
    "전기·소방 자격증과 공기업 전기직 강의 선택 기준, 엔지니어랩 시크릿코드 e7288 이용 방법을 정리한 비공식 정보 가이드입니다.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "엔지니어랩 가이드",
    url: SITE_URL,
    images: [{ url: "/assets/og/engineerlab-guide-home.jpg", width: 1200, height: 630, alt: "전기·소방 자격증 학습 자료가 놓인 엔지니어랩 정보 가이드 대표 이미지" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og/engineerlab-guide-home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  other: {
    "codex-preview": "development",
    "naver-site-verification": "8101dffeb403a2fc309473341aaa28687c0b2e83",
    "google-site-verification": "rreeR_wyCoqw2z7nCk7X6Alq5HTTFEgx4gVcrMeJAbw",
    "msvalidate.01": "7CC2274F4DAA4C8A93EB5F4D8259E6A3",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
