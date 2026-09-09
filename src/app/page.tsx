import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Award,
  Globe,
  TrendingUp,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-4 pb-12 md:pt-8 md:pb-16 lg:pt-8 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm px-4 py-1">
                  <Award className="w-3 h-3 mr-2" />
                  President&apos;s Awardee
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Engineering Excellence. Youth Leadership. Global Impact.
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Assistant Manager at Hindustan Zinc Ltd | National Youth Icon
                  (NSS) | International Youth Delegate
                </p>
                <p className="text-lg text-muted-foreground">
                  Driving Sustainable Development Through Technology &
                  Leadership
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/about">
                  <Button size="lg" className="gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Get in Touch
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">₹27Cr+</p>
                  <p className="text-sm text-muted-foreground">
                    Annual Savings
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">3+ Years</p>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">2000+</p>
                  <p className="text-sm text-muted-foreground">Youth Led</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">Global</p>
                  <p className="text-sm text-muted-foreground">
                    Representative
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/upload/GSR_7862.JPG"
                  alt="Anuj Phalswal - President's Awardee receiving award"
                  fill
                  className="object-cover object-[center_20%]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About Anuj</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Results-driven Mechanical/Production Engineer with 3 years of
              experience in underground mining operations and mechanical systems
              optimization at Hindustan Zinc Ltd (Vedanta Group). Specialized in
              shaft hoisting, dewatering pumps, conveyor belts, crushers, and
              reliability engineering.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Proven track record in production optimization, equipment
              redesign, and cost-saving initiatives achieving over ₹27 crores
              annual savings. President&apos;s Awardee and National Youth Icon
              driving sustainable development through technology and leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Areas of Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combining industrial engineering excellence with youth leadership
              and international cooperation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Professional Interests */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Professional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Shaft Hoisting & Vertical Transport Systems
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Mine Productivity Optimization
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Industrial Safety & Risk Mitigation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Mechanical & Mining Systems Engineering
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Asset Reliability & Maintenance Strategy
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Leadership & Policy */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Leadership & Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Youth Empowerment & Volunteerism
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      International Youth Diplomacy
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      India–Russia Strategic Cooperation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Sustainable Development Goals (SDGs)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Skill Development & Leadership Training
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Impact */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Global Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">India–Russia Youth Forums</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      World Youth Festival Delegate
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      International Business Week Speaker
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Critical Minerals Collaboration
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Sports & Cultural Exchange Programs
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognized for excellence in engineering and youth leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-2" />
                <CardTitle>President&apos;s Awardee</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Government of India recognition for outstanding contribution
                  to youth development
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-2" />
                <CardTitle>National Youth Icon</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Recognized by National Service Scheme (NSS) for exemplary
                  leadership
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-2" />
                <CardTitle>International Delegate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Represented India at global youth forums and international
                  dialogues
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Industry Leader</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Assistant Manager at Hindustan Zinc Ltd driving multi-crore
                  value creation
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let&apos;s Collaborate
            </h2>
            <p className="text-lg text-muted-foreground">
              If you are looking for collaboration in engineering excellence,
              youth development, international cooperation, or sustainable
              development initiatives, feel free to connect.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline">
                  View Projects
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              📩 Open to speaking engagements, forums, policy dialogues, and
              collaborative projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
