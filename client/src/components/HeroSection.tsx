import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-12 md:pb-24 bg-gradient-to-br from-white via-white to-blue-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                We Build Brands That{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Stand Out
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Creative websites, memorable logos, and distinctive brand identities that help your business thrive in a competitive world.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => handleScroll('#portfolio')}
                className="bg-primary hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                View Portfolio
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => handleScroll('#contact')}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-blue-50 px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Contact Us
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="relative hidden md:flex items-center justify-center animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
            <div className="relative w-full aspect-square max-w-md">
              {/* Floating cards effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl" />
              <img
                src="/manus-storage/hero_mockup_e99948a5.png"
                alt="Design Mockup"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-2xl shadow-lg opacity-80 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-primary">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
