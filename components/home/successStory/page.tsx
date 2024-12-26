import { ArrowRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'

interface CaseStudy {
  category: string
  metric: string
  title: string
  description: string
  image: string
}

const caseStudies: CaseStudy[] = [
  {
    category: "EdTech",
    metric: "Growth: 2M+ Users",
    title: "College Advisor: Revolutionizing College Admissions",
    description: "How we transformed college admissions guidance by building a platform that grew from 800 to over 2 million users.",
    image: "/success/image1.png",
  },
  {
    category: "Healthcare",
    metric: "Innovation in Pharma",
    title: "PathForward: Next-Gen Pharmaceutical Formulation",
    description: "How we built a state-of-the-art digital platform that revolutionized pharmaceutical and dietary supplement formulation processes.",
    image: "/success/image.png",
  },
]

export default function SuccessStory() {
  return (
    <section className="px-2 md:px-6 py-16 lg:px-12 container bg-blue-50 mx-auto">
        <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Success Stories</h2>
        <p className="text-gray-600 text-lg md:text-xl mb-16">
        Discover how we have helped businesses achieve their digital transformation goals
        </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((study) => (
          <Card key={study.title} className="overflow-hidden text-start hover:shadow-lg transition-shadow">
            <div className="aspect-[16/9] relative">
              <Image
                src={study.image}
                alt=""
                className="object-cover w-full h-full"
                height={400}
                width={600}
              />
            </div>
            <CardHeader className="space-y-2">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="text-blue-600 bg-blue-50">
                  {study.category}
                </Badge>
                <span className="text-sm text-gray-500">{study.metric}</span>
              </div>
              <h3 className="text-xl font-bold">{study.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{study.description}</p>
            </CardContent>
            <CardFooter>
              <Link
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Read Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      </div>
    </section>
  )
}

