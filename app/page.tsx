import HomeBanner from "@/components/home/homebanner/page";
import Services from "@/components/home/services/page";
import Testimonial from "@/components/home/testimonial/page";


export default function Home() {
  return (
    <>
    
    <HomeBanner/>
    <div className="py-10">
    <Services/>
    <Testimonial/>
    </div>
    </>
  );
}
