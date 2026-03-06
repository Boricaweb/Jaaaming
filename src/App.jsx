import { useState } from 'react'
import NavBar from './components/navbar.jsx';
import SearchBar from './components/searchBar.jsx';
import SearchResults from './components/searchResults.jsx';
import HomeBody from './components/body_parts/homeBody.jsx';
import PlaylistBody from './components/body_parts/playlistBody.jsx';
import Intro from './components/intro.jsx'
import Footer from './components/footer.jsx'
import './App.css';


function App() {
  //State parts
  const [userHomeClick, setUserHomeClick] = useState(false); //Home sutton
  const [userPlaylistClick, setUserPlaylistClick] = useState(false);//Playlist button useState
  const [userSearchClick, setUserSearchClick] = useState(1); //Search button useState 
  const [userInput, setUserInput] = useState(''); //Search bar input useState
  const [displayResults, setDisplayResults] = useState([]); //Body section uesState
    
  //Event handlers
  //Home button click event
  const handleHomeClick = () => {
    setUserHomeClick(true);
    setUserPlaylistClick(false);
    console.log(userHomeClick);
  }

  //Playlist button click event
  const handlePlaylistClick = () => {
    setUserPlaylistClick(true);
    setUserHomeClick(false);
    console.log(userPlaylistClick);
    console.log(userHomeClick);
  }

  //Search button click event
  const handleSearchClick = () => {
    //console.log(`Search click state before: ${userSearchClick}`);
    setUserSearchClick(userSearchClick * -1);
    setUserInput('');
  }

  //Search bar input data event
  const handleUserInput = (input) => {
    setUserInput(input);
    //console.log('input value from App.jsx:', input);
  }

  //Display 
  const handleDisplayResults = (result) => {   
    setDisplayResults(result);
    console.log('Displaying results in App.jsx:', result);
  }

  return (
    <>
      <header className='sticky top-0'>
        <NavBar homeClick={handleHomeClick} playlistClick={handlePlaylistClick} searchClick={handleSearchClick} />
        {userSearchClick < 0 ? <SearchBar searchInput={handleUserInput} /> : null}       
        {userInput.length > 0 ? <SearchResults apiParams={userInput} returnResults={handleDisplayResults} /> : null}
      </header>
      <main>
        {userHomeClick === false && userPlaylistClick === true 
          ? (
            <>
              <PlaylistBody />
              <Intro className='hidden' />
              <HomeBody className='hidden' results={displayResults} />
            </>
          )
          : (
            <>
              <PlaylistBody className='hidden' />
              <Intro />
              <HomeBody results={displayResults} />
            </>            
          )
        }        
      </main>
      <Footer /> 
    </>
  )
}

export default App;
