import {FaSearch} from 'react-icons/fa'
import SearchFilter from './SearchFIlter';
import {useState} from 'react'
import {city} from '../data/city'

function Main() {
    const [cityData, setCitydata] = useState(city)
    const [inputValue, setInputValue] = useState()

    const handleStar = (id) =>  {
        console.log(id)
    } 

    // const handleSearch = (e) => {
    //     const newSearch = e.target.value;
    //     if(newSearch !== ''){
    //         const Result = cityData.filter((item) => (item.city.toLowerCase().includes( item.newSearch)))
    //         setCitydata(Result)
    //     }
    //     else{
    //         setCitydata(city.sort())
    //     }
    // }

    return (
        <div className="mx-auto pt-[14rem] w-[70%]">
            <h1 className='text-center  mb-[3rem] text-5xl text-[#c4c4c4]'>Meteo App</h1>
            <form action="">
                <div className="bg-[#c4c4c4] p-4 rounded-md flex align-middle mx-auto w-[80%] max-w-[700px]">
                  <input type="search" onChange={(e) => setInputValue(e.target.value.toLowerCase())} placeholder="Search" className="border-none bg-[#c4c4c4] outline-none w-[100%]  text-[#fff] text-xl placeholder:text-[#ffff]"/>
                  <FaSearch color='#ffff' />
                </div>
                <SearchFilter allData = {cityData} onStarred = {handleStar}  inputValue ={inputValue} />
            </form>
            
        </div>
    )
}

export default Main;