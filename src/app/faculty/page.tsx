
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function FacultyPage() {
  const faculty = [
    { name: "Dr. Sarah Wilson", role: "Head of Science", dept: "Science", img: "faculty-1" },
    { name: "Mr. James Bond", role: "Mathematics Expert", dept: "Maths", img: "faculty-2" },
    { name: "Mrs. Elena Gilbert", role: "Literature Specialist", dept: "English", img: "faculty-1" },
    { name: "Mr. Robert Downey", role: "Physical Education", dept: "Sports", img: "faculty-2" },
    { name: "Ms. Natasha Romanoff", role: "Computer Science", dept: "Tech", img: "faculty-1" },
    { name: "Dr. Bruce Banner", role: "Physics Researcher", dept: "Science", img: "faculty-2" },
  ]

  return (
    <div className="w-full">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-4">
          <Badge className="bg-white/20 text-white border-white/30">Mentors & Educators</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Expert Faculty</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-medium">
            Dedicated professionals committed to shaping the leaders of tomorrow.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, idx) => {
              const placeholder = PlaceHolderImages.find(img => img.id === member.img)
              return (
                <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow text-center overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image 
                      src={placeholder?.imageUrl || "https://picsum.photos/seed/faculty/400/400"} 
                      alt={member.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit mx-auto">{member.role}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Department: {member.dept}</p>
                    <p className="mt-4 text-xs italic leading-relaxed text-muted-foreground">
                      "Dedicated to fostering a passion for learning and critical thinking in every student."
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
