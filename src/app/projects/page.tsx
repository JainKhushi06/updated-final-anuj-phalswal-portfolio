import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, DollarSign, Clock, Shield, Zap } from 'lucide-react'

const projects = [
  {
    title: "Rope Replacement Methodology Optimization",
    category: "Process Optimization",
    icon: TrendingUp,
    description: "Rope replacement in deep shaft hoisting systems is a time-critical and high-risk activity that directly affects mine production. The traditional replacement process was time-consuming and caused extended operational shutdowns.",
    objective: "Redesign the rope replacement methodology by optimizing sequencing, resource planning, and execution strategy while ensuring parallel task execution without compromising safety.",
    impact: [
      { value: "15 to 6 days", label: "Reduced replacement duration", icon: Clock },
      { value: "2 lakh tonnes", label: "Additional ore hoisting", icon: TrendingUp },
      { value: "₹4 Crores", label: "Annual savings", icon: DollarSign }
    ]
  },
  {
    title: "Shaft Partition Work (1 km Depth)",
    category: "Infrastructure",
    icon: Shield,
    description: "Simultaneous movement of skip and cage in the same shaft posed operational and safety challenges. To address this, a screen brattice partition was installed across approximately 1 kilometer shaft depth.",
    objective: "Install screen brattice to eliminate safety risks while maintaining operational efficiency in a confined vertical environment without long shutdowns.",
    impact: [
      { value: "61 kt/month", label: "Increased hoisting capacity", icon: TrendingUp },
      { value: "₹1.05 Cr/month", label: "Recurring benefit", icon: DollarSign },
      { value: "Eliminated", label: "Safety risks", icon: Shield }
    ]
  },
  {
    title: "Grizzly Redesign & Debottlenecking",
    category: "Engineering Design",
    icon: Zap,
    description: "Frequent damage to the grizzly structure due to heavy boulders was causing production interruptions and maintenance delays. Redesigned grizzly structures to withstand large boulders, reducing downtime by 45 days annually. Redesigned and replaced grizzlies 2 Orepass and 1 wastepass.",
    objective: "Design structure to withstand large boulders and reduce breakdowns through enhanced durability and improved load distribution.",
    impact: [
      { value: "₹19 Crores", label: "Annual savings", icon: DollarSign },
      { value: "45 days", label: "Reduced downtime annually", icon: Clock },
      { value: "Enhanced", label: "Structural durability", icon: Shield }
    ]
  },
  {
    title: "Skip Dump Box Removal Infrastructure",
    category: "Infrastructure Improvement",
    icon: Zap,
    description: "Maintenance of the skip dump box required major shutdowns and high-risk manual intervention. Worked on infrastructure modifications at the headgear area to allow offline maintenance and safer access.",
    objective: "Enable safer and faster maintenance with minimal production loss through engineering adjustments for improved accessibility.",
    impact: [
      { value: "₹3 Crores", label: "Annual savings", icon: DollarSign },
      { value: "1.6 lakh tonnes", label: "Additional ore handling", icon: TrendingUp },
      { value: "Enabled", label: "Offline maintenance", icon: Shield }
    ]
  },
  {
    title: "Underground Chiller Unit Installation & Cooling Optimization",
    category: "Environmental Control",
    icon: Zap,
    description: "As mining depth increases, underground temperatures rise, affecting worker productivity and machinery performance. Involved in supporting the installation and operational integration of a chiller unit system to regulate underground air temperature.",
    objective: "Improve underground thermal conditions for worker safety and equipment efficiency through effective cooling system implementation.",
    impact: [
      { value: "Enhanced", label: "Thermal comfort & safety", icon: Shield },
      { value: "Reduced", label: "Heat-related fatigue risks", icon: Clock },
      { value: "Improved", label: "Machine performance", icon: TrendingUp }
    ]
  },
  {
    title: "Main Ventilation Fan System Improvement",
    category: "Safety Infrastructure",
    icon: Shield,
    description: "Ventilation is critical for air quality, temperature control, and gas dilution in underground mines. Contributed to the planning and operational optimization of main ventilation fans to ensure adequate airflow for expanding mining zones.",
    objective: "Strengthen mine ventilation for safety and operational expansion through system upgrades and monitoring improvements.",
    impact: [
      { value: "Improved", label: "Airflow distribution", icon: TrendingUp },
      { value: "Enhanced", label: "Gas dilution & air quality", icon: Shield },
      { value: "Increased", label: "System reliability", icon: Zap }
    ]
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-12 md:py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Key Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            High-impact engineering projects delivering multi-crore value creation and operational excellence
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardContent className="pt-6">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">₹27Cr+</p>
              <p className="text-sm text-muted-foreground">Total Annual Savings</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">6+</p>
              <p className="text-sm text-muted-foreground">Major Projects</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">Enhanced</p>
              <p className="text-sm text-muted-foreground">Safety Standards</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Zap className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm text-muted-foreground">Safety Compliance</p>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Project Overview</h4>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Objective</h4>
                    <p className="text-sm text-muted-foreground">{project.objective}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-3">Impact</h4>
                    <div className="space-y-3">
                      {project.impact.map((item, idx) => {
                        const ItemIcon = item.icon
                        return (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                            <ItemIcon className="h-5 w-5 text-primary flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-sm">{item.value}</p>
                              <p className="text-xs text-muted-foreground">{item.label}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Summary Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Project Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold mb-2">₹27 Crores</p>
                  <p className="text-sm opacity-90">Total Annual Savings</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold mb-2">61 kt/month</p>
                  <p className="text-sm opacity-90">Increased Hoisting</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold mb-2">100%</p>
                  <p className="text-sm opacity-90">Safety Compliance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
