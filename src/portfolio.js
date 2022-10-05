/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Julien Marchadier Portfolio",
  description:
    "I'm a data scientist student. I mainly code with Python and occasionally with R. I develop and maintain my own Hadoop Cluster. I also create a very basic blockchain to understand how it works. I'm interested in dev-ops solutions (Docker, Github Actions...)",
  og: {
    title: "Julien Marchadier Portfolio",
    type: "website",
    url: "http://juju312000.github.io",
  },
};

//Home Page
const greeting = {
  title: "Julien Marchadier",
  logo_name: "JulienMarchadier",
  nickname: "Data scientist",
  subTitle:
    "I'm a data scientist student. I mainly code with Python and occasionally with R. I develop and maintain my own Hadoop Cluster. I also create a very basic blockchain to understand how it works. I'm interested in dev-ops solutions (Docker, Github Actions...)",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/juju312000",
  githubProfile: "https://github.com/juju312000",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/juju312000",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jmarchadier",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:marchadier.julien@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/julien_marchadier/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Architect",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developed an ETL (Extract Transform Load) with Apache Hadoop, Apache Sqoop and Microsoft Power BI in parallel of a RDBMS (Relational DataBase Management System)",
        "⚡ Implemented and maintained the architecture and integrity of a Hadoop cluster",
        "⚡ Build dashbaords for Business Inteligence base on dirty data",
      ],
      softwareSkills: [
        {
          skillName: "Hadoop",
          fontAwesomeClassname: "logos:hadoop",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Data Base",
          fontAwesomeClassname: "raphael:db",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Artificial Intelligence",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed an AI for the PAC-MAN game in python",
        "⚡ Created a fire prediction system using AI and data analysis on several sensors in Python",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "carbon:logo-r-script",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Dashboard",
          fontAwesomeClassname: "carbon:dashboard",
          style: {
            color: "#CC6699",
          },
        },
      ],
    },
    /*{
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },*/
    /*{
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },*/
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
        ]
};

const degrees = {
  degrees: [
    {
      title: "University of California, Irvine",
      subtitle: "ACP in data science",
      logo_path: "UCI_logo.png",
      alt_name: "uci",
      duration: "2022 - Present",
      descriptions: [
        "⚡ Accelerated Certificate Program in Data Science.",
        "⚡ Courses in Python, Maths, Statistics, Probabilities, Data science, Big data, Advanced Visualization.",
      ],
      website_link: "https://uci.edu",
    },
    {
      title: "École Supérieure d'Ingénieurs en Electrotechnique et Electronique Paris",
      subtitle: "Master in enginering",
      logo_path: "esiee_logo.png",
      alt_name: "esiee",
      duration: "2018 - Present",
      descriptions: [
        "⚡ Electronics - Computer Science school",
        "⚡ Currently In fifth of a five-year combined B.SC -M.SC in Engineering Specialized in Data Science and Artificial Intelligence.",
      ],
      website_link: "https://www.esiee.fr",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Toeic",
      subtitle: "Toeic",
      logo_path: "toeic.png",
      certificate_link:
        "https://www.ets.org/toeic.html",
      alt_name: "toeic",
      color_code: "#F5F5F5",
    },
    {
      title: "Projet Volatire",
      subtitle: "Projet Voltaire",
      logo_path: "voltaire.png",
      certificate_link:
        "https://www.projet-voltaire.fr",
      alt_name: "volatire",
      color_code: "#8C151599",
    },
    {
      title: "Projet Volatire",
      subtitle: "Projet Voltaire",
      logo_path: "voltaire.png",
      certificate_link:
        "https://www.projet-voltaire.fr",
      alt_name: "volatire",
      color_code: "#C1C1C1",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "Here you can find all the experiences that shaped the man I am today",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Scientist - Data Architect Intern",
          company: "Prooftag",
          company_url: "https://prooftag.net/",
          logo_path: "prooftag.png",
          duration: "May 2022 - Aug 2022",
          location: "Montauban, France",
          description:
            "Developed an ETL (Extract Tool Load) with Apache Hadoop, Apache Sqoop and Microsoft Power BI in parallel of a RDBMS (Relational DataBase Management System) - Implemented and maintained the architecture and integrity of a Hadoop cluster - Created Dashboards on Power BI",
          color: "#000000",
        },
        {
          title: "IOT Product",
          company: "BEENETIC SYSTEMS",
          company_url:
            "https://www.beenetic.fr/index.php/fr/",
          logo_path: "beenetic.jpg",
          duration: "Sep 2020 - Oct 2020",
          location: "Toulouse, France",
          description:
            "Developed and created a Bluetooth Low Energy BLE communication structure between an IOS device and a Raspberry - Integrated pressure sensors via I2C bus - Developed a BLE interface, in C++, on an ESP-32 micro controller",
          color: "#0071C5",
        },
        {
          title: "First step in engineering",
          company: "EXPLEO",
          company_url:
            "https://www.expleo.com/",
          logo_path: "expleo.png",
          duration: "July 20219 - Aug 2019",
          location: "Toulouse, France",
          description:
            "Realised a benchmark of dashboard tools and synthesis reports",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Student Office",
          company: "BDE EIEE Paris",
          company_url: "https://bde.esiee.fr",
          logo_path: "xanthos.png",
          duration: "September 2020 - April 2022",
          location: "Paris, France",
          description:
            "ESIEE Student Union Treasurer : responsable of 250.000€ budget + Liaising with school administration + Requires strong communication & negotiation skills",
          color: "#DAA520",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "LinkedIn",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://www.linkedin.com/in/jmarchadier",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Tournefeuille 31170, France",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps?q=tournefeuille",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+33 7 81 12 24 16",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
