/**
 * CONTENT CONFIG — Edit all site text and data in this single file.
 * No need to touch component code to update copy.
 */

export interface Project {
  title: string;
  problem: string;
  tech: string[];
  outcome: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  details: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    ogImage: string;
    url: string;
  };
  nav: {
    name: string;
    links: { label: string; fragment: string }[];
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    resumeUrl: string;
    credibility: string[];
  };
  projects: Project[];
  skills: SkillCategory[];
  about: {
    title: string;
    paragraphs: string[];
    values: { label: string; description: string }[];
    looking: string;
  };
  experience: {
    jobs: Experience[];
    education: { degree: string; school: string; year: string }[];
    certifications: string[];
  };
  hobbies: {
    title: string;
    items: { name: string; icon: string; description: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    availability: string;
    socials: { label: string; url: string; icon: string }[];
  };
  footer: {
    copy: string;
  };
}

export const SITE_CONTENT: SiteContent = {
  meta: {
    title: 'Juan Carlos Pérez Cruz — Software Developer',
    description:
      'Software developer with 8+ years of experience building robust systems with .NET, Angular, and Azure. Based in Mexico City.',
    ogImage: '/og-image.png',
    url: 'https://juancarlosperezcruz.dev',
  },

  nav: {
    name: 'JCPC',
    links: [
      { label: 'Work', fragment: 'work' },
      { label: 'Skills', fragment: 'skills' },
      { label: 'About', fragment: 'about' },
      { label: 'Resume', fragment: 'resume' },
      { label: 'Hobbies', fragment: 'hobbies' },
      { label: 'Contact', fragment: 'contact' },
    ],
  },

  hero: {
    headline: 'I build reliable software that solves real problems.',
    subheadline:
      'Full-stack developer with 8+ years shipping production systems in .NET, Angular, and Azure. I care about clean architecture, great UX, and writing code that lasts.',
    ctaPrimary: 'Download Resume',
    ctaSecondary: 'Get in Touch',
    resumeUrl: '/resume.pdf',
    credibility: [
      'C# / .NET',
      'Angular',
      'SQL Server',
      'Azure DevOps',
      'Docker',
      'SwiftUI',
    ],
  },

  projects: [
    {
      title: 'Personal Finance Manager',
      problem:
        'Built an iOS app with a .NET backend to help users track spending, set budgets, and visualize financial health.',
      tech: ['SwiftUI', '.NET Core', 'Entity Framework', 'SQL Server', 'REST API'],
      outcome:
        'End-to-end mobile + backend solution with secure authentication and real-time sync.',
      githubUrl: '[[GitHub URL]]',
      details:
        'Designed the full architecture from database schema to mobile UI. Implemented OAuth/JWT authentication, background data sync, and interactive charts. Used EF Core with migrations and in-memory testing for the API layer.',
    },
    {
      title: 'Factory Monitoring System',
      problem:
        'Developed a real-time PLC monitoring dashboard for a manufacturing environment, replacing manual checks with automated alerts.',
      tech: ['C#', 'WPF', 'Windows Service', '.NET', 'SQL Server'],
      outcome:
        'Reduced manual monitoring time by [[Metric]]% and enabled proactive maintenance.',
      details:
        'Created a Windows service to poll PLC data via OPC, store telemetry in SQL Server, and surface it through a WPF dashboard. Implemented configurable alert thresholds, shift-based reporting, and historical trend analysis.',
    },
    {
      title: 'Integration & Webhook Platform',
      problem:
        'Designed a middleware system to connect internal ERPs and third-party APIs via configurable webhooks and event-driven pipelines.',
      tech: ['.NET Core', 'REST APIs', 'Azure Service Bus', 'Docker', 'SQL Server'],
      outcome:
        'Enabled seamless data flow between [[Number]] systems, cutting manual data entry.',
      githubUrl: '[[GitHub URL]]',
      details:
        'Architected an event-driven pipeline with retry logic, dead-letter queues, and structured logging. Dockerized for consistent deployments across environments. Integrated with Azure DevOps CI/CD for automated releases.',
    },
    {
      title: 'CI/CD Pipeline Automation',
      problem:
        'Standardized build, test, and deployment workflows across multiple teams using Azure DevOps and GitHub Actions.',
      tech: ['Azure DevOps', 'GitHub Actions', 'Docker', 'YAML', '.NET'],
      outcome:
        'Reduced deployment time and improved release confidence with automated quality gates.',
      details:
        'Created reusable pipeline templates with multi-stage deployments, automated testing gates, code coverage enforcement, and Slack notifications. Containerized build agents for consistency.',
    },
    {
      title: 'Automated Testing Suite',
      problem:
        'Established a comprehensive testing strategy using EF Core InMemory provider for fast, reliable integration tests.',
      tech: ['.NET Core', 'xUnit', 'EF Core InMemory', 'Moq', 'FluentAssertions'],
      outcome:
        'Achieved high test coverage with fast feedback loops for the development team.',
      details:
        'Implemented repository and service-layer testing patterns with EF InMemory databases. Created test fixtures and factories for realistic data generation. Integrated test runs into CI pipelines with coverage reporting.',
    },
  ],

  skills: [
    {
      name: 'Backend',
      icon: 'dns',
      skills: [
        'C#',
        '.NET Core / .NET 8+',
        'Entity Framework Core',
        'SQL Server',
        'REST API Design',
        'OAuth / JWT',
        'LINQ',
      ],
    },
    {
      name: 'Frontend',
      icon: 'web',
      skills: [
        'Angular',
        'Angular Material',
        'TypeScript',
        'RxJS',
        'HTML5 / SCSS',
        'Responsive Design',
      ],
    },
    {
      name: 'Mobile',
      icon: 'phone_iphone',
      skills: ['SwiftUI', 'iOS Development', 'REST Client Integration'],
    },
    {
      name: 'DevOps & Cloud',
      icon: 'cloud',
      skills: [
        'Azure DevOps Pipelines',
        'GitHub Actions',
        'Docker',
        'CI/CD',
        'Azure Services',
        'Git',
      ],
    },
    {
      name: 'Testing',
      icon: 'bug_report',
      skills: [
        'xUnit',
        'EF Core InMemory',
        'Moq',
        'FluentAssertions',
        'Integration Testing',
      ],
    },
  ],

  about: {
    title: 'About Me',
    paragraphs: [
      "I'm a software developer based in Mexico City (Coyoacán) with over eight years of professional experience building systems that people depend on every day. My core stack is C#/.NET and Angular, and I've worked across the full spectrum—from PLC monitoring services to iOS apps to CI/CD pipelines.",
      'I gravitate toward problems that require clean architecture, thoughtful API design, and reliable infrastructure. I enjoy the craft of writing code that is not only functional but maintainable and testable.',
      "Outside of code, I'm serious about golf—it's a sport that rewards patience, technique, and consistency, values I bring to my engineering work. I'm also drawn to investing and personal finance as exercises in long-term thinking, and I love traveling to explore new perspectives.",
    ],
    values: [
      {
        label: 'Clarity over cleverness',
        description:
          'I write code that the next developer can understand and extend.',
      },
      {
        label: 'Ship with confidence',
        description:
          'Automated tests and CI/CD mean fewer surprises in production.',
      },
      {
        label: 'Continuous growth',
        description:
          'I invest time in learning—new patterns, tools, and ways to think about problems.',
      },
      {
        label: 'Quiet impact',
        description:
          'I prefer doing great work over talking about it. Results speak.',
      },
    ],
    looking:
      "I'm open to remote roles (US-based companies) where I can contribute to meaningful products with a collaborative team. I'm also available for select freelance projects.",
  },

  experience: {
    jobs: [
      {
        role: 'Senior Software Developer',
        company: '[[Company Name]]',
        period: '[[Year]] – Present',
        description: [
          'Led development of full-stack web applications using .NET Core and Angular.',
          'Designed and maintained CI/CD pipelines in Azure DevOps and GitHub Actions.',
          'Mentored junior developers and conducted architecture reviews.',
        ],
      },
      {
        role: 'Software Developer',
        company: '[[Company Name]]',
        period: '[[Year]] – [[Year]]',
        description: [
          'Built factory monitoring systems with WPF and Windows Services for PLC data.',
          'Developed integration platforms connecting ERP and third-party APIs.',
          'Implemented comprehensive testing strategies with EF Core InMemory.',
        ],
      },
      {
        role: 'Junior Developer',
        company: '[[Company Name]]',
        period: '[[Year]] – [[Year]]',
        description: [
          'Developed internal tools and reporting dashboards using C# and SQL Server.',
          'Contributed to API development and database design.',
          'Participated in agile development and code review processes.',
        ],
      },
    ],
    education: [
      {
        degree: '[[Degree — e.g., B.S. Computer Science]]',
        school: '[[University Name]]',
        year: '[[Year]]',
      },
    ],
    certifications: [
      '[[Certification — e.g., Azure Developer Associate]]',
      '[[Certification — e.g., .NET Certified Developer]]',
    ],
  },

  hobbies: {
    title: 'Beyond the Code',
    items: [
      {
        name: 'Golf',
        icon: 'sports_golf',
        description:
          'I take golf seriously—it teaches technique, mental toughness, and consistency. Every round is a chance to refine my approach, much like debugging a complex system.',
      },
      {
        name: 'Investing',
        icon: 'trending_up',
        description:
          "I'm passionate about long-term investing and personal finance. Managing risk, reading markets, and thinking in decades\u2014skills that translate directly to building sustainable software.",
      },
      {
        name: 'Travel',
        icon: 'flight',
        description:
          'Travel fuels my curiosity. I love planning trips down to the detail and experiencing new cultures. It broadens perspective and keeps me adaptable.',
      },
    ],
  },

  contact: {
    title: "Let's Work Together",
    subtitle:
      "Have a project in mind or a role that fits? I'd love to hear from you.",
    email: '[[your@email.com]]',
    availability: 'Currently open to remote opportunities and select freelance work.',
    socials: [
      { label: 'LinkedIn', url: '[[LinkedIn URL]]', icon: 'person' },
      { label: 'GitHub', url: '[[GitHub URL]]', icon: 'code' },
    ],
  },

  footer: {
    copy: `© ${new Date().getFullYear()} Juan Carlos Pérez Cruz. Built with Angular & crafted in Coyoacán, CDMX.`,
  },
};
