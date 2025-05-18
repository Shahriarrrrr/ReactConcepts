const Bottle = ({bottle, handleToCart}) => {

    const {name, price_usd, images} = bottle


    console.log(images.thumbnail)
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>price: {price_usd} $</p>
            <button onClick={() => handleToCart(bottle)}>Add to cart</button>
        </div>
    );
};

export default Bottle;