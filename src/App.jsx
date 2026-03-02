import { useState } from 'react'
import NavBar from './components/navbar.jsx';
import SearchBar from './components/searchBar.jsx';
import SearchResults from './components/searchResults.jsx';
import HomeBody from './components/body_parts/homeBody.jsx';
import Intro from './components/intro.jsx'
import Footer from './components/footer.jsx'
import './App.css';


function App() {
  //State parts
  const [userSearchClick, setUserSearchClick] = useState(1); //Search button useState
  const [userPlaylistClick, setUserPlaylistClick] = useState(1);//Playlist button useState
 const [userInput, setUserInput] = useState(''); //Search bar input useState
  const [displayResults, setDisplayResults] = useState([]); //Body section uesState
    
  //Event handlers
  //Search button click event
  const handleSearchClick = () => {
    //console.log(`Search click state before: ${userSearchClick}`);
    setUserSearchClick(userSearchClick * -1);
    setUserInput('');
  }

  //Playlist button click event
  const handlePlaylistClick = () => {
    setUserPlaylistClick(userPlaylistClick * -1);
    console.log(userPlaylistClick);
  }

  //Search bar input data event
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
      <NavBar searchClick={handleSearchClick} playlistClick={handlePlaylistClick}/>
      {userSearchClick < 0 ? <SearchBar searchInput={handleUserInput} /> : null}
      <Intro />
      {userInput.length > 0 ? <SearchResults apiParams={userInput} returnResults={handleDisplayResults} /> : null}
      <HomeBody results={displayResults} />
      <Footer />
    </>
  )
}

export default App
