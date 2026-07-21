/*==================================================
                MOBILE NAV TOGGLE
==================================================*/

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu(){

    navToggle.classList.remove("open");

    navLinks.classList.remove("open");

    navToggle.setAttribute("aria-expanded","false");

}

function openMenu(){

    navToggle.classList.add("open");

    navLinks.classList.add("open");

    navToggle.setAttribute("aria-expanded","true");

}

if(navToggle && navLinks){

    navToggle.addEventListener("click",()=>{

        const isOpen = navLinks.classList.contains("open");

        isOpen ? closeMenu() : openMenu();

    });

    // Close the menu whenever a link is tapped
    navLinks.querySelectorAll("a").forEach(link=>{

        link.addEventListener("click",closeMenu);

    });

    // Close on outside click
    document.addEventListener("click",(e)=>{

        const clickedInsideNav = navLinks.contains(e.target) || navToggle.contains(e.target);

        if(!clickedInsideNav){

            closeMenu();

        }

    });

    // Close on Escape
    document.addEventListener("keydown",(e)=>{

        if(e.key === "Escape"){

            closeMenu();

        }

    });

}


/*==================================================
            SCROLLSPY — ACTIVE NAV LINK
==================================================*/

const sections = document.querySelectorAll("main section[id]");

const navLinkItems = document.querySelectorAll(".navLink");

function setActiveLink(id){

    navLinkItems.forEach(link=>{

        link.classList.toggle("active", link.dataset.nav === id);

    });

}

if(sections.length && navLinkItems.length){

    const spyObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                setActiveLink(entry.target.id);

            }

        });

    },{

        root:null,
        rootMargin:"-45% 0px -50% 0px",
        threshold:0

    });

    sections.forEach(section=>{

        spyObserver.observe(section);

    });

}


/*==================================================
        SCROLL-TRIGGERED REVEAL ANIMATION
        (elements with class="reveal-up")
==================================================*/

const revealEls = document.querySelectorAll(".reveal-up");

if(revealEls.length){

    // Pause the CSS animation until the element is on screen
    revealEls.forEach(el=>{

        el.style.animationPlayState = "paused";

    });

    const revealObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.animationPlayState = "running";

                revealObserver.unobserve(entry.target);

            }

        });

    },{

        threshold:0.15

    });

    revealEls.forEach(el=>{

        revealObserver.observe(el);

    });

}


/*==================================================
        RESPECT REDUCED MOTION PREFERENCE
==================================================*/

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if(prefersReducedMotion){

    revealEls.forEach(el=>{

        el.style.animationPlayState = "running";

    });

}
