
import React, { useEffect, useRef, useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const Reviews = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const currentScrollContainer = scrollContainer.current;
    checkScrollability();
    
    if (currentScrollContainer) {
      currentScrollContainer.addEventListener('scroll', checkScrollability);
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reviewElements = document.querySelectorAll(".review-card");
    reviewElements.forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    window.addEventListener('resize', checkScrollability);

    return () => {
      if (currentScrollContainer) {
        currentScrollContainer.removeEventListener('scroll', checkScrollability);
      }
      reviewElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('resize', checkScrollability);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const { clientWidth } = scrollContainer.current;
      const scrollAmount = clientWidth * 0.8; // Scroll 80% of the visible width
      
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const reviews = [
    {
      name: "Test",
      position: "Developer",
      content:
        "",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="section-container">
      <div className="text-center mb-16">
        <div className="inline-block mb-6">
          <span className="bg-badminner/10 text-badminner px-4 py-2 rounded-full text-sm font-medium border border-badminner/20">
            Trusted by Thousands
          </span>
        </div>
        <h2 className="section-heading">
          What Our <span className="text-gradient">Users Say</span>
        </h2>
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-6 w-6 text-badminner fill-badminner"
              />
            ))}
          </div>
        </div>
        <p className="max-w-3xl mx-auto text-lg text-foreground/70">
          Join thousands of satisfied miners who've elevated their operations with
          MineGrave's revolutionary technology.
        </p>
      </div>

      <div className="relative">
        <div 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          style={{opacity: canScrollLeft ? 1 : 0.3}}
        >
          <button 
            onClick={() => handleScroll('left')} 
            className="bg-secondary p-3 rounded-full hover:bg-badminner/10 transition-all duration-300 hover-effect"
            disabled={!canScrollLeft}
          >
            <ArrowLeft className="h-6 w-6 text-white" />
          </button>
        </div>
        
        <div 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          style={{opacity: canScrollRight ? 1 : 0.3}}
        >
          <button 
            onClick={() => handleScroll('right')} 
            className="bg-secondary p-3 rounded-full hover:bg-badminner/10 transition-all duration-300 hover-effect"
            disabled={!canScrollRight}
          >
            <ArrowRight className="h-6 w-6 text-white" />
          </button>
        </div>
        
        <div 
          ref={scrollContainer}
          className="flex overflow-x-auto gap-6 py-8 px-4 -mx-4 scrollbar-none"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card min-w-[320px] max-w-[400px] flex-shrink-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-badminner fill-badminner"
                  />
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                  <Star
                    key={i + review.rating}
                    className="h-5 w-5 text-gray-400"
                  />
                ))}
              </div>
              <p className="mb-6 text-foreground/90">{review.content}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-badminner/20 flex items-center justify-center text-badminner font-bold">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-sm text-foreground/60">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <a
          href="https://www.trustpilot.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-badminner hover:text-badminner-light transition-colors duration-300 font-medium hover-effect"
        >
          See all reviews on Trustpilot
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default Reviews;
