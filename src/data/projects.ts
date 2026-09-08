export interface ProjectImage {
  src: string;
  alt: string;
  label?: string;
  isMobile?: boolean;
}

export interface ProjectLinks {
  github: string;
  live?: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  accent: string;
  featured: boolean;
  coverImage: ProjectImage;
  screenshots: ProjectImage[];
  currentState: string;
  futureDirection?: string;
  capabilities: string[];
  links: ProjectLinks;
}

export const projects: Project[] = [
  {
    slug: 'dermaai',
    name: 'DermaAI',
    category: 'AI Skincare Intelligence',
    shortDescription: 'A personal skincare AI assistant evaluating product compatibility with specific skin profiles through Gemini API and Supabase analysis.',
    longDescription: 'DermaAI is a personal skincare intelligence application designed to evaluate ingredient compatibility against custom skin profiles. By combining image and ingredient input analysis powered by Gemini API with persistent skin profiles stored in Supabase, DermaAI helps users understand product suitability without making medical claims.',
    technologies: ['Gemini API', 'Supabase', 'TypeScript', 'AI Analysis', 'Skincare Intelligence'],
    accent: '#D4B895',
    featured: true,
    coverImage: {
      src: '/projects/dermaai/01-welcome-scanner.png',
      alt: 'DermaAI welcome and skincare product ingredient scanner',
      label: 'Welcome & Ingredient Scanner',
    },
    screenshots: [
      {
        src: '/projects/dermaai/01-welcome-scanner.png',
        alt: 'DermaAI welcome and skincare product ingredient scanner',
        label: 'Welcome & Ingredient Scanner',
      },
      {
        src: '/projects/dermaai/02-product-input.png',
        alt: 'DermaAI product ingredient analysis input screen',
        label: 'Product Ingredient Analysis Input',
      },
      {
        src: '/projects/dermaai/03-scan-history.png',
        alt: 'DermaAI scan history logs',
        label: 'Scan History & Compatibility Logs',
      },
      {
        src: '/projects/dermaai/04-skin-persona.png',
        alt: 'DermaAI skin details persona profile',
        label: 'Personal Skin Profile Persona',
      },
      {
        src: '/projects/dermaai/05-skin-details.png',
        alt: 'Additional DermaAI skin details persona screen',
        label: 'Detailed Persona Metrics & Preferences',
      },
    ],
    currentState: 'Functional application integrated with Gemini API for ingredient context parsing and Supabase for user skin profile persistence.',
    capabilities: [
      'Personal skin profile management & preferences',
      'Ingredient list scanning & chemical analysis',
      'Compatibility risk scoring based on personal profile',
      'Historical scan records & product history',
      'AI-assisted non-medical contextual recommendations',
    ],
    links: {
      github: 'https://github.com/shameemxy/DermaAI',
      live: 'https://dermaaiapp.vercel.app',
    },
  },
  {
    slug: 'pulsesafe',
    name: 'PulseSafe',
    category: 'Emergency SOS System',
    shortDescription: 'An automatic emergency SOS system detecting dangerous situations using mobile accelerometer sensors and location signals.',
    longDescription: 'PulseSafe is an emergency monitoring and alert system engineered for personal safety. The current prototype utilizes device accelerometer movements to detect sudden impacts or danger, triggering a timed emergency cancellation flow before transmitting location data and emergency contact alerts.',
    technologies: ['React Native', 'ExpoGo', 'Mobile Accelerometer', 'Location Services', 'Safety Protocol'],
    accent: '#E63946',
    featured: true,
    coverImage: {
      src: '/projects/pulsesafe/06-monitoring-center.png',
      alt: 'PulseSafe emergency monitoring center live feed interface',
      label: 'Emergency Monitoring Center',
    },
    screenshots: [
      {
        src: '/projects/pulsesafe/04-protection-mode.jpg',
        alt: 'PulseSafe active protection mode and accelerometer data screen',
        label: 'Active Protection Mode Telemetry',
        isMobile: true,
      },
      {
        src: '/projects/pulsesafe/02-emergency-detected.jpg',
        alt: 'PulseSafe emergency detected countdown screen',
        label: 'Emergency Alert Countdown Screen',
        isMobile: true,
      },
      {
        src: '/projects/pulsesafe/01-emergency-contacts.jpg',
        alt: 'PulseSafe emergency contacts management',
        label: 'Saved Emergency Contacts',
        isMobile: true,
      },
      {
        src: '/projects/pulsesafe/05-settings.jpg',
        alt: 'PulseSafe motion detection settings',
        label: 'Accelerometer Motion Sensitivity Settings',
        isMobile: true,
      },
      {
        src: '/projects/pulsesafe/06-monitoring-center.png',
        alt: 'PulseSafe emergency monitoring center live feed interface',
        label: 'Emergency Monitoring Center Feed',
      },
    ],
    currentState: 'ExpoGo mobile prototype featuring accelerometer-based sudden movement detection, interactive emergency cancellation countdown timer, location and timestamp transmission, saved contact management, and central monitoring dashboard.',
    futureDirection: 'Planned expansion includes 10-second emergency video recording, 10-second audio capture, offline alert transmission via LoRa packets, and adaptive AI movement pattern analysis to minimize false alarms while active.',
    capabilities: [
      'Sudden movement & fall detection via device accelerometer',
      'Emergency cancellation countdown window to prevent false alerts',
      'Automatic GPS location & timestamp payload transmission',
      'Saved emergency contact directory and instant notification flow',
      'Centralized monitoring center overview interface',
    ],
    links: {
      github: 'https://github.com/shameemxy/PulseSafe',
    },
  },
  {
    slug: 'phishreflex',
    name: 'PhishReflex',
    category: 'Phishing Awareness Training',
    shortDescription: 'An email-based phishing awareness training platform generating realistic AI phishing simulations to train employees.',
    longDescription: 'PhishReflex is an interactive cybersecurity training platform allowing managers to deploy simulated phishing attacks alongside standard communications. Built-in AI transforms regular email prompts into authentic phishing lures, testing employee vigilance through point-based scoring and administrative telemetry.',
    technologies: ['AI Bait Generation', 'Cybersecurity Telemetry', 'Email Simulation', 'Employee Scoring', 'Next.js'],
    accent: '#274a9c',
    featured: true,
    coverImage: {
      src: '/projects/phishreflex/01-campaign-deployment.png',
      alt: 'PhishReflex campaign deployment interface',
      label: 'Campaign Deployment Control Panel',
    },
    screenshots: [
      {
        src: '/projects/phishreflex/01-campaign-deployment.png',
        alt: 'PhishReflex campaign deployment interface',
        label: 'Campaign Deployment Control Panel',
      },
      {
        src: '/projects/phishreflex/02-campaign.png',
        alt: 'PhishReflex campaign manager interface',
        label: 'Simulated Email Campaign Manager',
      },
      {
        src: '/projects/phishreflex/03-dashboard.png',
        alt: 'PhishReflex campaign dashboard interface',
        label: 'Employee Vigilance Dashboard',
      },
      {
        src: '/projects/phishreflex/04-telemetry.png',
        alt: 'PhishReflex telemetry interface',
        label: 'Security Telemetry & Reporting Engine',
      },
      {
        src: '/projects/phishreflex/05-phishing-email.png',
        alt: 'PhishReflex phishing email example',
        label: 'AI-Generated Phishing Bait Example',
      },
    ],
    currentState: 'Functional cybersecurity training prototype with campaign deployment wizard, AI email bait generator, telemetry tracking, and gamified employee scoring.',
    capabilities: [
      'Campaign creation wizard (standard email vs phishing simulation)',
      'AI prompt-to-bait transformation engine preserving message context',
      'Interactive email inbox simulation for workforce training',
      'Real-time employee interaction telemetry and scoring',
      'Administrative security reporting and risk metrics',
    ],
    links: {
      github: 'https://github.com/shameemxy/PhishReflex',
    },
  },
  {
    slug: 'icelog',
    name: 'Icelog',
    category: 'AI Fitness & Nutrition Tracker',
    shortDescription: 'A comprehensive fitness tracking platform with integrated AI for logging workouts, nutrition, routines, and user progress.',
    longDescription: 'Icelog is a modern fitness tracking application featuring customized workout routine planning, calorie and macro nutrition tracking, set/rep counters, rest timers, and an AI chat assistant that provides tailored feedback based on user logs and physical metrics.',
    technologies: ['React', 'TypeScript', 'AI Feedback Engine', 'Nutrition Analytics', 'JSON Progress Export'],
    accent: '#8B5CF6',
    featured: false,
    coverImage: {
      src: '/projects/icelog/00-onlook.jpg',
      alt: 'Icelog overview dashboard screen',
      label: 'Fitness Overview Dashboard',
    },
    screenshots: [
      {
        src: '/projects/icelog/01-overview.jpg',
        alt: 'Icelog overview dashboard screen',
        label: 'Weekly Activity & Training Overview',
      },
      {
        src: '/projects/icelog/02-dashboard.jpg',
        alt: 'Icelog exercise dashboard screen',
        label: 'Routine Planning & Rest Timer Module',
      },
      {
        src: '/projects/icelog/03-profile.jpg',
        alt: 'Icelog profile body metrics screen',
        label: 'User Profile & Target Configuration',
      },
      {
        src: '/projects/icelog/04-workout-log.jpg',
        alt: 'Icelog workout log screen',
        label: 'Workout Logging & Progress Tracking',
      },
      {
        src: '/projects/icelog/05-nutrition.jpg',
        alt: 'Icelog nutrition screen',
        label: 'Calorie & Macro Nutrition Logging',
      },
      {
        src: '/projects/icelog/06-metrics.jpg',
        alt: 'Icelog metrics screen',
        label: 'Body Information & Performance Metrics',
      },
      {
        src: '/projects/icelog/07-Export-and-AI-Chatbot.jpg',
        alt: 'Icelog AI assistant screen and export option',
        label: 'AI Assistant Feedback & Recommendations along with export option for JSON data',
      },
    ],
    currentState: 'Functional fitness tracker with workout day planning (sets/reps/timers), macro nutrition tracking, AI routine analysis, and JSON data export.',
    capabilities: [
      'Body information & metrics tracking',
      'Calorie and macronutrient logging',
      'Custom weekly workout routine builder (sets, reps, rest timers)',
      'AI assistant providing routine analysis and progress insights',
      'JSON format health and workout data export',
    ],
    links: {
      github: 'https://github.com/shameemxy/icelog',
      live: 'https://icelog.vercel.app',
    },
  },
  {
    slug: 'classtrack',
    name: 'ClassTrack',
    category: 'School Management Platform',
    shortDescription: 'A multi-role school management system providing dedicated portals for administrators, teachers, and students.',
    longDescription: 'ClassTrack simplifies academic administration through role-based access control. Separate user interfaces tailor workflows for administrators overseeing institution metrics, teachers managing attendance and assignments, and students tracking exams and announcements.',
    technologies: ['React', 'Role-Based Auth', 'Database Management', 'UI Workflows', 'Student Analytics'],
    accent: '#4F46E5',
    featured: false,
    coverImage: {
      src: '/projects/classtrack/01-students.png',
      alt: 'ClassTrack student management interface',
      label: 'Student Directory & Profile Portal',
    },
    screenshots: [
      {
        src: '/projects/classtrack/01-students.png',
        alt: 'ClassTrack student management interface',
        label: 'Student Directory & Roster Management',
      },
      {
        src: '/projects/classtrack/02-attendance.png',
        alt: 'ClassTrack attendance interface',
        label: 'Teacher Attendance Tracking Interface',
      },
      {
        src: '/projects/classtrack/03-exams.png',
        alt: 'ClassTrack exam interface',
        label: 'Exam Schedule & Academic Portal',
      },
    ],
    currentState: 'Complete school management prototype supporting administrator controls, teacher attendance & grading tools, and student portal dashboards.',
    capabilities: [
      'Role-based access control (Admin, Teacher, Student)',
      'Daily student attendance tracking and records',
      'Assignment publishing and submission workflows',
      'Exam scheduling and grade evaluation portal',
      'Institutional announcements and student directory',
    ],
    links: {
      github: 'https://github.com/shameemxy/ClassTrack',
    },
  },
  {
    slug: 'civictrack',
    name: 'CivicTrack',
    category: 'Civic Tech Complaint System',
    shortDescription: 'A DBMS civic complaint portal using AI priority assessment to streamline civilian grievance reporting and officer resolution.',
    longDescription: 'CivicTrack is a civic technology database platform connecting citizens with municipal authorities. Civilians report issues like road damage or utility failures with evidence uploads, while an AI triage algorithm evaluates complaint descriptions to assign urgency priority for officer queue management.',
    technologies: ['DBMS Architecture', 'AI Priority Assessment', 'Relational Database', 'Officer Queue Portal', 'ER Diagram'],
    accent: '#2563EB',
    featured: false,
    coverImage: {
      src: '/projects/civictrack/11-master-control.png',
      alt: 'CivicTrack master control dashboard',
      label: 'Master Control Operations Dashboard',
    },
    screenshots: [
      {
        src: '/projects/civictrack/01-civilian-login.png',
        alt: 'CivicTrack civilian login',
        label: 'Civilian Authentication Portal',
      },
      {
        src: '/projects/civictrack/02-grievance-form-top.png',
        alt: 'CivicTrack grievance form',
        label: 'Grievance Submission Form - General Details',
      },
      {
        src: '/projects/civictrack/03-grievance-form-evidence.png',
        alt: 'CivicTrack grievance form with evidence and priority',
        label: 'Evidence Upload & AI Priority Assessment',
      },
      {
        src: '/projects/civictrack/04-my-grievances.png',
        alt: 'CivicTrack civilian grievance tracking',
        label: 'Civilian Grievance Tracking Dashboard',
      },
      {
        src: '/projects/civictrack/05-officer-queue.png',
        alt: 'CivicTrack officer queue management',
        label: 'Department Officer Queue Management',
      },
      {
        src: '/projects/civictrack/06-officer-queue-detail.png',
        alt: 'Additional CivicTrack officer queue management',
        label: 'Officer Complaint Details & Action Panel',
      },
      {
        src: '/projects/civictrack/07-civilian-dashboard.png',
        alt: 'CivicTrack civilian grievance dashboard',
        label: 'Civilian Complaint Overview Panel',
      },
      {
        src: '/projects/civictrack/08-grievance-form.png',
        alt: 'CivicTrack grievance creation form',
        label: 'Departmental Issue Categorization',
      },
      {
        src: '/projects/civictrack/09-grievance-submit.png',
        alt: 'Continuation of grievance form and evidence submission',
        label: 'Evidence Submission & Priority Confirmation',
      },
      {
        src: '/projects/civictrack/10-admin-login.png',
        alt: 'CivicTrack system administrator portal login',
        label: 'System Administrator Authentication',
      },
      {
        src: '/projects/civictrack/11-master-control.png',
        alt: 'CivicTrack master control dashboard',
        label: 'Master Administrative Control Dashboard',
      },
      {
        src: '/projects/civictrack/12-performance-metrics.png',
        alt: 'CivicTrack performance metrics',
        label: 'Municipal Resolution Performance Metrics',
      },
      {
        src: '/projects/civictrack/14-officer-queue.png',
        alt: 'Additional CivicTrack officer queue management screen',
        label: 'Workload Queue Distribution Screen',
      },
    ],
    currentState: 'DBMS civic technology project featuring civilian registration, photo/document evidence submission, AI priority classification, officer triage queues, system administration dashboard, and database ER diagram.',
    capabilities: [
      'Civilian complaint registration with media evidence upload',
      'AI priority determination based on issue description analysis',
      'Department officer task queue & resolution status workflow',
      'System admin master control and department performance metrics',
    ],
    links: {
      github: 'https://github.com/shameemxy/CivicTrack',
    },
  },
];
