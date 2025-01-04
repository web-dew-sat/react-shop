import './GoodsList.scss'
import GoodsItem from "../GoodsItem/GoodsItem";
import {ShopContext} from "../../context";
import {useContext} from "react";

function GoodsList() {
    const {goods = []} = useContext(ShopContext)

    if (goods.length === 0) {
        return <h3>Ничего не найдено</h3>;
    }

    return (
        <div className="goods">
            {
                goods.map((good) => (
                    <GoodsItem key={good.mainId} {...good}/>
                ))
            }
        </div>
    )
}

export default GoodsList;
