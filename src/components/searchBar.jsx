import { useState } from 'react';

const SearchBar = ({searchInput}) => {
    //State parts
    const [inputValue, setInputValue] = useState('');

    //Event handlers
    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Form submitted with input:', typeof inputValue);
        searchInput(inputValue);
    }

    return (
        <section className='absolute top-24 w-full bg-fuchsia-200 flex justify-center items-center p-4'>
            <form 
                onSubmit={handleSubmit}
            >
                <input
                    name='music-search' 
                    type="text" 
                    placeholder="Search for songs or artists" 
                    className="bg-white p-2 border border-gray-300 rounded w-64"
                    onChange={handleInputChange}
                />               
                <button 
                    className="bg-blue-500 text-white p-2 rounded-r-md cursor-pointer hover:bg-blue-600"
                    type="submit"
                >
                    Go!
                </button>
            </form>
        </section>
    )
}

export default SearchBar;