import { FaRegUser } from "react-icons/fa";
import { HiMiniCube } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdFlight, MdFlightTakeoff } from "react-icons/md";
import { RiPassportLine } from "react-icons/ri";
import { MdAirlineSeatReclineNormal } from "react-icons/md";

const Flight = () => {
  return (
    <div className="bg-white w-full md:w-[80%] rounded-md shadow-lg mx-auto">
      <div className="flex justify-between items-center p-4 border-b">
        <div>
          <p className="flex gap-2 justify-between items-center">
            <span>
              <MdFlight />
            </span>
            Flight
          </p>
        </div>
        <div>
          <div className="flex justify-between items-center gap-4">
            <p className="flex gap-2 justify-between items-center">
              <span>
                <RiPassportLine />
              </span>
              Visa
            </p>
            <p className="flex gap-2 justify-between items-center">
              <span>
                <HiMiniCube />
              </span>
              Umrah
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="px-4 py-2 flex gap-4">
          <p className="flex gap-2 items-center">
            <span>
              <MdFlightTakeoff />
            </span>
            One Way
            <span>
              <IoMdArrowDropdown />
            </span>
          </p>
          <p className="flex gap-2 items-center">
            <span>
              <FaRegUser />
            </span>
            1 Passenger
            <span>
              <IoMdArrowDropdown />
            </span>
          </p>
          <p className="flex gap-2 items-center">
            <span>
              <MdAirlineSeatReclineNormal />
            </span>
            Economy
            <span>
              <IoMdArrowDropdown />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flight;
