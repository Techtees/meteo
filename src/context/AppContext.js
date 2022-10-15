import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import {city} from '../data/city'

const AppContext = createContext()

export const AppProvider = ({children}) => {

    const [inputValue, setInputValue] = useState()
    const [cityData, setCitydata] = useState(city)
    const [storedFavs, setStoredFavs] = useLocalStorage("favs", [])
    const [favourite, setFavourite] = useState (storedFavs)
    const [openMenu, setOpenMenu] = useState(false)


    // add favourite
    const addFavourite = (city, lat, lng) => {
       
        setFavourite(
             (favourite) => {
                 // used lat and lng as a check because it is unique
                 const exists = favourite.find((item) => item.lat === lat && item.lng === lng)
                 if(!exists) {
                     return [...favourite, {city, lat, lng }]
                 } else
              return favourite
             } 
            
        )
     }

     //remove favourite
     const removeFavourite = (lat, lng) => {
        
        setFavourite(
            (favourite) => {
                // used lat and lng as a check because it is unique
                return favourite.filter((item) => item.lat !== lat && item.lng !== lng)
            } 
           
       )
     }

     const handleChange = (e) => {
        const inputValue = e.target.value.toLowerCase();
        setInputValue(inputValue)
    }

    
  function handleOpenmenu(){
    setOpenMenu(!openMenu)
  }

  useEffect(()=> {
    setStoredFavs(favourite)
  },[favourite])
    
    return <AppContext.Provider value={{
        cityData,
        inputValue,
        handleChange,
        addFavourite,
        removeFavourite,
        favourite,
        openMenu,
        handleOpenmenu
    }} >
      {children}
    </AppContext.Provider>
}

export default AppContext;