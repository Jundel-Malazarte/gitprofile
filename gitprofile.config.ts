// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jundel-malazarte', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/junde-malazarte/portfolio, then set base to '/portfolio/'.
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
          title: 'CropCraft - Guidance app for farmers',
          description:'A user-friendly mobile app that guideds farmers on how to grow their crops.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Jundel-Malazarte/CropCraft-App.git',
        },
        {
          title: 'Library Management System',
          description:
            'A web-based application to manage book inventories, member registrations, and borrowing/returning of books in a library.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Jundel-Malazarte/Library-Management-System.git',
        },
        {
          title: 'Online DTR System',
          description:'A web-based application that helps employees track their daily time records.',
          imageUrl:'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Jundel-Malazarte/Daily-time-record.git',
        },
        {
          title: 'Read Scape Books',
          description:'A web application that allows users to browse and read a collection of books online.',
          imageUrl:'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Jundel-Malazarte/Read-Scape-Books.git',
        },
        {
          title: 'Weather App Javascript',
          description:'A web application that provides weather forecasts and information using JavaScript.',
          imageUrl:'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Jundel-Malazarte/Weather-app-javaScript.git',
        },
        {
          title: 'Student Attendance System',
          description:'A web-based application to manage and track student attendance records efficiently.',
          imageUrl:'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Jundel-Malazarte/Student-Attendance-System-Flask.git',
        },
        {
          title: 'Line Follower Robot',
          description:'A simple line follower robot using Arduino that can follow a black line on a white surface.',
          imageUrl:'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/Jundel-Malazarte/LineFollowerRobot.git',
        }

        // You can add more projects here
      ],
    },
  },

  seo: { title: 'Portfolio of Jundel Malazarte', description: '', imageURL: '' },
  social: {
    linkedin: 'jundel-malazarte-98a8b4257/',
    mastodon: '',
    researchGate: '',
    facebook: 'malazartejundel29',
    instagram: 'jundelmalazarte',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'Jundel Malazarte',
    stackoverflow: '31901832/jundel', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://www.jundelmalazarte.com',
    phone: '',
    email: 'jundelmalazarte@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.canva.com/design/DAG6V4asgK8/S_pqGWV2yCBtwiON-w8qFQ/view?utm_content=DAG6V4asgK8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h11bd880263', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Java',
    'Python',
    'PHP',
    'HTML',
    'CSS',
    'ASP.net',
    'C, C++',
    'C#',
    'TypeScript',
    'React',
    'Java',
    'Python',
    'Flutter',
    // Frameworks and Libraries
    'Tailwind CSS',
    'Bootstrap',
    'React.js',
    'Next.js',
    'Vue.js',
    'Angular',
    'Django',
    'Laravel',
    'ASP.NET Core',
    'Vite',
    'Node.js',
    'Express.js',
    'Flask',
    'Npm',
    'Apache',
    // SQL Databases
    'MySQL',
    'Sqlite',
    'PostgreSQL',
    'Microsoft SQL Server',
    // Tools and Technologies
    'Git',
    'GitHub',
    'Windows',
    'Linux',
    'MacOS',
    'Amazon Web Services (AWS)',
    'Google Cloud Platform (GCP)',
    'SupaBase',
    'Vercel',
    'Netlify',
    'Microsoft Azure',
    'GitLab',
    // IDEs
    'Visual Studio Code',
    'Visual Studio',
    'IntelliJ IDEA',
    'PyCharm',
    'Eclipse',
    'Sublime Text',
    'Dev-C++',
    'CodeBlocks IDE',
    'Quincy 2005',
    'JGraso',
    'Arduino IDE',
    // Editing Softwares
    'Adobe Photoshop',
    'Figma',
    'Canva',

    // You can add more skills here
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
      name: 'UX/UI Certificate of Completion, Responsive Web Design Certificate, PicoCTF Competition & Certification, Comprehensive Introduction to Front-End Engineering',
      body: 'University of Cebu Main Campus, PSITS, FreeCodeCamp',
      year: 'September 2021 - May 2025',
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
      title: 'ENHANCING AGRICULTURAL EFFICIENCY THROUGHOUT A USER-FRIENDLY FARMER APPLICATION FOR CROP MANAGEMENT AND MARKET',
      conferenceName: '',
      journalName: 'CropCraft - Mobile Application for Farmers Guidance',
      authors: 'Dujali Clyde, Friolo Francisco Jr., Gabutin Ryan, Lacao Doel Nino, Malazarte Jundel',
      link: '',  
      description:
        'CropCraft is a mobile application that provides farmers with guidance on crop management, offering data on soil texture, weather forecasts, and pest control strategies. The app also provides a detailed farmers booklet that covers aspects such as soil preparation, planting techniques, and early pest management, aiming to improve crop yields and overall productivity.',
    },
    {
      title: 'INTERN HOURS TRACKER - WEB APPLICATION',
      conferenceName: '',
      journalName: 'Intern Hours Tracker Web Application',
      authors: 'Malazarte, Jundel', 
      link: 'https://hours-tracker-intern.vercel.app/',  
      description:
        'Intern Hours Tracker is a streamlined web application designed to efficiently track and manage On-the-Job Training (OJT) hours. Built with modern technologies, it automatically calculates progress and provides a seamless experience across desktop and mobile devices.',
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

  enablePWA: false,
};

export default CONFIG;
