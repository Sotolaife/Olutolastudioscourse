import Link from 'next/link';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { lessons } from '@/lib/data';
import { ArrowLeft, ArrowRight, Download } from 'lucide-react';

type LessonPageProps = {
  params: {
    id: string;
  };
};

export default function LessonPage({ params }: LessonPageProps) {
  const lessonId = parseInt(params.id, 10);
  const lesson = lessons.find((l) => l.id === lessonId);
  const currentIndex = lessons.findIndex((l) => l.id === lessonId);
  
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  if (!lesson) {
    return (
      <AppLayout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold">Lesson not found</h1>
          <p className="mt-4 text-muted-foreground">
            The lesson you are looking for does not exist.
          </p>
          <Button asChild className="mt-6">
            <Link href="/modules">Back to Modules</Link>
          </Button>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-2xl mb-6 bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={lesson.videoId}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-headline">{lesson.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{lesson.description}</p>
          </div>

          {/* Side Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-4">
                <Button className="w-full font-semibold" asChild>
                  <Link href="#">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resources
                  </Link>
                </Button>
                <Separator />
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" disabled={!prevLesson} asChild>
                    {prevLesson ? (
                      <Link href={`/modules/${prevLesson.id}`}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous
                      </Link>
                    ) : (
                      <span>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous
                      </span>
                    )}
                  </Button>
                  <Button variant="outline" disabled={!nextLesson} asChild>
                    {nextLesson ? (
                      <Link href={`/modules/${nextLesson.id}`}>
                        Next
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    ) : (
                      <span>
                        Next
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Motivational Quote */}
        <section className="mt-16 text-center">
            <blockquote className="text-2xl italic font-medium text-foreground/80 font-headline">
              “Your edits tell stories the world needs to see.”
            </blockquote>
            <p className="mt-2 text-sm text-muted-foreground">— OLÚTỌ́LÁ Studios</p>
        </section>
      </div>
    </AppLayout>
  );
}
