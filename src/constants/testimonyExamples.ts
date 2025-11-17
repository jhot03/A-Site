import {
  ONE_TIME_BUILD,
  CONSULTATION_AND_STRATEGY
} from './ServiceNames';

import ChatBot from "../assets/images/testimonials/Chatbot.png";
import Workspace from "../assets/images/testimonials/Workspace.png";
import SocialMedia from "../assets/images/testimonials/Social-Media.png";

export const testimonyExamples = [
  {
    name: 'Chatbot with Company Knowledge',
    description: 'This chatbot was tailored to the customer\'s knowledge base to supply 24/7 support to any inquiries.',
    longDescription:
      'Deployed a custom AI chatbot integrated with the company\'s internal knowledge base, resulting in a reduction in support tickets.' + 
      ' What was previously handled by human team members is now efficiently managed by the AI, providing instant responses to common questions.' +
      'This has led to staff being able to focus on more meaningful work.',
    service: ONE_TIME_BUILD,
    image: ChatBot,
  },
  {
    name: 'Automated Workspace Management',
    description: 'Automated calendar approval and resource allocation for users within the workspace',
    longDescription:
      'Implemented an automated system that manages calendar approvals and resource allocation within the organization\'s workspace.' +
      ' This system intelligently handles scheduling conflicts, approves meeting requests based on predefined criteria.',
    service: ONE_TIME_BUILD,
    image: Workspace,
  },
  {
    name: 'Social Media Automation',
    description: 'Discussed automation strategy for pulling analytics and posting',
    longDescription:
      'Looked at clients current social media strategy and identified areas for automation.' +
      ' Developed a plan to automate the pulling of analytics data and scheduling posts to reduce manual effort involved.',
    service: CONSULTATION_AND_STRATEGY,
    image: SocialMedia,
  },
];