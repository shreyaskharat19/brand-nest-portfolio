import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'website',
      image: '/images/logo.png',
      description: 'Modern e-commerce website with seamless checkout experience',
    },
    {
      id: 2,
      title: 'Tech Startup Branding',
      category: 'branding',
      image: '/images/logo.png',
      description: 'Complete brand identity for innovative tech startup',
    },
    {
      id: 3,
      title: 'Logo Design Collection',
      category: 'logo',
      image: '/images/logo.png',
      description: 'Collection of memorable logo designs for various brands',
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'social',
      image: '/images/logo.png',
      description: 'Engaging social media content that drives engagement',
    },
    {
      id: 5,
      title: 'Brand Guidelines',
      category: 'branding',
      image: '/images/logo.png',
      description: 'Comprehensive brand guidelines and style system',
    },
    {
      id: 6,
      title: 'Mobile App Design',
      category: 'website',
      image: '/images/logo.png',
      description: 'Beautiful and functional mobile app interface design',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'website', label: 'Websites' },
    { id: 'logo', label: 'Logos' },
    { id: 'social', label: 'Social Media' },
    { id: 'branding', label: 'Branding' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
    >
      {/* Decorative nest motif */}
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-3">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full text-primary">
          <path d="M20 50 Q30 30 50 25 Q70 30 80 50" strokeWidth="2" />
          <path d="M25 55 Q35 40 50 35 Q65 40 75 55" strokeWidth="2" />
          <path d="M30 60 Q40 50 50 45 Q60 50 70 60" strokeWidth="2" />
          <circle cx="50" cy="65" r="8" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Asymmetric Layout */}
        <div className="mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Brands We've Built
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              From concept to launch, our portfolio showcases distinctive identities that help brands stand out in crowded markets.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-16 animate-in fade-in duration-700 delay-100">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white border border-border text-foreground hover:border-primary'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid - Asymmetric Masonry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
          {filteredItems.map((item, index) => {
            // Create asymmetric heights
            const isLarge = index % 5 === 0 || index % 5 === 3;
            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700 ${
                  isLarge ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className={`relative overflow-hidden bg-gray-200 ${isLarge ? 'h-96' : 'h-64'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-in fade-in duration-700 delay-300">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to build something remarkable?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Start Your Project
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
