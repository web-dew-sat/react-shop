import './Cart.scss'
import {ShopContext} from "../../context";
import {useContext} from "react";

function Cart() {
    const {
        order,
        handleBasketShow = Function.prototype
    } = useContext(ShopContext)

    return (
        <div className={'cart cyan darken-3 white-text'} onClick={handleBasketShow}>
            <i className='material-icons'>shopping_cart</i>
            {order.length ? <span className={'cart-quantity'}>{order.length}</span> : 0}
        </div>
    )
}

export default Cart;
