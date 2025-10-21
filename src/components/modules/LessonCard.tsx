import Image from 'next/image';
import Link from 'next/link';
import type { Lesson } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type LessonCardProps = {
  lesson: Lesson;
};

export function LessonCard({ lesson }: LessonCardProps) {
  const thumbnail = PlaceHolderImages.find((img) => img.id === lesson.thumbnailId);

  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          {thumbnail && (
            <Image
              src={thumbnail.imageUrl}
              alt={lesson.title}
              fill
              className="object-cover"
              data-ai-hint={thumbnail.imageHint}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <Badge variant="secondary" className="mb-2">{lesson.level}</Badge>
        <CardTitle className="font-headline text-xl">{lesson.title}</CardTitle>
        <CardDescription className="mt-2">{lesson.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full font-bold hover:bg-accent hover:text-accent-foreground">
          <Link href={`/modules/${lesson.id}`}>Watch Lesson</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
