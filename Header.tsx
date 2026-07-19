"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header({ siteName }: { siteName: string }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#boom-shorts", label: "Boom Shorts" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Our Work" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="#home" className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 text-base shadow-lg shadow-fuchsia-500/30">
            🎬
          </span>
          {siteName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#boom-shorts"
          className="hidden rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:scale-105 hover:shadow-fuchsia-500/50 md:inline-block"
        >
          Order Package
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#boom-shorts"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Order Package
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
