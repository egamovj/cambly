import Shoji from "../assets/images/shoji.webp";
import Liu from "../assets/images/liu.webp";
import Ghareeb from "../assets/images/ghareeb.webp";
import right from "../assets/icons/arrow.svg";

const Peoples = () => {
  return (
    <>
      <div className="flex gap-6 px-[170px] mb-10">
        <div className="text-center flex flex-col items-center bg-[#EFF6FA] py-8 px-5 rounded-3xl">
          <img src={Shoji} alt="" className="mb-[17px]" />
          <p className="mb-[132px] text-base">
            What I like about Cambly is that all the tutors are native English
            speakers and their high teaching quality. My English has improved a
            lot and I am having fun studying it!
          </p>
          <div className="flex flex-col">
            <span>Shoji</span>
            <span>Japan</span>
          </div>
        </div>
        <div className="text-center flex flex-col items-center bg-[#EFF6FA] py-8 px-5 rounded-3xl">
          <img src={Liu} alt="" className="mb-[17px]" />
          <p className="mb-[132px] text-base">
            What I like about Cambly is that all the tutors are native English
            speakers and their high teaching quality. My English has improved a
            lot and I am having fun studying it!
          </p>
          <div className="flex flex-col">
            <span>Shoji</span>
            <span>Japan</span>
          </div>
        </div>
        <div className="text-center flex flex-col items-center bg-[#EFF6FA] py-8 px-5 rounded-3xl">
          <img src={Ghareeb} alt="" className="mb-[17px]" />
          <p className="mb-[132px] text-base">
            What I like about Cambly is that all the tutors are native English
            speakers and their high teaching quality. My English has improved a
            lot and I am having fun studying it!
          </p>
          <div className="flex flex-col">
            <span>Shoji</span>
            <span>Japan</span>
          </div>
        </div>
      </div>
      <div className="px-[170px] flex flex-col gap-10 items-center text-center mb-20">
        <h2 className="text-[#4D95EA] text-[40px] font-black">
          Achieve your goals by learning <br /> English with Cambly
        </h2>
        <button className="flex items-center gap-2 py-[13.2px] px-5 bg-[#FBC628] rounded-2xl">
          Start learning <img src={right} alt="" />
        </button>
      </div>
    </>
  );
};

export default Peoples;
