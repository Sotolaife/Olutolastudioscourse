import Link from 'next/link';
import { Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-primary-foreground border-t-2 border-primary">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <div className="text-center sm:text-left">
          <p className="text-sm">© 2025 OLÚTỌ́LÁ Studios. All Rights Reserved.</p>
          <p className="text-sm text-muted-foreground">Made with ❤️ for Creators.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-primary-foreground hover:text-primary transition-colors" prefetch={false}>
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-primary-foreground hover:text-primary transition-colors" prefetch={false}>
            <Youtube className="h-5 w-5" />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link href="#" className="text-primary-foreground hover:text-primary transition-colors" prefetch={false}>
            <Twitter className="h-5 w-5" />
            <span className="sr-only">X (formerly Twitter)</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
