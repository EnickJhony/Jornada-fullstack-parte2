import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Card from './components/card/card'
import { Routes, Route } from 'react-router-dom'
import ItemList from './components/itemList/itemList'

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/cadastro" element={'Cadastro'} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
