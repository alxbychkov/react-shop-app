function Drawer() {
    return (
        <div className="overlay" style={{display: 'none'}}>
        <div className="drawer">
          <div className="drawer__head">
            <h2 className="section__title">Корзина</h2>
            <div className="cart__item__btn"></div>
          </div>
          <div className="cart__wrapper">
            <div className="cart__item">
              <div className="cart__item__image">
                <img width={70} height={70} src="/img/image1.png" alt="image1" />
              </div>
              <div className="cart__item__body">
                <div className="cart__item__title">Мужские Кроссовки Nike Air Max 270</div>
                <div className="cart__item__price">12 999 руб.</div>
              </div>
              <div className="cart__item__btn"></div>
            </div>
            <div className="cart__item">
              <div className="cart__item__image">
                <img width={70} height={70} src="/img/image2.png" alt="image1" />
              </div>
              <div className="cart__item__body">
                <div className="cart__item__title">Мужские Кроссовки Nike Air Max 270</div>
                <div className="cart__item__price">12 999 руб.</div>
              </div>
              <div className="cart__item__btn"></div>
            </div>
            <div className="cart__item">
              <div className="cart__item__image">
                <img width={70} height={70} src="/img/image3.png" alt="image1" />
              </div>
              <div className="cart__item__body">
                <div className="cart__item__title">Мужские Кроссовки Nike Air Max 270</div>
                <div className="cart__item__price">12 999 руб.</div>
              </div>
              <div className="cart__item__btn"></div>
            </div>
          </div>
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
        </div>
      </div>
    )
}

export default Drawer