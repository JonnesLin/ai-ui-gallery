import { Testimonial } from './Testimonial';
import type { TestimonialData } from './types';

export default function FlatTestimonial() {
  const testimonials: Array<TestimonialData & { accentColor: string }> = [
    {
      quote: 'This product has transformed how we work. Absolutely incredible experience.',
      author: {
        name: 'Sarah Chen',
        title: 'CTO',
        company: 'TechCorp',
        avatar: 'https://i.pravatar.cc/100?img=1',
      },
      rating: 5,
      accentColor: 'bg-red-500',
    },
    {
      quote: 'The best tool I have ever used. It saves me hours every week.',
      author: {
        name: 'Mike Johnson',
        title: 'Designer',
        company: 'Creative Co',
        avatar: 'https://i.pravatar.cc/100?img=2',
      },
      rating: 5,
      accentColor: 'bg-blue-500',
    },
    {
      quote: 'Our team productivity increased by 40% since we started using this.',
      author: {
        name: 'Emily Davis',
        title: 'Product Manager',
        company: 'StartupXYZ',
        avatar: 'https://i.pravatar.cc/100?img=3',
      },
      rating: 5,
      accentColor: 'bg-emerald-500',
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-100 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 text-center mb-4">
          Customer Testimonials
        </h2>
        <p className="text-slate-500 text-center mb-16 max-w-xl mx-auto">
          See what our users have to say
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <Testimonial
              key={i}
              theme="flat"
              variant="card"
              quote={testimonial.quote}
              author={testimonial.author}
              rating={testimonial.rating}
              accentColor={testimonial.accentColor}
              className="hover:-translate-y-2 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
