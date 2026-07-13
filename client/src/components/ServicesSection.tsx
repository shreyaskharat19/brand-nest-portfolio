import { Code2, Palette, Pen, Smartphone, Sparkles, Rocket } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Code2,
      title: 'Website Development',
      description: 'Modern, responsive websites that convert visitors into customers.',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Eye-catching designs that communicate your brand message effectively.',
    },
    {
      icon: Pen,
      title: 'Logo Design',
      description: 'Memorable logos that represent your brand identity perfectly.',
    },
    {
      icon: Smartphone,
      title: 'Social Media Design',
      description: 'Engaging content that grows your social presence and engagement.',
    },
    {
      icon: Sparkles,
      title: 'Brand Identity',
      description: 'Complete branding solutions from concept to implementation.',
    },
    {
      icon: Rocket,
      title: 'SEO & Digital Marketing',
      description: 'Strategies to boost your online visibility and reach your audience.',
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -mr-48 -mt-48" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We Create
          </h2>
          <p className="text-lg text-muted-foreground">
            From strategic branding to pixel-perfect digital experiences, we deliver solutions that make your brand impossible to ignore.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Decorative nest motif */}
          <div className="absolute -top-20 -right-20 w-40 h-40 opacity-5">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full text-primary">
              <path d="M20 50 Q30 30 50 25 Q70 30 80 50" strokeWidth="2" />
              <path d="M25 55 Q35 40 50 35 Q65 40 75 55" strokeWidth="2" />
              <path d="M30 60 Q40 50 50 45 Q60 50 70 60" strokeWidth="2" />
              <circle cx="50" cy="65" r="8" strokeWidth="1.5" />
            </svg>
          </div>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-border hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Learn more</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
