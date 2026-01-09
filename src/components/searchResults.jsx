import { useEffect, useState } from 'react';

const SearchResults = ({apiParams, returnResults}) => {
    //State parts
    const [userResult, setUserResult] = useState('');
    const [searchError, setSearchError] = useState('');
    
    console.log('API parameters received in SearchResults.jsx:', apiParams);

    //URL and credentials for RapidAPI's key with Deezer API results
    const deezerApiUrl = 'https://deezerdevs-deezer.p.rapidapi.com/';
    const deezerApiEndpoint = 'search?q='; //There are many endpoints, this is just API test
    const rapidApiKey = import.meta.env.VITE_RAPIDAPI_API_KEY;
    const option = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': rapidApiKey,
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    //Function to get the results from Deezer API in RapidAPI website
    useEffect(() => {
        const fetchData = async () => {

            if (apiParams === '') return; //Prevent empty fetch
            const response = await fetch(`${deezerApiUrl}${deezerApiEndpoint}${apiParams}`, option);
            console.log('Fetching data from URL:', `${deezerApiUrl}${deezerApiEndpoint}${apiParams}`);
            try {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setUserResult(result.data);
                returnResults(userResult); //Send results back to App.jsx
                console.log(result.data);
            } catch (error) {
                console.error(error);
                setSearchError('Failed to fetch data. Please try again later.');
                returnResults(searchError); //Send error back to App.jsx
            }           
        }
        fetchData();

    }, [apiParams, returnResults, userResult, deezerApiEndpoint, deezerApiUrl, option, rapidApiKey, searchError]);

    return null;
}
export default SearchResults;