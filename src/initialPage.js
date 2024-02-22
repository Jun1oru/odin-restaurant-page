import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAbout from './about.js';

function header() {
    const header = document.createElement('header');
    header.id = 'header';
    header.appendChild(nav());

    return header;
}

function nav() {
    const nav = document.createElement('nav');
    nav.id = 'nav';

    const homeButton = document.createElement('button');
    homeButton.id = 'homeBtn';
    homeButton.textContent = 'Home';
    homeButton.addEventListener("click", () => {
        const content = document.getElementById('content');
        content.removeChild(content.firstChild);
        loadHome();
    });

    const menuButton = document.createElement('button');
    menuButton.id = 'menuBtn';
    menuButton.textContent = 'Menu';
    menuButton.addEventListener("click", () => {
        const content = document.getElementById('content');
        content.removeChild(content.firstChild);
        loadMenu();
    });

    const aboutButton = document.createElement('button');
    aboutButton.id = 'aboutBtn';
    aboutButton.textContent = 'About';
    aboutButton.addEventListener("click", () => {
        const content = document.getElementById('content');
        content.removeChild(content.firstChild);
        loadAbout();
    })

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    return nav;
}

function content() {
    const divContent = document.createElement('div');
    divContent.id = 'content';

    return divContent;
}

function load() {
    const body = document.querySelector('body');
    body.appendChild(header());
    body.appendChild(content());

    loadHome();
}

export default load;