import {FaRegStar, FaLongArrowAltLeft, FaCog} from 'react-icons/fa'
import { WiDaySunny ,WiFog , WiHail} from "react-icons/wi";
import {useContext, useState} from 'react'
import AppContext from '../context/AppContext'
import {Link} from 'react-router-dom'

function SideMenu () {
const { favourite} = useContext(AppContext)

const [collapse, setCollapse] = useState(true)

    return(
        <div className={`bg-primary-purple_light h-screen p-5 pt-[4rem] w-[20%] relative  ${collapse ? 'max-w-[250px]':'w-[80px]'} duration-500`}>
            <FaLongArrowAltLeft  className={`bg-[#fff] rounded-full text-2xl absolute -right-3 top-9 cursor-pointer border ${!collapse && 'rotate-180'}`}  onClick={() => setCollapse(!collapse)}/>

             <div className='mb-[3rem] text-center bg-primary-purple rounded p-2 '  >
                <Link to='/' className='inline-flex'>
                    <WiHail className={`text-white text-3xl ${!collapse && 'mx-auto rotate-[360deg]'} duration-500 `}/>
                    <h1 className={`text-center text-white text-2xl  ${!collapse && 'scale-0'} duration-300`}>METEO</h1>
                </Link>
            </div>

            <div className='inline-flex'>
                <FaRegStar className={` text-3xl mr-2 text-[#fafafa] ${!collapse && 'mx-auto rotate-[360deg]'} duration-500`}  /> 
                <h1 className={`text-[white] font-normal text-xl ${!collapse && 'scale-0'} duration-300`}>
                 Favourite
                </h1>
            </div>

            <div className='mt-[3em] overflow-hidden h-[500px]'>
                <ul className=''>
                    {
                        favourite.map((item,index) => (
                            <Link  to = '/details' key={index}>
                                <li className={`text-white hover:bg-[#475569] p-2 rounded-md cursor-pointer  duration-400 `}  >
                                
                                    <WiDaySunny className={` text-2xl inline ${!collapse && 'mx-auto rotate-[360deg]'} duration-300 `} color='#ffff'/>   
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
    )
}


export default SideMenu;