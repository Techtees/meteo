import StarIcon from "./utils/StarIcon";


function SearchFilter({onStarred, allData, inputValue}) {

  const filteredData = allData.filter((item) => (item.city.toLowerCase().startsWith(inputValue)))

    return (
        <div className="mx-auto bg-[#c4c4c4] mt-3 w-[80%] max-w-[700px] rounded-md overflow-y-scroll ">
            <ul className="flex flex-col max-h-[400px]">
                {
                    filteredData && filteredData.length > 0 ? (
                        filteredData.map((item,index) => ( 
                            <li key={index} className={`m-2 p-2 text-xl bg-[#fafa] flex justify-between block`}>
                                <button type="button">{item.city}</button>  
                                <span><StarIcon onClick = { () => onStarred(item.lat) }  /> </span>
                            </li>
                            ))
                    ) : inputValue && ( <h1>No result Found</h1>)
                }
            </ul>
        </div>
    )
}

export default SearchFilter;