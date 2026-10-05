'use client'

import { CircleXIcon, FileTextIcon, HouseIcon, MenuIcon, PlusIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function MenuAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  const navClasses = [
    'bg-slate-900 text-slate-100 rounded-lg',
    'flex flex-col mb-8',
    'sm:flex-row sm:flex-wrap',
    !isOpen && 'h-10',
    !isOpen && 'overflow-hidden',
    'sm:overflow-visible sm:h-auto',
  ].join(' ');

  const linkClasses = [
    '[&>svg]:w-[16px] [&>svg]:h-[16px] px-4',
    'flex items-center justify-start gap-2 cursor-pointer',
    'transition hover:bg-slate-800 rounded-lg',
    'h-10',
    'shrink-10',
  ].join(' ');

  const openCloseBtnClasses = [
    'text-blue-200 italic sm:hidden py-2 flex gap-1',

  ].join(' ');

  return (
    <nav className={navClasses}>
      <button onClick={() =>setIsOpen(s => !s)} className={openCloseBtnClasses}>
        {!isOpen && (
          <>
            <MenuIcon />
            Home
          </>
        )}

        {isOpen && (
          <>
            <CircleXIcon/>
            Fechar
          </>
        )}
      </button>

      <a className={linkClasses} href="/" target="_blank">
        <HouseIcon />
        Home
      </a>

      <Link className={linkClasses} href="/admin/post">
        <FileTextIcon />
        Posts
      </Link>

      <Link className={linkClasses} href="/admin/post/new">
        <PlusIcon />
        Criar post
      </Link>

    </nav>
  )
}