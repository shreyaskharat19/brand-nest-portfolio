import { Zap, Headphones, DollarSign, Smartphone, Users, Sparkles } from 'lucide-react';

export default function WhyChooseSection() {
  const features = [
    {
      icon: Sparkles,
      title: 'Creative Designs',
      description: 'Unique, innovative designs that capture your brand essence.',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising on quality.',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates that fit your budget and deliver value.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-Friendly',
      description: 'All designs are optimized for mobile and desktop devices.',
    },
    {
      icon: Headphones,
      title: 'Client Support',
      description: '24/7 support and regular communication throughout the project.',
    },
    {
      icon: Users,
      title: 'Modern UI/UX',
      description: 'User-centered design that enhances engagement and conversions.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full -mb-48 -mr-48" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Brands Choose Us
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine creative excellence with strategic thinking to deliver brands that truly matter.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-border hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 group-hover:shadow-lg transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Checkmark */}
                <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-sm font-semibold">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 p-12 bg-gradient-to-r from-primary to-accent rounded-3xl text-white">
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-4xl md:text-5xl font-bold mb-2">50+</p>
            <p className="text-white/80">Projects Completed</p>
          </div>
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <p className="text-4xl md:text-5xl font-bold mb-2">30+</p>
            <p className="text-white/80">Happy Clients</p>
          </div>
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <p className="text-4xl md:text-5xl font-bold mb-2">5+</p>
            <p className="text-white/80">Years Experience</p>
          </div>
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <p className="text-4xl md:text-5xl font-bold mb-2">100%</p>
            <p className="text-white/80">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
