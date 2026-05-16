"use client"

import { useState } from "react"
import { UploadCloud, FileText, CheckCircle, AlertTriangle, ChevronRight } from "lucide-react"

export default function ResumeAnalyzerPage() {
  const [isUploading, setIsUploading] = useState(false)
  const [isAnalyzed, setIsAnalyzed] = useState(false)

  const handleUploadClick = () => {
    setIsUploading(true)
    setTimeout(() => {
      setIsUploading(false)
      setIsAnalyzed(true)
    }, 1500) // fake delay
  }

  return (
    <div className="container max-w-5xl py-10">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Resume Analyzer</h1>
        <p className="text-muted-foreground">Upload your resume and let our AI evaluate your profile against industry standards.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr_300px]">
        {/* Left Col: Upload / Results */}
        <div className="space-y-8">

          {/* Upload Box */}
          {!isAnalyzed && (
            <div className="rounded-xl border-2 border-dashed border-muted-foreground/25 bg-muted/20 px-6 py-16 text-center hover:bg-muted/40 transition-colors">
              <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <UploadCloud className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload your resume</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Drag and drop your PDF or Word document here, or click to browse. Max file size: 5MB.
                </p>
                <button
                  onClick={handleUploadClick}
                  disabled={isUploading}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8"
                >
                  {isUploading ? "Analyzing..." : "Select File"}
                </button>
              </div>
            </div>
          )}

          {/* Results Area */}
          {isAnalyzed && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 border rounded-lg bg-card">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">john_doe_resume_2023.pdf</h3>
                  <p className="text-sm text-muted-foreground">Analyzed just now</p>
                </div>
                <button onClick={() => setIsAnalyzed(false)} className="text-sm font-medium text-primary hover:underline">
                  Upload new
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="border rounded-lg p-6 bg-card">
                  <div className="flex items-center gap-2 mb-4 text-green-500">
                    <CheckCircle className="h-5 w-5" />
                    <h4 className="font-semibold text-foreground">Strengths</h4>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                      <span>Strong demonstration of <strong>React</strong> and modern frontend frameworks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                      <span>Action verbs used effectively in experience descriptions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                      <span>Quantifiable metrics included in previous roles (+40% performance).</span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-6 bg-card">
                  <div className="flex items-center gap-2 mb-4 text-yellow-500">
                    <AlertTriangle className="h-5 w-5" />
                    <h4 className="font-semibold text-foreground">Areas for Improvement</h4>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                      <span>Missing keywords for <strong>Cloud Services (AWS/Azure)</strong> often found in similar roles.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                      <span>Summary section is too long. Consider keeping it under 3 sentences.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Right Col: Score Card */}
        <div className="space-y-6">
          <div className="border rounded-xl p-6 bg-card text-card-foreground shadow-sm">
            <h3 className="font-semibold text-lg mb-6">Overall Score</h3>

            <div className="flex flex-col items-center justify-center py-6">
              <div className="relative flex items-center justify-center w-32 h-32">
                {/* Visual circle placeholder */}
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-muted/20" strokeWidth="3"></circle>
                  {isAnalyzed ? (
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-primary" strokeWidth="3" strokeDasharray="100" strokeDashoffset="22" strokeLinecap="round"></circle>
                  ) : (
                    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-primary/30" strokeWidth="3" strokeDasharray="100" strokeDashoffset="100" strokeLinecap="round"></circle>
                  )}
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold">{isAnalyzed ? "78" : "--"}</span>
                  <span className="text-xs text-muted-foreground">/ 100</span>
                </div>
              </div>
              <p className="mt-4 text-sm font-medium text-center">
                {isAnalyzed ? "Good candidate profile" : "Upload resume to see score"}
              </p>
            </div>

            {isAnalyzed && (
              <div className="mt-6 pt-6 border-t space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Format & Structure</span>
                  <span className="font-medium">90/100</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Keyword Match</span>
                  <span className="font-medium">72/100</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Impact Metrics</span>
                  <span className="font-medium">65/100</span>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}