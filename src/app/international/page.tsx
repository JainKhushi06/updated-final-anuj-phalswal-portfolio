"use client"

import { useEffect, useRef, useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  MapPin,
  Users,
  Briefcase,
  GraduationCap,
  Trophy,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import MagazineViewer from "@/components/magazine-viewer"

const representations = [
  {
    title: "India–Russia Youth Forums",
    icon: Globe,
    role: "Delegate",
    description:
      "Active participation in India-Russia youth cooperation initiatives, fostering bilateral relationships and cultural exchange between young leaders of both nations.",
    focus: [
      "Youth entrepreneurship",
      "Cross-cultural dialogue",
      "Bilateral cooperation",
    ],
  },
  {
    title: "International Business Week, Ufa (Russia)",
    icon: Briefcase,
    role: "Speaker",
    description:
      "Delivered insights on youth leadership and international collaboration at prestigious business forums in Russia, connecting young professionals across borders.",
    focus: [
      "Business cooperation",
      "Trade partnerships",
      "Professional networking",
    ],
  },
  {
    title: "Russia–India Youth Dialogue",
    icon: MessageSquare,
    role: "Participant",
    description:
      "Engaged in strategic dialogues addressing youth challenges and opportunities in both nations, contributing to policy discussions and collaborative frameworks.",
    focus: [
      "Policy dialogue",
      "Youth perspectives",
      "Strategic partnership",
    ],
  },
  {
    title: "World Youth Festival",
    icon: Trophy,
    role: "Delegate",
    description:
      "Represented Indian youth on global platforms, sharing experiences and insights about youth empowerment, sustainable development, and international cooperation.",
    focus: [
      "Global youth issues",
      "SDG advocacy",
      "Cross-border collaboration",
    ],
  },
  {
    title: "Indo Russia Uzbekistan Belt Wrestling Championship",
    icon: Users,
    role: "Contributor",
    description:
      "Promoted sports diplomacy and cultural exchange through international sports events, fostering people-to-people connections across nations.",
    focus: [
      "Sports diplomacy",
      "Cultural exchange",
      "Youth engagement",
    ],
  },

  // NEW CARD
  {
    title: "Youth Policy in Russia – Russian House",
    icon: GraduationCap,
    role: "Participant",
    description:
      "Attended a lecture on youth policy in Russia at the Russian House, New Delhi, gaining insights into youth development, participation, and engagement from an international perspective.",
    focus: [
      "Youth Policy",
      "Youth Development",
      "International Cooperation",
    ],
  },
]

const focusAreas = [
  {
    icon: Briefcase,
    title: "Youth Entrepreneurship",
    description:
      "Empowering young entrepreneurs through cross-border collaboration and knowledge exchange",
  },
  {
    icon: Globe,
    title: "Business & Trade Cooperation",
    description:
      "Facilitating international trade partnerships and business networking opportunities",
  },
  {
    icon: Trophy,
    title: "Critical Minerals & Industry",
    description:
      "Promoting collaboration in critical minerals and industrial development",
  },
  {
    icon: GraduationCap,
    title: "Education Exchange",
    description:
      "Supporting student exchange programs and educational partnerships",
  },
  {
    icon: MessageSquare,
    title: "Multipolar World Dialogue",
    description:
      "Contributing to discussions on multipolarity and youth cooperation in global affairs",
  },
  {
    icon: Users,
    title: "Sports & Cultural Exchange",
    description:
      "Fostering people-to-people connections through sports and cultural programs",
  },
]

const images = [
  "/upload/Pasted image (2).png",
  "/upload/GSR_7862.JPG",
  "/upload/Copy of IMG-20251217-WA0168.jpg",
  "/upload/Copy of IMG_5758.JPG",
  "/upload/IMG_1225.jpg",
  "/upload/IMG_2167.jpg",
  "/upload/1.jpeg",
  "/upload/11.jpeg",
]

const imageAlt = [
  "Global Representation",
  "Youth Forum",
  "International Award",
  "International Moment",
  "International Moment",
  "International Moment",
  "International Moment",
  "International Moment",
]

export default function InternationalPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const carouselRef = useRef<HTMLDivElement>(null)
  const wheelLock = useRef(false)

  const goToPrevious = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    )
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      goToPrevious()
    }

    if (e.key === "ArrowRight") {
      goToNext()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return

    const endX = e.changedTouches[0].clientX
    const distance = touchStart - endX

    // One swipe = exactly one image
    if (Math.abs(distance) >= 60) {
      if (distance > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }

    setTouchStart(null)
  }

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) <= 20 || wheelLock.current) return

    wheelLock.current = true

    if (e.deltaX > 0) {
      goToNext()
    } else {
      goToPrevious()
    }

    setTimeout(() => {
      wheelLock.current = false
    }, 700)
  }

  const getPreviousImage = () => {
    return currentImage === 0
      ? images.length - 1
      : currentImage - 1
  }

  const getNextImage = () => {
    return currentImage === images.length - 1
      ? 0
      : currentImage + 1
  }

  return (
    <div className="min-h-screen py-6 md:py-10">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            International Representation
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building bridges across borders and representing Indian youth on global platforms
          </p>
        </div>

        {/* OVERVIEW */}
        <div className="mb-16">
          <Card className="max-w-5xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Globe className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-3">
                    Global Engagement & Diplomacy
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    As an active international youth representative, I contribute to India-Russia youth cooperation, 
                    representing Indian youth at global forums, dialogues, and business delegations. My work focuses on 
                    bridging industry, youth, policy, and sustainable development, aligning with the UN Sustainable 
                    Development Goals (SDGs).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* KEY ENGAGEMENTS */}
        <div className="mb-16">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Key Engagements
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {representations.map((item, index) => {
              const Icon = item.icon

              return (
                <Card
                  key={index}
                  className="
                    h-[390px]
                    flex flex-col
                    hover:shadow-lg
                    transition-shadow
                  "
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <Badge variant="secondary">
                        {item.role}
                      </Badge>
                    </div>

                    <CardTitle className="text-xl leading-tight min-h-0">
                      {item.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-1 flex flex-col flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed min-h-[100px]">
                      {item.description}
                    </p>

                    <div className="mt-auto">
                      <p className="text-sm font-semibold mb-4">
                        Key Focus:
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.focus.map((focus, focusIndex) => (
                          <Badge
                            key={focusIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {focus}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* INTERNATIONAL MOMENTS */}
        <div className="mb-16">
          <h1 className="text-3xl font-bold mb-6 text-center">
            International Moments
          </h1>

          <div className="relative max-w-7xl mx-auto">
            <div
              ref={carouselRef}
              className="
                relative flex items-center justify-center overflow-hidden
                py-8 select-none touch-pan-y
              "
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onWheel={handleWheel}
            >

              {/* Previous */}
              <div
                className="
                  absolute left-[-150px] md:left-[calc(50%-440px)]
                  w-[150px] md:w-[220px] aspect-square rounded-xl
                  overflow-hidden opacity-40 blur-[3px] scale-90
                  transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                "
              >
                <Image
                  src={images[getPreviousImage()]}
                  alt={imageAlt[getPreviousImage()]}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out"
                />
              </div>

              {/* Current */}
              <div
                className="
                  relative w-[340px] md:w-[420px] aspect-square
                  rounded-xl overflow-hidden shadow-xl z-10
                "
              >
                <Image
                  src={images[currentImage]}
                  alt={imageAlt[currentImage]}
                  fill
                  priority
                  className="object-cover animate-in fade-in duration-700"
                />
              </div>

              {/* Next */}
              <div
                className="
                  absolute right-[-150px] md:right-[calc(50%-440px)]
                  w-[150px] md:w-[220px] aspect-square rounded-xl
                  overflow-hidden opacity-40 blur-[3px] scale-90
                  transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                "
              >
                <Image
                  src={images[getNextImage()]}
                  alt={imageAlt[getNextImage()]}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out"
                />
              </div>

              {/* Left Arrow */}
              <button
                onClick={goToPrevious}
                className="
                  absolute left-2 md:left-[calc(50%-240px)]
                  z-20 p-2 rounded-full bg-background/90
                  shadow-md hover:bg-background transition
                "
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={goToNext}
                className="
                  absolute right-2 md:right-[calc(50%-240px)]
                  z-20 p-2 rounded-full bg-background/90
                  shadow-md hover:bg-background transition
                "
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`
                    h-2 rounded-full transition-all
                    ${
                      currentImage === index
                        ? "w-6 bg-primary"
                        : "w-2 bg-muted-foreground/30"
                    }
                  `}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Count */}
            <p className="text-center text-sm text-muted-foreground mt-3">
              {currentImage + 1} / {images.length}
            </p>
          </div>
        </div>

        {/* MAGAZINE */}
        <div className="mb-16">
          <h1 className="text-3xl font-bold mb-6 text-center">
            DruzHBA Magazine
          </h1>

          <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
            A journey of cultural exchange, leadership and shared vision.
            Explore the complete magazine below.
          </p>

          <div className="max-w-5xl mx-auto">
            <MagazineViewer />
          </div>
        </div>

        {/* STRATEGIC FOCUS AREAS */}
        <div className="mb-16">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Strategic Focus Areas
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {focusAreas.map((area, index) => {
              const Icon = area.icon

              return (
                <Card
                  key={index}
                  className="
                    h-full
                    text-center
                    hover:shadow-lg
                    transition-shadow
                  "
                >
                  <CardHeader>
                    <div className="flex justify-center mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>

                    <CardTitle className="text-xl">
                      {area.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* GLOBAL IMPACT SUMMARY */}
        <div className="mb-16">
          <Card className="max-w-5xl mx-auto bg-[#181818] text-white border-0 rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-white">
                Global Impact Summary
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

                {/* Countries */}
                <div>
                  <div className="flex justify-center mb-3">
                    <MapPin className="h-9 w-9 text-white/80" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-1">
                    10+
                  </h3>

                  <p className="text-sm text-white/80">
                    Countries Engaged
                  </p>
                </div>

                {/* Forums */}
                <div>
                  <div className="flex justify-center mb-3">
                    <Globe className="h-9 w-9 text-white/80" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-1">
                    5+
                  </h3>

                  <p className="text-sm text-white/80">
                    Global Forums
                  </p>
                </div>

                {/* Youth Connected */}
                <div>
                  <div className="flex justify-center mb-3">
                    <Users className="h-9 w-9 text-white/80" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-1">
                    1000s
                  </h3>

                  <p className="text-sm text-white/80">
                    Youth Connected
                  </p>
                </div>

                {/* Speaking */}
                <div>
                  <div className="flex justify-center mb-3">
                    <MessageSquare className="h-9 w-9 text-white/80" />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-1">
                    20+
                  </h3>

                  <p className="text-sm text-white/80">
                    Speaking Engagements
                  </p>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>

        {/* CLOSING STATEMENT */}
        <div className="mb-16">
          <Card className="max-w-5xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
                Through active international representation, I strive to build
                bridges between cultures, foster youth cooperation, and contribute
                to global dialogues on sustainable development, multipolarity, and
                collaborative growth. The future is shaped by the connections we
                build today.
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  )
}