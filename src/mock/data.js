import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Charudutta ',
  subtitle: 'Fullstack developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hi, I am Charudutta Chaudhari IT Sophmore from DY. Patil College of Engineering Pune. I am a full-stack developer in Javascript. I use the MERN stack for project development. Graphic designing, Basketball, and dancing are some of my hobbies. I also have a keen interest in VR and AR.',
  paragraphTwo: 'I am confident in voicing opinions and have good communication skills. I am eager to learn new things and apply them to my work. I believe Open Source is the key to the next generation of technological development and hence I Contribute to open-source software. ',
  paragraphThree: 'I am also a 4 star competitive coder @codechef',
  resume: 'https://drive.google.com/file/d/1hfOw0uMmqzI6Q3B8hpbFzeckPTyteSWF/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'Health Monitoring System',
    info: 'During Covid-19 Open Innovation Challenge we proposed a solution to tackle Covid-19 by developing a sensor tool for quartined patients.',
    info2: 'Its an IOT based device with data monitoring and visualization softwares.',
    url: 'https://drive.google.com/file/d/1h47mb7tfT7nSBLGNtyxA6YIt9NdSM5NR/view?usp=sharing',
    repo: 'https://github.com/restrictedcodex', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'ITESA Website',
    info: 'ITESA is a community of students from D.Y Patil College Of Engineering Akurdi - Information Technology Depaartment with Diverse Fields including but not limited to Technical cultural Management Etc',
    info2: 'This is the community website of ITESA',
    url: 'https://testmode-itesa.web.app/',
    repo: 'https://github.com/restrictedcodex', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Travel Website',
    info: 'A blog featuring the most famous and innovative travel bloggers and some of their best videos. ',
    info2: 'A web app made with React.js and hosted on Google Firebase',
    url: 'https://explore-trvl.web.app/',
    repo: 'https://github.com/restrictedcodex', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Restaurent App',
    info: 'A simple static website for a restaurent named the Rosa made using plain Html Css and Javascript',
    info2: '',
    url: 'https://restaurent-website-eccc8.web.app',
    repo: 'https://github.com/restrictedcodex', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'restrictedcharudutta@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/restrictedcharu',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://www.codechef.com/users/vypersky',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/charudutta-chaudhari-a980661a0/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/restrictedCodex',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
