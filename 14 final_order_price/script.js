const calculateOrderPrice = (cart) => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].unitPrice * cart[i].quantity;
    }
    return total;
}