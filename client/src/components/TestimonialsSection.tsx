import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Startup Co.',
      image: '👩‍💼',
      text: 'Brand Nest transformed our vision into reality. Their creative approach and attention to detail exceeded our expectations. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'E-Commerce Plus',
      image: '👨‍💼',
      text: 'Working with Brand Nest was a game-changer for our business. They delivered a stunning website that increased our conversions by 40%.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      image: '👩‍🎨',
      text: 'Exceptional service from start to finish. The team was responsive, professional, and truly understood our brand. Worth every penny!',
      rating: 5,
    },
    {
      name: 'David Park',
      company: 'Retail Solutions',
      image: '👨‍💻',
      text: 'Fast turnaround, excellent quality, and amazing support. Brand Nest is our go-to partner for all design needs.',
      rating: 5,
    },
  ];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-50 rounded-full -ml-48 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved by Creative Brands
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we've transformed brands across industries.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-border animate-in fade-in scale-in-95 duration-500">
            {/* Quote Mark */}
            <div className="absolute top-4 left-6 text-6xl text-primary/20">"</div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Text */}
            <p className="text-xl text-foreground mb-8 leading-relaxed">
              {testimonials[activeIndex].text}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
              <div className="text-4xl">{testimonials[activeIndex].image}</div>
              <div>
                <p className="font-bold text-foreground">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[activeIndex].company}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-primary w-8'
                        : 'bg-border hover:bg-muted-foreground'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="p-2 rounded-lg border border-border hover:border-primary hover:bg-blue-50 transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-lg border border-border hover:border-primary hover:bg-blue-50 transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Count */}
          <div className="text-center mt-8 text-muted-foreground">
            <p>
              {activeIndex + 1} of {testimonials.length}
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-2xl border border-border">
            <p className="text-3xl font-bold text-primary mb-2">4.9/5</p>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-border">
            <p className="text-3xl font-bold text-primary mb-2">98%</p>
            <p className="text-muted-foreground">Would Recommend</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-border">
            <p className="text-3xl font-bold text-primary mb-2">30+</p>
            <p className="text-muted-foreground">Verified Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
