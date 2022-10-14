import { createContext, useState } from "react";
import {city} from '../data/city'

const AppContext = createContext()

export const AppProvider = ({children}) => {

    const [inputValue, setInputValue] = useState()
    const [cityData, setCitydata] = useState(city)
    const [favourite, setFavourite] = useState ([])
    const [openMenu, setOpenMenu] = useState(false)
    // const [starredIcon, setStarredIcon] = useState()

    // add favourite
    const addFavourite = (item, lat, lng) => {
       
        setFavourite(
             (favourite) => {
                 // used lat and lng as a check because it is unique
                 const exists = favourite.find((item) => item.lat === lat && item.lng === lng)
                 if(!exists) {
                     return [...favourite, {item, lat, lng }]
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