
import Link from "next/link"
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold tracking-tight text-primary">EduConnect Hub</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering students with quality education, innovative learning, and a nurturing environment for holistic growth.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/admissions/apply" className="text-muted-foreground hover:text-primary">Apply Online</Link></li>
              <li><Link href="/academics/curriculum" className="text-muted-foreground hover:text-primary">Curriculum</Link></li>
              <li><Link href="/academics/calendar" className="text-muted-foreground hover:text-primary">Academic Calendar</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary">Photo Gallery</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Campus Visit</Link></li>
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Institutional</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/faculty" className="text-muted-foreground hover:text-primary">Our Faculty</Link></li>
              <li><Link href="/disclosures" className="text-muted-foreground hover:text-primary">Mandatory Disclosures</Link></li>
              <li><Link href="/safety" className="text-muted-foreground hover:text-primary">Safety & Security</Link></li>
              <li><Link href="/infrastructure" className="text-muted-foreground hover:text-primary">Infrastructure</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">123 Education Lane, Academic District, City-456789</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">+91 9988776655</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">info@educonnecthub.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EduConnect Hub School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
