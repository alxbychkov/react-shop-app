import Card from  './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const sneakers = [
  {id: 1, name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, image: '/img/image1.png'},
  {id: 2, name: 'Мужские Кроссовки Nike Air Max 270', price: 13999, image: '/img/image2.png'},
  {id: 3, name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 16999, image: '/img/image3.png'},
  {id: 4, name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, image: '/img/image4.png'},
  {id: 5, name: 'Мужские Кроссовки Under Armour Curry 8', price: 11999, image: '/img/image5.png'},
  {id: 6, name: 'Мужские Кроссовки Nike Kyrie 7', price: 10999, image: '/img/image6.png'},
  {id: 7, name: 'Мужские Кроссовки Jordan Air Jordan 11', price: 2999, image: '/img/image7.png'},
  {id: 8, name: 'Мужские Кроссовки Nike LeBron XVIII', price: 72999, image: '/img/image8.png'},
  {id: 9, name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 2999, image: '/img/image9.png'},
  {id: 10, name: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 2999, image: '/img/image10.png'},
  {id: 11, name: 'Кроссовки Puma X Aka Boku Future Rider', price: 2999, image: '/img/image11.png'},
  {id: 12, name: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 2999, image: '/img/image12.png'}
]

function App() {
  return (
    <div className="wrapper">
      <Drawer/>
      <Header/>
      <div className="content">
        <div className="slider"></div>
          <div className="content__head">
            <h2 className="content__title">Все кроссовки</h2>
            <div className="content__search">
              <div className="search__icon"></div>
              <input className="input__text" type="text" placeholder="Поиск..."/>
            </div>
          </div>
          <div className="sneakers__wrapper">
            {
              sneakers.map((obj,index) => (
                <Card
                  name={obj.name}
                  price={obj.price}
                  image={obj.image}
                  key={index}
                />
              ))
            }
          </div>
      </div>
    </div>
  );
}

export default App;
