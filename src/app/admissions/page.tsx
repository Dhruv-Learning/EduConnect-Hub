
import Link from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, CreditCard, ClipboardCheck, ArrowRight } from "lucide-react"
import LinkNext from "next/link"

export default function AdmissionsPage() {
  return (
    <div className="w-full">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Admissions</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-medium">
            Start your child's journey towards a brighter future today.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <ClipboardCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Admission Guidelines</CardTitle>
                <CardDescription>Learn about our eligibility criteria and selection process.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <LinkNext href="/admissions/guidelines">Read Guidelines</LinkNext>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                  <CreditCard className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Fee Structure</CardTitle>
                <CardDescription>Detailed breakdown of tuition and other school-related costs.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <LinkNext href="/admissions/fees">View Fees</LinkNext>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Online Application</CardTitle>
                <CardDescription>Ready to join? Fill out our simple online application form.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary" asChild>
                  <LinkNext href="/admissions/apply">Apply Now <ArrowRight className="ml-2 h-4 w-4" /></LinkNext>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
