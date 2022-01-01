// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sai Charan",
  middleName: "",
  lastName: "Akkena",
  message: " Passionate about Technology and Innovation! ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/saicharan637",
    },

    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sai-charan-akkena-9a298414b/",
    },

  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable/saicharan.png"),
  imageSize: 375,
  message:
    "Hi, my name is Sai Charan. I’m a graduate of 2021 from Illinois Institute of Technology, Chicago with a degree in Computer Science. I believe Technology has the power to impact lives and make a major difference in the present world. My goal is to pursue my passion of changing the world with technology in the field of Software Engineering.",
  resume: require("../editable/resume.pdf"),
};


const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "saicharan637",
  reposLength: 10,
  specificRepos: [],
};

const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "Python", value: 75 },
    { name: "C/C++", value: 65 },
    { name: "Data Structures & Algorithms", value: 85 },
    { name: "JavaScript", value: 55 },
    { name: "Angular", value: 75 },
    { name: "React", value: 65 },
    { name: "Node.js", value: 75 },
    { name: "HTML/CSS", value: 90 },
    { name: "Flask", value: 85 },
    { name: "BootStrap", value: 75 },
    { name: "AWS", value: 70 },
    { name: "Android", value: 80 },
    { name: "J2EE", value: 85 },
    { name: "MySQL", value: 80 },
    { name: "MongoDB", value: 65 },
  ],
  softSkills: [
    { name: "Communication", value: 95 },
    { name: "Problem Solving", value: 80 },
    { name: "Goal-Oriented", value: 100 },
    { name: "Team Work/Collaboration", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Creativity", value: 90 },
    { name: "Leadership", value: 100 },
    { name: "Work Ethic", value: 100 }
  ],
};

const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you'd like to contact me about any potential postion, or if you just want to say hi, please feel free to email me at",
  email: "sakkena@hawk.iit.edu",
};


export { navBar, mainBody, about, repos, skills, getInTouch };
