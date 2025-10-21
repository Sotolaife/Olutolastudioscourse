import Link from 'next/link';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Twitter, Youtube } from 'lucide-react';

export default function SupportPage() {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-headline">Need Help?</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We're here to support your creative journey. Reach out to us through our private community or send us an email.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="m22 2-7 20-4-9-9-4Z"/><path d="m22 2-11 11"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold">Private Telegram Community</h3>
                  <p className="text-muted-foreground">Get instant feedback and connect with fellow creators.</p>
                  <Button variant="link" className="px-0" asChild>
                    <Link href="#">Join Community</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold">Email Support</h3>
                  <p className="text-muted-foreground">For technical issues or account questions.</p>
                  <a href="mailto:support@olutolastudios.com" className="text-primary font-medium hover:underline">
                    support@olutolastudios.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12">
                <h3 className="font-semibold mb-4">Follow OLÚTỌ́LÁ Studios</h3>
                <div className="flex items-center gap-4">
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
                        <Instagram className="h-6 w-6" />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
                        <Youtube className="h-6 w-6" />
                        <span className="sr-only">YouTube</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
                        <Twitter className="h-6 w-6" />
                        <span className="sr-only">X (formerly Twitter)</span>
                    </Link>
                </div>
            </div>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your Email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help?" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full font-bold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
