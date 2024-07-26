const items = document.querySelectorAll('#items li');
const cart = document.querySelector('#cart');
const newCart = document.querySelector('#new-cart');
const filterUnique = document.querySelector('#filter-unique');

items.forEach(item => {
    item.addEventListener('click', () => {
        const newItem = item.cloneNode(true);

        cart.appendChild(newItem);
    });
});

filterUnique.addEventListener('click', () => {
    const cartItems = document.querySelectorAll('#cart li');
    const cartArray = Array.from(cartItems);
    
    let uniqueItems = [];
    cartArray.forEach(item => {
        if(item.textContent !== '') {
            if(!uniqueItems.includes(item.textContent)) {
                uniqueItems.push(item.textContent);
            }
        }
    });

    // console.log(uniqueItems);

    uniqueItems.forEach(item => {
        const newItem = document.createElement('li');
        newItem.textContent = item;
        newCart.appendChild(newItem);
    });
});