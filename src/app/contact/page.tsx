import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, Phone, MapPin, Instagram, Linkedin, Send, Globe, Users, Building, Briefcase } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "anujphalswal@gmail.com",
    link: "mailto:anujphalswal@gmail.com",
    description: "For professional inquiries and collaborations"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91-8860232251",
    link: "tel:+918860232251",
    description: "Available for business inquiries (Mon-Fri)"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "India",
    link: null,
    description: "Based in India, open to global opportunities"
  }
]

const collaborationAreas = [
  {
    icon: Building,
    title: "Engineering Projects",
    description: "Collaborations in mining engineering, industrial systems, and process optimization"
  },
  {
    icon: Users,
    title: "Youth Development",
    description: "Speaking engagements, youth mentorship, and leadership programs"
  },
  {
    icon: Globe,
    title: "International Cooperation",
    description: "Cross-border partnerships, youth diplomacy, and global initiatives"
  },
  {
    icon: Briefcase,
    title: "Speaking Engagements",
    description: "Keynote speeches, panel discussions, and policy dialogues"
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 md:py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let&apos;s collaborate to create impact through engineering excellence, youth empowerment, and sustainable development
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {contactMethods.map((contact, index) => {
            const Icon = contact.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{contact.title}</CardTitle>
                  <CardDescription>{contact.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {contact.link ? (
                    <Link href={contact.link}>
                      <Button variant="outline" className="w-full">
                        {contact.value}
                      </Button>
                    </Link>
                  ) : (
                    <p className="font-semibold">{contact.value}</p>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Social Media */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Connect on Social Media</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Instagram className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Instagram</CardTitle>
                    <CardDescription>@anuj.phalswal</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Youth engagement, events, and personal updates
                </p>
                <Link href="https://www.instagram.com/anuj.phalswal/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    Follow on Instagram
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">LinkedIn</CardTitle>
                    <CardDescription>Professional Updates</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Professional achievements and thought leadership
                </p>
                <Link href="https://www.linkedin.com/in/anujphalswal" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    Connect on LinkedIn
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Email</CardTitle>
                    <CardDescription>Direct Contact</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  For professional inquiries and collaborations
                </p>
                <Link href="mailto:anujphalswal@gmail.com">
                  <Button variant="outline" className="w-full">
                    Send Email
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Collaboration Areas */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Open for Collaboration</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {collaborationAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{area.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Profile Image */}
        <div className="mb-12 max-w-md mx-auto">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/upload/F7SCqUcXAAAnoi2.jpeg"
              alt="Anuj Phalswal"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CTA Card */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Let&apos;s Create Impact Together</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If you are looking for collaboration in engineering excellence, youth development,
                  international cooperation, or sustainable development initiatives, feel free to connect.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="mailto:anujphalswal@gmail.com">
                    <Button size="lg" className="gap-2">
                      <Send className="w-4 h-4" />
                      Send a Message
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/anujphalswal" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline">
                      Connect on LinkedIn
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground">
                  📩 Open to speaking engagements, forums, policy dialogues, and collaborative projects.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Developer Credit - Less Visible */}
        <div className="text-center mt-12 mb-8">
          <p className="text-xs text-muted-foreground/50">
            Website developed by <span className="font-semibold">Masham</span>
          </p>
          <p className="text-[10px] text-muted-foreground/40">
            B.Tech Mathematics and Computing • mohd.masham@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}
