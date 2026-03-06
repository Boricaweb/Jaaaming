const NavBar = ({searchClick, playlistClick, homeClick}) => {

    return (
        <nav className='w-full h-24 bg-black p-4 text-white flex justify-between items-center'>
            <section className='size-[50%]'>
                <h1>Jaaaming Logo</h1>
            </section>
            <section className='size-[50%] flex justify-evenly items-center'>
                <div className='size-[50%] flex justify-evenly items-center'> 
                    <a href='#' onClick={homeClick}><p>Home</p></a>
                    <a href='#' onClick={playlistClick}><p>Playlist</p></a>
                    <p className='cursor-pointer' onClick={searchClick}>Search</p>
                </div>
                <div className='size-[50%] flex justify-evenly items-center'>
                    <button className="bg-white text-black p-2 rounded hover:bg-gray-300"><a href='#'>Dark mode</a></button>
                    <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"><a href='#'>Log in</a></button>
                    <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"><a href='#'>Sign up</a></button>
                </div>                
            </section>
        </nav>
    );
}

export default NavBar;
