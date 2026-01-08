import { useState } from 'react'
import NavBar from './components/navbar.jsx';
import SearchBar from './components/searchBar.jsx';
import './App.css';
/*
import Intro from './components/intro.jsx'
import HomeBody from './components/home_body.jsx'
import Footer from './components/footer.jsx'
*/


function App() {
  //State parts
  const [userSearch, setUserSearch] = useState(0);

  //Event handlers
  const handleClick = () => {
    setUserSearch(userSearch + 1)
  }

  return (
    <>
      <NavBar onClick={handleClick}/>
      <SearchBar />
    </>
  )
}

export default App
