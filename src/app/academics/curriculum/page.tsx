
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookMarked, GraduationCap, Microscope, Palette, Music } from "lucide-react"

const curriculumData = [
  {
    grade: "Primary School (Grades 1-5)",
    description: "Foundational learning focusing on literacy, numeracy, and discovery.",
    subjects: ["English", "Mathematics", "Environmental Science", "Art & Craft", "Physical Education"],
    highlights: "Focus on play-way method and experiential learning."
  },
  {
    grade: "Middle School (Grades 6-8)",
    description: "Developing critical thinking and deeper understanding of core concepts.",
    subjects: ["English Literature", "Algebra & Geometry", "Physics", "Chemistry", "Biology", "History", "Geography", "Computer Science"],
    highlights: "Integrated lab sessions and group projects."
  },
  {
    grade: "Senior School (Grades 9-12)",
    description: "Specialized streams designed for college readiness and vocational excellence.",
    subjects: ["Science Stream (PCM/PCB)", "Commerce Stream", "Humanities", "Financial Literacy", "Advanced Coding"],
    highlights: "Career counseling and competitive exam preparation."
  }
]

export default function CurriculumPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Academic Framework</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-primary">Our Curriculum</h1>
          <p className="text-muted-foreground text-lg">
            A balanced approach to academic rigor and creative exploration, designed to prepare students for the 21st century.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-none shadow-sm bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookMarked className="h-5 w-5 text-primary" />
                Vision for Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We believe in a student-centric curriculum that encourages curiosity and fosters a lifelong love for learning. Our pedagogical approach blends traditional values with modern technology.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm bg-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-accent" />
                Global Standards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our curriculum is aligned with national standards while incorporating international best practices in STEM, Arts, and Humanities.
              </p>
            </CardContent>
          </Card>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {curriculumData.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-xl px-4 bg-white shadow-sm overflow-hidden">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="text-left space-y-1">
                  <h3 className="text-xl font-bold text-primary">{item.grade}</h3>
                  <p className="text-sm text-muted-foreground font-normal">{item.description}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-6 pt-2">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {item.subjects.map((subject, sIdx) => (
                      <div key={sIdx} className="bg-muted/50 p-3 rounded-lg text-sm font-semibold text-center border">
                        {subject}
                      </div>
                    ))}
                  </div>
                  <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                    <h4 className="font-bold text-accent mb-1 flex items-center gap-2">
                      <Microscope className="h-4 w-4" /> Key Highlight
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.highlights}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto text-primary">
              <Palette className="h-6 w-6" />
            </div>
            <h4 className="font-bold">Holistic Arts</h4>
            <p className="text-xs text-muted-foreground">Fine arts, theatre, and design thinking integrated.</p>
          </div>
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto text-primary">
              <Music className="h-6 w-6" />
            </div>
            <h4 className="font-bold">Performing Arts</h4>
            <p className="text-xs text-muted-foreground">Music and dance modules for every grade.</p>
          </div>
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto text-primary">
              <Microscope className="h-6 w-6" />
            </div>
            <h4 className="font-bold">Lab Discovery</h4>
            <p className="text-xs text-muted-foreground">Hands-on experimentation from Grade 1 onwards.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
