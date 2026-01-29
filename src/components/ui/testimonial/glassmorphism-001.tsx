import { Testimonial } from './Testimonial';
import type { TestimonialData } from './types';

export default function GlassmorphismTestimonial() {
  const testimonials: TestimonialData[] = [
    {
      quote: 'This product has transformed how we work. Absolutely incredible experience.',
      author: {
        name: 'Sarah Chen',
        title: 'CTO',
        company: 'TechCorp',
        avatar: 'https://i.pravatar.cc/100?img=1',
      },
      rating: 5,
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
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-60 h-60 bg-yellow-300/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-white/80 text-center mb-16 max-w-xl mx-auto">
          Join thousands of satisfied users
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Testimonial
              key={i}
              theme="glassmorphism"
              variant="bubble"
              quote={testimonial.quote}
              author={testimonial.author}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
