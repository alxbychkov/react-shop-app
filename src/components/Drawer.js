import React from "react"
import { AppContex } from "../App"
import Info from "./Info"
import axios from "axios"

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function Drawer(props) {
    const {deleteCartItem, setCartItems, cartItems} = React.useContext(AppContex)
    const [isOrder, setOrder] = React.useState(false)
    const [isLoading, setLoading] = React.useState(false)
    const [orderId, setOrderId] = React.useState(null)
    const sendOrder = async () => {
      try {
        setLoading(true)
        const orderResult = await axios.post('https://60d72ef5307c300017a5f6f8.mockapi.io/order', {items: cartItems})
        setOrderId(orderResult.data.order_id)
        setOrder(true)
        setCartItems([])
        for(let i=0; i<cartItems.length; i++) {
          const item = cartItems[i]
          await axios.delete(`https://60d72ef5307c300017a5f6f8.mockapi.io/cart/${item.mockapi_id}`)
          await delay(1000)
        }

      } catch (e) {
        console.error('Error: ', e)
      }
      setLoading(false)
    }

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
                    <div className={`cart__line__btn${isLoading ? ' disabled' : ''}`} onClick={sendOrder}>Оформить заказ</div>
                  </div>
              </div> 
              :
              <Info
                title={isOrder ? 'Заказ оформлен!' : 'Корзина пустая'}
                description={isOrder ? `Ваш заказ #${orderId && orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                image={isOrder ? '/img/done.png' : '/img/bag.png'}
                isOrder={isOrder}
                onClose={props.onClose}
              />
          }
      </div>
    )
}

export default Drawer