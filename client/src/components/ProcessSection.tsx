import { MessageCircle, Search, Palette, Code2, CheckCircle, Send } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Requirement Discussion',
      description: 'We listen to your ideas, goals, and vision for the project.',
    },
    {
      number: '02',
      icon: Search,
      title: 'Research',
      description: 'In-depth market research and competitor analysis.',
    },
    {
      number: '03',
      icon: Palette,
      title: 'Design',
      description: 'Creative design concepts tailored to your brand.',
    },
    {
      number: '04',
      icon: Code2,
      title: 'Development',
      description: 'Clean, efficient code and robust implementation.',
    },
    {
      number: '05',
      icon: CheckCircle,
      title: 'Testing',
      description: 'Thorough testing across all devices and browsers.',
    },
    {
      number: '06',
      icon: Send,
      title: 'Delivery',
      description: 'Launch and ongoing support for your project.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-50 rounded-full -mr-48 -mt-48" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proven six-step process ensures your brand vision becomes a powerful reality.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card */}
                  <div className="p-8 rounded-2xl bg-white border border-border hover:border-primary hover:shadow-xl transition-all duration-300 h-full">
                    {/* Number Badge */}
                    <div className="absolute -top-6 left-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mb-6 mt-4 inline-flex p-4 rounded-xl bg-blue-50">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-32 text-primary">
                      <svg
                        className="w-8 h-8"
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
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Info */}
        <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center animate-in fade-in duration-700 delay-500">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Typical Project Timeline
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Most projects are completed within 4-8 weeks, depending on complexity and scope. We maintain regular communication throughout to ensure you're always in the loop.
          </p>
        </div>
      </div>
    </section>
  );
}
