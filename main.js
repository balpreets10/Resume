import { renderAbout } from './components/about.js';
import { renderEducation } from './components/education.js';
//import { renderExperience } from './components/experience.js';
import { renderSkills } from './components/skills.js';
import { renderProjects } from './components/projects.js';
import { renderFooter } from './components/footer.js';

//const mainContent = document.getElementsByClassName('main');

document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main.main');

    // Render all sections
    main.innerHTML = `
        ${renderAbout()}
        ${renderSkills()}
        ${renderEducation()}
        ${renderProjects()}
        ${renderFooter()}
    `;

    // Re-initialize AOS after content is loaded
    AOS.init();

    // Re-initialize other libraries that might be needed
    // Typed.js initialization
    let typed = new Typed('.typed', {
        strings: ["Technical Team Lead", "Game Developer", "Unity Programmer", "C# Expert"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    });
});