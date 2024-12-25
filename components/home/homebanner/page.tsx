import Image from "next/image";
import backgroundImage from "../../../public/banner/image.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


const HomeBanner = () => {
  return (
    <>
     <section className="py-12 md:py-24">
      <div className="container px-2 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
         
          {/* Content */}
          <div className="flex flex-col space-y-8 md:w-1/2">

          <div className="flex sm:flex-row">

        <span className="border justify-center items-center gap-6 text-center flex border-blue-300 h-8  px-8 text-blue-500 rounded-3xl">
       <h2 className=" font-semibold">Enterprise Solutions
       </h2>
       <h3 className="text-md font-medium">AI-First Approach</h3>
      </span>

      </div>

            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Transform Industries with <span className="text-blue-500"> Intelligent Technology</span>
            </h1>
            <p className="max-w-[550px] text-gray-600 leading-relaxed tracking-wide">
           From healthcare to finance, retail to education, we provide AI-powered, cloud-native solutions that accelerate digital transformation. Our scalable, enterprise-grade platforms enhance operational efficiency by up to 60%, ensuring seamless compliance with industry regulations.
          </p>


            <div className="flex">
            <Link href="/marketing-services/">
							<div className="py-2 md:py-4 px-10 md:px-8 bg-blue-700 hover:bg-blue-500 inline-block rounded-lg text-white font-medium ">
							Start Your Journey
							</div>
						</Link>

              
            <Link 
                href="#" 
                className="text-blue-600 hover:text-blue-700 py-2 md:py-4 px-10 md:px-8 inline-flex items-center group"
              >
                <div className="  inline-block rounded-lg text-black font-medium ">
							
							</div>
                View Success Stories  
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              
            </div>
          </div>
          
          {/* Image */}
          <div className="md:w-1/2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl md:aspect-[3/2] lg:aspect-[16/9]">
              <Image
                alt="Hero"
                src={backgroundImage}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HomeBanner;
