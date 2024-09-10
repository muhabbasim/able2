import AboutSection from "landingpage/component/about/AboutSection";
import ChatSection from "landingpage/component/about/ChatSection";
import DashboardSection from "landingpage/component/about/DashboardSection";
import PlanLessons from "landingpage/component/about/PlanLessons";
import BannerSection11 from "landingpage/component/banner/BannerSection11";
import BlogSection8 from "landingpage/component/blog/BlogSection8";
import SubjectSection from "landingpage/component/category/SubjectSection";
import CtaSection3 from "landingpage/component/cta/CtaSection3";
import ServiceSection2 from "landingpage/component/service/ServiceSection2";
import TeacherSection5 from "landingpage/component/teacher/TeacherSection5";

const HomePage = () => {
  return (
    <div className="home-12">
      <BannerSection11 />
      <AboutSection />
      <SubjectSection />
      <DashboardSection />
      <ChatSection />
      <PlanLessons />
      <CtaSection3 style="" lastWord="Dance?" lastMsg="Now and Let's Move!" />
      <ServiceSection2/>
      <TeacherSection5 />
      <BlogSection8 />
    </div>
  );
};

export default HomePage;
