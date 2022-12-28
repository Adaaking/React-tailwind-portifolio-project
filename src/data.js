// import images
import proimage from "./images/pplast2.png";
import resimage from "./images/ppic.png"
import figma from "./images/Skills/figma.png";
import js from "./images/Skills/js.png";
import reactjs from "./images/Skills/react.png";
import nodejs from "./images/Skills/node.png";
import python from "./images/Skills/python.png";
import java from "./images/Skills/java.jpeg";
import clang from "./images/Skills/clang.png";
import golang from "./images/Skills/download.png";
import flutter from "./images/Skills/flutter.png";

import services_logo1 from "./images/Services/logo1.png";
import services_logo2 from "./images/Services/logo2.png";
import services_logo3 from "./images/Services/logo3.png";

import memories from "./images/projects/memories.png"
import project0 from "./images/projects/gojjo.png";
import project1 from "./images/projects/betheme.png";
import project4 from "./images/projects/ppwebsite.png";
import project5 from "./images/projects/visitethiopia.png";
import project6 from "./images/projects/cloudm.png";

// // import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { RxResume } from "react-icons/rx";


export const content = {
  nav: [
    {
      link: "#home",
      name:"home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      name:"skills",
      icon: BiUser,
    },
    {
      link: "#services",
      name:"services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      name:"projjects",
      icon: RiProjectorLine,
    },
    {
      link: "#resume",
      name:"resume",
      icon: RxResume,
    },
    {
      link: "#contact",
      name:"contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "software Engineer",
    firstName: "Addisu",
    LastName: "Motora",
    btnText: "Hire Me",
    image: proimage,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "8+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        logo: reactjs,
      },
      {
        name: "Node js",
        logo: nodejs,
      },
      {
        name: "Flutter",
        logo: flutter,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "javascript",
        logo: js,
      },

      {
        name: "Java",
        logo: java,
      },
      {
        name: "C",
        logo: clang,
      },
      {
        name: "GoLang",
        logo: golang,
      },
      {
        name: "Python",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "Mobile development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "design",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    project_content: [
      {
        title: "gojjo Website",
        link:'https://github.com/Adaaking/Gojjo-house-react-frontend-website',
        image: project0,
      },
      {
        title: "betheme clone app",
        link:'https://adaaking.github.io/betheme-clone-react-website/',
        image: project1,
      },
      {
        title: "ABC creative agency",
        link:'https://adaaking.github.io/creative_ageny_react_website/',
        image: project4,
      },
      {
        title: "memories",
        link:'',
        image: memories,
      },
      {
        title: "visit Ethiopia",
        link:'https://adaakingtravelethiopia.netlify.app',
        image: project5
      },
     {
        title: "cloud management app",
        link:'https://addisumotora-tailwind.netlify.app/',
        image: project6,
      },
    ],
  },

  resume: {
    title: "Resume",
    subtitle: "MY RESUME",
    image:resimage,
    resume_content: [
      {
        title: "Education",
        list:[
          ' Addis Ababa University, BSC in Software Engineering',
        ]
      },
      {
        title: "Projects",
        list:[
          ' gojjo-house-rent/sell website',
          ' aau crearance system',
          ' Visit Ethiopia',
          ' memories',
          ' betheme coffee',
          ' creative agency website'
        ]
      },
      {
        title: "Skills",
        list:[
          ' Python, Java, JavaScript,  C,Go',
          ' ReactJS, Node.js, Django',
          ' Flutter,firebase',
          ' MongoDB, MYSQL',
          ' Git, Postman'
        ]
      },
      {
        title: "Awards",
        list:[
          ' React js skill badge(linkedin)',
          ' Linux os training    certificate(ODC)',
          ' object oriented programming With java(udemy.com)'
        ]
      },
      {
        title: "Languages",
        list:[
          ' Amharic - Native',
          ' English - Fluent',
          ' Afan-oromo - Native'
        ]
      },
        {
        title: "Interests",
        list:[
          ' watching movies',
          ' reading books',
          ' foot ball',
          ' pool games'
        ]
      },
    ]
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: proimage,
    image2: proimage,
    para: "Do you want a man with a well-rounded personality on your team? If so, I'm the best candidate. I have skills in backend nodejs development and frontend react js web development. I'm an excellent team player with good communication skills, and I'm open to learning new things.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "addisumotora3@gmail.com",
        icon: GrMail,
        link: "mailto:addisumotora3@gmail.com",
      },
      {
        text: "+251 961 439 185",
        icon: MdCall,
        link: "tel:+251 961 439 185",
      },
      {
        text: "my linkedin",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/addisu-motora/",
      },
      {
        text: "Github",
        icon: BsGithub,
        link: "https://github.com/Adaaking?tab=repositories",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
}