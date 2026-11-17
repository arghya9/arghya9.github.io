// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'arghya9', // Your GitHub org/user name. (This is the only required config)
    name: 'Arghya Sarkar',
    bio: 'Sr. Brand Registry & SPS Specialist @ Amazon | M.Tech IIEST Shibpur | IoT, Linux & Financial Ops | NTSE Scholar',
    location: 'Kolkata, West Bengal, India',
    company: 'Amazon',
    avatarUrl: './avatar.jpg',
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'GitHub Repositories',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display.
      },
    },
    external: {
      header: 'Featured Systems & Impact',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Smart ESP32 Weather Intelligence System',
          description:
            'Built a low-power IoT/solar monitoring system with multi-sensor fusion (DHT22, BMP280, LDR) and local forecast logic. Integrated dual APIs (WeatherAPI & OpenWeather), real-time Telegram bot alerts, and ThingSpeak cloud telemetry logging. Stack: ESP32, Arduino, REST APIs, IoT, Solar Electronics.',
          imageUrl: './projects/esp32-weather.png',
          link: 'https://www.linkedin.com/in/arghya-sarkar-8940b795',
        },
        {
          title: 'Raspberry Pi Zero-Trust Private Cloud',
          description:
            'Architected self-hosted private cloud infrastructure using Nextcloud on Raspberry Pi with SSD storage. Configured zero-trust remote access via Tailscale VPN, automated encrypted MEGA backups via rclone, and Wi-Fi failover architecture. Stack: Raspberry Pi, Linux, Nextcloud, Tailscale, rclone.',
          imageUrl: './projects/rpi-cloud.png',
          link: 'https://www.linkedin.com/in/arghya-sarkar-8940b795',
        },
        {
          title: 'Amazon Marketplace Ops & Risk Analytics',
          description:
            'Directed Tier-1 brand support across global marketplaces, resolving complex catalog defects, listing suppressions, contribution conflicts, and IP violations. Drove a 50% reduction in case escalations & resolution turnaround and a 25% improvement in seller retention using diagnostic risk & financial reconciliation tools.',
          imageUrl: './projects/amazon-ops.png',
          link: 'https://www.linkedin.com/in/arghya-sarkar-8940b795',
        },
        {
          title: 'STEM Instruction & Industry Technical Evaluation',
          description:
            'Delivered advanced Physics, Chemistry, Mathematics, and English communication pedagogy across Unacademy (Relevel), Toppr, Filo, and Sensum Forum (2018–2021). Evaluated industry candidates through structured technical competency interviews.',
          imageUrl: './projects/stem-eval.png',
          link: 'https://www.linkedin.com/in/arghya-sarkar-8940b795',
        },
      ],
    },
  },
  seo: {
    title:
      'Arghya Sarkar | Operations, IT & IoT Systems, Finance & Academic Excellence',
    description:
      'Portfolio of Arghya Sarkar (Kolkata, India): Senior Brand Registry & SPS Specialist at Amazon (50% escalation reduction, 25% retention lift), M.Tech from IIEST Shibpur, Elsevier published researcher, NTSE Scholar, and Linux/ESP32/Raspberry Pi systems builder.',
    imageURL: 'https://arghya9.github.io/og-image.jpg',
  },
  social: {
    linkedin: 'arghya-sarkar-8940b795',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://arghya9.github.io',
    phone: '+91 93302 03929',
    email: 'arghyasarkar007@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Amazon Brand Registry',
    'Seller Performance (SPS)',
    'Risk Investigation',
    'Financial Data Analysis',
    'Root Cause Analysis (RCA)',
    'SLA Management',
    'Compliance & IP Protection',
    'Inventory Management',
    'Linux / Ubuntu',
    'System Administration',
    'Shell Scripting',
    'ESP32 / IoT',
    'Raspberry Pi',
    'Nextcloud',
    'Tailscale VPN',
    'rclone',
    'API Integration',
    'Cloud Telemetry',
    'STEM Instruction',
    'Technical Evaluation',
  ],
  experiences: [
    {
      company: 'Amazon (Kolkata, India)',
      position: 'Senior Brand Registry Support / SPS Specialist',
      from: 'June 2022',
      to: 'Present',
      companyLink: 'https://www.amazon.com',
    },
    {
      company: 'IndiaMART InterMESH Limited (Kolkata, India)',
      position: 'Senior Executive – Client Servicing',
      from: 'April 2022',
      to: 'June 2022',
      companyLink: 'https://www.indiamart.com',
    },
    {
      company: "BYJU'S (Remote)",
      position: 'Business Development Associate',
      from: 'January 2022',
      to: 'April 2022',
      companyLink: 'https://byjus.com',
    },
    {
      company: 'Amazon Development Center India (Hyderabad / Remote)',
      position: 'SDS Associate',
      from: 'October 2021',
      to: 'January 2022',
      companyLink: 'https://www.amazon.com',
    },
    {
      company: 'Unacademy (Relevel), Toppr, Filo, Sensum Forum',
      position: 'Faculty & Technical Evaluator (Math, Science, English)',
      from: '2018',
      to: '2021',
      companyLink: 'https://unacademy.com',
    },
  ],
  certifications: [
    {
      name: 'National Talent Search (NTSE) Scholar',
      body: 'National Achievement — NCERT',
      year: 'National Scholar',
    },
    {
      name: '50% Escalation Reduction & 25% Retention Lift',
      body: 'Amazon Brand Registry & SPS Operational Excellence',
      year: '2022 – Present',
    },
  ],
  educations: [
    {
      institution:
        'IIEST, Shibpur (Indian Institute of Engineering Science and Technology)',
      degree: 'M.Tech in Renewable Energy Science & Technology (CGPA: 8.3)',
      from: '2018',
      to: '2020',
    },
    {
      institution: 'Techno India University',
      degree: 'B.Tech in Electronics and Communication Engineering (CGPA: 8.4)',
      from: '2014',
      to: '2018',
    },
    {
      institution: 'WBCHSE (Kolkata)',
      degree: 'Class 12 (Higher Secondary)',
      from: '2014',
      to: '2014',
    },
    {
      institution: 'WBBSE (Kolkata)',
      degree: 'Class 10 (Secondary Education)',
      from: '2012',
      to: '2012',
    },
  ],
  publications: [
    {
      title:
        'Graphene Nanosheet Decorated Metal Oxide Semiconductors for Supercapacitor Applications',
      conferenceName: '',
      journalName: 'Journal of Colloid and Interface Science (Elsevier)',
      authors: 'Arghya Sarkar',
      link: '',
      description:
        'Peer-reviewed materials science and energy-storage research investigating graphene nanosheet-decorated metal oxide semiconductor composites for high-performance supercapacitor electrodes.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'night',
      'sunset',
      'procyon',
      'business',
      'dracula',
      'nord',
      'dim',
      'luxury',
      'emerald',
      'corporate',
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'cmyk',
      'autumn',
      'acid',
      'lemonade',
      'coffee',
      'winter',
      'caramellatte',
      'abyss',
      'silk',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `© ${new Date().getFullYear()} Arghya Sarkar • Built with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
