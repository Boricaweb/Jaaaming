const NavBar = () => {

    return (
        <nav className='bg-black p-4 text-white flex justify-between items-center'>
            <section className='size-[50%]'>
                <h1>Jaaaming</h1>
            </section>
            <section className='size-[50%] flex justify-evenly items-center'>
                <div className='size-[50%] flex justify-evenly items-center'> 
                    <a href='#'><p>Home</p></a>
                    <a href='#'><p>Playlist</p></a>
                    <a href='#'><p>Search</p></a>
                </div>
                <div className='size-[50%] flex justify-evenly items-center'>
                    <a href='#'><button>Dark mode</button></a>
                    <a href='#'><button>Log in</button></a>
                    <a href='#'><button>Sign up</button></a>
                </div>                
            </section>
        </nav>
    );
}

export default NavBar;
