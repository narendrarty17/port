import Navigation from "@/components/navigation";
import DeveloperIntro from "@/components/developerIntro";
import MyServices from "@/components/temp";
import WorkExperience from "@/components/workExperience";
import WhyHire from "@/components/whyHire";
import Testimonials from "@/components/testimonials";
import Portfolio from "@/components/myPorfolio";
import Banner from "@/components/banner";
import FromMyBlogPost from "@/components/fromMyBlogPost";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div>
      <Navigation />
      <DeveloperIntro />
      <MyServices />
      <WorkExperience />
      <WhyHire />
      <Testimonials />
      <Portfolio />
      <Banner />
      <FromMyBlogPost />
      <Footer />
    </div>
  );
}