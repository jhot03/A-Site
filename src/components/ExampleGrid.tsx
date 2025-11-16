import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

type ExampleItem = {
  name: string;
  description: string;
  longDescription?: string;
  service?: string;
  video?: string;
  icon?: React.ReactNode;
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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const ExampleGrid: React.FC<ExampleGridProps> = ({ title, examples }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = React.useState<ExampleItem | null>(null);

  const handleItemClick = (item: ExampleItem) => {
    if (item.longDescription || !item.service) {
      setSelected(item);
      return;
    }
    if (item.service) {
      navigate(`/contact?service=${encodeURIComponent(item.service)}`);
    }
  };

  return (
    <section className="relative py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          {title}
        </motion.h2>

        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
        {/* Inner contents of each grid element */}
          {examples.map((item, idx) => (
            <motion.article
              key={`${item.name}-${idx}`}
              variants={itemVariants}
              onClick={() => handleItemClick(item)}
              className="group relative cursor-pointer rounded-2xl border border-white/5 bg-linear-to-br from-white/8 to-white/2 shadow-[0_0_20px_rgba(0,0,0,0.4)] transition duration-200 ease-out hover:scale-[1.03] hover:border-white/8"
            >
              <div className="p-6">
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
                      <div className="flex h-36 w-36 items-center justify-center rounded-xl bg-[#0A0A0F]/60 border border-white/10 text-white text-7xl">
                        {item.icon ?? '✨'}
                      </div>
                    </div>
                  )}
                </div>

                <h3 className="text-white text-lg font-semibold tracking-wide">{item.name}</h3>
                <p className="mt-2 text-[#CFCFD8] text-sm leading-relaxed">{item.description}</p>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-linear-to-br from-[#4F46E5]/10 via-[#6366F1]/10 to-[#0EA5E9]/10" />
            </motion.article>
          ))}
        </motion.div>
      </div>

      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.name}
        maxWidthClass="max-w-2xl"
      >
        {selected && (
          <div className="space-y-5">
            <div className="overflow-hidden rounded-xl border border-white/5 bg-[#111118]">
              {selected.video ? (
                <video
                  className="w-full max-h-[420px] object-cover"
                  src={selected.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              ) : (
                <div className="flex h-56 items-center justify-center bg-linear-to-br from-[#9333EA] to-[#14B8A6]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0A0A0F]/60 border border-white/10 text-white text-4xl">
                    {selected.icon ?? '✨'}
                  </div>
                </div>
              )}
            </div>

            <p className="text-[#CFCFD8] leading-relaxed">
              {selected.longDescription ?? 'Detailed description coming soon.'}
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ExampleGrid;