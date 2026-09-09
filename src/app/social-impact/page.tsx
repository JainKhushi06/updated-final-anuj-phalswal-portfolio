import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Users, Award, Globe, Leaf, HandHeart, Trophy, Calendar, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const nssInitiatives = [
  {
    title: "President, National Service Scheme NSUT",
    period: "January 2020 – April 2021",
    description: "Led the NSS unit at Netaji Subhas Institute of Technology, driving youth development initiatives.",
    achievements: [
      "Established formal relationships with more than 10 NSS units of different Colleges",
      "Handled the conduct of more than 150 events in both online and offline events",
      "Organized various national level seminars with more than 5000 participants",
      "Developed & maintained an open-source crowd-source platform during the 2nd Wave of COVID, it will help more than 100 beneficiaries"
    ]
  },
  {
    title: "State Head- Delhi, NPC",
    period: "2024 – Present",
    description: "Leading youth empowerment initiatives at the state level for National Press Club.",
    achievements: [
      "Hosted more than 10 programs in the field of Youth empowerment, health, community service",
      "Recently concluded a day long India Russia Youth Dialogue session, joined by more than 500 youth from pan India",
      "Cited by the Russian Embassy in India for the Youth Dialogue initiative"
    ]
  },
  {
    title: "National Youth Icon – NSS",
    period: "2021",
    description: "Recognized as National Youth Icon under National Service Scheme (NSS), Government of India.",
    achievements: [
      "Felicitated by Regional Director- NSS",
      "Recognized by Hon'ble Vice-Chancellor, Dean Student Welfare, and University Program Coordinator",
      "Awarded for exemplary leadership and community service"
    ]
  }
]

const communityInitiatives = [
  {
    icon: Globe,
    title: "Rural Upliftment Through Technology",
    description: "Leveraging technology and innovation to improve rural infrastructure, education accessibility, and digital literacy in underserved communities."
  },
  {
    icon: Leaf,
    title: "Clean & Green Initiatives",
    description: "Leading environmental conservation drives, plantation campaigns, and awareness programs to promote sustainable living and ecological preservation."
  },
  {
    icon: Users,
    title: "Youth Mentorship & Guidance",
    description: "Providing personalized mentorship to young individuals, helping them navigate career choices, educational paths, and personal development goals."
  },
  {
    icon: HandHeart,
    title: "Volunteer Leadership",
    description: "Building and leading volunteer teams for social causes, disaster relief, community service, and national integration programs."
  },
  {
    icon: Trophy,
    title: "All-India NSS Yuva Yodha Award",
    description: "Received the prestigious award for exemplary leadership in youth development and community service."
  },
  {
    icon: Heart,
    title: "Community Awareness Work",
    description: "Felicitated by the Hon'ble Vice-Chancellor NSUT for outstanding community awareness initiatives."
  }
]

const achievementsAndAwards = [
  {
    title: "All-India NSS Yuva Yodha Award",
    description: "Received for exemplary leadership, felicitated by Regional Director- NSS and Hon'ble Vice-Chancellor, Dean Student Welfare, and University Program Coordinator."
  },
  {
    title: "Captain of Athletics Team",
    description: "Represented NSUT at 80th All India Inter-University Championship, showcasing leadership in sports."
  },
  {
    title: "Government Science Exhibition",
    description: "Participated in the Government Science Exhibition in 2018, demonstrating scientific innovation."
  },
  {
    title: "Water Project",
    description: "Established a common drinking water facility at university adopted village, creating sustainable community impact."
  }
]

export default function SocialImpactPage() {
  return (
    <div className="min-h-screen py-12 md:py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Social Impact & Volunteerism</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming communities through youth leadership and dedicated service to society
          </p>
        </div>

        {/* Recognition Banner */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Award className="h-6 w-6 text-primary" />
                National Recognition
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3">
                  <Heart className="h-12 w-12 text-primary" />
                  <div>
                    <p className="text-xl font-bold">President&apos;s Awardee</p>
                    <p className="text-muted-foreground">Government of India</p>
                  </div>
                </div>
                <Badge variant="secondary" className="md:ml-auto">National Youth Icon (NSS)</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Honored as a National Youth Icon under the National Service Scheme (NSS), Government of India, 
                in recognition of outstanding contribution to youth development, community service, and 
                social impact initiatives.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* NSS Leadership */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">NSS Leadership & Roles</h2>
              <p className="text-muted-foreground">Building the Nation Through Youth Service</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {nssInitiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs gap-1">
                      <Calendar className="h-3 w-3" />
                      {initiative.period}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{initiative.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{initiative.description}</p>
                  <div>
                    <p className="text-xs font-semibold mb-2 text-muted-foreground">Key Achievements:</p>
                    <ul className="space-y-1">
                      {initiative.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 mt-0.5 flex-shrink-0 text-primary" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Social Impact in Action</h2>
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/upload/IMG-20230929-WA0001.jpg"
                alt="Award Ceremony"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/upload/IMG20211125122401.jpg"
                alt="Youth Leadership"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/upload/Copy of IMG-20251217-WA0168.jpg"
                alt="Community Engagement"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Community Development Focus */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Community Development Focus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {communityInitiatives.map((initiative, index) => {
              const Icon = initiative.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-2">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-center">{initiative.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">{initiative.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Achievements & Awards */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Achievements & Awards</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {achievementsAndAwards.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-center">Impact at a Glance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <p className="text-3xl font-bold mb-1">5000+</p>
                  <p className="text-sm opacity-90">Youth Engaged</p>
                </div>
                <div className="text-center">
                  <Heart className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <p className="text-3xl font-bold mb-1">150+</p>
                  <p className="text-sm opacity-90">Events Led</p>
                </div>
                <div className="text-center">
                  <Globe className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <p className="text-3xl font-bold mb-1">10+</p>
                  <p className="text-sm opacity-90">NSS Units</p>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <p className="text-3xl font-bold mb-1">National</p>
                  <p className="text-sm opacity-90">Recognition</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Core Values in Service</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-10 w-10 mx-auto mb-2 text-primary" />
                <CardTitle>Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Leading with empathy and understanding community needs
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-10 w-10 mx-auto mb-2 text-primary" />
                <CardTitle>Inclusivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Creating spaces for diverse voices and perspectives
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <HandHeart className="h-10 w-10 mx-auto mb-2 text-primary" />
                <CardTitle>Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Dedication to uplifting communities and individuals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Service to society is not just a responsibility—it&apos;s a privilege. Through the National Service Scheme 
                and various community initiatives, I strive to inspire youth to become active citizens, contribute 
                meaningfully to their communities, and work together for a better, more inclusive India.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
