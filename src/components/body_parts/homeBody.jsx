const HomeBody = ({results}) => {
    
    return (
        <div className='w-full h-200 bg-green-200 flex flex-col justify-center items-center p-4'>
            {results.length > 0 ? results.map(result =>
                <p className='text-red-500' key={result.id} >{result.title}</p>
            ) : <p className='text-red-500'>No results found</p>}
        </div>
    )
}

export default HomeBody;