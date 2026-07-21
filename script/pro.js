

// const skillsData = {

//     web:{

//         category:"Full Stack Development",
    
//         title:"Web Development",
    
//         progress:90,
    
//         projects:[
    
//             {
    
//                 name:"Guardian Angel",
    
//                 image:"./assets/ga.png",
    
//                 description:"Emergency response platform with AI powered assistance.",
    
//                 visit:"https://guardianangel.onrender.com",
    
//                 github:"https://github.com/SSKumar-21/GuardianAngel"
    
//             },
    
//             {
    
//                 name:"Weather Forecast",
    
//                 image:"./assets/weather.png",
    
//                 description:"Modern weather forecasting web application.",
    
//                 visit:"https://weatherforecast-91a9.onrender.com",
    
//                 github:"https://github.com/SSKumar-21/WeatherForecast.git"
    
//             },
    
//             {
    
//                 name:"KnifeNGun",
    
//                 image:"./assets/knife.png",
    
//                 description:"Gaming website for weapons showcase.",
                
//                 visit:"https://knifengun.vercel.app/",
    
//                 github:"https://github.com/SSKumar-21/AnimatedKinfeNGunWeb.git"
    
//             },
    
//             {
    
//                 name:"Speech Sync",
    
//                 image:"./assets/speech.png",
    
//                 description:"Speech synchronization application.",
    
//                 visit:"https://speak-sync-two.vercel.app/",
    
//                 github:"https://github.com/SSKumar-21/SpeakSync.git"
    
//             },
    
//             {
    
//                 name:"TextToSpeech",
    
//                 image:"./assets/tts.png",
    
//                 description:"Convert text into natural speech.",
    
//                 visit:"https://text-to-speech-with-speed.vercel.app/",
    
//                 github:"https://github.com/SSKumar-21/text-to-speechWithSpeed.git"
    
//             },
    
//             {
    
//                 name:"Story Game",
    
//                 image:"./assets/story.jpg",
    
//                 description:"Interactive story based web game.",
    
//                 visit:"https://story-game-nine.vercel.app/",
    
//                 github:"https://github.com/SSKumar-21/Story-Game.git"
    
//             },
    
//             {
    
//                 name:"DineExpress",
    
//                 image:"./assets/dine.jpg",
    
//                 description:"Restaurant ordering platform.",
    
//                 visit:"https://dine-express.vercel.app/",
    
//                 github:"https://github.com/SSKumar-21/Dine-Express.git"
    
//             },
    
//             {
    
//                 name:"Booksopedia",
    
//                 image:"./assets/bookopidia.png",
    
//                 description:"Online bookstore with REST APIs and secure backend.",
    
//                 visit:"http://bookopieda.vercel.app/",
    
//                 github:"https://github.com/SSKumar-21/BOOK.git"
    
//             }
    
//         ]
    
//     },



//     android:{

//         category:"Flutter",

//         title:"Android Development",

//         progress:80,

//         projects:[

//             {

//                 name:"Guardian Angel",

//                 image:"./assets/ga.png",

//                 description:"Emergency response platform with AI powered assistance.",

//                 visit:"https://github.com/SSKumar-21/AppGuardianAngel.git",

//                 github:"https://github.com/SSKumar-21/AppGuardianAngel.git"

//             },

//             {

//                 name:" Madhava",

//                 image:"./assets/geeta.jpg",

//                 description:"spiritual AI companion inspired by the Bhagavad Gita.",

//                 visit:"https://github.com/SSKumar-21/Geeta---APP.git",

//                 github:"https://github.com/SSKumar-21/Geeta---APP.git"

//             }
//             ,
//             {

//                 name:"YumBook",

//                 image:"./assets/yum.png",

//                 description:"A recipe book calling the API.",

//                 visit:"https://github.com/SSKumar-21/YumBook.git",

//                 github:"https://github.com/SSKumar-21/YumBook.git"

//             }

//         ]

//     },


//     cyber:{

//         category:"Security",

//         title:"Cyber Security",

//         progress:70,

