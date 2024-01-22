import Joshua from "../assets/images/Joshua.png";
import Whitney from "../assets/images/Whitney.png";
import Nikola from "../assets/images/Nikola.png";
import Alana from "../assets/images/Alana.png";
import Star from "../assets/icons/star.svg";

const Videos = () => {
  return (
    <div className="pl-[160px] px-[320px] relative">
      <div className="flex gap-6 pl-[80px] absolute top-[-50px]">
        <div className="flex flex-col bg-white p-3 rounded-2xl shadow-md">
          <img src={Joshua} alt="Joshua" />
          <div className="flex flex-col gap-[6.2px] px-2  pt-[14px]">
            <div className="flex justify-between">
              <span className="text-[20px] font-bold">Joshua</span>
              <img src={Star} alt="Star icon" />
            </div>
            <span>United States</span>
          </div>
        </div>
        <div className="flex flex-col bg-white p-3 rounded-2xl shadow-md">
          <img src={Whitney} alt="Whitney" />
          <div className="flex flex-col gap-[6.2px] px-2 pt-[14px]">
            <div className="flex justify-between">
              <span className="text-[20px] font-bold">Whitney</span>
              <img src={Star} alt="Star icon" />
            </div>
            <span>Australia</span>
          </div>
        </div>
        <div className="flex flex-col bg-white p-3 rounded-2xl shadow-md">
          <img src={Nikola} alt="Nikola" />
          <div className="flex flex-col gap-[6.2px] px-2 pt-[14px]">
            <div className="flex justify-between">
              <span className="text-[20px] font-bold">Nikola</span>
              <img src={Star} alt="Star icon" />
            </div>
            <span>United States</span>
          </div>
        </div>
        <div className="flex flex-col bg-white p-3 rounded-2xl shadow-md">
          <img src={Alana} alt="Alana" />
          <div className="flex flex-col gap-[6.2px] px-2 pt-[14px]">
            <div className="flex justify-between">
              <span className="text-[20px] font-bold">Alana</span>
              <img src={Star} alt="Star icon" />
            </div>
            <span>United Kingdom</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
