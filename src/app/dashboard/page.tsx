"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"
import { TrendingUp, Users } from "lucide-react"

const skillsData = [
  { name: "React", demand: 98 },
  { name: "Python", demand: 92 },
  { name: "Node.js", demand: 85 },
  { name: "TypeScript", demand: 82 },
  { name: "AWS", demand: 78 },
  { name: "Docker", demand: 75 },
  { name: "SQL", demand: 70 },
]

const salaryTrendData = [
  { year: "2020", salary: 110000 },
  { year: "2021", salary: 115000 },
  { year: "2022", salary: 125000 },
  { year: "2023", salary: 135000 },
  { year: "2024", salary: 142000 },
]

export default function DashboardPage() {
  return (
    <div className="container py-10 space-y-8 max-w-6xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Skills Radar Dashboard</h1>
        <p className="text-muted-foreground mt-2">Real-time insights into tech industry trends and salary expectations.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="space-y-1">
            <h3 className="text-sm font-medium">Top Trending Skill</h3>
            <div className="text-2xl font-bold">React.js</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </div>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="space-y-1">
            <h3 className="text-sm font-medium">Avg Tech Salary</h3>
            <div className="text-2xl font-bold">$142,000</div>
            <p className="text-xs text-muted-foreground">+5.2% from last year</p>
          </div>
          <Users className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Bar Chart */}
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
          <div className="space-y-1 mb-6">
            <h3 className="text-lg font-semibold leading-none tracking-tight">In-Demand Skills</h3>
            <p className="text-sm text-muted-foreground">Relative employer demand score (out of 100).</p>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  cursor={{ fill: 'hsl(var(--muted))', opacity: 0.2 }}
                  contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                />
                <Bar dataKey="demand" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line Chart */}
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
          <div className="space-y-1 mb-6">
            <h3 className="text-lg font-semibold leading-none tracking-tight">Average Salary Trend</h3>
            <p className="text-sm text-muted-foreground">Software Engineering base salary progression.</p>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salaryTrendData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" />
                <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  formatter={(value: any) => [`$${Number(value).toLocaleString()}`, 'Salary']}
                />
                <Line type="monotone" dataKey="salary" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 4, fill: "hsl(var(--primary))" }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}