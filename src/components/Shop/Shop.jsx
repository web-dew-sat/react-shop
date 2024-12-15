import './Shop.scss'
import {useEffect, useState} from 'react'
import {API_KEY, API_URL} from "../../config";
import Preloader from "../Preloader/Preloader";
import GoodsList from "../GoodsList/GoodsList";
import Cart from "../Cart/Cart";
import BasketList from "../BasketList/BasketList";
import Alert from "../Alert/Alert";

function Shop() {

    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)
    const [alertName, setAlertName] = useState("")

    const addToBasket = (item) => {
        const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                } else {
                    return orderItem;
                }
            })

            setOrder(newOrder)

        }
        setAlertName(item.name)
    };

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter((el) => el.id !== itemId)
        setOrder(newOrder)
    }
    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const changeQuantity = (itemId, n) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuantity = Number(el.quantity + n)

                return {
                    ...el,
                    quantity: newQuantity >= 0 ? Number(newQuantity) : 0,
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }

    const closeAlert = () => {
        setAlertName('');
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {'Authorization': API_KEY}
        })
            .then(response => response.json())
            .then(data => {
                data.shop && setGoods(data.shop);
                setLoading(false)

            });

    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {
                loading ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket}/>
            }
            {
                isBasketShow &&
                <BasketList order={order} changeQuantity={changeQuantity}
                            handleBasketShow={handleBasketShow}
                            removeFromBasket={removeFromBasket}/>
            }

            {
                alertName && <Alert name={alertName} closeAlert={closeAlert}/>
            }
        </main>
    )
}

export default Shop
