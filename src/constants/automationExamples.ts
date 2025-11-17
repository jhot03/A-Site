import emailGen from '../assets/Auto-Vids/email-gen.mp4';
import chatBot from "../assets/Auto-Vids/Chatbot.mp4"
import voiceAgent from "../assets/Auto-Vids/Automated-phone-calls.mp4";
import workSpace from "../assets/Auto-Vids/WorkSpace-Vid.mp4";
import socialMedia from "../assets/Auto-Vids/Social-Media.mp4";
import documentParse from "../assets/Auto-Vids/Document-Parse.mp4";


export const automationExamples = [
    {
        name: 'Document Processor',
        description: 'Need to extract, summarize, or analyze large sets of documents? Put AI to work on your PDFs, Word files, and more.',
        longDescription: 'Develop a document processing system that utilizes AI to extract key information, summarize content, and analyze large sets of documents.' +
        ' Extract only what you need and use your time for higher level work.',
        video: documentParse
    },
    {
        name: 'Workspace Automation',
        description: 'Anything in your workspace, can be automated. Sheets, Docs, Gmail, Calendar, I save time and reduce errors.',
        longDescription: 'From automating data entry in Google Sheets to managing your Gmail inbox and scheduling events in Google Calendar,' +
        ' I create custom workflows that streamline your daily tasks and enhance productivity within YOUR Workspace ecosystem.',
        video: workSpace
    },
    {
        name: 'AI Email Assistant',
        description: 'An intelligent assistant that drafts, replies to, and manages your emails based on your style and preferences.',
        longDescription: 'Create an AI-powered email assistant that can draft, reply to, and organize your emails according to your unique style and preferences.' +
        ' This assistant can help you stay on top of your inbox, ensuring timely responses and efficient email management. Keep the control while saving time.',
        video: emailGen
    },
    {
        name: 'Social Media Automation',
        description: 'Autogenerates content, schedules posts, and pulls analytics across platforms like Instagram, TikTok, and X.',
        longDescription: 'Implement a comprehensive social media automation system that generates engaging content, schedules posts at optimal times,' +
        ' and pulls analytics to help you make data-driven decisions.',
        video: socialMedia
    },
    {
        name: 'Knowledgable Chatbot',
        description: 'Customizable to all your websites and knows ALL your data. Answer questions, and generate leads 24/7.',
        longDescription: 'Build a chatbot that leverages your existing data sources to provide accurate and context-aware responses to user inquiries.' +
        ' This chatbot can be integrated into your website or applications, offering round-the-clock support and engagement with your audience or even staff.',
        video: chatBot
    },
    {
        name: 'Voice Calling Agent',
        description: 'No waiting in line, no hold music. An AI agent that makes and receives calls on your behalf, handling inquiries and tasks seamlessly.',
        longDescription: 'Deploy an AI-powered voice agent that can make and receive calls, interact with human agents, and perform tasks such as scheduling appointments or answering FAQs.' +
                        ' It can be as simple as them holding the line for you, or full conversations. Take your time back',
        video: voiceAgent
    },
]