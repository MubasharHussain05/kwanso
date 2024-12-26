import { Users, Clock, CreditCard } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

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
    image: "/placeholder.svg?height=100&width=100",
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
    image: "/placeholder.svg?height=100&width=100",
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
    image: "/placeholder.svg?height=100&width=100",
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
    image: "/placeholder.svg?height=100&width=100",
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
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-blue-600 font-semibold text-lg">Elite Tech Talent</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
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

          <div className="grid md:grid-cols-2 gap-4">
            {talents.map((talent) => (
              <Card key={talent.name} className="p-2 md:p-6">
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

                  <ul className="mt-4 space-y-2">
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
  )
}

