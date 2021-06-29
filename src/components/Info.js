function Info({title, description, image, onClose, isOrder}) {
    return (
        <div className="drawer empty" onClick={(e) => e.stopPropagation()}>
        <div className="drawer__head">
          <h2 className="section__title">Корзина</h2>
        </div>
      <div className="cart__wrapper">
        <img width={isOrder ? 83 : 120} height={120} src={image} alt="basket" />
        <h2 className="section__title" style={isOrder ? {color: '#87C20A'} : {}}>{title}</h2>
        <p className="section__description">{description}</p>
        <div className="drawer__bottom">
          <div className="cart__line__btn back" onClick={onClose}>Вернуться назад</div>
        </div>
      </div>
    </div>
    )
}

export default Info