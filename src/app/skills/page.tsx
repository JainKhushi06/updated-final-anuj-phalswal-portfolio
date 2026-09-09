import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Wrench, Users, Globe, Zap, Shield, Target, Award, BookOpen } from 'lucide-react'

const technicalSkills = [
  "Shaft Hoisting Systems",
  "Mine Production Management",
  "Dewatering Pumps",
  "Conveyor Belts",
  "Crushers",
  "Risk Assessment & Safety Audits",
  "Mechanical Systems & Hydraulics",
  "Maintenance Planning",
  "Process Optimization",
  "CAD Modelling Software",
  "Welding",
  "Casting",
  "Modern Manufacturing Processes",
  "Vibration Analysis",
  "MATLAB",
  "NDT Testing",
  "5S Methodology",
  "Lean Six Sigma",
  "Value Engineering",
  "Debottlenecking",
  "Hoisting & Winder Operations",
  "RCA (Root Cause Analysis)",
  "Supply Chain Management",
  "Inventory Management",
  "Material Handling",
  "SAP for Material Handling",
  "Excel",
  "Power BI",
  "PowerPoint"
]

const softSkills = [
  "Strategic Leadership",
  "Public Speaking",
  "Stakeholder Management",
  "International Representation",
  "Policy Dialogue",
  "Event & Program Management",
  "Leadership",
  "Time Management",
  "Practical Problem Solving",
  "Team Work",
  "Event Management",
  "Multidisciplinary Coordination",
  "Liaising & Coordination",
  "Project Management",
  "Planning",
  "Safety Compliances"
]

const certifications = [
  { title: "Heat Treatment of Steel", issuer: "TATA Steel" },
  { title: "Basic Metallurgy", issuer: "TATA Steel" },
  { title: "Primary Steel Making", issuer: "TATA Steel" },
  { title: "Electric Vehicles & Public Charging Station Workshop", issuer: "ESTC (MSME)" },
  { title: "Permit to Work Training", issuer: "Hindustan Zinc Ltd" }
]

const professionalMemberships = [
  "Engineers Australia - Member & Sustainable Engineering Society",
  "National Society of Professional Engineers - Member",
  "Institution of Mechanical Engineers - Member",
  "International Association of Engineers - Member"
]

const coreCompetencies = [
  {
    category: "Planning & Management",
    skills: ["Planning", "Project Management", "Supply Chain Management", "Liaising & Coordination"]
  },
  {
    category: "Process Improvement",
    skills: ["5S", "Lean Six Sigma Methodology", "Value Engineering", "Debottlenecking"]
  },
  {
    category: "Technical Operations",
    skills: ["Hoisting & Winder Operations", "Safety Compliances", "RCA", "Multidisciplinary Coordination", "NDT Testing"]
  },
  {
    category: "Knowledge Areas",
    skills: ["Industry Safety Standards", "Automotive Engineering", "Continuous Improvement"]
  }
]

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-12 md:py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive blend of technical engineering excellence and leadership capabilities
          </p>
        </div>

        {/* Core Competencies */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Core Competencies</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {coreCompetencies.map((competency, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{competency.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {competency.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Wrench className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Technical Skills</h2>
              <p className="text-muted-foreground">Engineering Excellence & Industrial Expertise</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm">{skill}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Leadership & Soft Skills</h2>
              <p className="text-muted-foreground">Strategic Leadership & Communication Excellence</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {softSkills.map((skill, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm">{skill}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Certifications & Training</h2>
              <p className="text-muted-foreground">Professional Development</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Memberships */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Professional Memberships</h2>
              <p className="text-muted-foreground">Global Professional Recognition</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {professionalMemberships.map((membership, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{membership}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Summary Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-center">Professional Profile Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Wrench className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <p className="text-3xl font-bold mb-1">3+</p>
                  <p className="text-sm opacity-90">Years Experience</p>
                </div>
                <div className="text-center">
                  <Zap className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <p className="text-3xl font-bold mb-1">₹27Cr+</p>
                  <p className="text-sm opacity-90">Value Created</p>
                </div>
                <div className="text-center">
                  <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <p className="text-3xl font-bold mb-1">4+</p>
                  <p className="text-sm opacity-90">Professional Memberships</p>
                </div>
                <div className="text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <p className="text-3xl font-bold mb-1">5+</p>
                  <p className="text-sm opacity-90">Certifications</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
