import {FaRegStar, FaLongArrowAltLeft, FaCog} from 'react-icons/fa'
import {useState} from 'react'



function SideMenu () {

const [collapse, setCollapse] = useState(true)

    return(
        <div className={`bg-[#929292] h-screen p-5 pt-[5rem] w-[20%] relative  ${collapse ? 'max-w-[250px]':'w-[80px]'} duration-500`}>
            <FaLongArrowAltLeft  className={`bg-[#fff] rounded-full text-2xl absolute -right-3 top-9 cursor-pointer border ${!collapse && 'rotate-180'}`}  onClick={() => setCollapse(!collapse)}/>
            <div className='inline-flex'>
                <FaRegStar className={` text-3xl mr-2 text-[#fafafa] ${!collapse && 'mx-auto rotate-[360deg]'} duration-500`}  /> 
                <h1 className={`text-[white] font-normal text-2xl ${!collapse && 'scale-0'} duration-300`}>
                 Favourite
                </h1>
            </div>


            <div className='inline-flex cursor-pointer absolute bottom-9 left-5'>
                <FaCog className={` text-2xl mr-2 text-[#fafafa] ${!collapse && 'mx-auto rotate-[360deg]'} duration-500`}/>

                <h3 className={`text-[white] font-normal text-xl ${!collapse && 'scale-0'} duration-300`}>
                 Settings
                </h3>
            </div>
        </div>
    )
}


export default SideMenu;