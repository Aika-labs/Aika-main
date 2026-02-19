import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto p-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/black-logo.png"
            alt="Humano y Agéntico"
            width={20}
            height={20}
            className="h-5 w-auto dark:hidden"
          />
          <Image
            src="/white-logo.png"
            alt="Humano y Agéntico"
            width={20}
            height={20}
            className="h-5 w-auto hidden dark:block"
          />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Humano y Agéntico
          </p>
        </div>
      </div>
    </footer>
  );
}
