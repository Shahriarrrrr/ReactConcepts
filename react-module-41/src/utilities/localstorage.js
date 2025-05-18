const getStoredCart = () => {
    const localStorageString = localStorage.getItem('cart')
    if (localStorageString){
        return JSON.parse(localStorageString)
    }
    return [];
}


const savedCarttoLs = cart => {
    const cartStringField  = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringField);

}

const addToLs = id => {
    const cart = getStoredCart();
    cart.push(id)
    savedCarttoLs(cart)
}

export {addToLs, getStoredCart}