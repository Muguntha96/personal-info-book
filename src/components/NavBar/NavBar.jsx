import { Link } from 'react-router-dom'
import reactLogo from '../../assets/react.svg'

const NavBar = () => {
  return ( 
    <header>
      <img style={{width:"50px"}} src={reactLogo} alt="The React Logo" />
      <nav>
        <Link to='/shop'>Shop</Link>
        <Link to='/monsters'>Scary Monsters</Link>
        <Link to='/spells'>Spells Search</Link>
      </nav>
    </header>

  )
}
export default NavBar