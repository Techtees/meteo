import MobileIcon from './utils/MobileIcon';
import Button from './utils/Button'
import SettingContext from '../context/SettingContext';
import AppContext from '../context/AppContext';
import { useContext } from 'react';

function Settings() {

    const { 
        handleTemperature,
        handlePrecipitation,
        handlePastDays,
        handleTimezone,
        handleWind,
        tempUnit,windUnit,precipitationUnit,timezone,pastDays,
        handleRevertSettings,
    } = useContext(SettingContext)

    const {favourite,deleteAllFavourite} =useContext(AppContext)

    const tempData = [
        {id:1,label:'Celsius °C', value: 'celsius'},
        {id:2,label:'Fahrenheit °F', value: 'fahrenheit'}
    ]
    const windData = [
        {id:1,label:'km/h', value: 'kmh'},
        {id:2,label:'m/s', value: 'ms'},
        {id:3,label:'mph', value: 'mph'},
        {id:4,label:'kn', value: 'kn'}
    ]
    const precipitationData = [
        {id:1,label:'Milimeter',  value: 'mm'},
        {id:2,label:'Inch', value: 'inch'},
    ]

    const timezoneOptions = [
        {id:1, label:'UTC', value:'UTC'},
        {id:2, label:'CEST', value:'CEST'},
        {id:3, label:'GMT', value:'GMT'}
    ]

    const daysOptions = [
        {id:0, label:'0', value: '0'},
        {id:1, label:'1', value: '1'},
        {id:2, label:'2', value: '2'},
        {id:3, label:'3', value: '3'},
        {id:4, label:'4', value: '4'},
        {id:5, label:'5', value: '5'}
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
                                    <input type="radio" name='temp' value={data.value} defaultChecked={data.value ===tempUnit} onChange={(e) => handleTemperature(e)} /><label className='text-lg' > {data.label} </label>
                                </div>
                            ))
                        }
                    </div>
                    <p className="text-center text-xl italic mt-8">Wind Speed Unit</p>
                    <div className="flex flex-row justify-center gap-[55px] mt-4">
                        {
                            windData.map((data) => (
                                <div key={data.id}>
                                    <input type="radio" name='speed' value={data.value} defaultChecked={data.value === windUnit} onChange={(e) => handleWind(e)} /><label className='text-lg'> {data.label} </label>
                                </div>
                            ))
                        }
                    </div>
                    <p className="text-center text-xl italic mt-8 md-[mt-3]">Precipitation Unit</p>
                    <div className="flex flex-row justify-center gap-6 mt-4">
                        {
                            precipitationData.map((data) => (
                                <div key={data.id}>
                                    <input type="radio" name='precipitation' value={data.value} defaultChecked={data.value === precipitationUnit} onChange={(e) => handlePrecipitation(e)} /><label className='text-lg'> {data.label} </label>
                                </div>
                            ))
                        }
                    </div>
                    <p className="text-center mt-[2rem] md:mt-[4rem] text-xl italic">Timezone</p>   
                    <div className="flex flex-col justify-center items-center ">
                        <select name="" id="" className="p-3 mt-2 md:mt-4  w-[70%] rounded-md border " value={timezone} onChange={(e) => handleTimezone(e)}> 
                            {
                                timezoneOptions.map((data) => (
                                    <option key={data.id} value={data.value}   >{data.label}</option>
                                ))
                            }
                        </select>
                    </div> 
                    <p className="text-center text-xl mt-6 italic">PastDays</p>   
                    <div className="flex flex-col justify-center items-center">
                        <select name="" id="" className="p-3 mt-2 md:mt-4 rounded-md w-[70%]  border" value={pastDays} onChange={(e) => handlePastDays(e)}> 
                            {
                                 daysOptions.map((data) => (
                                    <option key={data.id}  value={data.value}  >{data.label}</option>
                                ))
                            }
                        </select>
                    </div>    

                    <div className="btn mt-[4rem] md:mt-[6rem] flex  flex-col justify-center md:flex-row  gap-[2rem] md:gap-[5rem] items-center" >
                        <Button text='Revert settings to default' handleClick={handleRevertSettings} />
                        <Button text='Delete favourites' handleClick={deleteAllFavourite}  />
                    </div>                 
                </form>
            </div>
         </div>
    )
}

export default Settings