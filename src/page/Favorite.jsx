import Card from "../components/Card"
import { Link } from "react-router-dom"
import React from "react"
import { AppContex } from "../App"

function Favorite({addToFavorites, addItemCart}) {
    const {favorites} = React.useContext(AppContex)
    
    if (favorites.length > 0)
        return (
            <div className="content">
                <div className="content__head inner">
                    <Link to="/">
                        <div className="back__btn"></div>
                    </Link>
                    <h2 className="content__title">Мои закладки</h2>
                </div>
                <div className="sneakers__wrapper">
                {
                    favorites.map((obj,index) => (
                        <Card
                        id={obj.id}
                        name={obj.name}
                        price={obj.price}
                        image={obj.image}
                        key={index}
                        onClick={product => addItemCart(product)}
                        inFavorite={true}
                        onFavorite={product => addToFavorites(product)}
                        />
                    ))
                    }
                </div>
            </div>
        )
    else return (
        <div className="content empty">
              <div className="cart__wrapper">
                <img width={120} height={120} src="/img/smile.png" alt="basket" />
                <h2 className="section__title">Закладок нет :(</h2>
                <p>Вы ничего не добавляли в закладки</p>
                <Link to="/">
                    <div className="drawer__bottom">
                    <div className="cart__line__btn back">Вернуться назад</div>
                    </div>
                </Link>
              </div>
        </div>
    )
}

export default Favorite