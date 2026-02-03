const NavBar = ({searchClick}) => {

    return (
        <nav className='w-full h-[6rem] bg-black p-4 text-white flex justify-between items-center'>
            <section className='size-[50%]'>
                <h1>Jaaaming Logo</h1>
            </section>
            <section className='size-[50%] flex justify-evenly items-center'>
                <div className='size-[50%] flex justify-evenly items-center'> 
                    <a href='#'><p>Home</p></a>
                    <a href='#'><p>Playlist</p></a>
                    <a href='#' onClick={searchClick}><p>Search</p></a>
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
