import { ArrowRight, Code, Cloud, Sparkles, Shield, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ReactNode } from 'react';

export default function Services() {
  interface services {
    icon: ReactNode; // Type for the icon
    title: string;
    description: string;
    
  }
  
  const services:services []= [
    {
      icon: <Sparkles className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />,
      title: "Artificial Intelligence",
      description: "Leverage the power of AI to transform your business with intelligent solutions.",
    },
    {
      icon: <Code className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />,
      title: "Application Development",
      description: "Build scalable and robust applications tailored to your business needs.",
    },
    {
      icon: <Cloud className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />,
      title: "Cloud & Database",
      description: "Optimize your infrastructure with cloud solutions and efficient database management.",
    },
    {
      icon: <Shield className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />,
      title: "Compliance",
      description: "Ensure your business meets all regulatory requirements and security standards.",
    },
    {
      icon: <Users className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />,
      title: "On Demand Talent",
      description: "Access skilled professionals when you need them for project success.",
    },
  ]

  return (
    <section className="px-2 md:px-6 py-16 lg:px-12 bg-blue-50 container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Services</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          We offer comprehensive solutions to help your business grow and succeed in the digital age.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className='bg-transparent rounded-lg border-none text-card-foreground shadow-none'>
            <CardHeader>
              <div className="mb-4 p-2 border  w-16 h-16 items-center justify-center text-center relative  bg-blue-500 rounded-[56%_44%_70%_30%/30%_54%_46%_70%] animate-water-wave">{service.icon}</div>
              <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                href="#" 
                className="text-blue-600 hover:text-blue-700 inline-flex items-center group"
              >
                Learn more{" "}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

