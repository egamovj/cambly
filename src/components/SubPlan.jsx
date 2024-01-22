import Complete from "../assets/icons/complete.svg";
import Group from "../assets/icons/group.svg";
import Kids from "../assets/icons/kids.svg";
import Done from "../assets/icons/done.svg";
import Right from "../assets/icons/arrow.svg";
import MiniLesson from "../assets/icons/minilesson.svg";

const SubPlan = () => {
  return (
    <div className="pl-[160px] px-[320px] mt-[63px]">
      <div className="pl-[80px]">
        <h2 className="text-[40px] font-black text-[#4D95EA] text-center mb-[30px]">
          Pick the plan that works for you
        </h2>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between gap-5">
            <div className="flex flex-col bg-[#F7F7F7] pt-[40px] px-8 pb-6 rounded-2xl">
              <div className="flex items-center gap-5 mb-6">
                <img src={Complete} alt="Cambly" />
                <span className="text-[28px] font-bold">Complete</span>
              </div>
              <p className="mb-6">Full access to all of Cambly</p>
              <div className="flex items-center gap-3 mb-[14px]">
                <img src={Done} alt="" />
                <p>Our most comprehensive experience</p>
              </div>
              <div className="flex items-center gap-3 mb-[14px]">
                <img src={Done} alt="" />
                <p>Practice 1:1 or in a group</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={Done} alt="" />
                <p>Schedule ahead or on demand</p>
              </div>
              <div className="flex flex-col mt-[84px]">
                <span>Starting from</span>
                <span>
                  <span className="text-[28px] font-bold">$44</span>/month
                </span>
                <button className="flex items-center justify-center gap-[9.4px] mt-4 text-base font-medium bg-[#FFC929] py-[13.2px]  rounded-2xl">
                  Sign up <img src={Right} alt="" />
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-[#F7F7F7] pt-[40px] px-8 pb-6 rounded-2xl">
              <div className="flex items-center gap-5 mb-6">
                <img src={Group} alt="Cambly" />
                <span className="text-[28px] font-bold">Group</span>
              </div>
              <p className="mb-6">Only group lessons</p>
              <div className="flex items-center gap-3 mb-[14px]">
                <img src={Done} alt="" />
                <p>Real-world conversation experience</p>
              </div>
              <div className="flex items-center gap-3 mb-[14px]">
                <img src={Done} alt="" />
                <p>Work with a tutor and 1-2 other students</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={Done} alt="" />
                <p>For adults 21+</p>
              </div>
              <div className="flex flex-col mt-[84px]">
                <span>Starting from</span>
                <span>
                  <span className="text-[28px] font-bold">$19</span>/month
                </span>
                <button className="flex items-center justify-center gap-[9.4px] mt-4 text-base font-medium bg-[#FFC929] py-[13.2px] rounded-2xl">
                  Sign up <img src={Right} alt="" />
                </button>
              </div>
            </div>
            <div className="flex flex-col bg-[#F7F7F7] pt-[40px] px-8 pb-6 rounded-2xl">
              <div className="flex items-center gap-5 mb-6">
                <img src={Kids} alt="Cambly" />
                <span className="text-[28px] font-bold">Kids</span>
              </div>
              <p className="mb-6">For kids under 18</p>
              <div className="flex items-center gap-3 mb-[14px]">
                <img src={Done} alt="" />
                <p>1:1 time with specialized tutors</p>
              </div>
              <div className="flex items-center gap-3 mb-[14px]">
                <img src={Done} alt="" />
                <p>Beginner to advanced courses available</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={Done} alt="" />
                <p>Fun games and activities</p>
              </div>
              <div className="flex flex-col mt-[84px]">
                <span>Starting from</span>
                <span>
                  <span className="text-[28px] font-bold">$89</span>/month
                </span>
                <button className="flex items-center justify-center gap-[9.4px] mt-4 text-base font-medium bg-[#FFC929] py-[13.2px] rounded-2xl">
                  Sign up <img src={Right} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between bg-[#EFF6FA] rounded-2xl px-10 py-8">
            <img src={MiniLesson} alt="Cambly MiniLesson" />
            <div>
              <span className="text-[20px] font-bold">Cambly MiniLesson</span>
              <p>Practice speaking English with Cambly AI for free today!</p>
            </div>
            <button className="flex items-center justify-center gap-[9.4px] mt-4 text-base font-medium bg-[#FFC929] py-[13.2px] px-5 rounded-2xl">
              Sign up <img src={Right} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubPlan;
