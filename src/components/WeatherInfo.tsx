import "../styles/WeatherInfo.css";
import AirIcon from "@mui/icons-material/Air";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import WavesIcon from "@mui/icons-material/Waves";
import CreateWeatherElement from "./CreateWeatherElement";
import DataHandler from "./DataType";
import "../styles/WeatherInfo.css";

const WeatherInfo = ({ data }: DataHandler): JSX.Element => {
  if (data != undefined) {
    return (
      <div>
        <div className="">
          <div className="flex flex-col items-center pt-6">
            <span
              className="text-white font-bold text-5xl text-center px-24
            hover:scale-105 ease-out duration-300"
            >
              {data.location.name}, {data.location.country}
            </span>
            <span className="text-gray pt-4 text-xl hover:text-main-violet duration-300 ease-out">
              {data.location.localtime}
            </span>
            <span
              className="text-transparent py-3 text-5xl font-extrabold 
            celsius-number bg-clip-text hover:scale-105 duration-300 ease-out"
            >
              {data.current.temp_c}°
            </span>
            <hr className="border-gray w-64 mt-1 hover:border-main-violet duration-200"></hr>
            <p
              className="text-gray font-medium pt-2 text-xl
            hover:text-main-violet duration-300 ease-out"
            >
              {data.current.condition.text}
            </p>
          </div>

          <div className="w-72 m-auto pt-4 mt-4">
            <div
              className="w-auto h-64 bg-brighter-black p-6 rounded shadow-xl overflow-hidden 
            flex"
            >
              <div className="flex flex-auto justify-items-center flex-wrap gap-8 ml-2">
                <CreateWeatherElement
                  disp={data.current.wind_kph}
                  icon={<AirIcon />}
                  string={"Wind Speed:"}
                />
                <CreateWeatherElement
                  disp={data.current.precip_mm}
                  icon={<ThunderstormIcon />}
                  string={"Precipitation:"}
                />
                <CreateWeatherElement
                  disp={data.current.temp_f}
                  icon={<DeviceThermostatIcon />}
                  string={"Temperature:"}
                />
                <CreateWeatherElement
                  disp={data.current.humidity}
                  icon={<WavesIcon />}
                  string={"Humidity is:"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return(
    <div>
    </div>
  )

};

export default WeatherInfo;
