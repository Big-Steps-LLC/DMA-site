import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import spotifyicon from "../../assets/icons/spotifyicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    de: "Hi, ich bin Alpay",
    en: "Take your first Big Step ",
  },
  subtitle: " ",
  description: {
    de: "Ich bin Alpay, ein Fullstack-Entwickler mit dem Ziel, meine Karriere voranzutreiben und an inspirierenden Projekten teilzunehmen. Hier präsentiere ich meine Arbeiten und meine Leidenschaft für die Webentwicklung. Lassen Sie uns gemeinsam digitale Lösungen gestalten und die Zukunft formen!",
    en: "Boost your business's online presence with Big Steps, your gateway to cutting-edge digital marketing. We specialize in tailored SEO, social media marketing, and comprehensive digital strategies to elevate your brand and drive results. Partner with us for a journey towards unparalleled digital success!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Kontaktiere mich",
        en: "Contact Us",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Pricing",
      label: {
        de: "Meine Projekte",
        en: "Examples",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Starter Plan",
    price: "$99/month",
    description:
      "Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.",
    description_EN:
      "Kickstart your digital marketing journey with our Starter Plan. This plan is perfect for small businesses looking to establish their online presence and reach a wider audience. With the Starter Plan, you'll get access to essential digital marketing services to boost your business.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      { name: "Canva", icon: canvaicon },
      { name: "Netlify", icon: netlifyicon },
      { name: "Trello", icon: trelloicon },
    ],
    image: tastyMockup,
    deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Normal Plan",
    price: "$199/month",
    description:
      "Upgrade to our Normal Plan for comprehensive digital marketing solutions. Ideal for businesses seeking substantial growth and increased online visibility. With the Normal Plan, you'll access advanced marketing strategies and personalized support.",
    description_EN:
      "Upgrade to our Normal Plan for comprehensive digital marketing solutions. Ideal for businesses seeking substantial growth and increased online visibility. With the Normal Plan, you'll access advanced marketing strategies and personalized support.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Spotify Api", icon: spotifyicon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://silentmoon-grpw.onrender.com/",
    githuburl:
      "https://github.com/AlpayC/Fullstack_Abschlussprojekt_SilentMoon",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  
  {
    title: "Unlimited Plan",
    price: "$499/month",
    description:
      "Upgrade to our Unlimited Plan for premium digital marketing solutions. Perfect for ambitious businesses looking to dominate their online presence. With the Unlimited Plan, you'll enjoy all the benefits of the Normal Plan plus exclusive features and priority support.",
    description_EN:
      "Upgrade to our Unlimited Plan for premium digital marketing solutions. Perfect for ambitious businesses looking to dominate their online presence. With the Unlimited Plan, you'll enjoy all the benefits of the Normal Plan plus exclusive features and priority support.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
      { name: "Trello", icon: trelloicon },
    ],
    image: instorMockup,
    deploymenturl: "https://mern-haushaltsbuch.onrender.com/",
    githuburl: "https://github.com/AlpayC/Furniture_MERN",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  
] as const;

export const liveTickerData = {
  content: {
    de: "Weitere Projekte auf Github",
    en: "Get started now!",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Website Development",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#00008B",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#D3D3D3",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Business Planning",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#00008B" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#D3D3D3" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Marketing Tools",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#00008B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#D3D3D3",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Tools", hash: "#skills", icon: GoStack },
  { de: "Projekte", en: "Pricing", hash: "#projects", icon: GoProject },
  { de: "Über mich", en: "About Us", hash: "#about-me", icon: GoPerson },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:myemail@com",
  text: "myemail@com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/alpay/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/AlpayC",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:myemail@com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
    en: `"Help your business unlock the power of the digital world."`,
    author: "Big Step Solutions",
  },
  {
    de: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"Transform your business with the power of code – unleash limitless opportunities online"`,
  },
] as const;

export const aboutMeData = {
  title: "Über mich",
  title_EN: "About Us",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "Here is some customer progress",
  paragraphs_DE: [
    {
      title: "Die Schaltkreise meines Herzens",
      description:
        "Wenn ich nicht in der digitalen Welt unterwegs bin, durchstreife ich die faszinierende Welt der Technik und Hardware. Schaltkreise und Lötstellen sind für mich wie Puzzleteile eines aufregenden Abenteuers.",
      icon: hardwareicon,
    },
    {
      title: "Auf der Überholspur des Lebens",
      description:
        "Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Autos sind meine Leidenschaft, und ich genieße es, mit PS-starken Maschinen auf unbekannten Straßen unterwegs zu sein.",
      icon: caricon,
    },
    {
      title: "Entdeckungsfreude als Lebensmotto",
      description:
        "Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "Revolutionizing Our Digital Presence",
      description:
        "",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Kontakt",
    en: "Contact",
  },
  description: {
    de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Step 1: Fill out this form for personalized digital marketing plan",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Deine E-Mail Adresse",
        en: "E-Mail",
      },
      type: "email",
      validation: {
        de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Deine Betreff",
        en: "Company Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Give us a detailed discription of your company",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Ich stimme zu, dass Alpay meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
