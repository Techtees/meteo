import MobileIcon from './utils/MobileIcon';
import Button from './utils/Button'

function Settings() {

    const tempData = [
        {id:1,label:'Celsius °C'},
        {id:2,label:'Fahrenheit °F'}
    ]
    const windData = [
        {id:1,label:'km/h'},
        {id:2,label:'m/s'},
        {id:3,label:'mph'},
        {id:4,label:'kn'}
    ]
    const precipitationData = [
        {id:1,label:'Milimeter'},
        {id:2,label:'Inch'},
    ]

    return (
         <div className="w-[100%] relative">
            <MobileIcon />
            <div className="mx-auto mt-[3em]  max-w-[700px]">
               <h1 className="text-4xl font-normal text-[#929292] text-center">Application Settings</h1>
                <form action="" className="mt-[4rem] mb-8 w-[100%] mx-auto max-w-[700px] ">
                    <p className="text-center text-xl italic">Temperature Unit</p>
                    <div className="flex flex-row justify-center mt-4 gap-[55px]">
                        {
                            tempData.map((data) => (
                                <div key={data.id}>
                                    <input type="radio" name='temp'/><label className='text-lg'> {data.label} </label>
                                </div>
                            ))
                        }
                    </div>
                    <p className="text-center text-xl italic mt-8">Wind Speed Unit</p>
                    <div className="flex flex-row justify-center gap-[55px] mt-4">
                        {
                            windData.map((data) => (
                                <div key={data.id}>
                                    <input type="radio" name='speed'/><label className='text-lg'> {data.label} </label>
                                </div>
                            ))
                        }
                    </div>
                    <p className="text-center text-xl italic mt-8 md-[mt-3]">Precipitation Unit</p>
                    <div className="flex flex-row justify-center gap-6 mt-4">
                        {
                            precipitationData.map((data) => (
                                <div key={data.id}>
                                    <input type="radio" name='precipitation'/><label className='text-lg'> {data.label} </label>
                                </div>
                            ))
                        }
                    </div>
                    <p className="text-center mt-[2rem] md:mt-[4rem] text-xl italic">TImezone</p>   
                    <div className="flex flex-col justify-center items-center ">
                        <select name="" id="" className="p-3 mt-2 md:mt-4  w-[70%] rounded-md border "> 
                            <option value="">Hourly View</option>
                            <option value="">Daily View</option>
                        </select>
                    </div> 
                    <p className="text-center text-xl mt-6 italic">PastDays</p>   
                    <div className="flex flex-col justify-center items-center">
                        <select name="" id="" className="p-3 mt-2 md:mt-4 rounded-md w-[70%]  border "> 
                            <option value="">Hourly View</option>
                            <option value="">Daily View</option>
                        </select>
                    </div>    

                    <div className="btn mt-[4rem] md:mt-[6rem] flex  flex-col justify-center md:flex-row  gap-[2rem] md:gap-[5rem] items-center">
                        <Button text='Revert settings to default'/>
                        <Button text='Delete favourites'  />
                    </div>                 
                </form>
            </div>
         </div>
    )
}

export default Settings