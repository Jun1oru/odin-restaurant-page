function createHome() {
    const home = document.createElement('div');
    home.id = 'home';

    const div = document.createElement('div');
    div.id = 'textDiv';

    const h2 = document.createElement('h2');
    h2.textContent = 'The most sweet cakes in the city are here!';
    h2.classList.add('color');

    const h3 = document.createElement('h3');
    h3.textContent = 'Psst: love is the main ingredient';

    div.appendChild(h2);
    div.appendChild(h3);

    const chef = document.createElement('div');
    chef.id = 'chefDiv';

    const chefImg = document.createElement('img');
    chefImg.id = 'chefImg';
    chefImg.src = './assets/images/chef.jpeg';

    const chefP = document.createElement('p');
    chefP.textContent = 'Sweeeeet Apetit!';

    chef.appendChild(chefImg);
    chef.appendChild(chefP);

    home.appendChild(div);
    home.appendChild(chef);

    return home;
}

function loadHome() {
    const content = document.getElementById('content');
    content.appendChild(createHome());
}

export default loadHome;