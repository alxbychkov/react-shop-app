function Drawer(props) {
    return (
        <div className="overlay" onClick={props.onClose}>
        <div className="drawer" onClick={(e) => e.stopPropagation()}>
          <div className="drawer__head">
            <h2 className="section__title">Корзина</h2>
            <div className="cart__item__btn" onClick={props.onClose}></div>
          </div>
          {(props.items.length > 0) &&
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
                  <div className="cart__item__btn" onClick={() => props.onDelete(item)}></div>
                </div>              
              ))}
            </div>
          }
          {props.items.length > 0 ?
              <div className="drawer__bottom">
              <div className="cart__line">
                <p className="cart__line__text">Итого: </p>
                <p className="cart__line__border"></p>
                <p className="cart__line__value">21 498 руб.</p>
              </div>
              <div className="cart__line">
                <p className="cart__line__text">Налог 5%: </p>
                <p className="cart__line__border"></p>
                <p className="cart__line__value">1074 руб.</p>
              </div>
              <div className="cart__line__btn">Оформить заказ</div>
            </div>
            :
            <div>Empty</div>
          }
        </div>
      </div>
    )
}

export default Drawer