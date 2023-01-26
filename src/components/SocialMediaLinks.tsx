import Twitter from "../assets/img/twitter.svg";
import Github from "../assets/img/github.svg";

function SocialMediaIcons() {
  return (
    <div className="flex justify-center gap-6 m-auto pt-12 sm:mb-12 md:mb-12">
      <a href="https://twitter.com/FranLunDev?t=7SNDsTfyvCoo_oeVtASaOA&s=09">
        <img
          src={Twitter}
          className="w-8 hover:scale-125 ease-out duration-200"
        ></img>
      </a>
      <a href="https://github.com/franciscoluna-28">
        <img
          src={Github}
          className="w-8 hover:scale-125 ease-out duration-200"
        ></img>
      </a>
    </div>
  );
}

export default SocialMediaIcons;
