import { FaRegStar, FaStar} from 'react-icons/fa'
import {useContext} from 'react'
import AppContext from '../../context/AppContext';

function StarIcon ({item, lat, lng }) {
    
const {favourite, addFavourite, removeFavourite} = useContext(AppContext);
const isFavourite =  favourite.find((item) => item.lat === lat && item.lng === lng);

return !isFavourite? <FaRegStar color='#fff' onClick={() => addFavourite(item, lat, lng)} /> : <FaStar color='#fff' onClick={() => removeFavourite(lat, lng)} />
}


export default StarIcon;