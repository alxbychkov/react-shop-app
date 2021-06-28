import Home from "./page/Home"
import Favorite from "./page/Favorite"
import Header from "./components/Header"
import Drawer from "./components/Drawer"
import React from "react"
import axios from "axios"
import { Route } from "react-router"


export const AppContex = React.createContext({})

function App() {
  const [cartOpen, setCartOpen] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [sneakers, setSneakers] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [isLoading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function loadData() {
      const favData = await axios.get('https://60d72ef5307c300017a5f6f8.mockapi.io/favorites')
      const cartData = await axios.get('https://60d72ef5307c300017a5f6f8.mockapi.io/cart')
      const itemsData = await axios.get('https://60d72ef5307c300017a5f6f8.mockapi.io/items')

      setLoading(false)

      setFavorites(favData.data)
      setCartItems(cartData.data)
      setSneakers(itemsData.data)
    }

    loadData()
  }, [])


  const addItemCart = (product) => {
    if (cartItems.find(item => item.id === product.id)) {
      const mockapi_id = cartItems.find(item => item.id === product.id)?.mockapi_id      
      axios.delete(`https://60d72ef5307c300017a5f6f8.mockapi.io/cart/${mockapi_id}`, product).then(res => setCartItems(prev => [...prev.filter(item => item.id !== res.data.id)]))
    } else {
      axios.post('https://60d72ef5307c300017a5f6f8.mockapi.io/cart', product).then(res => setCartItems(prev => [...prev, res.data]))
    }
  }

  const addToFavorites = (product) => {
    if (favorites.find(item => item.id === product.id)) {
      const mockapi_id = favorites.find(item => item.id === product.id)?.mockapi_id
      axios.delete(`https://60d72ef5307c300017a5f6f8.mockapi.io/favorites/${mockapi_id}`).then(res => {
        setFavorites(prev => [...prev.filter(item => item.id !== res.data.id)])
      })
    } else {
      axios.post('https://60d72ef5307c300017a5f6f8.mockapi.io/favorites', product).then(res => setFavorites(prev => [...prev, res.data]))
    }
  }

  const deleteCartItem = (product) => {
    if (cartItems.find(item => item.id === product.id)) {
      axios.delete(`https://60d72ef5307c300017a5f6f8.mockapi.io/cart/${product.mockapi_id}`).then(res => {
        setCartItems(prev => [...prev.filter(item => item.id !== res.data.id)])
      })
    }
  }

  const onChangeInput = (e) => {
    setSearchValue(e.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some(obj => obj.id === id)
  }

  return (
    <AppContex.Provider value={{cartItems, favorites, sneakers, deleteCartItem, isItemAdded }}>
    <div className="wrapper">
      {cartOpen && <Drawer items={cartItems} onDelete={(product) => deleteCartItem(product)} onClose={() => setCartOpen(false)}/>}
      <Header 
        onClickCart={() => setCartOpen(true)}
        total={cartItems.reduce((a, b) => (a + b.price), 0)}
      />
      <Route path="/" exact>
        <Home
          sneakers={sneakers}
          searchValue={searchValue}
          addItemCart={addItemCart}
          addToFavorites={addToFavorites}
          onChangeInput={onChangeInput}
          favorites={favorites}
          cartItems={cartItems}
          loading={isLoading}
        />
      </Route>
      <Route path="/favorites" exact>
        <Favorite 
          addItemCart={addItemCart}
          addToFavorites={addToFavorites}  
        />
      </Route>
    </div>
    </AppContex.Provider>
  );
}

export default App;