//         technologies:[

//             "SQL Injection",

//             "Phishing",

//             "DDoS",

//             "Brute Force",

//             "Networking"

//         ],

//         projects:[

//             {

//                 name:"Security Toolkit",

//                 image:"./assets/cyber.png",

//                 description:"Collection of cyber security learning projects.",

//                 visit:"#",

//                 github:"#"

//             }

//         ]

//     }

// };


// /*==================================================
//                 DOM ELEMENTS
// ==================================================*/

// const skillButtons = document.querySelectorAll(".skillButton");

// const techList = document.getElementById("technologyList");

// const skillTitle = document.getElementById("skillTitle");
// const skillCategory = document.getElementById("skillCategory");
// const skillPercentage = document.getElementById("skillPercentage");
// const progressFill = document.getElementById("skillProgressFill");

// const projectTitle = document.getElementById("projectTitle");
// const projectImage = document.getElementById("projectImage");
// const projectDescription = document.getElementById("projectDescription");

// const visitProject = document.getElementById("visitProject");
// const githubProject = document.getElementById("githubProject");


// /*==================================================
//                 LOAD PROJECT
// ==================================================*/

// function loadProject(project){

//     projectTitle.textContent = project.name;

//     projectImage.src = project.image;

//     projectImage.alt = project.name;

//     projectDescription.textContent = project.description;

//     visitProject.href = project.visit;

//     githubProject.href = project.github;

// }



// /*==================================================
//                 LOAD SKILL
// ==================================================*/

// function loadSkill(skillID){

//     const skill = skillsData[skillID];

//     if(!skill) return;



//     /*==========================
//             LEFT PANEL
//     ==========================*/

//     skillTitle.textContent = skill.title;

//     skillCategory.textContent = skill.category;

//     skillPercentage.textContent = skill.progress + "%";

//     progressFill.style.width = skill.progress + "%";



//     /*==========================
//         PROJECT LIST (TOP RIGHT)
//     ==========================*/

//     techList.innerHTML = "";



//     skill.projects.forEach((project,index)=>{

//         const span = document.createElement("span");

//         span.textContent = project.name;

//         span.classList.add("projectTag");



//         if(index===0){

//             span.classList.add("activeProject");

//             loadProject(project);

//         }



//         span.addEventListener("click",()=>{

//             document.querySelectorAll(".projectTag").forEach(tag=>{

//                 tag.classList.remove("activeProject");

//             });



//             span.classList.add("activeProject");



//             loadProject(project);

//         });



//         techList.appendChild(span);

//     });

// }



// /*==================================================
//             SKILL BUTTON CLICK
// ==================================================*/

// skillButtons.forEach(button=>{

//     button.addEventListener("click",()=>{

//         skillButtons.forEach(btn=>{

//             btn.classList.remove("activeSkill");

//         });



//         button.classList.add("activeSkill");



//         loadSkill(button.dataset.skill);

//     });

// });



// /*==================================================
//                 DEFAULT
// ==================================================*/

// loadSkill("web");






















