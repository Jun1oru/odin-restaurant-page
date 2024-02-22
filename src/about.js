function createAbout() {
    const about = document.createElement('div');
    about.id = 'about';

    const aboutTitle = document.createElement('h2');
    aboutTitle.id = 'aboutTitle';
    aboutTitle.textContent = 'Who we are?';

    const para = document.createElement('p');
    para.textContent = 'We are an imaginary cake shop with lots of cakes for you!';

    about.appendChild(aboutTitle);
    about.appendChild(para);

    return about;
}

function loadAbout() {
    const content = document.getElementById('content');
    content.appendChild(createAbout());
}

export default loadAbout;