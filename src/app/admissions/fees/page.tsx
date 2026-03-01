
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Wallet, Info } from "lucide-react"

export default function AdmissionFeesPage() {
  const feeData = [
    { grade: "Pre-Primary (Nursery - UKG)", tuition: "₹4,500", admission: "₹10,000", annual: "₹5,000" },
    { grade: "Primary (Grades 1-5)", tuition: "₹5,500", admission: "₹15,000", annual: "₹7,500" },
    { grade: "Middle (Grades 6-8)", tuition: "₹6,500", admission: "₹15,000", annual: "₹8,500" },
    { grade: "Senior (Grades 9-12)", tuition: "₹8,000", admission: "₹20,000", annual: "₹10,000" },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <Badge className="bg-accent/10 text-accent hover:bg-accent/20">Academic Year 2024-25</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-primary">Fee Structure</h1>
          <p className="text-muted-foreground text-lg">
            Invest in your child's future with our comprehensive educational program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-none shadow-sm bg-primary/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Wallet className="h-5 w-5 text-primary" />
                Payment Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Tuition fees are payable quarterly (April, July, October, January). A late fee applies for payments made after the 10th of the month.
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm bg-accent/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-accent" />
                Payment Modes
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              We accept Online Transfers (NEFT/IMPS), Credit/Debit Cards, and Cheques. We are currently a 100% cashless campus.
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          <Table>
            <TableCaption>All fees are in Indian Rupees (₹).</TableCaption>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="font-bold">Grade Level</TableHead>
                <TableHead className="font-bold">Tuition Fee (Monthly)</TableHead>
                <TableHead className="font-bold">One-time Admission</TableHead>
                <TableHead className="font-bold">Annual Charges</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feeData.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{row.grade}</TableCell>
                  <TableCell>{row.tuition}</TableCell>
                  <TableCell>{row.admission}</TableCell>
                  <TableCell>{row.annual}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            Additional Information
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground list-disc pl-5">
            <li>Transport fee is based on distance from school.</li>
            <li>Laboratory fee applicable for Grades 9-12 Science stream.</li>
            <li>Uniform and Books are not included in the above fees.</li>
            <li>10% sibling discount on tuition fees for the younger child.</li>
            <li>Special scholarships available for sports and academic toppers.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
