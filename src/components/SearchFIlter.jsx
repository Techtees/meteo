import StarIcon from "./utils/StarIcon";
import {useContextgit} from 'react'
import AppContext from '../context/AppContext';
import {Link} from 'react-router-dom'



function SearchFilter() {

const { cityData, inputValue } = useContext(AppContext)
  const filteredData = cityData.filter((item) => (item.city.toLowerCase().startsWith(inputValue)))

    return (
        <div className="mx-auto bg-primary-purple_dark  mt-3 w-[80%] max-w-[700px] rounded-md overflow-y-scroll ">
            <ul className="max-h-[400px]">
                {
                    filteredData && filteredData.length > 0 ? (
                        filteredData.map((item,index) => ( 
                            <li key={index} className={`m-2 text-xl text-white flex block hover:bg-[#475569]`}>
                                  <Link className="cursor-pointer rounded-md w-[90%] text-left p-2 " to={`/details?city=${item.city}&lat=${item.lat}&long=${item.lng}`}>
                                        <span>{item.city}</span>
                                  </Link>
                                <span className="p-1 mt-1 cursor-pointer"><StarIcon item={item.city} lat={item.lat} lng={item.lng}  /> </span>
                            </li>
                            ))
                    ) : inputValue && ( <h1 className="text-white text2xl p-2">No result Found</h1>)
                }
            </ul>
        </div>
    )
}

export default SearchFilter;