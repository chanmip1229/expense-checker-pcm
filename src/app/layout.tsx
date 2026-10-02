import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '한결인테리어 경비 정산 검사기 | Expense Policy Auditor',
  description:
    '사내 경비 처리 규정(제5조~제9조) 기반 CSV 경비 정산 내역 자동 검증 및 조회 웹 애플리케이션',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
