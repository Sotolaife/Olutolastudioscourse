import { AppLayout } from '@/components/layout/AppLayout';
import { ResourceCard } from '@/components/resources/ResourceCard';
import { resources } from '@/lib/data';

export default function ResourcesPage() {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <section className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-headline">Downloadable Resources</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Enhance your creative toolkit with these exclusive assets, templates, and guides.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </section>
      </div>
    </AppLayout>
  );
}
