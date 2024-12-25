import { Card, CardContent } from "@/components/ui/card"
import { RiDoubleQuotesL } from "react-icons/ri"
import Image from "next/image"

export default function Testimonial() {
  const testimonials = [
    {
        quote: "Kwanso impressed us with their ability to digest requirements and come back with great ideas. Their communication was exceptional throughout the project.",
        author: "Brian Mitchell",
        position: "CEO",
        company: "Bullseye",
        image: "/testimonial/image1.png", // Corrected path
      },
      {
        quote: "Kwanso excelled with project timing and met our demanding requirements, delivering great results across multiple big projects including Smart Lawn and Craftsman Club.",
        author: "Bob Boyle",
        position: "Director of Brands",
        company: "Sears",
        image: "/testimonial/image2.png", // Corrected path
      }
      
  ]

  return (
    <section className="px-2 md:px-6 py-16 lg:px-12 container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Hear from industry leaders who trust us with their digital transformation
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col h-full">
                <RiDoubleQuotesL className="text-blue-600 text-4xl mb-4" />
                
                <p className="text-gray-600 mb-8 flex-grow">
                  {testimonial.quote}
                </p>
                
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {testimonial.author}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {testimonial.position}
                    </p>
                    <p className="text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

