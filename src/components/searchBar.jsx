const SearchBar = () => {
    return (
        <section>
            <input type="text" placeholder="Search for songs or artists" className="p-2 border border-gray-300 rounded-l-md w-64"/>
            <button className="bg-blue-500 text-white p-2 rounded-r-md">Search</button>
        </section>
    )
}

export default SearchBar;