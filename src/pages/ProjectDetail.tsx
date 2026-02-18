import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="section-heading mb-4">Project Not Found</h1>
          <Link to="/" className="btn-outline-editorial inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-white text-2xl md:text-4xl lg:text-5xl uppercase tracking-[0.12em] font-light max-w-4xl leading-tight"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-white/80 text-xs md:text-sm uppercase tracking-[0.3em] mt-6"
          >
            {project.tags}
          </motion.p>
        </div>
      </section>

      {/* Content Card */}
      <section className="px-6 -mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mx-auto bg-background py-16 px-8 md:px-16 text-center"
        >
          <h2 className="font-serif text-foreground text-2xl md:text-3xl lg:text-4xl italic font-light leading-snug mb-6">
            {project.subtitle}
          </h2>
          <p className="font-serif text-muted-foreground text-sm tracking-[0.15em] mb-8">
            {project.date}
          </p>
          <p className="body-text text-muted-foreground max-w-xl mx-auto">
            {project.description}
          </p>
        </motion.div>
      </section>

      {/* Photo Gallery - Mixed Layout */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Row-based gallery mimicking the reference */}
          <div className="flex flex-col gap-6">
            {/* Two-column rows */}
            {chunkGallery(project.gallery).map((row, rowIdx) => (
              <div
                key={rowIdx}
                className={`grid gap-6 ${
                  row.length === 3
                    ? "grid-cols-1 md:grid-cols-3"
                    : row.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {row.map((photo, i) => (
                  <motion.div
                    key={`${rowIdx}-${i}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="overflow-hidden"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className={`w-full object-cover transition-transform duration-700 hover:scale-[1.02] ${
                        photo.span === "tall"
                          ? "aspect-[3/4]"
                          : photo.span === "wide"
                          ? "aspect-[16/10]"
                          : "aspect-[4/5]"
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            to="/"
            className="btn-outline-editorial inline-flex items-center gap-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/** Chunk gallery into rows of 2, 3, 2, 3... pattern */
function chunkGallery(
  gallery: { src: string; alt: string; span?: string }[]
): { src: string; alt: string; span?: string }[][] {
  const rows: { src: string; alt: string; span?: string }[][] = [];
  let i = 0;
  let pattern = [2, 3]; // alternating row sizes
  let patternIdx = 0;

  while (i < gallery.length) {
    const size = pattern[patternIdx % pattern.length];
    rows.push(gallery.slice(i, i + size));
    i += size;
    patternIdx++;
  }

  return rows;
}

export default ProjectDetail;
