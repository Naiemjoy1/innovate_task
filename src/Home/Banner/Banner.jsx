import img1 from "../../assets/Images/Banner/banner3.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import Flight from "../Flight/Flight";

const Banner = () => {
  return (
    <div>
      <div
        className="relative h-[500px]"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative p-20 text-white space-y-4">
          <p className="text-4xl">
            Hey Buddy! where are you <br />
            <span className="font-bold">Flying to?</span>
          </p>
          <p className="flex items-center gap-2 font-semibold">
            Explore Now
            <span className="text-2xl">
              <IoIosArrowRoundForward />
            </span>
          </p>
        </div>

        {/* Flight component */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12 w-[80%]">
          <Flight />
        </div>
      </div>
    </div>
  );
};

export default Banner;
