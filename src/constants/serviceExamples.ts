import {
    MONITOR_AND_MAINTAIN,
    ONE_TIME_BUILD,
    CONSULTATION_AND_STRATEGY,
    TRAINING_AND_WORKSHOPS,
    BUILD_AND_MONITORING,
    INTEGRATION_SERVICES
} from './ServiceNames';

export const serviceExamples = [
    {
        name: 'Monitor & Maintain ',
        service: MONITOR_AND_MAINTAIN,
        description: 'Keep your automations running smoothly with regular check-ins, updates, and optimizations. Allowing for changes in your workflow or business needs.',
        video: '/videos/voice-agent.mp4'
    },
    {
        name: 'One Time Build',
        service: ONE_TIME_BUILD,
        description: 'From ideation to deployment, I handle the entire automation build process. One time fee, one time build.',
        icon: '⚙️'
    },
    {
        name: 'Consultation & Strategy',
        service: CONSULTATION_AND_STRATEGY,
        description: 'Low Cost, Low Commitment. Get expert advice on identifying automation opportunities, selecting the right tools, and planning your automation journey.',
        video: '/videos/rag-bot.mp4'
    },
    {
        name: 'Training & Workshops',
        service: TRAINING_AND_WORKSHOPS,
        description: 'Empower your team with the knowledge and skills to leverage automation tools effectively through tailored training sessions and workshops.',
        video: '/videos/social-automation.mp4'
    },
    {
        name: 'Build & Monitoring',
        service: BUILD_AND_MONITORING,
        description: 'End-to-end service from building your automation to ongoing monitoring and maintenance, ensuring optimal performance and reliability.',
        video: '/videos/email-assistant.mp4'
    },
    {
        name: 'Integration Services',
        service: INTEGRATION_SERVICES,
        description: 'Seamlessly connect your existing systems and applications with new automation solutions to ensure smooth data flow and enhanced functionality.',
        video: '/videos/integration.mp4'
    }
];