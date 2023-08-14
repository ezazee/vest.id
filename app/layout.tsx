import './globals.css';
import './css/style.css';
import './css/vendor/icofont.min.css';
import './css/vendor/line-awesome.min.css';
import './css/vendor/simple-line-icons.css';
import './css/plugins/swiper-bundle.min.css';
import './css/plugins/magnific-popup.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';
import Navbar from './components/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vest | Market of Clothes',
  description: 'Market of Clothes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script src="./js/vendor/jquery-3.6.0.min.js"></Script>
        <Script src="./js/main.js"></Script>
        <Script src="./js/plugins/jquery.ajaxchimp.min.js"></Script>
        <Script src="./js/plugins/popper.min.js"></Script>
        <Script src="./js/plugins/jquery.magnific-popup.min.js"></Script>
        <Script src="./js/plugins/tippy-bundle.umd.min.js"></Script>
        <Script src="./js/vendor/modernizr-3.11.7.min.js"></Script>
        <Script src="./js/vendor/jquery-migrate-3.3.2.min.js"></Script>
        <Script src="./js/plugins/swiper-bundle.min.js"></Script>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
