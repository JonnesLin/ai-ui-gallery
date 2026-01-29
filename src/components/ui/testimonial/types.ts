import type { ThemeName } from '../_themes';

export interface TestimonialData {
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar: string;
  };
  rating: number;
}

export type TestimonialVariant = 'card' | 'minimal' | 'bubble';

export interface TestimonialProps {
  theme: ThemeName;
  variant?: TestimonialVariant;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar: string;
  };
  rating?: number;
  showRating?: boolean;
  accentColor?: string;
  className?: string;
}

export interface TestimonialQuoteProps {
  children: React.ReactNode;
  className?: string;
}

export interface TestimonialAuthorProps {
  name: string;
  title: string;
  company: string;
  avatar: string;
  avatarClassName?: string;
  avatarWrapperClassName?: string;
  className?: string;
}

export interface TestimonialCarouselProps {
  theme: ThemeName;
  variant?: TestimonialVariant;
  testimonials: TestimonialData[];
  showRating?: boolean;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}
