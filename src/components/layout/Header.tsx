'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LogOut, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const navLinks = [
  { href: '/dashboard', label: 'Home' },
  { href: '/modules', label: 'Modules' },
  { href: '/resources', label: 'Resources' },
  { href: '/support', label: 'Support' },
];

export function Header() {
  const pathname = usePathname();

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          'transition-colors hover:text-primary',
          pathname === link.href ? 'text-primary font-semibold' : 'text-muted-foreground',
          isMobile ? 'text-lg' : 'text-sm font-medium'
        )}
        prefetch={false}
      >
        {link.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/dashboard" className="mr-6 flex items-center" prefetch={false}>
          <span className="font-bold text-xl font-headline">OLÚTỌ́LÁ Studios</span>
        </Link>
        <nav className="hidden flex-col items-center gap-6 text-lg font-medium md:flex md:flex-row md:gap-5 lg:gap-6">
          {renderNavLinks()}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/login" passHref>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Logout</span>
            </Button>
          </Link>
          <Avatar>
            <AvatarImage src="https://picsum.photos/seed/user-avatar/100/100" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {renderNavLinks(true)}
                 <Link
                    href="/login"
                    className='text-lg transition-colors hover:text-primary text-muted-foreground'
                    prefetch={false}
                  >
                    Logout
                  </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
