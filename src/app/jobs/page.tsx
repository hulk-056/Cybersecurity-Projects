import { JobCard } from "@/components/job-card"
import { Search, SlidersHorizontal } from "lucide-react"

export default function JobsPage() {
  const MOCK_JOBS = [
    {
      id: 1,
      title: "Senior Full Stack Engineer",
      company: "TechNova",
      location: "Remote",
      type: "Full-time",
      salary: "$140k - $180k",
      matchScore: 95,
      skills: ["React", "Node.js", "TypeScript", "AWS"],
    },
    {
      id: 2,
      title: "Frontend Developer (React)",
      company: "Innovate Labs",
      location: "New York, NY",
      type: "Full-time",
      salary: "$120k - $150k",
      matchScore: 88,
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Backend Software Engineer",
      company: "DataFlow Systems",
      location: "San Francisco, CA",
      type: "Contract",
      salary: "$80 - $100 / hr",
      matchScore: 65,
      skills: ["Python", "Django", "PostgreSQL"],
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Creative Pulse",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $130k",
      matchScore: 42,
      skills: ["Figma", "User Research", "Prototyping"],
    },
  ]

  return (
    <div className="container py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row gap-8">

        {/* Sidebar / Filters */}
        <aside className="w-full md:w-64 shrink-0 space-y-6">
          <div>
            <h2 className="text-lg font-semibold tracking-tight mb-4 flex items-center">
              <SlidersHorizontal className="mr-2 h-4 w-4" /> Filters
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Job title, keywords..."
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-9"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Job Type</label>
                <div className="space-y-2 pt-1">
                  {["Full-time", "Part-time", "Contract", "Freelance"].map((type) => (
                    <label key={type} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                      <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Location</label>
                <div className="space-y-2 pt-1">
                  {["Remote", "On-site", "Hybrid"].map((loc) => (
                    <label key={loc} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                      <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{loc}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Recommended Jobs</h1>
              <p className="text-muted-foreground text-sm mt-1">Based on your uploaded resume and skills profile.</p>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-muted-foreground">Sort by:</span>
              <select className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                <option>Match Score</option>
                <option>Newest</option>
                <option>Salary</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {MOCK_JOBS.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}