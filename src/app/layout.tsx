import type { Metadata, Viewport } from "next";
import { Assistant, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/server/db/static/site.config";
// import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import { TooltipProvider } from "@/components/ui/tooltip";

import Script from "next/script";

const font = Assistant({ subsets: ["latin"] });

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.title.default}`,
    template: `%s`,
  },
  metadataBase: new URL(siteConfig.URL),
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: 'https://www.captureatrip.com'
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.URL,
    title: siteConfig.title.default,
    description: siteConfig.description,
    siteName: siteConfig.title.default,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title.default,
      },
    ],
  },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  viewportFit: "cover"
};
const ENV = process.env.APP_ENV ?? process.env.NODE_ENV

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' dir="ltr" suppressHydrationWarning className="no-scrollbar">
      <head>
        <meta
          name="google-site-verification"
          content="4YEhlk48UIErsVs0UVo8Pk1pI1KV8rS0yuFuROG6HZY"
        />
        {ENV !== "production" &&
          <meta name="robots" content="noindex, nofollow" />
        }
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NHLVX3DV');
              `}}
        />
        <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer
          strategy="worker"
        />

        {/* <!-- Meta Pixel Code --> */}
        <Script
          async
          id="facebook-pixel-id" dangerouslySetInnerHTML={{
            __html: `!function (f, b, e, v, n, t, s) {
          if (f.fbq) return; n = f.fbq = function () {
            n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
          };
          if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
          n.queue = []; t = b.createElement(e); t.async = !0;
          t.src = v; s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
          'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${process.env.FACEBOOK_PIXEL_ID}');
        fbq('track', 'PageView');`
          }}
          strategy="worker"
        />
        {/* eslint-disable */}
        <noscript dangerouslySetInnerHTML={{
          __html: `<img alt={'facebook pixel no script image'} height="1" width="1" style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=${process.env.FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1"
        />` }}
        />
        <GoogleAnalytics gaId="G-R7QXXNGSFK" />
      </head>
      <body className={dmSans.variable}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NHLVX3DV"
            height="0" width="0" stxyle="display:none;visibility:hidden"></iframe>`}}
        ></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </body>
    </html >
  );
}
