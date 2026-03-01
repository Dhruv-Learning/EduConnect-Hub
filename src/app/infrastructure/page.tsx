
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Microscope, Library, Trophy, Laptop, Music, Palmtree } from "lucide-react"

export default function InfrastructurePage() {
  const facilities = [
    { title: "Science Labs", icon: Microscope, desc: "State-of-the-art physics, chemistry, and biology laboratories.", img: "gallery-2" },
    { title: "Digital Library", icon: Library, desc: "Over 20,000 books and a vast digital repository for research.", img: "library" },
    { title: "Sports Complex", icon: Trophy, desc: "Olympic-sized swimming pool and multi-purpose indoor stadium.", img: "sports" },
    { title: "Computer Hub", icon: Laptop, desc: "Advanced workstations with high-speed internet and coding labs.", img: "classroom" },
    { title: "Arts & Music Studio", icon: Music, desc: "Dedicated space for creative expression and performance arts.", img: "gallery-3" },
    { title: "Green Campus", icon: Palmtree, desc: "Eco-friendly environment with solar energy and rain harvesting.", img: "hero-school" },
  ]

  return (
    <div className="w-full">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-4">
          <Badge className="bg-white/20 text-white border-white/30">Campus & Facilities</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Modern Infrastructure</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-medium">
            Providing a world-class environment for holistic development.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((f, idx) => (
              <Card key={idx} className="border-none shadow-sm overflow-hidden group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={`https://picsum.photos/seed/${f.img}/800/600`} 
                    alt={f.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <f.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">{f.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
