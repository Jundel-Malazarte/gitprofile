// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jundel-malazarte', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['jundel-malazarte/gitprofile', 'jundel-malazarte/intern-hours-tracker'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Hour Tracker App',
          description:
            'A simple web app to help my classmates and other students keep track of the hours they worked during their internships',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://hours-tracker-intern.vercel.app/',
        },
        {
          title: 'Read Scape Books',
          description:
            'A web app for reading books and managing your reading list, with a focus on accessibility.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },

  seo: { title: 'Portfolio of Jundel Malazartes', description: '', imageURL: '' },
  social: {
    linkedin: 'https://www.linkedin.com/in/jundel-malazarte-98a8b4257/',
    x: 'jundel_malazarte',
    mastodon: '',
    researchGate: '',
    facebook: 'https://www.facebook.com/malazartejundel29',
    instagram: 'https://www.instagram.com/jundelmalazarte/',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'Jundel Malazarte',
    stackoverflow: 'https://stackoverflow.com/users/31901832/jandel', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://www.jundelmalazarte.com',
    phone: '',
    email: 'jundelmalazarte@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.canva.com/design/DAGr7PDxqK4/jNSv_f1KSuxcW3N5EiXsaw/edit?continue_in_browser=true', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'JavaScript',
    'React.js',
    'Next.js',
    'TypeScript',
    'MySQL',
    'PostgreSQL',
    'Git',
    'GitLab',
    'Java',
    'Python',
    'Tailwind CSS',
    'Bootstrap',
  ],
  experiences: [
    {
      company: 'Cebu City Hall MICS',
      position: 'Web Developer',
      from: 'February 2025',
      to: 'Present',
      companyLink: 'https://cebucity.gov.ph',
    },
    {
      company: 'Cebu City Hall MICS',
      position: 'Technical Support',
      from: 'February 2025',
      to: 'Present',
      companyLink: 'https://cebucity.gov.ph',
    },
  ],
  certifications: [
    {
      name: 'UX / UI Design Specialization',
      body: '4th Place - University of Cebu Main Campus, PSITS',
      year: 'March 2023',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Tertiary Education - University of Cebu Main Campus',
      degree: 'Bachelor of science in Information Technology',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'Secondary Education - Taptap Integrated School Cebu City',
      degree: '',
      from: '2014',
      to: '2021',
    },
    {
      institution: 'Primary Education - Taptap Integrated School Cebu City',
      degree: '',
      from: '2008',
      to: '2014',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'Jundel, Malazarte, Malazarte',
      link: 'https://example.com',  
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: '',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'jundelmalazarte', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

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
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
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
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with Dev <a 
      class="text-primary" href="https://github.com/jundel-malazarte/"
      target="_blank"
      rel="noreferrer"
    >Jundel Malazarte</a>`,

  enablePWA: true,
};

export default CONFIG;
