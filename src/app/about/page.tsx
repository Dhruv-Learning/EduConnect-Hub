
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, ShieldCheck, Heart } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function AboutPage() {
  const principalImg = PlaceHolderImages.find(img => img.id === "principal")

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-4">
          <Badge className="bg-white/20 text-white border-white/30">Since 1995</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-headline">About Our School</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-medium">
            Building a community of learners, leaders, and life-long achievers.
          </p>
        </div>
      </section>

      {/* Legacy & History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/history/800/600" 
                alt="School History" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">A Legacy of Excellence</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a vision to provide world-class education accessible to all, EduConnect Hub has grown from a small neighborhood school to a premiere educational institution. Over three decades, we have remained committed to our core values of integrity, innovation, and inclusiveness.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our campus provides a blend of heritage and modern technology, creating an environment that respects tradition while embracing the future.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-bold text-primary text-2xl">25+</h4>
                  <p className="text-sm text-muted-foreground">Years of Heritage</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-bold text-primary text-2xl">10k+</h4>
                  <p className="text-sm text-muted-foreground">Global Alumni</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-sm overflow-hidden group">
              <CardContent className="p-0 flex h-full">
                <div className="w-4 bg-primary group-hover:w-6 transition-all" />
                <div className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a leading global educational community that develops inquisitive, knowledgeable, and caring young people who help to create a better and more peaceful world through intercultural understanding and respect.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm overflow-hidden group">
              <CardContent className="p-0 flex h-full">
                <div className="w-4 bg-accent group-hover:w-6 transition-all" />
                <div className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our mission is to provide high-quality education that enables students to achieve their full potential, both academically and personally, in a safe and supportive environment that encourages social and emotional development.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="shrink-0">
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl ring-8 ring-muted/30">
                <Image 
                  src={principalImg?.imageUrl || "https://picsum.photos/seed/principal/400/400"} 
                  alt="Principal" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary">Leadership Message</Badge>
              <h2 className="text-3xl font-bold">From the Principal's Desk</h2>
              <div className="space-y-4 text-muted-foreground italic leading-relaxed">
                <p>
                  "Education is not just about learning facts, but more about training the mind to think. At EduConnect Hub, we strive to ignite the spark of curiosity in every child."
                </p>
                <p>
                  "We believe that every student has a unique talent, and our role is to provide the platform where they can shine. I welcome you to explore our school and be a part of our incredible journey."
                </p>
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">Dr. Elizabeth Montgomery</p>
                <p className="text-sm text-primary font-semibold">Principal & Director of Academics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Integrity", icon: ShieldCheck, desc: "Doing the right thing, even when no one is looking." },
              { title: "Innovation", icon: Eye, desc: "Constantly evolving our methods to serve our students better." },
              { title: "Inclusivity", icon: Heart, desc: "Celebrating diversity and ensuring every child feels at home." },
              { title: "Excellence", icon: Target, desc: "Setting high standards and working relentlessly to achieve them." },
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm text-center space-y-4 hover:-translate-y-2 transition-transform">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold text-lg">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
