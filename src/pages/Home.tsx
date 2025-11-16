import { motion } from 'framer-motion';
import ExampleGrid from '../components/ExampleGrid';
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-page relative">
      {/* Hero Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight text-white">
            Automate. Accelerate. Evolve.
          </h1>
          <p className="mt-5 text-[#CFCFD8] text-base sm:text-lg leading-relaxed">
            I design and deploy intelligent automation systems that eliminate manual bottlenecks,
            increase operational velocity, and create scalable leverage. Premium, modern, AI‑driven
            solutions built for founders, teams, and visionaries.
          </p>
        </motion.div>
      </section>

      {/* Examples Grid */}
      <ExampleGrid
        title="Automation Examples"
        examples={[
          {
            name: 'Lead Enrichment Pipeline',
            description: 'Automatically enrich inbound leads with firmographic & technographic data, scoring them for priority outreach.',
            video: '/videos/lead-enrichment.mp4'
          },
            {
            name: 'AI Support Agent',
            description: '24/7 semantic helpdesk triaging and resolving common tickets before a human ever sees them.',
            video: '/videos/ai-support.mp4'
          },
          {
            name: 'Workflow Orchestrator',
            description: 'Event-driven micro-automation hub syncing data across CRM, billing, and analytics in real-time.',
            // icon fallback (no video)
            icon: '⚙️'
          }
        ]}
      />
    </div>
  );
};

export default Home;