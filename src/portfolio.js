/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sharen Rajenthiran",
  title: "Hi, all, I'm Sharen Rajenthiran",
  subTitle: emoji(
    "I've always been attracted to solving problems and real-world challenges. Programming is one of the best ways to achieve this😁! Currently seeking opportunities in Software Engineering, Embedded Software Engineering, AI Engineering, Machine Learning Engineering, and similar roles for a career transition to continuously challenge myself intellectually and commit to building robust and intricate applications for business and research problems."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Sharen-Rajenthiran",
  linkedin: "https://www.linkedin.com/in/sharen-rajenthiran/",
  gmail: "sharenrajenthiran@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@sharenrajenthiran",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I can do",
  subTitle: "Currently exploring these awesome technologies!",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications."
    ),
    emoji("⚡ Design robust algorithms and maintainable applications."),
    emoji(
      "⚡ Integration of AI and Machine Learning algorithms in your business challenges!"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "",
      fontAwesomeClassname: ""
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "",
      fontAwesomeClassname: ""
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universiti Teknologi Malaysia (UTM)",
      logo: require("./assets/images/utm.png"),
      subHeader: "Bachelor of Science in Physics",
      duration: "2019 - November 2023 (4 years)",
      desc: "Awarded Best Undergraduate Project for Final-Year Project titled A Mathematical Approach to Nuclear Matter Problem and Nuclear Geometry.",
      descBullets: [
        "Coursework: Algorithms, Computation, Data Analysis, Statistics, Quantum Physics, Material Science, Semiconductors, Electronics.",
        "Graduated with First-Class Honours with GPA of 3.93/4.00."
      ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Python Software Engineer (AI Engineer)",
      company: "Etiqa Takaful",
      companylogo: require("./assets/images/etiqa.jpg"),
      date: "February - June 2024 (5 months)",
      desc: "",
      descBullets: [
        "Designed algorithms to extract top customer feedback and inquiries using top models for data analysis.",
        "Worked on deploying AI models into UAT and production environments, ensuring scalability, and real-time responsiveness.",
        "Design, develop, and deploy AI system components like Chatbots and API services.", 
        "Stay updated on the latest AI and machine learning models to solve complex business problems."
      ]
    },
    {
      role: "Research Intern in Theoretical Quantum Optics",
      company: "Universiti Malaya",
      companylogo: require("./assets/images/University_of_Malaya_Logo.jpg"),
      date: "July - October 2022 (3 Months)",
      desc: "To gain knowledge and understand theoretical frameworks regarding Quantum information, Quantum Computing, and Quantum Algorithms."
    },
    {
      role: "Administrator cum Tutor",
      company: "Qalam Genius",
      companylogo: require("./assets/images/world-education-logo-design-vector.jpg"),
      date: "December 2018 - June 2019 (7 Months)",
      desc: "I taught kids from all ages Science, Mathematics, and English while working as an administrator."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Highlight Projects",
  subtitle: "Some projects I worked on to build my understanding and skills in using full-stack technologies.",
  projects: [
    {
      image: require("./assets/images/quantum_circuit_icon_1.png"),
      projectName: "A Simple Quantum Circuit Simulator",
      projectDesc: "This project allows users to select the number of qubits (max is 5) and apply Gate operations on them mimicking a quantum circuit.",
      footerLink: [
        {
          name: "Visit repository",
          url: "https://github.com/Sharen-Rajenthiran/quantum-simulator"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/pathfinding_icon_1.png"),
      projectName: "Explore All Paths Visualizer",
      projectDesc: "This project is a visual representation of exploring all nodes and computing the distances between the nodes. It is done through a brute-force approach to visualize the process.",
      footerLink: [
        {
          name: "Visit repository",
          url: "https://github.com/Sharen-Rajenthiran/explore-all-paths-visualizer"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Awards are shown here!",

  achievementsCards: [
    {
      title: "Best Undergraduate Project Award",
      subtitle:
        "An award given to the best project for the nuclear panel for undergraduate students.",
      image: require("./assets/images/undergraduate_award.png"),
      imageAlt: "undergraduate_project_award",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Gold Medalist",
      subtitle:
        "Given a gold medal award for scoring a high GPA.",
      image: require("./assets/images/gold_medal_undergraduate.png"),
      imageAlt: "undergraduate_gold_award",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "JavaScript Data Structures and Algorithms",
      subtitle: "Completed Certifcation from FreeCodeCamp",
      image: require("./assets/images/JavaScript Algorithms and Data Structures_FreeCodeCamp Sharen Rajenthiran.png"),
      imageAlt: "javascript_certificate",
      footerLink: [
        {name: "Certification", url: "https://www.freecodecamp.org/certification/sharenrajenthiran/javascript-algorithms-and-data-structures-v8"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }, 
    {
      title: "Scientific Computing with Python",
      subtitle: "Completed Certifcation from FreeCodeCamp",
      image: require("./assets/images/Scientific Computing with Python_FreeCodeCamp Sharen Rajenthiran.png"),
      imageAlt: "scientific_computing_certificate",
      footerLink: [
        {name: "Certification", url: "https://www.freecodecamp.org/certification/sharenrajenthiran/scientific-computing-with-python-v7"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }, 
    {
      title: "Data Analysis with Python",
      subtitle: "Completed Certifcation from FreeCodeCamp",
      image: require("./assets/images/Data Analysis with Python_FreeCodeCamp Sharen Rajenthiran.png"),
      imageAlt: "data_analysis_python_certificate",
      footerLink: [
        {name: "Certification", url: "https://www.freecodecamp.org/certification/sharenrajenthiran/data-analysis-with-python-v7"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Variational Algorithm Design",
      subtitle: "Completed Certifcation from IBM",
      image: require("./assets/images/Variational Algorithm Design_IBM_Sharen Rajenthiran.png"),
      imageAlt: "variational_algorithm_certificate",
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/d04125f5-c5c2-42a9-819b-cb3d31d10394/linked_in_profile"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Basics of Quantum Information Science",
      subtitle: "Completed Certifcation from IBM",
      image: require("./assets/images/Basics of Quantum Information_IBM_Sharen Rajenthiran.png"),
      imageAlt: "quantum_information_science_certificate",
      footerLink: [
        {name: "Certification", url: "https://www.credly.com/badges/a2abda51-0d76-461f-8732-8e1157cd81cf/linked_in_profile"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "PLC Fundamentals",
      subtitle: "Completed Certifcation from PLC Dojo",
      image: require("./assets/images/PLC_Fundamentals_Level_I_Sharen_Rajenthiran_PLC Dojo_Certificate_screenshot.png"),
      imageAlt: "plc_dojo_certificate",
      footerLink: [
        {name: "Certification", url: "https://www.plcdojo.com/certificates/frqbzsvkg0"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to say hi? My inbox is open for all.",
  number: "+60177292191",
  email_address: "sharenrajenthiran@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
