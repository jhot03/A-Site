import { motion, easeOut } from 'framer-motion';
import React from 'react';

type ExampleItem = {
  name: string;
  description: string;
  service?: string;
  video?: string;           // URL to mp4/webm
  icon?: React.ReactNode;   // React icon node (e.g., <Icon />) or emoji
};

type ExampleGridProps = {
  title: string;
  examples: ExampleItem[];
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: easeOut } 
  },
};

const ExampleGrid: React.FC<ExampleGridProps> = ({ title, examples }) => {
  return (
    <section className="relative py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {title}
        </motion.h2>

        {/* Grid */}
        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {examples.map((item, idx) => (
            <motion.article
              key={`${item.name}-${idx}`}
              variants={itemVariants}
              className="group relative rounded-2xl border border-white/5 bg-linear-to-br from-white/8 to-white/2 shadow-[0_0_20px_rgba(0,0,0,0.4)] transition duration-200 ease-out hover:scale-[1.03] hover:border-white/8"
            >
              <div className="p-6">
                {/* Media */}
                <div className="mb-5 overflow-hidden rounded-xl border border-white/5 bg-[#111118]">
                  {item.video ? (
                    <video
                      className="w-full h-44 sm:h-48 object-cover"
                      src={item.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <div className="flex h-44 sm:h-48 items-center justify-center bg-linear-to-br from-[#9333EA] to-[#14B8A6]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#0A0A0F]/60 border border-white/10 text-white text-3xl">
                        {item.icon ?? '✨'}
                      </div>
                    </div>
                  )}
                </div>

                {/* Text */}
                <h3 className="text-white text-lg font-semibold tracking-wide">
                  {item.name}
                </h3>
                <p className="mt-2 text-[#CFCFD8] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Subtle glow edge on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-linear-to-br from-[#4F46E5]/10 via-[#6366F1]/10 to-[#0EA5E9]/10" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExampleGrid;