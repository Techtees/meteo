import {FaSearch} from 'react-icons/fa'
import SearchFilter from './SearchFIlter';
import {useContext} from 'react'
import AppContext from '../context/AppContext';

function Main() {
    // const [cityData, setCitydata] = useState(city)
    const {cityData, inputValue, handleChange, handleFavourite} = useContext(AppContext)

   
    return (
        <div className='bg-[#f2f2f2] w-[100%]'>
            <div className="mx-auto pt-[14rem] ">
            <h1 className='text-center  mb-[3rem] text-5xl font-bold text-primary-purple_light'>Meteo App</h1>
            <form action="">
                <div className="bg-primary-purple p-4 rounded-md flex align-middle mx-auto w-[80%] max-w-[700px]">
                  <input type="search" onChange={(e) => handleChange(e)} placeholder="Search" className="border-none bg-primary-purple  outline-none w-[100%]  text-[#fff] text-xl placeholder:text-[#ffff]"/>
                  <FaSearch color='#ffff' className='mt-1' />
                </div>
                <SearchFilter allData = {cityData} onStarred = {handleFavourite}  inputValue ={inputValue} />
            </form>
            
        </div>
        </div>
    )
}

export default Main;