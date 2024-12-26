import HomeBanner from "@/components/home/homebanner/page";
import HowWeWork from "@/components/home/howWork";
import { Industry } from "@/components/home/industryServe/page";
import Services from "@/components/home/services/page";
import SuccessStory from "@/components/home/successStory/page";
import TechTalent from "@/components/home/talent/page";
import Testimonial from "@/components/home/testimonial/page";
import TrackRecord from "@/components/home/TrackRecord/page";


export default function Home() {
  return (
    <>
    
    <HomeBanner/>
    <div className="py-10">
    <Services/>
    <Testimonial/>
    <TrackRecord/>
    < Industry/>
    <SuccessStory/>
    <HowWeWork/>
    <TechTalent/>
    </div>
    </>
  );
}
