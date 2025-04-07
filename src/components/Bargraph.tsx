import * as React from "react"
import {Bar, BarChart, CartesianGrid, XAxis } from "recharts"
// import { Label } from "./ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  // ChartTooltipContent,
} from "./ui/chart"

export const description = "An interactive bar chart"

// const chartData = [
//   {
//     date: "2025-03-25",
//     PushEvent: 4,
//     PullRequestEvent: 7,
//     IssuesEvent: 3,
//     IssueCommentEvent: 2,
//     CreateEvent: 8,
//     DeleteEvent: 1,
//     ForkEvent: 5,
//     PullRequestReviewEvent: 0,
//     PullRequestReviewCommentEvent: 4,
//     CommitCommentEvent: 6,
//     ReleaseEvent: 2,
//     MemberEvent: 1,
//     PublicEvent: 3,
//     GollumEvent: 0,
//     SponsorshipEvent: 5,
//     WatchEvent: 6,
//     TeamAddEvent: 1,
//     DeploymentEvent: 2,
//     DeploymentStatusEvent: 3,
//   },
//   {
//     date: "2025-03-26",
//     PushEvent: 2,
//     PullRequestEvent: 1,
//     IssuesEvent: 4,
//     IssueCommentEvent: 5,
//     CreateEvent: 3,
//     DeleteEvent: 0,
//     ForkEvent: 6,
//     PullRequestReviewEvent: 2,
//     PullRequestReviewCommentEvent: 3,
//     CommitCommentEvent: 7,
//     ReleaseEvent: 0,
//     MemberEvent: 2,
//     PublicEvent: 6,
//     GollumEvent: 4,
//     SponsorshipEvent: 1,
//     WatchEvent: 5,
//     TeamAddEvent: 2,
//     DeploymentEvent: 1,
//     DeploymentStatusEvent: 0,
//   },
//   {
//     date: "2025-03-27",
//     PushEvent: 5,
//     PullRequestEvent: 0,
//     IssuesEvent: 2,
//     IssueCommentEvent: 1,
//     CreateEvent: 7,
//     DeleteEvent: 3,
//     ForkEvent: 0,
//     PullRequestReviewEvent: 6,
//     PullRequestReviewCommentEvent: 4,
//     CommitCommentEvent: 2,
//     ReleaseEvent: 1,
//     MemberEvent: 4,
//     PublicEvent: 5,
//     GollumEvent: 2,
//     SponsorshipEvent: 3,
//     WatchEvent: 0,
//     TeamAddEvent: 6,
//     DeploymentEvent: 4,
//     DeploymentStatusEvent: 1,
//   },
//   {
//     date: "2025-03-28",
//     PushEvent: 7,
//     PullRequestEvent: 3,
//     IssuesEvent: 5,
//     IssueCommentEvent: 0,
//     CreateEvent: 2,
//     DeleteEvent: 4,
//     ForkEvent: 1,
//     PullRequestReviewEvent: 5,
//     PullRequestReviewCommentEvent: 7,
//     CommitCommentEvent: 0,
//     ReleaseEvent: 6,
//     MemberEvent: 3,
//     PublicEvent: 1,
//     GollumEvent: 5,
//     SponsorshipEvent: 2,
//     WatchEvent: 3,
//     TeamAddEvent: 0,
//     DeploymentEvent: 6,
//     DeploymentStatusEvent: 2,
//   },
//   {
//     date: "2025-03-29",
//     PushEvent: 6,
//     PullRequestEvent: 2,
//     IssuesEvent: 1,
//     IssueCommentEvent: 6,
//     CreateEvent: 4,
//     DeleteEvent: 2,
//     ForkEvent: 2,
//     PullRequestReviewEvent: 3,
//     PullRequestReviewCommentEvent: 5,
//     CommitCommentEvent: 1,
//     ReleaseEvent: 5,
//     MemberEvent: 0,
//     PublicEvent: 7,
//     GollumEvent: 3,
//     SponsorshipEvent: 4,
//     WatchEvent: 1,
//     TeamAddEvent: 3,
//     DeploymentEvent: 7,
//     DeploymentStatusEvent: 0,
//   },
//   {
//     date: "2025-03-30",
//     PushEvent: 1,
//     PullRequestEvent: 6,
//     IssuesEvent: 3,
//     IssueCommentEvent: 2,
//     CreateEvent: 5,
//     DeleteEvent: 1,
//     ForkEvent: 3,
//     PullRequestReviewEvent: 4,
//     PullRequestReviewCommentEvent: 6,
//     CommitCommentEvent: 0,
//     ReleaseEvent: 7,
//     MemberEvent: 5,
//     PublicEvent: 2,
//     GollumEvent: 6,
//     SponsorshipEvent: 0,
//     WatchEvent: 2,
//     TeamAddEvent: 5,
//     DeploymentEvent: 1,
//     DeploymentStatusEvent: 4,
//   },
//   {
//     date: "2025-03-31",
//     PushEvent: 2,
//     PullRequestEvent: 5,
//     IssuesEvent: 0,
//     IssueCommentEvent: 7,
//     CreateEvent: 3,
//     DeleteEvent: 2,
//     ForkEvent: 4,
//     PullRequestReviewEvent: 1,
//     PullRequestReviewCommentEvent: 2,
//     CommitCommentEvent: 3,
//     ReleaseEvent: 1,
//     MemberEvent: 6,
//     PublicEvent: 4,
//     GollumEvent: 7,
//     SponsorshipEvent: 5,
//     WatchEvent: 0,
//     TeamAddEvent: 4,
//     DeploymentEvent: 3,
//     DeploymentStatusEvent: 6,
//   },
//   {
//     date: "2025-04-01",
//     PushEvent: 8,
//     PullRequestEvent: 2,
//     IssuesEvent: 4,
//     IssueCommentEvent: 1,
//     CreateEvent: 6,
//     DeleteEvent: 0,
//     ForkEvent: 5,
//     PullRequestReviewEvent: 2,
//     PullRequestReviewCommentEvent: 3,
//     CommitCommentEvent: 6,
//     ReleaseEvent: 2,
//     MemberEvent: 1,
//     PublicEvent: 0,
//     GollumEvent: 2,
//     SponsorshipEvent: 6,
//     WatchEvent: 4,
//     TeamAddEvent: 2,
//     DeploymentEvent: 0,
//     DeploymentStatusEvent: 5,
//   },
//   {
//     date: "2025-04-02",
//     PushEvent: 3,
//     PullRequestEvent: 4,
//     IssuesEvent: 2,
//     IssueCommentEvent: 3,
//     CreateEvent: 0,
//     DeleteEvent: 5,
//     ForkEvent: 6,
//     PullRequestReviewEvent: 7,
//     PullRequestReviewCommentEvent: 0,
//     CommitCommentEvent: 5,
//     ReleaseEvent: 4,
//     MemberEvent: 2,
//     PublicEvent: 6,
//     GollumEvent: 1,
//     SponsorshipEvent: 3,
//     WatchEvent: 7,
//     TeamAddEvent: 6,
//     DeploymentEvent: 1,
//     DeploymentStatusEvent: 0,
//   },
//   {
//     date: "2025-04-03",
//     PushEvent: 9,
//     PullRequestEvent: 0,
//     IssuesEvent: 6,
//     IssueCommentEvent: 4,
//     CreateEvent: 2,
//     DeleteEvent: 6,
//     ForkEvent: 1,
//     PullRequestReviewEvent: 3,
//     PullRequestReviewCommentEvent: 6,
//     CommitCommentEvent: 7,
//     ReleaseEvent: 3,
//     MemberEvent: 3,
//     PublicEvent: 5,
//     GollumEvent: 0,
//     SponsorshipEvent: 7,
//     WatchEvent: 2,
//     TeamAddEvent: 1,
//     DeploymentEvent: 4,
//     DeploymentStatusEvent: 7,
//   },
// ]

