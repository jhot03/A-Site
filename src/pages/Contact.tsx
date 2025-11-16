import { motion, easeOut } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { serviceExamples } from '../constants/serviceExamples';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || ''; // Get the service from the query parameter

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-white/5 text-white placeholder-white/40 " +
    "px-4 py-3 outline-none transition " +
    "focus:border-white/20 focus:ring-2 focus:ring-[#6366F1]";

  return (
    <section className="relative py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="max-w-xl mx-auto text-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight text-white">
            Get in Touch
          </h1>
          <p className="mt-4 text-[#CFCFD8] text-base sm:text-lg leading-relaxed">
            Tell me what you need automated. I’ll get back to you within 24 hours.
          </p>

          <div className="mt-10">
            <div className="rounded-2xl border border-white/10 bg-[#111118]/60 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.4)] p-6 sm:p-8 text-left">
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#CFCFD8] mb-1">
                    Name
                  </label>
                  <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#CFCFD8] mb-1">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required placeholder="you@company.com" className={inputClass} />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#CFCFD8] mb-1">
                    Company (optional)
                  </label>
                  <input id="company" name="company" type="text" placeholder="Company name" className={inputClass} />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#CFCFD8] mb-1">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue={preselectedService} // Preselect the service if passed in the query
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceExamples.map((example) => (
                      <option key={example.name} value={example.name}>
                        {example.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#CFCFD8] mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="What should we automate?"
                    className={inputClass}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="relative w-full px-5 py-3 rounded-lg font-medium text-white bg-linear-to-br from-[#4F46E5] via-[#6366F1] to-[#0EA5E9] shadow-[0_0_20px_rgba(99,102,241,0.3)] overflow-hidden group"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(99,102,241,0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative z-10">Send Message</span>
                  <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-white/20 to-transparent" />
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;