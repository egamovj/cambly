import Navbar from "./Navbar";
import ArrowRight from "../assets/icons/arrow.svg";
import GuyAndGlobe from "../assets/icons/guyandglobe.svg";

const Header = () => {
  return (
    <header className="bg-[#4D95EA]">
      <Navbar />
      <main>
        <section className="flex items-center pl-[160px] px-[320px] pt-10">
          <div className="pl-[80px] flex flex-col gap-7">
            <h1 className="text-[64px] text-white font-black">
              Online English classes with native speakers
            </h1>
            <button className="flex items-center gap-[9px] bg-[#FFC929] rounded-2xl py-[13.2px] pl-[175px]">
              Get started <img src={ArrowRight} alt="Right" />
            </button>
          </div>
          <img src={GuyAndGlobe} alt="" />
        </section>
      </main>
    </header>
  );
};

export default Header;
