import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    'Creative & Innovative Solutions',
    'Client-Focused Approach',
    'Timely Delivery',
    'Affordable Pricing',
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-50 rounded-full -ml-48 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/logo.png"
                alt="Brand Nest Team"
                className="w-full h-auto"
              />
              {/* Accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-30" />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                The Brand Nest Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're a creative studio obsessed with building brands that matter. Since 2019, we've partnered with ambitious businesses to craft distinctive identities, stunning digital experiences, and strategic brand systems that drive real results.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with creative, modern design solutions that help them stand out, connect with their audience, and achieve their goals.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 animate-in fade-in slide-in-from-left-2 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Why Choose Us?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    <strong>Expert Team:</strong> Designers and developers with proven track records
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    <strong>Quality First:</strong> We never compromise on design quality
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    <strong>Transparent Communication:</strong> Regular updates and feedback sessions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>
                    <strong>Long-term Support:</strong> We're here for you after launch
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
