import { Route,Routes } from 'react-router-dom'
import Shop from './pages/Shop/Shop'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import MonsterList from './pages/MonsterList/MonsterList'
import MonsterDetails from './pages/MonsterDetails/MonsterDetails'
import SpellSearch from './pages/SpellSearch/SpellSearch'

function App() {
  return (
  <>
    <NavBar />
    <Routes>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/monsters' element={<MonsterList />} />
      <Route path='/monsters/:monsterId' element={<MonsterDetails />}/>
      <Route path='/spells' element={<SpellSearch />}/>
    </Routes>  
  
  </>
  )
}

export default App
