import ReactApexChart from "react-apexcharts";
import MobileIcon from "./utils/MobileIcon";
import { useContext, useState, useEffect, useRef } from "react";
import SettingContext from "../context/SettingContext";
import { getAllWeatherData } from "../data/api/weather";
import { useSearchParams } from "react-router-dom";

const hourlyData = [
  { id: 1, label: "Temperature (2 m)", value:"temperature_2m" },
  { id: 2, label: "Relative Humidity(2 m)", value:"relativehumidity_2m" },
  { id: 3, label: "Dewpoint (2 m)", value:"dewpoint_2m" },
  { id: 4, label: "Weathercode", value:"weathercode" },
  { id: 1, label: "Sealevel Pressure", value:"pressure_msl" },
  { id: 2, label: "Surface Pressure", value:"surface_pressure" },
  { id: 3, label: "Wind Speed (10 m)", value:"windspeed_10m" },
  { id: 4, label: "Wind Speed (80 m)", value:"windspeed_80m" },
  { id: 1, label: "Wind Speed (120 m)", value:"Wwindspeed_120m" },
  { id: 2, label: "Soil Temperature (0 cm)", value:"soil_temperature_0cm" },
  { id: 3, label: "Soil Temperature (6 cm)", value:"soil_temperature_6cm" },
  { id: 4, label: "Soil Temperature (18 cm)", value:"soil_temperature_18cm" },
];
const dailyData = [
  { id: 1, label: "temperature_2m_max", value: "temperature_2m_max" },
  { id: 2, label: "Apparent Temperature Max", value: "temperature_2m_max" },
  { id: 3, label: "Precipitation Sum", value: "precipitation_sum" },
  { id: 4, label: "Rain Sum", value: "rain_sum" },
  { id: 1, label: "Showers Sum", value: "showers_sum" },
  { id: 2, label: "Snowfall Sum", value: "snowfall_sum" },
  { id: 3, label: "Shortwave Radiation Sum", value: "shortwave_radiation_sum" },
  { id: 4, label: "Precipitation Hours", value: "precipitation_hours" },
  { id: 1, label: "Weather Code", value: "precipitation_hours" },
  { id: 2, label: "Sun Rise", value: "sunrise" },
  { id: 3, label: "Sun Rise", value: "sunrise" },
  { id: 4, label: "Evapotranspiration", value: "et0_fao_evapotranspiration" },
];

function DisplayData() {
  const { settings } = useContext(SettingContext);
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const long = searchParams.get("long");
  const city = searchParams.get("city");

  const [data, setData] = useState([]);
  const [selectView, setSelectView] = useState(true);

  useEffect(() => {
    setData([])
  }, [selectView])

  useEffect(() => {
    if (data.length > 0) {
      const allData = getAllWeatherData({
        ...settings,
        latitude: lat,
        longitude: long,
      }, {
        view: selectView ? "hourly" : "daily",
        data,
      });
      console.log(allData);
    }
  }, [data]);

  const handleSelectView = () => {
    setSelectView(!selectView);
  };

  const handleSelectData = (e, value) => {
    // checks if input is checked and return previous checked values and  current checked value
    const checkedInput = e.target.checked;
    setData((prevdata) => {
      if (checkedInput) return [...prevdata, value];
      return prevdata.filter((v) => v !== value);
    });
  };

  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div className="w-[100%] relative">
      <MobileIcon />
      <div className="mx-auto">
        <div className="mt-[3rem] p-3 ">
          <h1 className="text-[#c4c4c4] font-normal text-5xl text-center mb-8">
            Meteorologic data for{" "}
            <span className="text-primary-purple ">{city}</span>
          </h1>
          <form action="" className="flex flex-col items-center">
            <select
              name=""
              id=""
              className="p-2 border outline-none text-2xl text-[#c4c4c4] rounded-md  w-[100%] max-w-[700px]"
              onChange={(e) => handleSelectView(e)}
            >
              <option value="hourly">Hourly View</option>
              <option value="daily">Daily View</option>
            </select>
          </form>
        </div>
        <div className=" w-full mx-auto p-[2rem] pt-5 ">
          <h1 className="text-3xl font-bold">
            {selectView ? "Hourly Weather label" : "Daily Weather label"}
          </h1>
          <div className="mt-[2rem] gap-2 grid md:grid-rows-3   md:grid-flow-col h-[170px] md:h-auto md:w-[100%] overflow-y-scroll ">
            {(selectView ? hourlyData : dailyData).map((data, index) => (
              <div key={index} className="">
                <input
                  onChange={(e) => handleSelectData(e, data.value)}
                  type="checkbox"
                />{" "}
                <label className="text-lg">{data.label}</label>
              </div>
            ))}
          </div>

          <div className="mt-[3rem] md:mt-[6rem]">
            <ReactApexChart
              options={options}
              series={series}
              type="area"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayData;
