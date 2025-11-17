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
    description: '[Confidential] - This AI chatbot exceeded expectations and freed up a lot of staff time answering repetitive questions,' +
                  ' especially during times where our seasonal programs were getting overloaded. It is nice to shut off during off hours too.',
    longDescription:
      'Deployed a custom AI chatbot integrated with the company\'s internal knowledge base, resulting in a reduction in support tickets.' + 
      ' What was previously handled by human team members is now efficiently managed by the AI, providing instant responses to common questions.' +
      'This has led to staff being able to focus on more meaningful work.',
    service: ONE_TIME_BUILD,
    image: ChatBot,
  },
  {
    name: 'Automated Workspace Management',
    description: '[Confidential] - I have a lot of meetings that require approvals so this saved me a lot of time in approving ' +
                  'meeting requests in my workspace. Real time summaries of the agenda pushed to my phone were also a nice touch.',
    longDescription:
      'Implemented an automated system that manages calendar approvals and resource allocation within the organization\'s workspace.' +
      ' This system intelligently handles scheduling conflicts, approves meeting requests based on predefined criteria.',
    service: ONE_TIME_BUILD,
    image: Workspace,
  },
  {
    name: 'Social Media Automation',
    description: 'ClipStar: For a small creator like me, I really wanted a way to stay consistent on social media without having to think too hard.' +
                  ' Just knowing I can easily make content without the hassle has made it feel very therapeutic.',
    longDescription:
      'Looked at clients current social media strategy and identified areas for automation.' +
      ' Developed a plan to automate the pulling of analytics data and scheduling posts to reduce manual effort involved.',
    service: CONSULTATION_AND_STRATEGY,
    image: SocialMedia,
  },
];