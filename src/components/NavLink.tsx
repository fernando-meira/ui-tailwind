'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: string;
}

export default function NavLink({ children, href }: NavLinkProps) {
  const activeHref = usePathname();

  return (
    <Link
      href={href}
      data-active={activeHref === href}
      className="border-l border-white/5 px-4 py-1.5 text-zinc-400 transition-colors hover:text-white data-[active=true]:border-cyan-400"
    >
      {children}
    </Link>
  );
}
