import {FaRegStar, FaLongArrowAltLeft, FaCog, FaBullseye, FaTimes} from 'react-icons/fa'
import { WiHail} from "react-icons/wi";
import {useContext, useState} from 'react'
import AppContext from '../context/AppContext'
import {Link} from 'react-router-dom'

function SideMenu () {
const { favourite, openMenu, handleOpenmenu} = useContext(AppContext)

const [collapse, setCollapse] = useState(true)

    return(
        <div className={`bg-primary-purple_light h-screen pt-[3rem]  ${collapse ? 'max-w-[250px]':'w-[80px]'} duration-500 absolute top-0 ${openMenu ? 'left-0 ':'left-[-500px] duration-500'} z-50 md:static md:block`}>
            <FaTimes className='text-xl text-white  mx-auto md:hidden' onClick={() => handleOpenmenu()}/>
            <div className="relative">
            <FaLongArrowAltLeft  className={`bg-[#fff] hidden md:block rounded-full text-xl md:text-2xl  absolute -right-3 top-0 cursor-pointer border  ${!collapse && 'rotate-180'}`}  onClick={() => setCollapse(!collapse)}/>
            <div className="p-5">
             <div className='mb-[3rem] text-center bg-primary-purple rounded p-2 mt-4'>
                <Link to='/' className='inline-flex'>
                    <WiHail className={`text-white text-3xl ${!collapse && 'mx-auto rotate-[360deg]'} duration-500 `}/>
                    <h1 className={`text-center text-white text-xl md:text-2xl  ${!collapse && 'scale-0'} duration-300`}>METEO</h1>
                </Link>
            </div>

            <div className='inline-flex text-lg md:text-xl'>
                <FaRegStar className={` text-2xl mr-2 text-[#fafafa] ${!collapse && 'mx-auto rotate-[360deg]'} duration-500`}  /> 
                <h1 className={`text-[white] font-normal  ${!collapse && 'scale-0'} duration-300`}>
                 Favourite
                </h1>
            </div>

            <div className='mt-[3em] overflow-hidden h-[500px]'>
                <ul className=''>
                    {
                        favourite.map((item,index) => (
                            <Link  to = '/details' key={index}>
                                <li className={`text-white hover:bg-[#475569] p-2 rounded-md cursor-pointer  duration-400 `}  >
                                
                                    <FaBullseye className={` text-2xl inline ${!collapse && 'mx-auto rotate-[360deg]'} duration-300 `} color='#ffff'/>   
                                    <span className={`text-md font-normal ${!collapse && 'hidden'} origin-left duration-400`}> {item.item} </span>
                               
                                </li>
                            </Link>
                        ))
                        
                    }
                </ul>
            </div>


            <div className='cursor-pointer absolute bottom-8 left-5'>
                

                <Link to='/settings' className='inline-flex '>
                    <FaCog className={` text-2xl mr-2 text-[#fafafa] ${!collapse && 'mx-auto rotate-[360deg]'} duration-500`}/>
                
                    <h3 className={`text-[white] font-normal text-xl ${!collapse && 'scale-0'} duration-300`}>
                    Settings
                </h3>
                </Link>
            </div>
            </div>
            </div>
        </div>
    )
}


export default SideMenu;