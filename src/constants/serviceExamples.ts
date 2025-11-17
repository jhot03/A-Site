import {
    ONE_TIME_BUILD,
    CONSULTATION_AND_STRATEGY,
    TRAINING_AND_WORKSHOPS,
    BUILD_AND_MONITORING,
    INTEGRATION_SERVICES
} from './ServiceNames';

import digitalBuild from "../assets/images/services/Digital-Build.mp4"
import plan from "../assets/images/services/Plan.png"
import training from "../assets/images/services/Lecture.png"
import upKeep from "../assets/images/services/Upkeep.mp4"
import integration from "../assets/images/services/Integration.mp4"

export const serviceExamples = [
    {
        name: 'Build & Monitoring',
        service: BUILD_AND_MONITORING,
        description: 'End-to-end service from building your automation to ongoing monitoring and maintenance, ensuring optimal performance and reliability.',
        video: upKeep
    },
    {
        name: 'Integration Services',
        service: INTEGRATION_SERVICES,
        description: 'Seamlessly connect your existing systems and applications with new automation solutions to ensure smooth data flow and enhanced functionality.',
        video: integration
    },
    {
        name: 'One Time Build',
        service: ONE_TIME_BUILD,
        description: 'From ideation to deployment, I handle the entire automation build process. One time fee, one time build.',
        icon: '⚙️',
        video: digitalBuild
    },
    {
        name: 'Consultation & Strategy',
        service: CONSULTATION_AND_STRATEGY,
        description: 'Low Cost, Low Commitment. Get expert advice on identifying automation opportunities, selecting the right tools, and planning your automation journey.',
        image: plan
    },
    {
        name: 'Training & Workshops',
        service: TRAINING_AND_WORKSHOPS,
        description: 'Empower your team with the knowledge and skills to leverage automation tools effectively through tailored training sessions and workshops.',
        image: training
    },
];