const projectsData = {

    guardianAngelWeb:{
        category:"Full Stack Development",
        title:"Guardian Angel",
        progress:90,
        name:"Guardian Angel",
        image:"./assets/ga.png",
        description:"Emergency response platform with AI powered assistance.",
        visit:"https://guardianangel.onrender.com",
        github:"https://github.com/SSKumar-21/GuardianAngel",
        technologies:["React","Node.js","MongoDB","AI/ML"]
    },

    weatherForecast:{
        category:"Full Stack Development",
        title:"Weather Forecast",
        progress:90,
        name:"Weather Forecast",
        image:"./assets/weather.png",
        description:"Modern weather forecasting web application.",
        visit:"https://weatherforecast-91a9.onrender.com",
        github:"https://github.com/SSKumar-21/WeatherForecast.git",
        technologies:["JavaScript","REST API","CSS"]
    },

    knifeNGun:{
        category:"Full Stack Development",
        title:"KnifeNGun",
        progress:90,
        name:"KnifeNGun",
        image:"./assets/knife.png",
        description:"Gaming website for weapons showcase.",
        visit:"https://knifengun.vercel.app/",
        github:"https://github.com/SSKumar-21/AnimatedKinfeNGunWeb.git",
        technologies:["HTML","CSS","JavaScript","Animation"]
    },

    speechSync:{
        category:"Full Stack Development",
        title:"Speech Sync",
        progress:90,
        name:"Speech Sync",
        image:"./assets/speech.png",
        description:"Speech synchronization application.",
        visit:"https://speak-sync-two.vercel.app/",
        github:"https://github.com/SSKumar-21/SpeakSync.git",
        technologies:["JavaScript","Web Speech API"]
    },

    textToSpeech:{
        category:"Full Stack Development",
        title:"TextToSpeech",
        progress:90,
        name:"TextToSpeech",
        image:"./assets/tts.png",
        description:"Convert text into natural speech.",
        visit:"https://text-to-speech-with-speed.vercel.app/",
        github:"https://github.com/SSKumar-21/text-to-speechWithSpeed.git",
        technologies:["JavaScript","Web Speech API","CSS"]
    },

    storyGame:{
        category:"Full Stack Development",
        title:"Story Game",
        progress:90,
        name:"Story Game",
        image:"./assets/story.jpg",
        description:"Interactive story based web game.",
        visit:"https://story-game-nine.vercel.app/",
        github:"https://github.com/SSKumar-21/Story-Game.git",
        technologies:["JavaScript","HTML","CSS"]
    },

    dineExpress:{
        category:"Full Stack Development",
        title:"DineExpress",
        progress:90,
        name:"DineExpress",
        image:"./assets/dine.jpg",
        description:"Restaurant ordering platform.",
        visit:"https://dine-express.vercel.app/",
        github:"https://github.com/SSKumar-21/Dine-Express.git",
        technologies:["React","Node.js","REST API"]
    },

    booksopedia:{
        category:"Full Stack Development",
        title:"Booksopedia",
        progress:90,
        name:"Booksopedia",
        image:"./assets/bookopidia.png",
        description:"Online bookstore with REST APIs and secure backend.",
        visit:"http://bookopieda.vercel.app/",
        github:"https://github.com/SSKumar-21/BOOK.git",
        technologies:["React","Node.js","MongoDB","REST API"]
    },

    guardianAngelApp:{
        category:"Flutter",
        title:"Guardian Angel",
        progress:80,
        name:"Guardian Angel (App)",
        image:"./assets/ga.png",
        description:"Emergency response platform with AI powered assistance.",
        visit:"https://github.com/SSKumar-21/AppGuardianAngel.git",
        github:"https://github.com/SSKumar-21/AppGuardianAngel.git",
        technologies:["Flutter","Dart","Firebase"]
    },

    madhava:{
        category:"Flutter",
        title:"Madhava",
        progress:80,
        name:"Madhava",
        image:"./assets/geeta.jpg",
        description:"Spiritual AI companion inspired by the Bhagavad Gita.",
        visit:"https://github.com/SSKumar-21/Geeta---APP.git",
        github:"https://github.com/SSKumar-21/Geeta---APP.git",
        technologies:["Flutter","Dart","AI/ML"]
    },

    yumBook:{
        category:"Flutter",
        title:"YumBook",
        progress:80,
        name:"YumBook",
        image:"./assets/yum.png",
        description:"A recipe book calling the API.",
        visit:"https://github.com/SSKumar-21/YumBook.git",
        github:"https://github.com/SSKumar-21/YumBook.git",
        technologies:["Flutter","Dart","REST API"]
    },

    securityToolkit:{
        category:"Security",
        title:"Security Toolkit",
        progress:70,
        name:"Security Toolkit",
        image:"./assets/cyber.png",
        description:"Collection of cyber security learning projects.",
        visit:"#",
        github:"#",
        technologies:["SQL Injection","Phishing","DDoS","Brute Force","Networking"]
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

loadProject("guardianAngelWeb");