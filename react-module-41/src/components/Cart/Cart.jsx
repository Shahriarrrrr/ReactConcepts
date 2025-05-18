const Cart = ({cart}) => {
    console.log(`Here is your Cart: ${cart[0]}`)


    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div>
                {
                    cart.map(bottle => <h3>{bottle.name}</h3>)
                }
            </div>
        </div>
    );
};

export default Cart;