const chartConfig = {
  actions: {
    label: "Actions",
  },
  PushEvent: {
    label: "PushEvent",
    color: "hsl(var(--chart-1))",
  },
  PullRequestEvent: {
    label: "PullRequestEvent",
    color: "hsl(var(--chart-2))",
  },
  IssuesEvent: {
    label: "IssuesEvent",
    color: "hsl(var(--chart-3))",
  },
  IssueCommentEvent: {
    label: "IssueCommentEvent",
    color: "hsl(var(--chart-4))",
  },
  CreateEvent: {
    label: "CreateEvent",
    color: "hsl(var(--chart-5))",
  },
  DeleteEvent: {
    label: "DeleteEvent",
    color: "hsl(var(--chart-1))",
  },
  ForkEvent: {
    label: "ForkEvent",
    color: "hsl(var(--chart-2))",
  },
  PullRequestReviewEvent: {
    label: "PullRequestReviewEvent",
    color: "hsl(var(--chart-4))",
  },
  PullRequestReviewCommentEvent: {
    label: "PullRequestReviewCommentEvent",
    color: "hsl(var(--chart-5))",
  },
  CommitCommentEvent: {
    label: "CommitCommentEvent",
    color: "hsl(var(--chart-1))",
  },
  ReleaseEvent: {
    label: "ReleaseEvent",
    color: "hsl(var(--chart-2))",
  },
  MemberEvent: {
    label: "MemberEvent",
    color: "hsl(var(--chart-3))",
  },
  PublicEvent: {
    label: "PublicEvent",
    color: "hsl(var(--chart-4))",
  },
  GollumEvent: {
    label: "GollumEvent",
    color: "hsl(var(--chart-5))",
  },
  SponsorshipEvent: {
    label: "SponsorshipEvent",
    color: "hsl(var(--chart-1))",
  },
  WatchEvent: {
    label: "WatchEvent",
    color: "hsl(var(--chart-2))",
  },
  TeamAddEvent: {
    label: "TeamAddEvent",
    color: "hsl(var(--chart-3))",
  },
  DeploymentEvent: {
    label: "DeploymentEvent",
    color: "hsl(var(--chart-4))",
  },
  DeploymentStatusEvent: {
    label: "DeploymentStatusEvent",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export const eventTypes = [
  "PushEvent",
  "PullRequestEvent",
  "IssuesEvent",
  "IssueCommentEvent",
  "CreateEvent",
  "DeleteEvent",
  "ForkEvent",
  "PullRequestReviewEvent",
  "PullRequestReviewCommentEvent",
  "CommitCommentEvent",
  "ReleaseEvent",
  "MemberEvent",
  "PublicEvent",
  "GollumEvent",
  "SponsorshipEvent",
  "WatchEvent",
  "TeamAddEvent",
  "DeploymentEvent",
  "DeploymentStatusEvent",
] as const;

export type EventType = typeof eventTypes[number];

export type EventCounts = {
  date: string;
} & {
  [key in EventType]: number;
};



type BargraphProps = {
  chartData: EventCounts[];
};

export default function Bargraph({chartData}:BargraphProps) {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("PushEvent")

  const total = React.useMemo(() => {
    const dynamicTotals: Record<string, number> = {}

    Object.keys(chartConfig).forEach((key) => {
      if (key !== "actions") {
        dynamicTotals[key] = 0
      }
    })

    chartData.forEach((entry) => {
      Object.keys(dynamicTotals).forEach((key) => {
        const value = entry[key as keyof typeof entry]
        if (typeof value === "number") {
          dynamicTotals[key] += value
        }
      })
    })

    return dynamicTotals
  }, [chartData])

  return (
    <Card>
      <CardHeader>
        <CardTitle>GitHub Event Activity</CardTitle>
        <CardDescription>
          Select an event type to view its distribution.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.keys(chartConfig).map((key) => {
            if (key === "actions") return null
            return (
              <button
                key={key}
                className={`px-3 py-1 rounded-full text-sm font-medium ${activeChart === key
                    ? "bg-primary text-white dark:text-black"
                    : "bg-muted text-muted-foreground"
                  }`}
                onClick={() => setActiveChart(key as keyof typeof chartConfig)}
              >
                {chartConfig[key as keyof typeof chartConfig].label}
              </button>
            )
          })}
        </div>
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData} width={800} height={300}>
            <XAxis dataKey="date" />
            <CartesianGrid strokeDasharray="3 3" />
            <ChartTooltip />
            <Bar
              dataKey={activeChart}
              fill={(chartConfig[activeChart] as { label: string; color: string }).color}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>


        <div className="mt-4 text-sm text-muted-foreground">
          Total {chartConfig[activeChart].label}:{" "}
          <strong>{total[activeChart]}</strong>
        </div> 
      </CardContent>
    </Card>
  )
}
