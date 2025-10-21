export type Lesson = {
  id: number;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnailId: string;
  videoId: string;
};

export type Resource = {
  id: number;
  title: string;
  description: string;
  type: 'PDF' | 'Template' | 'Asset';
  href: string;
};

export const lessons: Lesson[] = [
  {
    id: 1,
    title: 'The Foundation: Core Principles of Editing',
    description: 'Master the fundamental concepts that every great editor needs to know.',
    level: 'Beginner',
    thumbnailId: 'module-1',
    videoId: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: 'Color Grading Magic: Setting the Mood',
    description: 'Learn to use color to evoke emotion and create a cinematic look.',
    level: 'Intermediate',
    thumbnailId: 'module-2',
    videoId: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 3,
    title: 'Motion Graphics That Pop',
    description: 'Animate text and graphics to add a professional flair to your videos.',
    level: 'Intermediate',
    thumbnailId: 'module-3',
    videoId: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 4,
    title: 'Advanced Sound Design & Mixing',
    description: 'Elevate your edits with immersive soundscapes and crystal-clear audio.',
    level: 'Advanced',
    thumbnailId: 'module-4',
    videoId: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 5,
    title: 'Visual Effects (VFX) for Beginners',
    description: 'Dip your toes into the world of VFX with practical, easy-to-follow examples.',
    level: 'Beginner',
    thumbnailId: 'module-5',
    videoId: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 6,
    title: 'The Art of Storytelling through Editing',
    description: 'Craft compelling narratives by mastering pacing, rhythm, and structure.',
    level: 'Advanced',
    thumbnailId: 'module-6',
    videoId: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 7,
    title: 'Exporting for Social Media: Best Practices',
    description: 'Optimize your videos for Instagram, YouTube, and X with the right settings.',
    level: 'Intermediate',
    thumbnailId: 'module-7',
    videoId: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 8,
    title: 'Building a Professional Workflow',
    description: 'From client communication to final delivery, streamline your process.',
    level: 'Advanced',
    thumbnailId: 'module-8',
    videoId: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
];

export const resources: Resource[] = [
  {
    id: 1,
    title: 'Video Editing Keyboard Shortcuts',
    description: 'Speed up your workflow with this essential cheat sheet for popular editing software.',
    type: 'PDF',
    href: '#',
  },
  {
    id: 2,
    title: 'Cinematic LUTS Pack',
    description: 'A collection of 10 professional-grade Look-Up Tables to color grade your footage.',
    type: 'Asset',
    href: '#',
  },
  {
    id: 3,
    title: 'Project Proposal Template',
    description: 'Win more clients with a beautifully designed and comprehensive project proposal.',
    type: 'Template',
    href: '#',
  },
  {
    id: 4,
    title: 'Animated Title Presets',
    description: 'A set of 5 modern and clean animated titles for your video projects.',
    type: 'Template',
    href: '#',
  },
    {
    id: 5,
    title: 'Sound Effects Starter Pack',
    description: 'Essential whooshes, risers, and hits to add impact to your edits.',
    type: 'Asset',
    href: '#',
  },
  {
    id: 6,
    title: 'The Ultimate Editing Checklist',
    description: 'Never miss a step from pre-production to final delivery with this detailed PDF guide.',
    type: 'PDF',
    href: '#',
  },
];
