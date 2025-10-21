import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Resource } from '@/lib/data';
import { Download, FileText, ImageIcon, Star } from 'lucide-react';

type ResourceCardProps = {
  resource: Resource;
};

const iconMap = {
  PDF: <FileText className="h-8 w-8 text-primary" />,
  Template: <Star className="h-8 w-8 text-primary" />,
  Asset: <ImageIcon className="h-8 w-8 text-primary" />,
};

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card className="flex flex-col text-center items-center">
      <CardHeader>
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
          {iconMap[resource.type]}
        </div>
        <CardTitle className="font-headline text-xl">{resource.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription>{resource.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild className="font-bold">
          <Link href={resource.href}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
