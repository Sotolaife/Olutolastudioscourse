import { AppLayout } from '@/components/layout/AppLayout';
import { LessonCard } from '@/components/modules/LessonCard';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { lessons } from '@/lib/data';

export default function ModulesPage() {
  const completedLessons = 3;
  const totalLessons = lessons.length;
  const progressPercentage = (completedLessons / totalLessons) * 100;

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <section className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-headline">Course Modules</h1>
              <p className="mt-2 text-muted-foreground">
                You've completed {completedLessons} of {totalLessons} lessons. Keep up the great work!
              </p>
            </div>
            <div className="w-full md:w-72">
               <Progress value={progressPercentage} className="h-2" aria-label={`${Math.round(progressPercentage)}% complete`} />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Select>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </section>
      </div>
    </AppLayout>
  );
}
