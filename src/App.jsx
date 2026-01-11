import { useState } from 'react'
import NavBar from './components/navbar.jsx';
import SearchBar from './components/searchBar.jsx';
import SearchResults from './components/searchResults.jsx';
import HomeBody from './components/body_parts/homeBody.jsx'
import './App.css';
/*
import Intro from './components/intro.jsx'
import Footer from './components/footer.jsx'
*/

function App() {
  //State parts
  const [userSearchClick, setUserSearchClick] = useState(1);
  const [userInput, setUserInput] = useState('');
  const [displayResults, setDisplayResults] = useState([]);
    
  //Event handlers
  const handleSearchClick = () => {
    //console.log(`Search click state before: ${userSearchClick}`);
    setUserSearchClick(userSearchClick * -1);
    setUserInput('');
  }

  const handleUserInput = (input) => {
    //console.log('input value from App.jsx:', input);
    setUserInput(input);
  }

  const handleDisplayResults = (result) => {
    console.log('Displaying results in App.jsx:', result);
    setDisplayResults(result);
  }

  return (
    <>
      <NavBar searchClick={handleSearchClick} />
      {userSearchClick < 0 ? <SearchBar searchInput={handleUserInput} /> : null}
      {userInput.length > 0 ? <SearchResults apiParams={userInput} returnResults={handleDisplayResults} /> : null}
      {displayResults.length > 0 ? <HomeBody results={displayResults} /> : null}
    </>
  )
}

export default App
