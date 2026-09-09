import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Briefcase, Award, TrendingUp, Shield, Zap, Building2, Calendar, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const experienceData = [
  {
    company: "Hindustan Zinc Ltd (Vedanta Group)",
    position: "Assistant Manager – Section In-charge",
    location: "SK Shaft",
    period: "August 2022 – Present",
    type: "Current Role",
    icon: Building2,
    responsibilities: [
      "Managing mine production and service shaft operations with dual compartments",
      "Section In-charge for Material Loading Conveyor belt, Crusher, Dewatering system, Ventilation fan commissioning",
      "Oversight of screw compressors (4 units), 560 kW centrifugal dewatering pumps, conveyors, winders, hydraulics, and crushers",
      "Visited mines, working in Mill processing and HEMM workshop, supervising the safety conditions",
      "Preparation of different work procedures, allocations and coordination for inspection of work with business partners",
      "Preparation of different types of work permits and erection schemes for mechanical activities",
      "Attended Permit to Work training classes, identify and control the hazards, site visit with client, preparation for site audit",
      "Module owner of Conveyor safety and material handling",
      "Involved in Preparation of Project Execution Plan in close coordination with senior team members",
      "Troubleshooting mechanical malfunctions and breakdowns, as well as performing repairs",
      "Documenting processes and maintaining mechanical service records",
      "Monitoring the availability of parts and replenishing supplies",
      "Training co-workers on the safe and efficient use of mechanical machinery and equipment",
      "Maintaining a tidy work environment and adhering to industry regulations",
      "Managing daily data on Excel like spare parts availability, maintenance time, idle time, breakdown time",
      "Preparing monthly KPIs dashboard",
      "Using SAP for material Handling",
      "Performing weekly NDT - vibration testing on wire ropes via Intros MU-B (Russia Make)",
      "Supervised shaft hoisting operations including skip & cage systems, conveyor belts, pumps, and compressors",
      "Led risk assessments and safety audits for underground mechanical systems",
      "Managed project execution for structural and equipment modifications to improve mine output"
    ],
    keyAchievements: [
      {
        title: "Rope Replacement Methodology Optimization",
        impact: "Reduced hoist rope replacement time from 15 to 6 days, adding 2 lakh tonnes annual ore hoisting. Achieved ₹4 crores annual savings through efficiency improvement."
      },
      {
        title: "Shaft Partition Work (Safety & Productivity)",
        impact: "Installed screen brattice along 1 km shaft for simultaneous skip and cage operations. Increased hoisting by 61,000 tonnes/month, generating ₹1.05 crores/month recurring benefit."
      },
      {
        title: "Grizzly Redesign & Debottlenecking",
        impact: "Redesigned grizzly structures to withstand large boulders, reducing downtime by 45 days annually. Achieved ₹19 crores annual savings through increased equipment availability. Redesigned and replaced grizzlies 2 Orepass and 1 wastepass."
      },
      {
        title: "Skip Dump Box Removal Infrastructure",
        impact: "Engineered modifications for offline maintenance at the head gear area. Added 1.6 lakh tonnes ore hoisting annually, saving ₹3 crores."
      }
    ],
    outcomes: [
      { value: "₹27 Crores+", label: "Total Annual Savings" },
      { value: "Enhanced", label: "Safety and operational reliability" },
      { value: "Reduced", label: "Downtime and maintenance cycles" }
    ]
  }
]

const internships = [
  {
    company: "NMBA (Ministry of Social Justice & Empowerment)",
    position: "Summer Intern",
    location: "Delhi",
    period: "Nov 2020 – June 2021",
    description: "Initiative to create awareness about drug abuse by the Ministry of Social Justice and Empowerment.",
    achievements: [
      "Headed Database of 20+ volunteers admitted under the Initiative",
      "Generated more than 1.5 lakh of Social Media Reach for the initiative on various platforms",
      "Accomplished more than 50x reach than other volunteers in the initiative"
    ]
  },
  {
    company: "Internshala",
    position: "Engineering Intern",
    period: "Completed",
    description: "The training consisted of Introduction to 3D Printing, Principles, and Technology modules, preparing 3D Models, Slicing Models, Printing and Post Printing, Industrial Applications of 3D Printing."
  },
  {
    company: "Delhi Jal Board (Govt of NCT Delhi)",
    position: "Survey cum Inspection Intern",
    location: "Delhi",
    period: "Dec 2021 – Jan 2022",
    description: "Administered as an Inspection Intern, reviewed more than 500 MR Data of the commercial Properties at Rajendra Nagar, Delhi."
  }
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-12 md:py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading engineering excellence in the metal and mineral sector with proven impact
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 ml-8">
            <Briefcase className="h-6 w-6 text-primary" />
            Work Experience
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {experienceData.map((exp, index) => {
              const Icon = exp.icon
              return (
                <div key={index}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-2xl">{exp.position}</CardTitle>
                              <CardDescription className="text-base">{exp.company}</CardDescription>
                              <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 mt-4">
                            <Badge variant="default" className="gap-1">
                              <CheckCircle className="h-3 w-3" />
                              {exp.type}
                            </Badge>
                            <Badge variant="outline" className="gap-1">
                              <Calendar className="h-3 w-3" />
                              {exp.period}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Responsibilities */}
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary" />
                          Key Responsibilities
                        </h3>
                        <ul className="space-y-2 max-h-96 overflow-y-auto">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      {/* Key Achievements */}
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          Key Achievements
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {exp.keyAchievements.map((achievement, idx) => (
                            <Card key={idx} className="bg-muted/50">
                              <CardContent className="pt-4">
                                <h4 className="font-semibold text-sm mb-2">{achievement.title}</h4>
                                <p className="text-xs text-muted-foreground">{achievement.impact}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* Key Outcomes */}
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          Impact Summary
                        </h3>
                        <div className="grid sm:grid-cols-3 gap-4">
                          {exp.outcomes.map((outcome, idx) => (
                            <div key={idx} className="p-4 bg-muted/50 rounded-lg text-center">
                              <p className="text-xl font-bold text-primary">{outcome.value}</p>
                              <p className="text-sm text-muted-foreground mt-1">{outcome.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* Internships */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 ml-4">
            <Zap className="h-6 w-6 text-primary" />
            Internships & Training
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {internships.map((internship, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Briefcase className="h-4 w-4 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">Internship</Badge>
                  </div>
                  <CardTitle className="text-lg">{internship.position}</CardTitle>
                  <CardDescription>{internship.company}</CardDescription>
                  {internship.location && <p className="text-xs text-muted-foreground">{internship.location}</p>}
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{internship.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{internship.description}</p>
                  {internship.achievements && (
                    <ul className="space-y-1">
                      {internship.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 mt-0.5 flex-shrink-0 text-primary" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Workplace & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/upload/IMG-20230730-WA0181.jpg"
                alt="Workplace"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/upload/IMG20211214155933.jpg"
                alt="Award Ceremony"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/upload/20231001_121235.jpg"
                alt="BTP"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-center">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold mb-2">3+ Years</p>
                  <p className="text-sm opacity-90">Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold mb-2">₹27Cr+</p>
                  <p className="text-sm opacity-90">Value Creation</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold mb-2">4 Major</p>
                  <p className="text-sm opacity-90">Key Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold mb-2">3+</p>
                  <p className="text-sm opacity-90">Internships</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
