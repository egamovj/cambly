import Header from "../components/Header";
import Tutors from "../components/Tutors";
import SubPlan from "../components/SubPlan";
import FreeCourses from "../components/FreeCourses";
import CoursesSwipe from "../components/Courses";

const Home = () => {
  return (
    <div>
      <Header />
      <Tutors />
      <SubPlan />
      <FreeCourses />
      <CoursesSwipe />
    </div>
  );
};

export default Home;
