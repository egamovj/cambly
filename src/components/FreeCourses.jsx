import FreeCourse from "../assets/images/free.png";
import right from "../assets/icons/arrow.svg";

const FreeCourses = () => {
  return (
    <div className="pl-[274px] px-[374px] mt-[228px]">
      <div className="flex items-center bg-[#DBCA8E] rounded-2xl px-10 py-10 relative">
        <div>
          <span className="text-[28px] font-bold">Try our free resources</span>
          <p className="mt-4">
            Get a taste of Cambly with our most popular tools and guides. <br />{" "}
            No subscription required.
          </p>
          <button className="mt-8 flex items-center text-base font-medium gap-2 bg-[#FFC929] py-[13px] px-[34px] rounded-2xl">
            Join now <img src={right} alt="" />
          </button>
        </div>
        <img src={FreeCourse} alt="" className="absolute right-[20px]" />
      </div>
    </div>
  );
};

export default FreeCourses;
