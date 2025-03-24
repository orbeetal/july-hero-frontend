"use client";

import logo from "@/public/july-heros.svg";
import { Menu, X } from "lucide-react"; // Icons for hamburger and close button
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import BloodBackground from "./common/BloodBackground";
function Header({ dictionary }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const isBengali = pathname.startsWith("/bn");

  const switchLanguage = () => {
    const newPath = isBengali
      ? pathname.replace(/^\/bn/, "/en")
      : pathname.replace(/^\/en/, "/bn");
    router.push(newPath);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-white text-brand">
        <div className="container flex items-center justify-between p-4 py-1 sm:py-0">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col items-center px-1 uppercase text-brand"
          >
            <div className="relative aspect-square h-12 w-full overflow-hidden sm:h-16 lg:h-20">
              <Image
                src="/logo.svg"
                alt={logo}
                fill
                className="aspect-square w-full object-cover transition-all group-hover:scale-105"
                priority
                sizes={100}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden justify-center gap-6 font-semibold sm:flex sm:font-bold">
            <li>
              <Link href="/" className="hover:text-gray-300">
                {dictionary.home}
              </Link>
            </li>
            <li>
              <Link href="/martyrs" className="hover:text-gray-300">
                {dictionary.martyrs}
              </Link>
            </li>
            <li>
              <Link href="/injured" className="hover:text-gray-300">
                {dictionary.injuredMenu}
              </Link>
            </li>
            <li>
              <Link href="/murderers" className="hover:text-gray-300">
                {dictionary.murderers}
              </Link>
            </li>
            <li>
              <Link href="/incidents" className="hover:text-gray-300">
                {dictionary.incidents}
              </Link>
            </li>
          </ul>
          {/* Language Switcher */}
          <div className="hidden items-center text-black sm:flex">
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

          {/* Hamburger Menu for Mobile */}
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transform bg-brand text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <BloodBackground>
          {/* Close Button */}
          <div className="flex justify-between border-b p-4">
            <span className="text-lg font-bold">Menu</span>
            <button onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col items-center gap-4 p-6 text-lg font-semibold">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                {dictionary.home}
              </Link>
            </li>
            <li>
              <Link href="/martyrs" onClick={() => setIsOpen(false)}>
                {dictionary.martyrs}
              </Link>
            </li>
            <li>
              <Link href="/injured" onClick={() => setIsOpen(false)}>
                {dictionary.injuredMenu}
              </Link>
            </li>
            <li>
              <Link href="/murderers" onClick={() => setIsOpen(false)}>
                {dictionary.murderers}
              </Link>
            </li>
            <li>
              <Link href="/incidents" onClick={() => setIsOpen(false)}>
                {dictionary.incidents}
              </Link>
            </li>
          </ul>

          {/* Language Switcher Inside Mobile Menu */}
          <div className="mt-6 flex justify-center">
            <div className="relative flex h-[40px] w-[120px] items-center overflow-hidden rounded-lg border">
              <button
                onClick={switchLanguage}
                className={`h-full w-1/2 px-2 text-sm ${
                  isBengali
                    ? "bg-white font-semibold text-black"
                    : "bg-red opacity-75"
                }`}
              >
                বাংলা
              </button>
              <button
                onClick={switchLanguage}
                className={`h-full w-1/2 px-2 text-sm ${
                  !isBengali
                    ? "bg-white font-semibold text-black"
                    : "bg-red opacity-75"
                }`}
              >
                English
              </button>
            </div>
          </div>
        </BloodBackground>
      </div>
    </>
  );
}

export default Header;
