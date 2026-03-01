
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, AlertCircle, Calendar, FileCheck } from "lucide-react"

export default function AdmissionGuidelinesPage() {
  const steps = [
    { title: "Online Registration", desc: "Fill out the online application form with required details." },
    { title: "Document Submission", desc: "Upload birth certificate, previous school records, and photos." },
    { title: "Interaction/Test", desc: "Short assessment or interaction with the student and parents." },
    { title: "Admission Offer", desc: "Selection results are shared via email within 7 working days." },
    { title: "Fee Payment", desc: "Complete the enrollment by paying the admission fee." }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Enrollment 2024-25</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-primary">Admission Guidelines</h1>
          <p className="text-muted-foreground text-lg">
            A transparent and merit-based admission process for all aspiring students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-none shadow-sm bg-muted/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Age Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• <strong>Pre-Nursery:</strong> 2.5+ years as of March 31st</p>
              <p>• <strong>Nursery:</strong> 3+ years as of March 31st</p>
              <p>• <strong>Grade 1:</strong> 5+ years as of March 31st</p>
              <p>• Higher grades follow sequential age progression.</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm bg-muted/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-accent" />
                Required Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Copy of Birth Certificate</p>
              <p>• Previous 2 years Academic Records</p>
              <p>• Transfer Certificate (Original)</p>
              <p>• 4 Passport size photographs</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center">Admission Process</h2>
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border bg-white shadow-sm">
                  <h4 className="font-bold text-primary">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-accent/5 p-6 rounded-2xl border border-accent/10 flex items-start gap-4">
          <AlertCircle className="h-6 w-6 text-accent shrink-0" />
          <div className="space-y-1">
            <h4 className="font-bold text-accent">Important Note</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Admissions are subject to availability of seats. We recommend early registration as seats for Nursery and Grade 1 fill up quickly. For any queries, please contact our helpdesk at +91 9988776655.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
