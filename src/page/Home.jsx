import Card from "../components/Card"

function Home({searchValue, onChangeInput, sneakers, addItemCart, addToFavorites, cartItems, favorites}) {
    return (
        <div className="content">
            <div className="slider"></div>
            <div className="content__head">
                <h2 className="content__title">{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h2>
                <div className="content__search">
                <div className="search__icon"></div>
                <input className="input__text" type="text" onChange={onChangeInput} placeholder="Поиск..."/>
                </div>
            </div>
            <div className="sneakers__wrapper">
                {
                sneakers.filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase())).map((obj,index) => (
                    <Card
                    id={obj.id}
                    name={obj.name}
                    price={obj.price}
                    image={obj.image}
                    inCart={cartItems.find(item => item.id === obj.id) ? true : false}
                    inFavorite={favorites.find(item => item.id === obj.id) ? true : false}
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

export default Home