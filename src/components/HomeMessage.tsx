import Umbrella from "../assets/img/umbrella-dynamic-gradient.png";
import SocialMediaIcons from "./SocialMediaLinks";

function HomeMessage() {
  return (
    <div className="text-center pt-20">
      <p className="font-bold text-white text-5xl hover:scale-105 ease-out duration-300">
        Welcome to our application!
      </p>
      <br></br>
      <p className="font-light text-main-violet hover:scale-105 ease-out duration-300">
        Feel free to enter your favorite city to see its current weather.
      </p>
      <img
        className="w-72 flex m-auto pt-4 hover:translate-y-4 ease-out duration-500"
        src={Umbrella}
      ></img>
      <SocialMediaIcons />
    </div>
  );
}

export default HomeMessage;
