import StarIcon from "./utils/StarIcon";
// import {city} from '../data/city'

function SearchFilter({onStarred, allData, inputValue}) {
// console.log(city);

    return (
        <div className="mx-auto bg-[#c4c4c4] mt-3 w-[80%] max-w-[700px] rounded-md overflow-y-scroll ">
            <ul className="flex flex-col max-h-[400px]">
                {
                    allData && allData.length > 0 ? (
                        allData.map((item,index) => ( 
                            <li key={index} className={`m-2 p-2 text-xl bg-[#fafa] flex justify-between ${item.city.toLowerCase().startsWith(inputValue) ? 'block' : 'hidden'}`}>
                                <button type="button">{item.city}</button>  
                                <span><StarIcon onClick = { () => onStarred(item.lat) }  /> </span>
                            </li>
                            ))
                    ) : ( <h1>No result Found</h1> )
                }
            </ul>
        </div>
    )
}

export default SearchFilter;