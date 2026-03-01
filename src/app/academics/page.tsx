
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, Clock, FileText, ArrowRight } from "lucide-react"

export default function AcademicsPage() {
  const academicLinks = [
    {
      title: "Curriculum",
      description: "Explore our pedagogical approach and grade-wise subjects.",
      icon: BookOpen,
      href: "/academics/curriculum",
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Syllabus",
      description: "Download detailed syllabi for all subjects and grades.",
      icon: FileText,
      href: "/academics/syllabus",
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Timetable",
      description: "Check regular class schedules and weekly time slots.",
      icon: Clock,
      href: "/academics/timetable",
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Academic Calendar",
      description: "Stay updated with holidays, exams, and school events.",
      icon: Calendar,
      href: "/academics/calendar",
      color: "bg-accent/10 text-accent"
    }
  ]

  return (
    <div className="w-full">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Academic Life</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-medium">
            A comprehensive overview of our learning environment and resources.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {academicLinks.map((item, idx) => (
              <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-2 ${item.color}`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto hover:bg-transparent text-primary font-semibold group-hover:translate-x-1 transition-transform" asChild>
                    <Link href={item.href}>
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
