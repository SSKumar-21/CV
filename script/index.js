const experiences = {

    google:{

        type:"Professional Experience",

        title:"Android Development Intern",

        company:"Google for Developers",

        description:
        "Built Android applications using Java, Material Design and REST APIs while following modern Android development best practices.",

        tags:[
            "Android",
            "Java",
            "REST API",
            "Material UI",
            "Google"
        ],

        duration:"Jul 2024 - Sep 2024",

        progress:100,

        role:"Intern",

        domain:"Android",

        year:"2024",

        logo:"./assets/google.png"

    },


    ISA:{

        type:"Professional Training",

        title:"Artificial Intelligence & Machine Learning Trainee",

        company:"India Space Academy (ISA)",

        description:
        "Completed AI & Machine Learning training focused on intelligent systems and their applications in space exploration.",

        tags:[
            "Artificial Intelligence",
            "Machine Learning",
            "Space Technology",
            "Python",
            "AI Applications"
        ],

        duration:"Feb 2026",

        progress:100,

        role:"Trainee",

        domain:"Artificial Intelligence",

        year:"2026",

        logo:"./assets/isa.png"

    },


    servicenow:{

        type:"Professional Experience",

        title:"Virtual Internship",

        company:"ServiceNow × AICTE × SmartBridge",

        description:
        "Completed hands-on training in ServiceNow Administration, workflow automation and enterprise digital solutions.",

        tags:[
            "ServiceNow",
            "Workflow",
            "AI",
            "Administration",
            "Reports"
        ],

        duration:"May 2026",

        progress:100,

        role:"Intern",

        domain:"Enterprise",

        year:"2026",

        logo:"./assets/serviceNow.png"

    },


    booksopedia:{

        type:"Professional Experience",

        title:"Web Developer",

        company:"Booksopedia (Freelancer)",

        description:
        "Developed bookstore web features, integrated REST APIs and deployed backend services for improved user experience.",

        tags:[
            "Node.js",
            "REST API",
            "Render",
            "Express",
            "JavaScript"
        ],

        duration:"Jan 2025 - Apr 2025",

        progress:100,

        role:"Freelancer",

        domain:"Web",

        year:"2025",

        logo:"./assets/bookopidia.png"

    },


    booksaarika:{

        type:"Professional Experience",

        title:"Content Creator & Video Editor",

        company:"BookswithAartika",

        description:
        "Created engaging promotional videos and social media content using creative storytelling and video editing.",

        tags:[
            "Editing",
            "Content",
            "Premiere",
            "Creative",
            "Social Media"
        ],

        duration:"Nov 2025 - Present",

        progress:100,

        role:"Freelancer",

        domain:"Media",

        year:"Present",

        logo:"./assets/ba.jpg",


    },


    ChiefProgrammer:{

        type:"Leadership",

        title:"Chief Programmer",

        company:"Sanganak Shila Society, AITM",

        description:
        "Led technical events, mentored students in programming and coordinated collaborative software development activities.",

        tags:[
            "Leadership",
            "Mentoring",
            "Programming",
            "Projects",
            "Events"
        ],

        duration:"2025 - Present",

        progress:100,

        role:"Lead",

        domain:"Technical Society",

        year:"2025",

        logo:"./assets/axis.jpg"

    },


    BinaryBrains:{

        type:"Leadership",

        title:"Organizer",

        company:"Binary Brains Coding Society",

        description:
        "Organized coding competitions, peer learning sessions and technical events to promote programming skills.",

        tags:[
            "Coding",
            "Community",
            "Events",
            "Leadership",
            "DSA"
        ],

        duration:"Jul 2024 - Mar 2025",

        progress:100,

        role:"Organizer",

        domain:"Coding Society",

        year:"2024",

        logo:"./assets/bb.png"

    },


    Ecell:{

        type:"Leadership",

        title:"Head of Cyber Innovation",

        company:"E-Cell, AITM",

        description:
        "Lead the Cyber Innovation Wing by organizing cybersecurity workshops and mentoring students in ethical hacking.",

        tags:[
            "Cyber Security",
            "Leadership",
            "Workshops",
            "Ethical Hacking",
            "Mentorship"
        ],

        duration:"2026 - Present",

        progress:100,

        role:"Head",

        domain:"Cyber Security",

        year:"2026",

        logo:"./assets/ecell.png"

    }

};
const navButtons=document.querySelectorAll(".navItem");

function loadExperience(id){

    const exp=experiences[id];

    if(!exp) return;

    document.getElementById("experienceType").textContent=exp.type;

    document.getElementById("experienceTitle").textContent=exp.title;

    document.getElementById("experienceCompany").textContent=exp.company;

    document.getElementById("experienceDescription").textContent=exp.description;

    document.getElementById("experienceDuration").textContent=exp.duration;

    document.getElementById("experienceLogoImg").src = exp.logo;

    document.getElementById("experienceStat1").textContent=exp.role;

    document.getElementById("experienceStat2").textContent=exp.domain;

    document.getElementById("experienceStat3").textContent=exp.year;

    document.getElementById("progressBar").style.width=exp.progress+"%";

    const tags=document.getElementById("experienceTags");

    tags.innerHTML="";

    exp.tags.forEach(tag=>{

        const span=document.createElement("span");

        span.textContent=tag;

        tags.appendChild(span);

    });

}

navButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        navButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        button.classList.add("active");

        loadExperience(button.dataset.id);

    });

});

loadExperience("google");
