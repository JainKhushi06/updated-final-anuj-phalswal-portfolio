import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Target, Globe, Heart, GraduationCap, Briefcase } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-6 md:py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Anuj Phalswal</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engineer by profession, Youth Leader by passion, Global Impact Maker by choice
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Photo Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/upload/F7SCqUcXAAAnoi2.jpeg"
                  alt="Anuj Phalswal"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Quick Info Cards */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Badge className="mb-2">National</Badge>
                    <p className="text-sm font-semibold">President&apos;s Awardee</p>
                    <p className="text-xs text-muted-foreground">Government of India</p>
                  </div>
                  <div>
                    <Badge className="mb-2">NSS</Badge>
                    <p className="text-sm font-semibold">National Youth Icon</p>
                    <p className="text-xs text-muted-foreground">National Service Scheme</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Current Role
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold mb-2">Assistant Manager</p>
                  <p className="text-sm text-muted-foreground">Hindustan Zinc Ltd (Vedanta Group)</p>
                  <Badge className="mt-2">Mining Engineering</Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Detailed Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction & Career Objective */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Career Objective</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Results-driven Mechanical/Production Engineer with 3 years of experience in underground mining operations and mechanical systems optimization at Hindustan Zinc Ltd (Vedanta Group). Specialized in shaft hoisting, dewatering pumps, conveyor belts, crushers, and reliability engineering.
                </p>
                <p className="text-lg leading-relaxed">
                  Proven track record in production optimization, equipment redesign, and cost-saving initiatives achieving over ₹27 crores annual savings. Currently pursuing a career in the Australian mining sector with a focus on mechanical and reliability engineering roles.
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-lg">Manufacturing Processes & Automation Engineering</p>
                  <p className="text-primary font-medium">Netaji Subhas Institute of Technology, University of Delhi (NSUT)</p>
                  <p className="text-sm text-muted-foreground">2018 - 2022 | CGPA: 8.06</p>
                </div>
                <div className="border-l-4 border-muted pl-4">
                  <p className="font-semibold">CBSE (Class XII)</p>
                  <p className="text-sm text-muted-foreground">R T Ram Sarvodaya CO-ED SSS, Delhi | 2017 - 2018</p>
                  <p className="text-sm text-muted-foreground">Aggregate: 79.20%</p>
                </div>
                <div className="border-l-4 border-muted pl-4">
                  <p className="font-semibold">CBSE (Class X)</p>
                  <p className="text-sm text-muted-foreground">Golden Valley Public School, Delhi | 2015 - 2016</p>
                  <p className="text-sm text-muted-foreground">CGPA: 8.8</p>
                </div>
              </CardContent>
            </Card>

            {/* Who I Am */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Who I Am</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  I am a young professional engineer and youth leader with over 3 years of operational experience in the metal and mineral sector at Hindustan Zinc Ltd. My core expertise lies in shaft operations, hoisting systems, dewatering infrastructure, mine safety, and productivity enhancement, where I have led multiple initiatives delivering over ₹27 crores annual value creation.
                </p>
                <p className="text-lg leading-relaxed">
                  Beyond my professional role, I am honored to be recognized as a National Youth Icon under the National Service Scheme (NSS), Government of India. I have led and organized mega national programs involving over 2,000+ participants, fostering national integration, leadership, and volunteerism.
                </p>
                <p className="text-lg leading-relaxed">
                  Internationally, I actively contribute to India–Russia youth cooperation, representing Indian youth at global forums, dialogues, and business delegations. My work focuses on bridging industry, youth, policy, and sustainable development, aligning with the UN Sustainable Development Goals (SDGs).
                </p>
                <p className="text-lg leading-relaxed font-semibold text-foreground">
                  I strongly believe that engineering solutions and empowered youth together shape nations, and my mission is to create measurable impact across industry, society, and global collaboration platforms.
                </p>
              </CardContent>
            </Card>

            {/* Vision & Mission */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  Vision & Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Vision</h3>
                  <p className="text-muted-foreground">
                    To build resilient systems, empowered youth, and a multipolar future driven by collaboration across industry, society, and international platforms.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Mission</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Drive industrial excellence through innovative engineering solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Empower youth through capacity building and leadership development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Foster international cooperation for sustainable development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Create measurable social and economic impact</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Core Values */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  Core Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Excellence</h4>
                    <p className="text-sm text-muted-foreground">
                      Striving for the highest quality in engineering solutions and leadership initiatives
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Integrity</h4>
                    <p className="text-sm text-muted-foreground">
                      Maintaining transparency, ethics, and accountability in all endeavors
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Innovation</h4>
                    <p className="text-sm text-muted-foreground">
                      Embracing creative solutions to complex challenges in industry and society
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Collaboration</h4>
                    <p className="text-sm text-muted-foreground">
                      Building partnerships across sectors, borders, and cultures for greater impact
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Areas of Focus */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-6 w-6 text-primary" />
                  Areas of Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      Professional Focus
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Shaft Hoisting Systems</li>
                      <li>• Mine Production Management</li>
                      <li>• Industrial Safety & Risk Mitigation</li>
                      <li>• Mechanical Systems Engineering</li>
                      <li>• Process Optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      Social Focus
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Youth Empowerment</li>
                      <li>• Leadership Development</li>
                      <li>• Sustainable Development (SDGs)</li>
                      <li>• International Cooperation</li>
                      <li>• Community Development</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
