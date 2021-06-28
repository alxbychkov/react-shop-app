import { AppContex } from "../App"

function Info({title, description, image}) {
    return (
        <div className="drawer empty" onClick={(e) => e.stopPropagation()}>
        <div className="drawer__head">
          <h2 className="section__title">Корзина</h2>
        </div>
      <div className="cart__wrapper">
        <img width={120} height={120} src={image} alt="basket" />
        <h2 className="section__title">{title}</h2>
        <p>{description}</p>
        <div className="drawer__bottom">
          <div className="cart__line__btn back" >Вернуться назад</div>
        </div>
      </div>
    </div>
    )
}

export default Info