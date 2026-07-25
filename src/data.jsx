import { IoLogoCss3, IoLogoFigma, IoLogoGithub, IoLogoHtml5, IoLogoReact, IoLogoSass, IoLogoWhatsapp, IoChatboxEllipsesOutline, IoHomeOutline  } from "react-icons/io5";
import { AiOutlineJavaScript, AiOutlineUser } from "react-icons/ai";
import { SiGit, SiGmail, SiFrontendmentor, SiTailwindcss, SiChakraui, SiSlideshare } from "react-icons/si";
import { FaLinkedinIn, FaFolderOpen } from "react-icons/fa6";

export const navLinks = [
    { id: 'home', icon: IoHomeOutline, alt: 'Home', name: 'Home' },
    { id: 'about', icon: AiOutlineUser, alt: 'About', name: 'About' },
    { id: 'projects', icon: FaFolderOpen, alt: 'Project', name: 'Project' },
    { id: 'skills', icon: SiSlideshare, alt: 'Skills', name: 'Skills' },
    { id: 'contact', icon: IoChatboxEllipsesOutline, alt: 'Contact', name: 'Contact' },
];


export const skillSet = [
    { id: 1, name: "HTML5", icon: IoLogoHtml5, color:"#E3646E" },
    { id: 2, name: "CSS3", icon: IoLogoCss3, color:"#1572B6"  },
    { id: 3, name: "Sass", icon: IoLogoSass, color:"#CC6699" },
    { id: 4,name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { id: 5, name: "JavaScript", icon: AiOutlineJavaScript, color:"#F7DF1E" },
    { id: 6, name: "ReactJs", icon: IoLogoReact, color: "#61DAFB"},
    { id: 7, name: "Chakra UI", icon: SiChakraui, color: "#319795"},
    { id: 8, name: "Git", icon: SiGit, color: "#e64a19"},
    { id: 9, name: "Github", icon: IoLogoGithub, color: "#faf1f1"},
    { id: 10, name: "Figma", icon: IoLogoFigma, color:'#F24E1E' }
]; 


export const socialIcons = [
    {
        id: 'Github',
        icon: IoLogoGithub,
        href: 'https://github.com/rhodalewi',
        text: 'Github',
        style: {bg: '#f9fafb', rounded: 'full', color: '#101828' }
    },
    {
        id: 'Email',
        icon: SiGmail,
        href: 'mailto:rhodalewi@gmail.com',
        text: 'rhodalewi@gmail.com',
        style: {bg: '#fb2c36', rounded: 'full'}
    },
    {
        id: 'linkedin',
        icon: FaLinkedinIn,
        href: 'https://www.linkedin.com/in/rhodalewi',
        text: 'Linkedin',
        style: {bg: '#2b7fff', rounded: 'sm'}
    },
    {
        id: 'FrontendMentor',
        icon: SiFrontendmentor,
        href: 'https://www.frontendmentor.io/profile/rhodalewi',
        text: 'Frontend_Mentor/rhodalewi',
        style: {bg: '#2a6f9e', rounded: 'full'} 
    },
    {
        id: 'Whatsapp',
        icon: IoLogoWhatsapp,
        href: 'https://wa.me/2348027581287',
        text: 'Whatsapp',
        tel: 'tel:+2348027581287',
        text2: '+234 802 758 1287',
        style: {bg: '#00c950', rounded: 'full'}
    }
];


export const projects = [
    {
        id: 1,
        title: "MediCare",
        description: "A responsive healthcare website with modern design and interactive features.",
        languages: ['ReactJs', 'Tailwind CSS', 'NodeJs', 'ExpressJs', 'MySQL'],
        image: ["/MediCare.png"],
        livelink: "https://telemedicine-website-three.vercel.app/",
        codelink: "https://github.com/rhodalewi/MediCare"
    },
    
    {
        id: 2,
        title: "REST Countries API",
        description: "Browse country data with light/dark mode toggle.",
        languages: ['ReactJs', 'CSS'],
        image: ["/Rest-Country-Project.jpg"],
        livelink: 'https://country-explorer-psi-seven.vercel.app/',
        codelink: 'https://github.com/rhodalewi/Country_Explorer',
    },

    {
        id: 3,
        title: "Multi-Step Form",
        description: "A sleek 4-step form with validation and progress tracking.",
        languages: ['ReactJs', 'TailwindCSS'],
        image: [
            "/MultiStep-form/step-1.jpg",
            "/MultiStep-form/step-2-monthly.jpg",
            "/MultiStep-form/step-2-yearly.jpg",
            "/MultiStep-form/step-3-monthly.jpg",
            "/MultiStep-form/step-3-yearly.jpg",
            "/MultiStep-form/step-4-monthly.jpg",
            "/MultiStep-form/step-4-yearly.jpg",
            "/MultiStep-form/step-5.jpg"
        ],
        livelink: "https://multi-step-form-xi-kohl.vercel.app/",
        codelink: "https://github.com/rhodalewi/Multi-Step-Form"
    },

    {
        id: 4,
        title: "Fylo Landing Page",
        description: "A modern landing page for a fictional tech company.",
        languages: ['HTML', 'SCSS', 'Javascript'],
        image: ["/fylo-landing-page.png"],
        livelink: 'https://rhodalewi.github.io/Fylo_landing_page/',
        codelink: 'https://github.com/rhodalewi/Fylo_landing_page'
    },

    {
        id: 5,
        title: "E-Commerce Page",
        description: "A responsive e-commerce product page with interactive features.",
        languages: ['HTML', 'CSS', 'Javascript'],
        image: [
            "/ECommerce-design1.jpg",
            "/ECommerce-design2.jpg"
        ],
        livelink: "https://rhodalewi.github.io/ECommerce-Product-Page/",
        codelink: "https://github.com/rhodalewi/ECommerce-Product-Page"
    },

    {
        id: 6,
        title: "News Homepage",
        description: "A modern news homepage layout with responsive design.",
        languages: ['HTML', 'CSS', 'Javascript'],
        image: ["/News-Homepage.jpg"],
        livelink: "https://rhodalewi.github.io/News_Homepage_Main/",
        codelink: "https://github.com/rhodalewi/News_Homepage_Main"
    }
];