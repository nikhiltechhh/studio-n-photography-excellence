import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "@/assets/hero-wedding.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import weddingCouple from "@/assets/wedding-couple.jpg";
import modelPhoto from "@/assets/model-photo.jpg";

const slides = [
  { image: heroImg, alt: "Wedding photography at golden hour" },
  { image: portrait1, alt: "Dramatic bridal portrait" },
  { image: weddingCouple, alt: "Wedding couple at manor house" },
  { image: modelPhoto, alt: "Fashion editorial portrait" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="pt-28 md:pt-32 px-4 md:px-8 lg:px-12">
      <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current].image}
            alt={slides[current].alt}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Overlay text */}
        <div className="absolute inset-0 bg-foreground/10 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-end h-full pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center"
          >
            <h1 className="font-serif text-background text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] uppercase drop-shadow-lg">
              Studio N
            </h1>
            <p className="text-background/80 uppercase text-xs md:text-sm tracking-[0.3em] mt-4 drop-shadow-md">
              Photography
            </p>
          </motion.div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-background w-6" : "bg-background/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
