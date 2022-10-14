import {FaBars} from 'react-icons/fa'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

function MobileIcon () {
    const {handleOpenmenu} = useContext(AppContext)

    return (
        <FaBars onClick={() => handleOpenmenu()} className='text-2xl text-primary-purple_light m-3  absolute  right-0 cursor-pointer md:hidden'/>
    )
}

export default MobileIcon