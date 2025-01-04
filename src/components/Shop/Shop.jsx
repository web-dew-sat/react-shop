import './Shop.scss'
import {useContext, useEffect} from 'react'
import {API_KEY, API_URL} from "../../config";

import {ShopContext} from "../../context";

import Preloader from "../Preloader/Preloader";
import GoodsList from "../GoodsList/GoodsList";
import Cart from "../Cart/Cart";
import BasketList from "../BasketList/BasketList";
import Alert from "../Alert/Alert";


function Shop() {

    const {setGoods, loading, isBasketShow, alertName} = useContext(ShopContext)

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {'Authorization': API_KEY}
        })
            .then(response => response.json())
            .then(data => {
                setGoods(data.shop);
            });
        // eslint-disable-next-line
    }, []);

    return (
        <main className="container content">
            <Cart/>
            {
                loading ? <Preloader/> : <GoodsList/>
            }
            {
                isBasketShow &&
                <BasketList/>
            }

            {
                alertName && <Alert/>
            }
        </main>
    )
}

export default Shop
