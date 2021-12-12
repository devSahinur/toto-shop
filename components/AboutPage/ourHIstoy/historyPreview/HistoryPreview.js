function HistoryPreview({id,number,text}) {
    return (
        <div className='pl-2 py-3 pr-5 cursor-pointer'>
            <h1 className='text-3xl text-primary font-medium pb-3'>{number}</h1>
            <p className='text-sm sm:text-md text-gray-800'>{text}</p>
        </div>
    )
}

export default HistoryPreview
