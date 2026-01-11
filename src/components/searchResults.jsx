import { useEffect } from 'react';

 //URL and credentials for RapidAPI's key with Deezer API results
const deezerApiUrl = 'https://deezerdevs-deezer.p.rapidapi.com/';
const deezerApiEndpoint = 'search?q='; //There are many endpoints, this is just API test
const option = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_API_KEY, //Accessing the API key from .env file
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
    }
};

const SearchResults = ({apiParams, returnResults}) => {

    //Function to get the results from Deezer API in RapidAPI website
    useEffect(() => {

        const fetchData = async () => {           
            if (apiParams === '') return; //Prevent empty fetch
            const response = await fetch(`${deezerApiUrl}${deezerApiEndpoint}${apiParams}`, option);
            try {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                returnResults(result.data); //Send results back to App.jsx
            } catch (error) {
                console.error(error);
                returnResults([]); //Send error back to App.jsx
            }           
        }
        fetchData();

    }, [apiParams]);

    return null;
}
export default SearchResults;