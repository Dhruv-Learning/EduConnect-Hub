
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileDown, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SyllabusPage() {
  const sections = [
    { title: "Primary School", grades: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"] },
    { title: "Middle School", grades: ["Grade 6", "Grade 7", "Grade 8"] },
    { title: "Senior School", grades: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"] }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <Badge className="bg-primary/10 text-primary">Syllabus 2024-25</Badge>
          <h1 className="text-4xl font-bold text-primary">Course Syllabi</h1>
          <p className="text-muted-foreground text-lg">
            Detailed subject-wise breakdowns for all academic levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <Card key={idx} className="border-none shadow-sm">
              <CardHeader className="bg-muted/30">
                <CardTitle className="text-xl flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {section.grades.map((grade) => (
                  <div key={grade} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/20 transition-colors">
                    <span className="font-medium">{grade}</span>
                    <Button size="sm" variant="outline" className="h-8 gap-2">
                      <FileDown className="h-4 w-4" /> PDF
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
