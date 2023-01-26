import { useState, useEffect, useRef } from "react";
import DataHandler from "../components/DataType";

const useFetchWeatherData = (apiKey: string, city: string) => {
  const [data, setData] = useState<DataHandler>();
  const [isLoading, setIsLoading] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    const doFetch = () => {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
      )
        .then((res) => {
          if (res.status === 400) {
            setIsLoading(true);
            throw Error("couldn't fetch the data for the server");
          }
          setIsLoading(false);
          return res.json();
        })
        .then((data) => {
          if (data != null) {
            setData(data);
          } else {
            setIsLoading(false);
          }
        });
    };

    //the call to the api gets triggered every 2 seconds once
    //the input's set
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(doFetch, 1000);
  }, [city]);

  return { data, isLoading };
};

export default useFetchWeatherData;
