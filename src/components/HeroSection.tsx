import { motion } from "framer-motion";
import heroImg from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Wedding photography by Studio N"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/10" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
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
    </section>
  );
};

export default HeroSection;
