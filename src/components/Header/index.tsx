// 'use client';

import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className= 'text-4xl/normal font-extrabold py-8 sm:text-5xl/normal sm:py-10 md:text-5xl/normal md:py-11 lg:text-7xl lg:py-12'>

        <Link href="/">The Blog</Link>
      </h1>
      <ThemeToggle />
    </header>
  );
}