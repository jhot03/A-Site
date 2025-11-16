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
        examples={[
            {
                name: 'Voice Calling Agent',
                description: 'No waiting in line, no hold music. An AI agent that makes and receives calls on your behalf, handling inquiries and tasks seamlessly.',
                video: '/videos/voice-agent.mp4'
            },
            {
                name: 'Google Workspace Automation',
                description: 'Anything in your workspace, can be automated. Sheets, Docs, Gmail, Calendar, we save time and reduce errors.',
                icon: '📊'
            },
            {
                name: 'Knowledgable Chatbot',
                description: 'Customizable to all your websites and knows ALL your data. Answer questions, and generate leads 24/7.',
                video: '/videos/rag-bot.mp4'
            },
            {
                name: 'Social Media Automation',
                description: 'Autogenerates content, schedules posts, and pulls analytics across platforms like Instagram, TikTok, and X.',
                video: '/videos/social-automation.mp4'
            },
            {
                name: 'AI Email Assistant',
                description: 'An intelligent assistant that drafts, replies to, and manages your emails based on your style and preferences.',
                video: '/videos/email-assistant.mp4'
            },
            {
                name: 'Document Processor',
                description: 'Need to extract, summarize, or analyze large sets of documents? Put AI to work on your PDFs, Word files, and more.',
                icon: '📄'
            }
        ]}
      />
    {/* Examples Grid of services*/}
      <ExampleGrid
        title="Services"
        examples={[
            {
                name: 'Monitor & Maintain ',
                description: 'Keep your automations running smoothly with regular check-ins, updates, and optimizations. Allowing for changes in your workflow or business needs.',
                video: '/videos/voice-agent.mp4'
            },
            {
                name: 'One Time Build',
                description: 'From ideation to deployment, I handle the entire automation build process. One time fee, one time build.',
                icon: '⚙️'
            },
            {
                name: 'Consultation & Strategy',
                description: 'Low Cost, Low Commitment. Get expert advice on identifying automation opportunities, selecting the right tools, and planning your automation journey.',
                video: '/videos/rag-bot.mp4'
            },
            {
                name: 'Training & Workshops',
                description: 'Empower your team with the knowledge and skills to leverage automation tools effectively through tailored training sessions and workshops.',
                video: '/videos/social-automation.mp4'
            },
            {
                name: 'Build & Monitoring',
                description: 'End-to-end service from building your automation to ongoing monitoring and maintenance, ensuring optimal performance and reliability.',
                video: '/videos/email-assistant.mp4'
            },
            {
                name: 'Integration Services',
                description: 'Seamlessly connect your existing systems and applications with new automation solutions to ensure smooth data flow and enhanced functionality.',
                video: '/videos/integration.mp4'
            }
            
        ]}
      />
    </div>
  );
};

export default Home;