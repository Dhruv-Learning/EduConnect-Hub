
"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle2, UploadCloud, ChevronRight, ChevronLeft } from "lucide-react"

const formSchema = z.object({
  studentName: z.string().min(2, "Name must be at least 2 characters"),
  dateOfBirth: z.string().min(1, "Required"),
  gender: z.string().min(1, "Required"),
  grade: z.string().min(1, "Required"),
  parentName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  address: z.string().min(10, "Address is too short"),
  prevSchool: z.string().optional(),
})

export default function AdmissionApplyPage() {
  const [step, setStep] = React.useState(1)
  const [submitted, setSubmitted] = React.useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      grade: "",
      parentName: "",
      email: "",
      phone: "",
      address: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setSubmitted(true)
    toast({
      title: "Application Submitted Successfully",
      description: "We'll review your details and get back to you soon.",
    })
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-24 flex items-center justify-center">
        <Card className="max-w-md w-full text-center p-8 space-y-6">
          <div className="flex justify-center">
            <CheckCircle2 className="h-16 w-16 text-accent" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Thank You!</h2>
            <p className="text-muted-foreground">
              Your admission application for {form.getValues().studentName} has been received. 
              Application ID: #ADM-2024-{Math.floor(Math.random() * 10000)}
            </p>
          </div>
          <Button asChild className="w-full">
            <a href="/">Return to Home</a>
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-primary">Online Admission Portal</h1>
          <p className="text-muted-foreground">Complete the form below to start your child's journey with us.</p>
        </div>

        {/* Progress Tracker */}
        <div className="flex items-center justify-between mb-8 relative px-4">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted -translate-y-1/2 z-0" />
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={cn(
                "relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 bg-white",
                step >= s ? "border-primary text-primary" : "border-muted text-muted-foreground",
                step > s ? "bg-primary text-white" : ""
              )}
            >
              {step > s ? <CheckCircle2 className="h-6 w-6" /> : s}
            </div>
          ))}
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card className="border-none shadow-sm bg-white">
              <CardHeader>
                <CardTitle>
                  {step === 1 && "Step 1: Student Information"}
                  {step === 2 && "Step 2: Guardian Details"}
                  {step === 3 && "Step 3: Document Uploads"}
                </CardTitle>
                <CardDescription>All fields marked with * are mandatory.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {step === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="studentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Student Full Name *</FormLabel>
                          <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date of Birth *</FormLabel>
                          <FormControl><Input type="date" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="grade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Grade Applying For *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select class" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                                <SelectItem key={n} value={n.toString()}>Grade {n}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {step === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="parentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Guardian Full Name *</FormLabel>
                          <FormControl><Input placeholder="Jane Doe" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl><Input placeholder="parent@example.com" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl><Input placeholder="+1 234 567 890" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Residential Address *</FormLabel>
                          <FormControl><Textarea placeholder="Full address details..." {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-8 border-2 border-dashed rounded-xl flex flex-col items-center justify-center space-y-3 hover:border-primary/50 transition-colors cursor-pointer bg-muted/20">
                        <UploadCloud className="h-10 w-10 text-muted-foreground" />
                        <p className="text-sm font-semibold">Birth Certificate</p>
                        <p className="text-xs text-muted-foreground">PDF or JPG (Max 5MB)</p>
                      </div>
                      <div className="p-8 border-2 border-dashed rounded-xl flex flex-col items-center justify-center space-y-3 hover:border-primary/50 transition-colors cursor-pointer bg-muted/20">
                        <UploadCloud className="h-10 w-10 text-muted-foreground" />
                        <p className="text-sm font-semibold">Previous Report Card</p>
                        <p className="text-xs text-muted-foreground">PDF or JPG (Max 5MB)</p>
                      </div>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg flex items-start gap-3 border border-primary/10">
                      <div className="h-5 w-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">!</div>
                      <p className="text-sm text-primary font-medium">
                        By submitting this application, you agree to our school policies and verify that all information provided is accurate to the best of your knowledge.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
              <div className="p-6 border-t flex items-center justify-between">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setStep(step - 1)} 
                  disabled={step === 1}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                
                {step < 3 ? (
                  <Button type="button" onClick={() => setStep(step + 1)}>
                    Next Step <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button type="submit" className="bg-accent hover:bg-accent/90">
                    Submit Application
                  </Button>
                )}
              </div>
            </Card>
          </form>
        </Form>
      </div>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
