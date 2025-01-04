import './BasketItem.scss'
import {useContext} from "react";
import {ShopContext} from "../../context";

function BasketItem(props) {
    const {
        id,
        name,
        regularPrice,
        quantity,
    } = props

    const {
        removeFromBasket = Function.prototype,
        changeQuantity = Function.prototype
    } = useContext(ShopContext)

    return (
        <li className="collection-item basket-item">
            <div className="quantity">
                <button onClick={() => changeQuantity(id, -1)}>
                    <i className='material-icons'>remove_circle</i>
                </button>
                <span className="quantity-count">{quantity}</span>
                <button onClick={() => changeQuantity(id, 1)}>
                    <i className='material-icons'>add_circle</i>
                </button>
            </div>
            {name} = {regularPrice * quantity} рублей
            <span className="secondary-content basket-delete" onClick={() => removeFromBasket(id)}>
                <i className="material-icons ">close</i>
            </span>
        </li>
    )
}

export default BasketItem
