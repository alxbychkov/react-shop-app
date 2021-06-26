import Card from "../components/Card"

function Favorite({sneakers, addToFavorites, addItemCart}) {
    return (
        <div className="content">
            <div className="content__head">
                <h2 className="content__title">Мои закладки</h2>
            </div>
            <div className="sneakers__wrapper">
            {
                sneakers.map((obj,index) => (
                    <Card
                    id={obj.id}
                    name={obj.name}
                    price={obj.price}
                    image={obj.image}
                    key={index}
                    onClick={product => addItemCart(product)}
                    onFavorite={product => addToFavorites(product)}
                    />
                ))
                }
            </div>
        </div>
    )
}

export default Favorite