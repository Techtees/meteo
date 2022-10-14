import ReactApexChart from "react-apexcharts"
import MobileIcon from './utils/MobileIcon';

function DisplayData () {

    const data = [
        { id:1,varaibles:'temperature'},
        { id:2,varaibles:'temperature'},
        { id:3,varaibles:'temperature'},
        { id:4,varaibles:'temperature'},
        { id:1,varaibles:'temperature'},
        { id:2,varaibles:'temperature'},
        { id:3,varaibles:'temperature'},
        { id:4,varaibles:'temperature'},
        { id:1,varaibles:'temperature'},
        { id:2,varaibles:'temperature'},
        { id:3,varaibles:'temperature'},
        { id:4,varaibles:'temperature'},
        { id:1,varaibles:'temperature'},
        { id:2,varaibles:'temperature'},
        { id:3,varaibles:'temperature'},
        { id:1,varaibles:'temperature'},
        { id:2,varaibles:'temperature'},
        { id:3,varaibles:'temperature'},
        { id:4,varaibles:'temperature'},
        { id:1,varaibles:'temperature'},
        { id:2,varaibles:'temperature'},
        { id:3,varaibles:'temperature'},
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
                  <h1 className="text-[#c4c4c4] font-normal text-5xl text-center mb-8">Meteorologic data for Sinj</h1>
                  <form action="" className="flex flex-col items-center">
                      <select name="" id="" className="p-4 border outline-none rounded-md  w-[100%] max-w-[700px]"> 
                          <option value="">Hourly View</option>
                          <option value="">Daily View</option>
                      </select>
                  </form>
              </div>
              <div className=" w-full mx-auto p-[2rem] pt-5">
                  <h1 className="text-3xl font-bold">Hourly Weather Variables</h1>
                  <div className="mt-[2rem] grid md:grid-cols-4 grid-cols-2">
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