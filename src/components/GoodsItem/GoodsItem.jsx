import './GoodsItem.scss'
import {useContext} from "react";
import {ShopContext} from "../../context";

function GoodsItem(props) {
    const {
        mainId: id,
        displayName: name,
        displayDescription: description,
        price: {regularPrice},
        displayAssets: [{full_background}],
    } = props;

    const {addToBasket = Function.prototype} = useContext(ShopContext)


    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt={name}/>

            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className='btn'
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            regularPrice,
                        })
                    }
                >
                    Купить
                </button>
                <span className='right price'>{regularPrice} руб.</span>
            </div>
        </div>
    )
}

export default GoodsItem;
