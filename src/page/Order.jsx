import Card from "../components/Card"
import { Link } from "react-router-dom"
import React from "react"
import { AppContex } from "../App"

function Order() {
    const {orders} = React.useContext(AppContex)
    const sneakers = []
    if (orders.length > 0) {
        orders.forEach(order => {
            sneakers.push(order.items)
        })
    }
    if (sneakers.length > 0)
        return (
            <div className="content">
                <div className="content__head inner">
                    <Link to="/">
                        <div className="back__btn"></div>
                    </Link>
                    <h2 className="content__title">Мои покупки</h2>
                </div>            
                <div className="sneakers__wrapper">
                {
                    sneakers[0].map((obj,index) => (
                        <Card
                            id={obj.id}
                            name={obj.name}
                            price={obj.price}
                            image={obj.image}
                            key={index}
                            onClick={product => console.log(product)}
                            inFavorite={true}
                            onFavorite={product => console.log(product)}
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
                <h2 className="section__title">У вас нет заказов</h2>
                <p>Оформите хотя бы один заказ.</p>
                <Link to="/">
                    <div className="drawer__bottom">
                    <div className="cart__line__btn back">Вернуться назад</div>
                    </div>
                </Link>
              </div>
        </div>
    )
}

export default Order