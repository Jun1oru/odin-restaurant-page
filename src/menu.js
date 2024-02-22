function createCake(name, id, description, price) {
    const cake = document.createElement('div');
    cake.id = `${id}`;
    cake.classList.add('cake');

    const cakeName = document.createElement('h2');
    cakeName.classList.add('cakeName');
    cakeName.textContent = `${name}`;

    const cakeDescription = document.createElement('p');
    cakeDescription.classList.add('cakeDescription');
    cakeDescription.textContent = `${description}`;

    const cakePrice = document.createElement('p');
    cakePrice.classList.add('cakePrice');
    cakePrice.textContent = `${price}`;

    cake.appendChild(cakeName);
    cake.appendChild(cakeDescription);
    cake.appendChild(cakePrice);
    return cake;
}

function createMenu() {
    const menu = document.createElement('div');
    menu.id = 'menu';


    menu.appendChild(createCake('Chocolate Cake', 'firstCake', "It's a sweet cake flavored with melted chocolate, cocoa powder, or both", '$10'));
    menu.appendChild(createCake('Vanilla Cake', 'secondCake', 'A moist vanilla cake made with pure vanilla extract', '$11'));
    menu.appendChild(createCake('Orange Cake', 'thirdCake', 'Orange cake is made with whipped egg whites which keeps the cake fluffy and light, orange zest, and fresh orange juice that gives this cake a delicious fresh flavor', '$12'));

    return menu;
}

function loadMenu() {
    const content = document.getElementById('content');
    content.appendChild(createMenu());
}

export default loadMenu;