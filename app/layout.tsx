import '@/styles/global.scss'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Noto_Sans_JP } from "next/font/google";

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const siteName = "SK Japan kitchen knife factory";
const description = '実用性と芸術性を融合させた止水が創る、鏡面仕上げの包丁を販売しております。装飾柄の販売、製造もしております。';
const url = 'https://sk-japan-kitchen-knife-factory.com';

export const metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  alternates: {
    canonical: url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notojp.className}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
