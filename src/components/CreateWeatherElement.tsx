import { WeatherWidgetDisplay } from "./TypeIcons";

function CreateWeatherElement({ disp, icon, string }: WeatherWidgetDisplay) {
  return (
    <div className="text-center hover:scale-105 ease-out duration-300">
      <span className="block text-white font-extralight pt-1">{string}</span>
      <div className="text-white scale-125 mt-2 text-center pt-1">{icon}</div>
      <span className="block text-white mt-2 pt-1">{disp}kph</span>
    </div>
  );
}
export default CreateWeatherElement;
