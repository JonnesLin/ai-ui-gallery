import { Testimonial } from './Testimonial';
import type { TestimonialData } from './types';

export default function MinimalistTestimonial() {
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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
          Trusted by thousands of teams worldwide
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, i) => (
            <Testimonial
              key={i}
              theme="minimalist"
              variant="minimal"
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
