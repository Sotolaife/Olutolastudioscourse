import Image from 'next/image';
import { AppLayout } from '@/components/layout/AppLayout';
import { Progress } from '@/components/ui/progress';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function DashboardPage() {
  const featuredVideoImage = PlaceHolderImages.find(img => img.id === 'welcome-video');

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
            Hey Creator 👋 — Ready to Level Up Your Video Editing Game?
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Dive into your modules and continue your creative journey.
          </p>
          <div className="mt-8 max-w-xl mx-auto">
            <div className="flex justify-between mb-1 text-sm font-medium">
              <span>Course Completion</span>
              <span>33%</span>
            </div>
            <Progress value={33} aria-label="Course completion progress" />
          </div>
        </section>

        {/* Featured Video Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left font-headline">
            Start Here
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              {featuredVideoImage && (
                <Image
                  src={featuredVideoImage.imageUrl}
                  alt={featuredVideoImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={featuredVideoImage.imageHint}
                />
              )}
               <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold font-headline">Introduction to Branding and Design</h3>
              <p className="mt-2 text-muted-foreground text-lg">
                This essential first lesson lays the groundwork for creating a powerful and recognizable brand identity through visual design.
              </p>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
