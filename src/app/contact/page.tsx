
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function ContactPage() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    })
    form.reset()
  }

  return (
    <div className="w-full">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-4">
          <Badge className="bg-white/20 text-white border-white/30">Get in Touch</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-medium">
            We are here to answer your questions and welcome you to our campus.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">Reach Us Directly</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you are a prospective parent, an alumni, or looking for employment, our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: MapPin, title: "Address", content: "123 Education Lane, Academic District, City-456789" },
                  { icon: Phone, title: "Phone", content: "+91 9988776655" },
                  { icon: Mail, title: "Email", content: "info@educonnecthub.edu" },
                  { icon: Clock, title: "Hours", content: "Mon - Sat: 8:00 AM - 4:00 PM" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl border bg-white shadow-sm hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="border-none shadow-xl">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl><Input placeholder="john@example.com" {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl><Input placeholder="Admission Inquiry" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl><Textarea placeholder="How can we help you?" className="min-h-[150px]" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90">
                        <Send className="mr-2 h-5 w-5" /> Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[400px] bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground flex-col gap-2">
          <MapPin className="h-10 w-10 opacity-20" />
          <p className="font-medium">Campus Location Map</p>
          <p className="text-sm">Interactive visualization coming soon</p>
        </div>
      </section>
    </div>
  )
}
