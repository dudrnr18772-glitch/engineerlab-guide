import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "./ui";

export const metadata: Metadata = { title: "페이지를 찾을 수 없습니다", robots: { index: false, follow: true } };
export default function NotFound() { return <SiteShell currentPath=""><section className="not-found"><div className="container narrow"><span>404</span><h1>요청한 페이지를 찾을 수 없습니다</h1><p>주소가 변경되었거나 입력한 주소가 정확하지 않을 수 있습니다.</p><div className="button-row"><Link className="button primary" href="/">홈으로 돌아가기</Link><Link className="button secondary" href="/secret-code/">시크릿코드 안내 보기</Link></div></div></section></SiteShell>; }
