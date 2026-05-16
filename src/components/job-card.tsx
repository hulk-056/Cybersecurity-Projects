import { MapPin, Building, Clock, DollarSign, Zap } from "lucide-react"

interface JobCardProps {
  title: string
  company: string
  location: string
  type: string
  salary: string
  matchScore: number
  skills: string[]
}

export function JobCard({ title, company, location, type, salary, matchScore, skills }: JobCardProps) {
  // Determine color based on match score
  let scoreColor = "text-green-500"
  let scoreBg = "bg-green-500/10"
  if (matchScore < 70) {
    scoreColor = "text-yellow-500"
    scoreBg = "bg-yellow-500/10"
  }
  if (matchScore < 50) {
    scoreColor = "text-red-500"
    scoreBg = "bg-red-500/10"
  }

  return (
    <div className="group rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
            <div className="flex items-center text-muted-foreground mt-1 text-sm">
              <Building className="mr-1 h-3 w-3" />
              <span>{company}</span>
            </div>
          </div>
          <div className={`flex flex-col items-center justify-center rounded-lg ${scoreBg} p-2 min-w-[4rem]`}>
            <span className={`text-xl font-bold ${scoreColor}`}>{matchScore}%</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Match</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="mr-1.5 h-3.5 w-3.5" />
            {location}
          </div>
          <div className="flex items-center">
            <Clock className="mr-1.5 h-3.5 w-3.5" />
            {type}
          </div>
          <div className="flex items-center">
            <DollarSign className="mr-1.5 h-3.5 w-3.5" />
            {salary}
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Zap className="h-3.5 w-3.5 text-primary" />
            <span>Key Match Skills</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-secondary-foreground/10">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Apply Now
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            Details
          </button>
        </div>
      </div>
    </div>
  )
}