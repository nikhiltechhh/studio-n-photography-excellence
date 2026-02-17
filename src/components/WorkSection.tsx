import { motion } from "framer-motion";
import heroImg from "@/assets/hero-wedding.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import modelPhoto from "@/assets/model-photo.jpg";

const works = [
  { image: heroImg, title: "A Golden Hour Wedding — Editorial Photography", tags: "Wedding · Editorial" },
  { image: portrait1, title: "Dramatic Bridal Portrait — Studio Session", tags: "Portrait · Bridal" },
  { image: modelPhoto, title: "Fashion Editorial — Moody Studio Shoot", tags: "Model · Fashion" },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-16"
        >
          Selected Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-5">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-base md:text-lg uppercase tracking-[0.1em] text-foreground text-center mb-2">
                {work.title}
              </h3>
              <p className="font-serif italic text-sm text-muted-foreground text-center">{work.tags}</p>
              <div className="flex justify-center mt-3">
                <span className="text-foreground text-lg">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
