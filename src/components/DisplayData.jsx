import ReactApexChart from "react-apexcharts"
import MobileIcon from './utils/MobileIcon';
import {useContext} from 'react';
import SettingContext from "../context/SettingContext";
import {getAllWeatherData} from '../data/api/weather'
import {useSearchParams} from "react-router-dom";


function DisplayData () {
  const [searchParams] = useSearchParams()
  const lat = searchParams.get('lat')
  const long = searchParams.get('long')
  const city = searchParams.get('city')

  const { settings } = useContext(SettingContext)

  const allData = getAllWeatherData(settings,lat,long)

  console.log(allData);


    const data = [
        { id:1,varaibles:'temperature (2 m)'},
        { id:2,varaibles:'Relative Humidity(2 m)'},
        { id:3,varaibles:'Dewpoint (2 m)'},
        { id:4,varaibles:'Weathercode'},
        { id:1,varaibles:'Sealevel Pressure'},
        { id:2,varaibles:'Surface Pressure'},
        { id:3,varaibles:'Wind Speed (10 m)'},
        { id:4,varaibles:'Wind Speed (80 m)'},
        { id:1,varaibles:'Wind Speed (120 m)'},
        { id:2,varaibles:'Soil Temperature (0 cm)'},
        { id:3,varaibles:'Soil Temperature (6 cm)'},
        { id:4,varaibles:'Soil Temperature (18 cm)'},
    ]

    const series = [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }] 

     const options = {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
    }



    return (
        <div className="w-[100%] relative">
          <MobileIcon />
            <div className="mx-auto">
              <div  className="mt-[3rem] p-3 ">
                  <h1 className="text-[#c4c4c4] font-normal text-5xl text-center mb-8">Meteorologic data for {city}</h1>
                  <form action="" className="flex flex-col items-center">
                      <select name="" id="" className="p-4 border outline-none rounded-md  w-[100%] max-w-[700px]"> 
                          <option value="">Hourly View</option>
                          <option value="">Daily View</option>
                      </select>
                  </form>
              </div>
              <div className=" w-full mx-auto p-[2rem] pt-5">
                  <h1 className="text-3xl font-bold">Hourly Weather Variables</h1>
                  <div className="mt-[2rem] grid  grid-rows md:grid-rows-3 ">
                  {
                      data.map((data, index) => (
                          <div key={index} className="">
                              <input type="checkbox" /> <label className="text-lg">{data.varaibles}</label>
                          </div>
                      ))
                  }
                  </div>

                  <div className="mt-[6rem]">
                      <ReactApexChart options={options} series={series} type="area" height={350} />
                  </div>
              </div>
            </div>
        </div>
    )
}

export default DisplayData;