"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const isBengali = pathname.startsWith("/bn");

  const switchLanguage = (lang) => {
    const newPath = isBengali
      ? pathname.replace(/^\/bn/, "/en")
      : pathname.replace(/^\/en/, "/bn");

    router.push(newPath);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-white text-white">
        <div className="container flex items-center justify-between p-4">
          <Link
            href="/"
            className="flex flex-col items-center border border-brand px-1 uppercase text-brand"
          >
            <span className="text-[16px] font-bold md:text-[20px]">July</span>
            <span className="text-[14px] md:text-[18px]">Hero</span>
          </Link>
          <div className="flex items-center text-black">
            <div className="relative flex h-[32px] w-[100px] items-center overflow-hidden rounded-[4px] border md:w-[158px]">
              <button
                onClick={() => switchLanguage("bn")}
                className={`h-full w-1/2 px-2 text-sm md:px-4 md:text-base ${
                  isBengali ? "bg-brand text-white" : "bg-gray-200"
                }`}
              >
                <span className="hidden md:block">বাংলা</span>
                <span className="block md:hidden">BN</span>
              </button>
              <button
                onClick={() => switchLanguage("en")}
                className={`h-full w-1/2 px-2 text-sm md:px-4 md:text-base ${
                  !isBengali ? "bg-brand text-white" : "bg-gray-200"
                }`}
              >
                <span className="hidden md:block">English</span>
                <span className="block md:hidden">EN</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
