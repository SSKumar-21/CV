const projectsData = {

    railNexus: {
        category: "AI/ML & Full Stack Development",
        title: "RailNexus",
        progress: 90,
        name: "RailNexus",
        image: "./assets/railnexus.png",
        description: "AI-powered railway maintenance planning system that prioritizes safety-critical tasks, optimizes maintenance windows, integrates weather intelligence, and dynamically reroutes trains to minimize operational disruptions.",
        visit: "https://github.com/Team-Project-122/RailSmart.git",
        github: "https://github.com/Team-Project-122/RailSmart.git",
        technologies: ["React", "Python", "FastAPI", "PostgreSQL", "AI/ML", "Graph Algorithms", "REST API"]
    },

    railSmart: {
        category: "AI/ML & Full Stack Development",
        title: "RailSmart",
        progress: 80,
        name: "RailSmart",
        image: "./assets/railsmart.png",
        description: "AI-assisted railway traffic management system that detects train conflicts, recommends explainable resolution strategies, simulates cascading delays, and applies weather-based speed restrictions using live train data.",
        visit: "https://github.com/Team-Project-122/RailSmart.git",
        github: "https://github.com/Team-Project-122/RailSmart.git",
        technologies: ["React", "Node.js", "Python", "FastAPI", "SQLite", "Socket.IO", "REST API", "Graph Algorithms"]
    },

    guardianAngelWeb: {
        category: "Full Stack Development",
        title: "Guardian Angel",
        progress: 90,
        name: "Guardian Angel",
        image: "./assets/ga.png",
        description: "AI-powered emergency response platform designed to improve personal safety through intelligent assistance, emergency support features, and a responsive web interface for faster access to critical help.",
        visit: "https://guardianangel.onrender.com",
        github: "https://github.com/SSKumar-21/GuardianAngel",
        technologies: ["React", "Node.js", "MongoDB", "AI/ML"]
    },

    weatherForecast: {
        category: "Full Stack Development",
        title: "Weather Forecast",
        progress: 90,
        name: "Weather Forecast",
        image: "./assets/weather.png",
        description: "Interactive weather forecasting application that integrates weather APIs to display current conditions and forecast information through a clean, responsive interface for convenient everyday weather monitoring.",
        visit: "https://weatherforecast-91a9.onrender.com",
        github: "https://github.com/SSKumar-21/WeatherForecast.git",
        technologies: ["JavaScript", "REST API", "CSS"]
    },

    knifeNGun: {
        category: "Full Stack Development",
        title: "KnifeNGun",
        progress: 90,
        name: "KnifeNGun",
        image: "./assets/knife.png",
        description: "Animated gaming-themed website showcasing weapon-inspired designs through interactive visual elements, creative CSS animations, and responsive web layouts that deliver an engaging browsing experience.",
        visit: "https://knifengun.vercel.app/",
        github: "https://github.com/SSKumar-21/AnimatedKinfeNGunWeb.git",
        technologies: ["HTML", "CSS", "JavaScript", "Animation"]
    },

    knifeNGunApp: {
        category: "Flutter",
        title: "KnifeNGun",
        progress: 87,
        name: "KnifeNGun",
        image: "./assets/knife.png",
        description: "Strategy-based multiplayer gaming project focused on real-time player interactions, competitive gameplay mechanics, and engaging game experiences through interactive features and dynamic user participation.",
        visit: "https://knifengun.vercel.app/",
        github: "https://github.com/SSKumar-21/KnifeNGun.git",
        technologies: ["HTML", "CSS", "JavaScript", "Animation"]
    },

    speechSync: {
        category: "Full Stack Development",
        title: "Speech Sync",
        progress: 90,
        name: "Speech Sync",
        image: "./assets/speech.png",
        description: "Browser-based speech synchronization application that uses speech technologies to support synchronized spoken content, interactive voice features, and a streamlined interface for accessible audio experiences.",
        visit: "https://speak-sync-two.vercel.app/",
        github: "https://github.com/SSKumar-21/SpeakSync.git",
        technologies: ["JavaScript", "Web Speech API"]
    },

    textToSpeech: {
        category: "Full Stack Development",
        title: "TextToSpeech",
        progress: 90,
        name: "TextToSpeech",
        image: "./assets/tts.png",
        description: "Text-to-speech web application that converts written content into spoken audio using browser speech capabilities, with playback speed controls and a simple interface for customizable listening experiences.",
        visit: "https://text-to-speech-with-speed.vercel.app/",
        github: "https://github.com/SSKumar-21/text-to-speechWithSpeed.git",
        technologies: ["JavaScript", "Web Speech API", "CSS"]
    },

    storyGame: {
        category: "Full Stack Development",
        title: "Story Game",
        progress: 90,
        name: "Story Game",
        image: "./assets/story.jpg",
        description: "Interactive story-based web game that lets users explore narrative-driven experiences, make choices, and progress through engaging storylines using dynamic content and a responsive interface.",
        visit: "https://story-game-nine.vercel.app/",
        github: "https://github.com/SSKumar-21/Story-Game.git",
        technologies: ["JavaScript", "HTML", "CSS"]
    },

    dineExpress: {
        category: "Full Stack Development",
        title: "DineExpress",
        progress: 90,
        name: "DineExpress",
        image: "./assets/dine.jpg",
        description: "Full-stack restaurant ordering platform that streamlines food browsing and online ordering through an interactive interface, API integration, and backend services designed for a convenient digital dining experience.",
        visit: "https://dine-express.vercel.app/",
        github: "https://github.com/SSKumar-21/Dine-Express.git",
        technologies: ["React", "Node.js", "REST API"]
    },

    booksopedia: {
        category: "Full Stack Development",
        title: "Booksopedia",
        progress: 90,
        name: "Booksopedia",
        image: "./assets/bookopidia.png",
        description: "Full-stack online bookstore that organizes book discovery and browsing through a responsive interface, REST API integration, and MongoDB-backed services for streamlined digital book shopping.",
        visit: "http://bookopieda.vercel.app/",
        github: "https://github.com/SSKumar-21/BOOK.git",
        technologies: ["React", "Node.js", "MongoDB", "REST API"]
    },

    guardianAngelApp: {
        category: "Flutter",
        title: "Guardian Angel",
        progress: 80,
        name: "Guardian Angel (App)",
        image: "./assets/ga.png",
        description: "Flutter-based emergency assistance application designed to support personal safety through mobile-friendly emergency features, AI-powered assistance, and Firebase integration for connected and accessible support.",
        visit: "https://github.com/SSKumar-21/AppGuardianAngel.git",
        github: "https://github.com/SSKumar-21/AppGuardianAngel.git",
        technologies: ["Flutter", "Dart", "Firebase"]
    },

    madhava: {
        category: "Flutter",
        title: "Madhava",
        progress: 80,
        name: "Madhava",
        image: "./assets/geeta.jpg",
        description: "Spiritual mobile application inspired by the Bhagavad Gita that combines AI-assisted interactions with spiritual content to help users explore teachings, reflect on life questions, and access guidance.",
        visit: "https://github.com/SSKumar-21/Geeta---APP.git",
        github: "https://github.com/SSKumar-21/Geeta---APP.git",
        technologies: ["Flutter", "Dart", "AI/ML"]
    },

    yumBook: {
        category: "Flutter",
        title: "YumBook",
        progress: 80,
        name: "YumBook",
        image: "./assets/yum.png",
        description: "Recipe discovery mobile application that integrates REST APIs to retrieve cooking ideas, helping users explore recipes and access culinary inspiration through a simple, convenient Flutter-based interface.",
        visit: "https://github.com/SSKumar-21/YumBook.git",
        github: "https://github.com/SSKumar-21/YumBook.git",
        technologies: ["Flutter", "Dart", "REST API"]
    },

    securityToolkit: {
        category: "Security",
        title: "Security Toolkit",
        progress: 70,
        name: "Security Toolkit",
        image: "./assets/cyber.png",
        description: "Cybersecurity learning platform featuring educational demonstrations of common security concepts, including SQL injection, phishing, DDoS attacks, brute-force techniques, and networking fundamentals in a practical environment.",
        visit: "https://learning-hacking-1.onrender.com/",
        github: "https://github.com/SSKumar-21/Learning-Hacking.git",
        technologies: ["SQL Injection", "Phishing", "DDoS", "Brute Force", "Networking"]
    }

};


