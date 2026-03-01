
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Eye, MapPin, Phone, AlertTriangle } from "lucide-react"

export default function SafetyPage() {
  return (
    <div className="w-full">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-4">
          <Badge className="bg-white/20 text-white border-white/30">Security First</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Safety & Security</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-medium">
            A secure environment is the foundation of effective learning.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-white border shadow-sm space-y-4">
              <ShieldCheck className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">24/7 Monitoring</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The entire campus is under constant CCTV surveillance. Every entry and exit point is monitored by professional security personnel around the clock.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white border shadow-sm space-y-4">
              <Eye className="h-10 w-10 text-accent" />
              <h3 className="text-xl font-bold">Child Protection</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We maintain a strict visitor policy and child protection protocols. All staff undergo rigorous background checks before recruitment.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Safety Protocols</h2>
            <div className="space-y-4">
              {[
                { title: "Fire Safety", desc: "Regular fire drills and certified fire extinguishing equipment on every floor." },
                { title: "Medical Support", desc: "A full-time resident nurse and a well-equipped medical room for immediate care." },
                { title: "GPS Bus Tracking", desc: "Real-time tracking of all school buses with automated SMS alerts for parents." },
                { title: "Digital ID Cards", desc: "Mandatory digital ID cards for students and staff for access control." },
              ].map((p, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-xl border bg-white shadow-sm items-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div>
                    <h4 className="font-bold">{p.title}</h4>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-destructive/5 border border-destructive/20 flex gap-6 items-start">
            <AlertTriangle className="h-10 w-10 text-destructive shrink-0" />
            <div className="space-y-2">
              <h4 className="font-bold text-destructive">Emergency Contacts</h4>
              <p className="text-sm text-muted-foreground">In case of any emergency or security concern, please contact our helpdesk immediately:</p>
              <div className="flex flex-wrap gap-4 pt-2">
                <span className="text-sm font-bold flex items-center gap-2"><Phone className="h-4 w-4" /> +91 9988776655</span>
                <span className="text-sm font-bold flex items-center gap-2"><MapPin className="h-4 w-4" /> Security Office, Gate 1</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
