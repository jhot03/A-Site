import { motion } from 'framer-motion';
import ExampleGrid from '../components/ExampleGrid';
import { automationExamples } from '../constants/automationExamples';
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
            Automate. Accelerate. Adapt.
          </h1>
          <p className="mt-5 text-[#CFCFD8] text-base sm:text-lg leading-relaxed">
            I design and deploy intelligent automation systems that <b>ELIMINATE</b> manual bottlenecks,
            <b> INCREASE</b> efficiency. Premium, modern, AI‑driven
            solutions built for <b>YOU</b>.
          </p>
        </motion.div>
      </section>

      {/* Examples Grid of automation*/}
      <ExampleGrid
        title="Making Life Easier"
        examples={automationExamples}
      />
    </div>
  );
};

export default Home;