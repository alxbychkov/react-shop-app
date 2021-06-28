import React from "react"
import { AppContex } from "../App"
import Info from "./Info"

function Drawer(props) {
    const {deleteCartItem} = React.useContext(AppContex)

    return (
        <div className="overlay" onClick={props.onClose}>
          {(props.items.length > 0) ?
            <div className="drawer" onClick={(e) => e.stopPropagation()}>
                <div className="drawer__head">
                  <h2 className="section__title">Корзина</h2>
                  <div className="cart__item__btn" onClick={props.onClose}></div>
                </div>
                  <div className="cart__wrapper">
                    {props.items.map((item, index) => (
                        <div className="cart__item" key={index}>
                        <div className="cart__item__image">
                          <img width={70} height={70} src={item.image} alt="image1" />
                        </div>
                        <div className="cart__item__body">
                          <div className="cart__item__title">{item.name}</div>
                          <div className="cart__item__price">{item.price} руб.</div>
                        </div>
                        <div className="cart__item__btn" onClick={() => deleteCartItem(item)}></div>
                      </div>              
                    ))}
                  </div>
                    <div className="drawer__bottom">
                    <div className="cart__line">
                      <p className="cart__line__text">Итого: </p>
                      <p className="cart__line__border"></p>
                      <p className="cart__line__value">
                        {
                          props.items.reduce((a, b) => a + b.price, 0)
                        } руб.</p>
                    </div>
                    <div className="cart__line">
                      <p className="cart__line__text">Налог 5%: </p>
                      <p className="cart__line__border"></p>
                      <p className="cart__line__value">{
                        parseInt(props.items.reduce((a, b) => a + b.price, 0)*0.05)
                      } руб.</p>
                    </div>
                    <div className="cart__line__btn">Оформить заказ</div>
                  </div>
              </div> 
              :
              <Info
                title={'Корзина пустая'}
                description={'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                image={'/img/bag.png'}
              />
            //   <div className="drawer empty" onClick={(e) => e.stopPropagation()}>
            //     <div className="drawer__head">
            //       <h2 className="section__title">Корзина</h2>
            //     </div>
            //   <div className="cart__wrapper">
            //     <img width={120} height={120} src="/img/bag.png" alt="basket" />
            //     <h2 className="section__title">Корзина пустая</h2>
            //     <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            //     <div className="drawer__bottom">
            //       <div className="cart__line__btn back" onClick={props.onClose}>Вернуться назад</div>
            //     </div>
            //   </div>
            // </div>
          }
      </div>
    )
}

export default Drawer