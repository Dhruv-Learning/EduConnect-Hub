
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Trophy, ShieldCheck, Bell, ArrowRight, Star, Quote } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-school")
  
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg?.imageUrl || "https://picsum.photos/seed/school1/1200/600"}
            alt="School Campus"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6">
            <Badge className="bg-accent text-accent-foreground px-4 py-1 text-sm font-semibold uppercase tracking-wider">
              Admissions Open for 2024-25
            </Badge>
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-tight">
              Empowering the Next Generation of Leaders
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
              Join EduConnect Hub, where innovation meets tradition. We provide a nurturing environment focused on academic excellence and character building.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base font-semibold" asChild>
                <Link href="/admissions/apply">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 px-8 h-12 text-base font-semibold" asChild>
                <Link href="/about">Explore Campus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Notice Board Snippet */}
      <section className="bg-primary py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-hidden">
            <div className="flex items-center gap-2 text-white font-bold whitespace-nowrap bg-primary-foreground/10 px-3 py-1 rounded">
              <Bell className="h-5 w-5 animate-bounce" />
              NOTICES:
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-white font-medium animate-marquee whitespace-nowrap inline-block">
                • Final examinations start from March 15th • Annual Sports Meet scheduled for next Friday • New bus routes updated for Sector 5 residents • Admission deadline extended to Feb 28th
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Students", value: "2500+", icon: Users },
              { label: "Expert Faculty", value: "150+", icon: BookOpen },
              { label: "Achievements", value: "500+", icon: Trophy },
              { label: "Safety Rating", value: "A+", icon: ShieldCheck },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2 p-6 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-2">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
                <p className="text-muted-foreground font-medium uppercase text-xs tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Core Features</h2>
            <p className="text-muted-foreground text-lg">Comprehensive digital ecosystem for a seamless educational journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all border-none shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Academic Excellence</CardTitle>
                <CardDescription>Structured curriculum following global standards with digital syllabus access.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0 h-auto text-primary font-semibold" asChild>
                  <Link href="/academics/curriculum">View Curriculum <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all border-none shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Parent-Teacher Portal</CardTitle>
                <CardDescription>Real-time tracking of attendance, homework, and academic performance.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0 h-auto text-accent font-semibold" asChild>
                  <Link href="/login">Access Portal <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all border-none shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Secure Admissions</CardTitle>
                <CardDescription>Completely online admission process with document verification and status tracking.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0 h-auto text-primary font-semibold" asChild>
                  <Link href="/admissions/apply">Start Application <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-headline font-bold mb-4">What Parents Say</h2>
            <div className="flex justify-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Parent of Grade 5 Student",
                quote: "The personalized attention my child receives is unparalleled. The digital portal keeps me updated every step of the way."
              },
              {
                name: "David Smith",
                role: "Alumni (Class of 2018)",
                quote: "EduConnect Hub didn't just teach me math and science; it taught me how to think critically and lead with empathy."
              },
              {
                name: "Maria Garcia",
                role: "Parent of Grade 2 Student",
                quote: "The infrastructure is state-of-the-art and the safety measures give me total peace of mind every morning."
              }
            ].map((t, i) => (
              <Card key={i} className="bg-muted/30 border-none shadow-none p-6 space-y-4">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="italic text-muted-foreground">"{t.quote}"</p>
                <div className="pt-4">
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-headline font-bold">Ready to Start Your Journey?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Experience our campus and meet our visionary educators. Book a visit or download our prospectus today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" className="h-14 px-10 text-lg font-bold">
              Book a Campus Visit
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-bold bg-transparent border-white text-white hover:bg-white/10">
              Download Prospectus
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
