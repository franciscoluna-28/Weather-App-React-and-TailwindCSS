import { useState } from "react";
import "../styles/SearchBar.css";
import useFetchWeatherData from "../hooks/UseFetchWeatherData";
import HomeMessage from "./HomeMessage";
import WeatherInfo from "./WeatherInfo";
import { Transition } from "@headlessui/react";

function SearchBar() {
  const apiKey: string = import.meta.env.VITE_APP_API_KEY;
  const [city, setCity] = useState("");
  const { data: weatherInformation, isLoading } = useFetchWeatherData(
    apiKey,
    city
  );
/* 
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
/*       console.log(weatherInformation);  */
/*     }
  };  */

  return (
    <div className="">
      <div className="container flex justify-center">
        <input
          onChange={(e) => {
            e.preventDefault();
            setCity(e.target.value);
          }}
          className="input sm: border-gray bg-transparent border rounded h-12 w-96 
          font-normal text-gray pl-2 hover:border-main-violet ease-out duration-300 hover:placeholder-main-violet"
          placeholder="Enter a city here..."
          value={city}
        ></input>
      </div>

      <Transition
        show={!isLoading}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-100"
      >
        {!isLoading && <WeatherInfo data={weatherInformation} />}
      </Transition>

      <Transition
        show={isLoading}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-100"
      >
        {isLoading && <HomeMessage />}
      </Transition>
    </div>
  );
}

export default SearchBar;
