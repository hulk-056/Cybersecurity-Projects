"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Bot, Target, Zap } from "lucide-react"

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center space-y-10 py-24 text-center">
        <motion.div
          className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6 max-w-4xl"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.div variants={item} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
            ✨ Introducing AI-Powered Job Matching
          </motion.div>
          <motion.h1 variants={item} className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Find Your Dream Job with{" "}
            <span className="text-primary block sm:inline">Precision AI</span>
          </motion.h1>
          <motion.p variants={item} className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Upload your resume and let our advanced AI match you with roles that fit your exact skills, experience, and career goals. Stop searching, start matching.
          </motion.p>
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <Link
              href="/jobs"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              Explore Jobs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
            >
              Analyze My Resume
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container py-24 sm:py-32 space-y-16">
        <div className="mx-auto max-w-[58rem] text-center space-y-4">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Why use our AI?</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mx-auto">
            Traditional job boards rely on keyword matching. We use deep learning to understand your career trajectory and find roles where you will truly excel.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Bot className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">Smart Parsing</h3>
                <p className="text-sm text-muted-foreground">Extracts skills and experience contexts, not just buzzwords.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Target className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">Match Scoring</h3>
                <p className="text-sm text-muted-foreground">See exactly why you fit a role with percentage-based scoring.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Zap className="h-12 w-12 text-primary" />
              <div className="space-y-2">
                <h3 className="font-bold">Career Coaching</h3>
                <p className="text-sm text-muted-foreground">Chat with our AI to prepare for interviews and close skill gaps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}