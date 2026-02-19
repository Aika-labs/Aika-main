import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto w-full flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-medium text-lg tracking-tighter"
          >
            <Image
              src="/black-logo.png"
              alt="Humano y Agéntico"
              width={32}
              height={32}
              className="h-8 w-auto dark:hidden"
            />
            <Image
              src="/white-logo.png"
              alt="Humano y Agéntico"
              width={32}
              height={32}
              className="h-8 w-auto hidden dark:block"
            />
            <span className="hidden sm:inline">humano.agentic</span>
          </Link>
        </div>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/blog"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
