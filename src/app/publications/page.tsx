import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, BookOpen, Search, Globe, Award, Calendar, ExternalLink } from 'lucide-react'

const publications = [
  {
    title: "Weldability of Duplex Stainless Steels – A Review",
    journal: "E3S Web of Conferences",
    volume: "Volume 309",
    conference: "3rd International Conference on Design and Manufacturing Aspects for Sustainable Energy (ICMED-ICMPC 2021)",
    type: "Peer-Reviewed Publication",
    date: "October 7, 2021",
    description: "A comprehensive review examining the weldability characteristics of duplex stainless steels, addressing key challenges, methodologies, and best practices in welding technology."
  }
]

const researchWork = [
  {
    title: "Friction Stir Welding & Processing of Aluminium Alloys",
    type: "Undergraduate Thesis",
    focusAreas: [
      "Tool design optimization for enhanced weld quality",
      "Microstructural analysis of welded joints",
      "Defect mitigation strategies",
      "Process parameter optimization"
    ],
    impact: "Advanced understanding of friction stir welding processes and their industrial applications"
  },
  {
    title: "Study of Grain Boundaries of Welded Joints",
    type: "Major Project",
    focusAreas: [
      "Sample sectioning via Wire EDM",
      "Program creation in AutoCAD",
      "Polishing and etching of samples",
      "Microstructural analysis"
    ],
    impact: "Deep insights into the microstructure of welded joints for quality assessment"
  }
]

const academicProjects = [
  {
    title: "Gear Train Design Assembly",
    type: "Design Project",
    description: "Developed a gear train design assembly using Autodesk Inventor software. Designed various parts including gearing shafts, spur gears, bearing housing, bearings, and final assembly of simple gear train.",
    tools: ["Autodesk Inventor", "CAD Modeling"]
  },
  {
    title: "Solar Cell Based Car (Solar Storm)",
    type: "Team Project",
    description: "Worked on development of Solar Cell based car in the NSUT Solar Car concept. Played important part in vehicle dynamics, reviewed quality checks, inspected design work, and helped qualify each round with minimal problems.",
    tools: ["Vehicle Dynamics", "Quality Control", "Design Review"]
  },
  {
    title: "Joining of Pipes via Friction Stir Welding (FSW)",
    type: "Minor Project",
    description: "Designed the tool and fixtures on Central Lathe machine, performed runs on pipes using vertical milling machine with L4 combination.",
    tools: ["Friction Stir Welding", "Lathe Machine", "Vertical Milling"]
  },
  {
    title: "Water Project",
    type: "Community Initiative",
    description: "Established a common drinking water facility at university adopted village as part of community service initiative.",
    impact: "Provided clean drinking water access to rural community"
  }
]

const researchInterests = [
  {
    icon: Search,
    title: "Materials Engineering",
    description: "Research in welding technologies, material properties, and metallurgical processes"
  },
  {
    icon: Globe,
    title: "Sustainable Technologies",
    description: "Focus on environmentally friendly engineering solutions and sustainable development"
  },
  {
    icon: Award,
    title: "Industrial Innovation",
    description: "Applied research addressing real-world industrial challenges and optimization"
  }
]

export default function PublicationsPage() {
  return (
    <div className="min-h-screen py-12 md:py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Publications & Research</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic contributions and research work in materials engineering and industrial innovation
          </p>
        </div>

        {/* Publications Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Publications</h2>
              <p className="text-muted-foreground">Peer-reviewed research publications</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <Badge className="mb-2">{pub.type}</Badge>
                      <CardTitle className="text-xl mb-2">{pub.title}</CardTitle>
                      <CardDescription className="text-base">
                        {pub.journal}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{pub.date}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1">Conference</p>
                    <p className="text-sm text-muted-foreground">{pub.conference}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1">Volume</p>
                    <p className="text-sm text-muted-foreground">{pub.volume}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1">Abstract</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pub.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Work */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Research Work</h2>
              <p className="text-muted-foreground">Academic theses and research projects</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {researchWork.map((work, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="mb-2 w-fit">{work.type}</Badge>
                  <CardTitle className="text-xl">{work.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-2">Focus Areas</p>
                    <ul className="space-y-2">
                      {work.focusAreas.map((area, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1">Impact</p>
                    <p className="text-sm text-muted-foreground">{work.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <ExternalLink className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Academic Projects</h2>
              <p className="text-muted-foreground">Design and development projects</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {academicProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2">{project.type}</Badge>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-">{project.description}</p>
                  {project.tools && (
                    <div>
                      <p className="text-xs font-semibold mb-2 text-muted-foreground">Tools/Technologies:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tools.map((tool, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.impact && (
                    <div className="pt-2 border-t">
                      <p className="text-xs font-semibold mb-1 text-muted-foreground">Impact:</p>
                      <p className="text-xs text-muted-foreground">{project.impact}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Interests */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Research Interests</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {researchInterests.map((interest, index) => {
              const Icon = interest.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-2">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{interest.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{interest.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Summary Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-center">Academic Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <FileText className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <p className="text-3xl font-bold mb-1">1+</p>
                  <p className="text-sm opacity-90">Publications</p>
                </div>
                <div className="text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <p className="text-3xl font-bold mb-1">2+</p>
                  <p className="text-sm opacity-90">Research Works</p>
                </div>
                <div className="text-center">
                  <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <p className="text-3xl font-bold mb-1">4+</p>
                  <p className="text-sm opacity-90">Academic Projects</p>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <p className="text-3xl font-bold mb-1">Peer</p>
                  <p className="text-sm opacity-90">Reviewed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
