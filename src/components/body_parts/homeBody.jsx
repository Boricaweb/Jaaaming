const HomeBody = ({results}) => {
    
    return (
        <div className='w-full bg-green-200 flex flex-col justify-center items-center p-4'>
            {results.map(result => {
                return <p className='text-red-500' key={result.id} >{result.title}</p>
            })}
        </div>
    )
}

export default HomeBody;