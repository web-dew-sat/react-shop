import './Cart.scss'

function Cart(props) {
    const {
        quantity = 0,
        handleBasketShow = Function.prototype
    } = props

    return (
        <div className={'cart cyan darken-3 white-text'} onClick={handleBasketShow}>
            <i className='material-icons'>shopping_cart</i>
            {quantity ? <span className={'cart-quantity'}>{quantity}</span> : 0}
        </div>
    )
}

export default Cart;
