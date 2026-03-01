
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

export default function TimetablePage() {
  const slots = [
    { time: "08:00 - 08:30", activity: "Assembly & Homeroom" },
    { time: "08:30 - 09:15", activity: "First Period" },
    { time: "09:15 - 10:00", activity: "Second Period" },
    { time: "10:00 - 10:15", activity: "Short Break" },
    { time: "10:15 - 11:00", activity: "Third Period" },
    { time: "11:00 - 11:45", activity: "Fourth Period" },
    { time: "11:45 - 12:30", activity: "Lunch Break" },
    { time: "12:30 - 01:15", activity: "Fifth Period" },
    { time: "01:15 - 02:00", activity: "Sixth Period" },
    { time: "02:00 - 02:45", activity: "ECA / Sports" },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <Badge className="bg-accent/10 text-accent">Regular Schedule</Badge>
          <h1 className="text-4xl font-bold text-primary">School Timetable</h1>
          <p className="text-muted-foreground text-lg">
            Standard daily routine across all classes.
          </p>
        </div>

        <Card className="border-none shadow-sm overflow-hidden">
          <CardHeader className="bg-primary text-primary-foreground">
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Daily Bell Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-1/3">Time Slot</TableHead>
                  <TableHead>Activity / Period</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {slots.map((slot, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-mono text-sm">{slot.time}</TableCell>
                    <TableCell className="font-medium">{slot.activity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="bg-accent/5 p-6 rounded-2xl border border-accent/10">
          <h4 className="font-bold text-accent mb-2">Note to Parents:</h4>
          <p className="text-sm text-muted-foreground">
            Students must arrive at least 15 minutes before the assembly starts. Extra-curricular activities (ECA) schedules may vary slightly based on seasonal sports and club rotations.
          </p>
        </div>
      </div>
    </div>
  )
}
