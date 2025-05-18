import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLs, getStoredCart } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [ bottles, setBottles] = useState([])
    const [ cart, setCart] =  useState([])
    useEffect(() => {
        fetch('/public/bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    useEffect(() => {
        console.log('called the useEffect:', bottles.length)
        if (bottles.length > 0){
            const storedCart = getStoredCart();
            console.log(storedCart)
            const savedCart = []
            for (const id of storedCart){
                console.log(id)
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle){
                    savedCart.push(bottle)
                }
            }
            console.log(savedCart)
            setCart(savedCart)
        }

    },[bottles])


    const handleToCart = bottle => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLs(bottle.id)
    }
    return (
        <div>
            <h2>Bottles Here: {bottles.length}</h2>
            {/* <h1>Items added:  {cart.length}</h1>
            <p>Added Items: {cart.map(item => item.name).join(', ')}</p>  */}
            <Cart cart = {cart}></Cart>
            <h2>Added items in the cart are</h2>
            {/* {
                cart.map(cart => <Cart cart={cart}></Cart>)
            } */}
            {
                bottles.map(bottle => <Bottle bottle = {bottle} handleToCart  = {handleToCart}></Bottle>)
            }
        </div>
    );
};

export default Bottles;