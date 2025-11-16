import { motion, easeOut } from 'framer-motion';

const About = () => {
  return (
    <div className="relative">
      {/* Top section: Left headshot, Right text (keeps your original flow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Headshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="relative rounded-2xl border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.4)] bg-linear-to-br from-white/8 to-white/2 overflow-hidden"
          >
            <img
              src="/images/headshot.jpg"
              alt="Headshot"
              className="w-full h-full object-cover aspect-square"
              loading="lazy"
            />
          </motion.div>

          {/* Right: About text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="max-w-xl"
          >
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight">
              Building automated solutions for YOU.
            </h1>
            <p className="mt-5 text-[#CFCFD8] text-base sm:text-lg leading-relaxed">
              I'm Jayce, a adamant software engineer out of California. I love solving problems and creating innovative solutions.
              I like to live by the mantra, "What can be dreamed, can be done." I specialize in delivering. Delivering high quality
              products to meet your needs, saving time, and money through intelligent automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Horizontal scrollable image reel (keeps your original flow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.h2
          className="sr-only"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          Gallery
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Photo reel"
        >
          {[
            { src: '/images/about-1.jpg', alt: 'Working session' },
            { src: '/images/about-2.jpg', alt: 'Whiteboarding flows' },
            { src: '/images/about-3.jpg', alt: 'Shipping automations' },
            { src: '/images/about-4.jpg', alt: 'Tooling setup' },
          ].map((img, i) => (
            <div
              key={i}
              className="snap-start min-w-[260px] sm:min-w-[320px] lg:min-w-[380px] rounded-2xl border border-white/5 shadow-[0_0_20px_rgba(0,0,0,0.4)] overflow-hidden bg-[#111118]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-44 sm:h-56 lg:h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Additional about paragraph (keeps your original flow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.p
          className="text-[#CFCFD8] text-base sm:text-lg leading-relaxed max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          I work with a diverse range of tools and can accomodate various technical stacks or workspace environments. Whatever your industry or size,
          I'll find the right automation solutions for you. From small businesses to large enterprises, my goal is to empower you. 
          Empower you to focus on what matters most, while I handle the repetitive tasks through intelligent automation.
          Let's collaborate to transform your workflows and unlock new levels of productivity.
        </motion.p>
      </section>
    </div>
  );
};

export default About;