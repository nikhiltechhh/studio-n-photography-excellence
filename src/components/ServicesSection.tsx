import { motion } from "framer-motion";
import weddingCouple from "@/assets/wedding-couple.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import productPhoto from "@/assets/product-photo.jpg";
import modelPhoto from "@/assets/model-photo.jpg";

const services = [
  { title: "Wedding Photography", image: weddingCouple, desc: "Timeless, editorial coverage of your celebration" },
  { title: "Portrait Photography", image: portrait1, desc: "Striking portraits that reveal personality and emotion" },
  { title: "Product Photography", image: productPhoto, desc: "Elevated imagery that makes your products shine" },
  { title: "Model Photography", image: modelPhoto, desc: "Fashion-forward shoots with editorial flair" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-16"
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-lg md:text-xl uppercase tracking-[0.15em] text-foreground mb-2">
                {service.title}
              </h3>
              <p className="body-text text-sm text-muted-foreground">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