/*==================================================
                DOM ELEMENTS
==================================================*/

const skillButtons = document.querySelectorAll(".skillButton");

const techList = document.getElementById("technologyList");

const skillTitle = document.getElementById("skillTitle");
const skillCategory = document.getElementById("skillCategory");
const skillPercentage = document.getElementById("skillPercentage");
const progressFill = document.getElementById("skillProgressFill");

const projectTitle = document.getElementById("projectTitle");
const projectImage = document.getElementById("projectImage");
const projectDescription = document.getElementById("projectDescription");

const visitProject = document.getElementById("visitProject");
const githubProject = document.getElementById("githubProject");


/*==================================================
                LOAD PROJECT DETAILS
==================================================*/

function loadProjectDetails(project){

    projectTitle.textContent = project.name;

    projectImage.src = project.image;

    projectImage.alt = project.name;

    projectDescription.textContent = project.description;

    visitProject.href = project.visit;

    githubProject.href = project.github;

}



/*==================================================
            LOAD TECHNOLOGY TAGS
==================================================*/

function loadTechnologies(project){

    techList.innerHTML = "";

    project.technologies.forEach((tech)=>{

        const span = document.createElement("span");

        span.textContent = tech;

        techList.appendChild(span);

    });

}



/*==================================================
                LOAD PROJECT (MAIN)
==================================================*/

function loadProject(projectID){

    const project = projectsData[projectID];

    if(!project) return;


    /*==========================
            LEFT PANEL
    ==========================*/

    skillTitle.textContent = project.title;

    skillCategory.textContent = project.category;

    skillPercentage.textContent = project.progress + "%";

    progressFill.style.width = project.progress + "%";


    /*==========================
        TECHNOLOGY TAGS (RIGHT TOP)
    ==========================*/

    loadTechnologies(project);


    /*==========================
        PROJECT CARD (RIGHT BOTTOM)
    ==========================*/

    loadProjectDetails(project);

}



/*==================================================
            PROJECT BUTTON CLICK
==================================================*/

skillButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        skillButtons.forEach(btn=>{

            btn.classList.remove("activeSkill");

        });


        button.classList.add("activeSkill");


        loadProject(button.dataset.project);

    });

});



/*==================================================
                DEFAULT
==================================================*/

loadProject("railNexus");
