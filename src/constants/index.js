const navLinks = [
    {
        name: "Experience",
        link: "#experience",
    },

    {
        name: "Projects",
        link: "#work",
    },

    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Education",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 5, suffix: "+", label: "Years in Software Industry" },
    { value: 8, suffix: "+", label: "Technical Projects Delivered" },
    { value: 4, suffix: "", label: "Organizations Contributed To" },
    { value: 3, suffix: "", label: "Research Presentations & Publications" },

];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },


];

const abilities = [
    {
        imgPath: "/images/code.webp",
        title: "Clean & Efficient Code",
        desc: "Writing maintainable, scalable code with best practices and thoughtful structure.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Collaborative & Communicative",
        desc: "Working seamlessly with teams and always open to constructive feedback and ideas.",
    },
    {
        imgPath: "/images/time.png",
        title: "Timely Execution",
        desc: "Meeting deadlines with reliable and well-tested solutions, even under pressure.",
    },
];


const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Software Development Intern",
        date: "May 2025 – Present",
        responsibilities: [
            "Engineered personalized dashboard components using React, enhancing user engagement through dynamic quick links and tailored notifications.",
            "Integrated Tapis APIs to fetch and display user-specific research data in real-time, increasing dashboard utility.",
            "Leveraged AI-driven analytics to monitor user behavior, enabling intelligent content recommendations and optimized user experiences.",
        ],
    },
    {
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Graduate Teaching Assistant",
        date: "June 2024 – Present",
        responsibilities: [
            "Facilitated student success in full-stack development by mentoring Agile workflows, managing sprints, and guiding feature releases.",
            "Conducted workshops on Git, Docker, CI/CD, and Agile methodologies, empowering students to manage real-world project lifecycles.",
        ],
    },
    {
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "Associate Engineer",
        date: "May 2019 – October 2022",
        responsibilities: [
            "Integrated AWS with over 200 IBMi systems for SYSCO, enabling scalable hybrid cloud deployments and accelerating cloud migration.",
            "Automated server health checks and backup processes using Python and Git, reducing manual effort by 30%.",
            "Optimized AS400 SQL queries to enhance data access performance and drove system upgrades to meet compliance and reliability standards.",
        ],
    },
    {
        imgPath: "/images/exp4.jpg", // reused image
        logoPath: "/images/logo4.jpg", // reused logo
        title: "Associate Software Engineer",
        date: "December 2018 – April 2019",
        responsibilities: [
            "Built and maintained web applications using JavaScript, ASP.NET, and Python (Flask/Django), improving overall platform functionality.",
            "Developed responsive user interfaces across devices using modern front-end frameworks.",
            "Collaborated in agile teams to debug, test, and deploy features, enhancing product reliability and user satisfaction.",
        ],
    },
];


const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
