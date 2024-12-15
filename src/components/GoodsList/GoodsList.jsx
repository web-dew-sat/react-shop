import './GoodsList.scss'
import GoodsItem from "../GoodsItem/GoodsItem";

function GoodsList(props) {
    const {goods = [], addToBasket = Function.prototype} = props;

    if (goods.length === 0) {
        return <h3>Ничего не найдено</h3>;
    }

    return (
        <div className="goods">
            {
                goods.map((good) => (
                    <GoodsItem key={good.mainId} {...good} addToBasket={addToBasket}/>
                ))
            }
        </div>
    )
}

export default GoodsList;
