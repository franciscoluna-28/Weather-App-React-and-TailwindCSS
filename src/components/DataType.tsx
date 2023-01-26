type DataHandler = {
  data: currentData | any;
};

type currentData = {
  current: {
    condition: {
      text: string;
      icon: URL;
    };
    gust_mph: number;
    humidity: number;
    IsDay: boolean;
    precip_mm: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    wind_kph: number;
  };

  location: {
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: string;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
  };
};

export default DataHandler;
