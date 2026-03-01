
import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/shared/navbar'
import { Footer } from '@/components/shared/footer'
import { AIAssistant } from '@/components/shared/ai-assistant'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'EduConnect Hub | Excellence in Education',
  description: 'A modern, dynamic school management system and website for holistic student growth.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <AIAssistant />
        <Toaster />
      </body>
    </html>
  )
}
