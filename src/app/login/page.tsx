
"use client"

import * as React from "react"
import Link from "next/link"
import { GraduationCap, Lock, Mail, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const [isLoading, setIsLoading] = React.useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulation
    setTimeout(() => {
      window.location.href = "/dashboard"
    }, 1500)
  }

  return (
    <div className="min-h-[calc(100svh-64px)] flex items-center justify-center px-4 py-12 bg-muted/30">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <GraduationCap className="h-10 w-10 text-primary" />
            <span className="font-headline text-2xl font-bold text-primary">EduConnect Hub</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground">Select your portal to continue</p>
        </div>

        <Tabs defaultValue="student" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-12">
            <TabsTrigger value="student">Student</TabsTrigger>
            <TabsTrigger value="parent">Parent</TabsTrigger>
            <TabsTrigger value="admin">Staff</TabsTrigger>
          </TabsList>
          
          {["student", "parent", "admin"].map((role) => (
            <TabsContent key={role} value={role}>
              <Card className="border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="capitalize">{role} Login</CardTitle>
                  <CardDescription>Enter your official credentials to access your dashboard.</CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Portal ID / Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="email" type="email" placeholder="name@educonnect.com" className="pl-10" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link href="#" className="text-xs text-primary hover:underline">Forgot password?</Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="password" type="password" className="pl-10" required />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button type="submit" className="w-full bg-primary" disabled={isLoading}>
                      {isLoading ? "Authenticating..." : `Login as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
                      {!isLoading && <ChevronRight className="ml-2 h-4 w-4" />}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Trouble logging in? Contact the school administration at <span className="font-semibold">support@educonnecthub.edu</span>
                    </p>
                  </CardFooter>
                </form>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
