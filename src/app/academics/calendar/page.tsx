
"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Star } from "lucide-react"

export default function AcademicCalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  const events = [
    { date: "March 15, 2024", event: "Final Term Examinations Begin", type: "Exam" },
    { date: "March 25, 2024", event: "Holi Holiday", type: "Holiday" },
    { date: "April 01, 2024", event: "New Academic Session Starts", type: "Event" },
    { date: "April 15, 2024", event: "Annual Sports Meet", type: "Event" },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <Badge className="bg-primary/10 text-primary">Academic Year 2024-25</Badge>
          <h1 className="text-4xl font-bold text-primary">Academic Calendar</h1>
          <p className="text-muted-foreground text-lg">
            Keep track of holidays, exams, and important school events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1 border-none shadow-sm h-fit">
            <CardHeader>
              <CardTitle className="text-lg">Event Calendar</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center p-0 pb-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 border-none shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-primary" />
                Upcoming Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {events.map((e, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-xl border bg-white hover:border-primary/50 transition-colors">
                  <div className="space-y-1">
                    <p className="font-bold text-primary">{e.date}</p>
                    <p className="text-sm font-medium">{e.event}</p>
                  </div>
                  <Badge variant={e.type === "Holiday" ? "destructive" : e.type === "Exam" ? "default" : "secondary"}>
                    {e.type}
                  </Badge>
                </div>
              ))}
              <div className="mt-6 p-4 bg-muted/30 rounded-lg flex items-start gap-3">
                <Star className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">
                  The calendar is subject to change. Parents will be notified of any modifications via the official portal and SMS service.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
