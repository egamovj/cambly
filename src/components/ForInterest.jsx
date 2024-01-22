import right from "../assets/icons/arrow.svg";

const ForInterest = () => {
  return (
    <div className="pl-[160px] px-[320px] text-center mt-[63px] mb-[224px]">
      <div className="flex flex-col justify-center items-center gap-[21px]">
        <span className="text-[40px] text-[#4D95EA] font-black">
          Courses for every skill level and interest
        </span>
        <p className="text-[#191919]">
          Focus on your specific goals with our guided courses, including
          academic test prep, business English, conversation practice, and more.
        </p>
        <button className="flex items-center bg-[#FFC929] rounded-2xl py-[13.2px] px-5">
          Explore all courses <img src={right} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ForInterest;
