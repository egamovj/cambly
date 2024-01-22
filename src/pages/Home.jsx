import Header from "../components/Header";
import Tutors from "../components/Tutors";
import SubPlan from "../components/SubPlan";
import FreeCourses from "../components/FreeCourses";
import CoursesSwipe from "../components/Courses";
import ForInterest from "../components/ForInterest";
import Peoples from "../components/Peoples";

const Home = () => {
  return (
    <div>
      <Header />
      <Tutors />
      <SubPlan />
      <FreeCourses />
      <CoursesSwipe />
      <ForInterest />
      <Peoples />
    </div>
  );
};

export default Home;
