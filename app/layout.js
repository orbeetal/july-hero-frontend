import { Providers } from "@/providers/provider";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-sans-bengali",
  subsets: ["bengali"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "July Hero's",
  description: "July Hero's 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoSansBengali.variable} flex min-h-screen flex-col justify-between antialiased`}
      >
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
