import { Users, Clock, CreditCard } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'


interface TechBadge {
  label: string
  variant: 'blue' | 'green' | 'purple'
}

interface TalentCard {
  name: string
  role: string
  experience: string
  image: string
  badges: TechBadge[]
  achievements: string[]
}

const talents: TalentCard[] = [
  {
    name: "Sarah Johnson",
    role: "Senior Full-Stack",
    experience: "10+ years experience",
    image: "/talent/image1.png",
    badges: [
      { label: "React", variant: "blue" },
      { label: "Node.js", variant: "green" },
      { label: "TypeScript", variant: "purple" }
    ],
    achievements: [
      "Led 20+ enterprise projects",
      "Microservices architecture expert"
    ]
  },
  {
    name: "Michael Chen",
    role: "Cloud Architect",
    experience: "8+ years experience",
    image: "/talent/image2.png",
    badges: [
      { label: "AWS", variant: "blue" },
      { label: "Kubernetes", variant: "green" },
      { label: "Terraform", variant: "purple" }
    ],
    achievements: [
      "Certified AWS Solutions Architect",
      "Scaled systems to millions of users"
    ]
  },
  {
    name: "Emily Rodriguez",
    role: "AI/ML Engineer",
    experience: "6+ years experience",
    image: "/talent/image3.png",
    badges: [
      { label: "PyTorch", variant: "blue" },
      { label: "TensorFlow", variant: "green" },
      { label: "Python", variant: "purple" }
    ],
    achievements: [
      "Published ML researcher",
      "Built production AI systems"
    ]
  },
  {
    name: "David Kim",
    role: "Mobile Developer",
    experience: "7+ years experience",
    image: "/talent/image4.png",
    badges: [
      { label: "React Native", variant: "blue" },
      { label: "iOS", variant: "green" },
      { label: "Android", variant: "purple" }
    ],
    achievements: [
      "Apps with millions of downloads",
      "Cross-platform expert"
    ]
  }
]

function TechnologyBadge({ label, variant }: TechBadge) {
  const variants = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600"
  }

  return (
    <Badge variant="secondary" className={variants[variant]}>
      {label}
    </Badge>
  )
}

export default function TechTalent() {
  return (
    <>    <section className="px-2 md:px-6 py-16 bg-blue-50 lg:px-12 container">
      <div className="mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="mb-4 p-2 border  w-16 h-16 items-center justify-center text-center relative  bg-blue-500 rounded-[56%_44%_70%_30%/30%_54%_46%_70%] animate-water-wave">
            <Users className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h3 className="text-blue-600 font-semibold text-lg">Elite Tech Talent</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-4xl md:text-4xl font-bold mb-4">
              Access World-Class Tech Talent On Demand
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Skip the lengthy hiring process. Get instant access to our pre-vetted
              network of top tech professionals ready to join your team.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg border flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Rigorous Vetting Process</h3>
                  <p className="text-gray-600">
                    Only top 3% of applicants make it through our comprehensive
                    technical and soft skills assessment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg border flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Start in 48 Hours</h3>
                  <p className="text-gray-600">
                    Skip weeks of hiring. Get matched with the right talent and start
                    your project within 48 hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg border flex items-center justify-center shrink-0">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Risk-Free Trial Period</h3>
                  <p className="text-gray-600">
                    Test the fit with a 1-week trial period. Only pay if you have completely
                    satisfied.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {talents.map((talent) => (
              <Card key={talent.name} className="p-2 md:p-4">
                <CardContent className="p-0">
                  <div className="flex gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={talent.image} alt={talent.name} />
                      <AvatarFallback>{talent.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-md font-semibold">{talent.role}</h3>
                      <p className="text-blue-600">{talent.experience}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4 flex-wrap">
                    {talent.badges.map((badge) => (
                      <TechnologyBadge key={badge.label} {...badge} />
                    ))}
                  </div>

                  <ul className="mt-4 text-sm space-y-2">
                    {talent.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
     <CTASection/>
     </>

  )
}


 function CTASection() {
  return (
     <section className='px-2 md:px-6 py-16 bg-blue-500 lg:px-12 container'>
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-white text-4xl md:text-5xl font-bold">
          Ready to Transform Your Business?
        </h2>
        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
          Let`s discuss how we can help you achieve your digital transformation goals. Schedule a free consultation with our experts.
        </p>
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button 
            size="lg" 
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Schedule Consultation
          </Button>
          <Button 
            variant="link" 
            className="text-white hover:text-white/90"
          >
            View More Case Studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div> */}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/marketing-services/">
							<div className="py-2 md:py-4 px-10 md:px-8 bg-white hover:bg-blue-50 inline-block rounded-lg text-blue-500 font-medium ">
							Start Your Journey
							</div>
						</Link>

              
            <Link 
                href="#" 
                className="text-white hover:text-blue-50 py-2 md:py-4 px-10 md:px-8 inline-flex items-center group"
              >
                <div className="  inline-block rounded-lg text-black font-medium ">
							
							</div>
                View Success Stories  
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              </div>
              </div>
      </section>
    
  )
}



