import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/provider';

const notoSansBengali = Noto_Sans_Bengali({
    variable: '--font-noto-sans-bengali',
    subsets: ['bengali'],
    weight: ['400', '700'],
});

export const metadata = {
    title: "July Hero's",
    description: "July Hero's 2024",
};

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body
                className={`${notoSansBengali.variable} antialiased min-h-screen flex flex-col justify-between`}
            >
                <Providers>
                    <main>{children}</main>
                </Providers>

            </body>
        </html>
    );
}
