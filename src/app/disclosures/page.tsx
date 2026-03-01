
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DisclosuresPage() {
  const documents = [
    "Affiliation Certificate",
    "No Objection Certificate (NOC)",
    "Trust Registration Certificate",
    "Building Safety Certificate",
    "Fire Safety Certificate",
    "Health and Sanitation Certificate",
    "Annual Academic Calendar",
    "SMC Membership List",
    "PTA Membership List",
  ]

  return (
    <div className="w-full">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-4">
          <Badge className="bg-white/20 text-white border-white/30">Compliance</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Mandatory Disclosures</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-medium">
            Transparent reporting and compliance with educational regulatory standards.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-none shadow-sm mb-12">
            <CardHeader className="bg-muted/30">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Institutional Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((doc, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-xl border bg-white hover:bg-muted/10 transition-colors">
                    <span className="text-sm font-medium">{doc}</span>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Download className="h-4 w-4 text-primary" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Self-Affidavit</h3>
            <div className="p-8 rounded-2xl bg-white border shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-accent shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  EduConnect Hub solemnly declares that the information provided in the mandatory disclosure is true and authentic to the best of our knowledge. We remain committed to following all guidelines set forth by the board and educational authorities.
                </p>
              </div>
              <div className="pt-6 border-t flex justify-between items-end">
                <div>
                  <p className="font-bold">Dr. Elizabeth Montgomery</p>
                  <p className="text-xs text-muted-foreground">Principal</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground italic">Digitally Signed on:</p>
                  <p className="text-xs font-bold">{new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
