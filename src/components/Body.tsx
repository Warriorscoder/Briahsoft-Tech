import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import axios from "axios";
import { toast } from "sonner";
// import { ChartConfig } from "./ui/chart";
import { Loader2 } from "lucide-react";
import Bargraph from "./Bargraph";
import { TableComponent } from "./TableComponent";

type EventCounts = {
  date: string;
  PushEvent: number;
  PullRequestEvent: number;
  IssuesEvent: number;
  IssueCommentEvent: number;
  CreateEvent: number;
  DeleteEvent: number;
  ForkEvent: number;
  PullRequestReviewEvent: number;
  PullRequestReviewCommentEvent: number;
  CommitCommentEvent: number;
  ReleaseEvent: number;
  MemberEvent: number;
  PublicEvent: number;
  GollumEvent: number;
  SponsorshipEvent: number;
  WatchEvent: number;
  TeamAddEvent: number;
  DeploymentEvent: number;
  DeploymentStatusEvent: number;
};

const eventTypes = [
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

type EventType = typeof eventTypes[number];

type TableData = {
  name: string,
  Link: string,
  Language: string
}

export default function Body() {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [username, setUsername] = useState("");
  const [data, setData] = useState<EventCounts[]>([]);
  const [Tabledata, setTabledata] = useState<TableData[]>([])
  async function handlesubmit() {
    setIsSubmiting(true);
    // console.log("inside handlesubmit "+username)
    // if (username) {
    try {
      const publicEvents = await axios.get(
        `https://api.github.com/users/${username}/events/public`
      );

      if (publicEvents?.data) {
        const l = publicEvents.data.length;
        const events = publicEvents.data;
        const dataMap: Record<string, EventCounts> = {};

        for (let i = 0; i < l; i++) {
          const event = events[i];
          const isoDate = event.created_at;
          const eventType = event.type; // ✅ only here

          // Format date
          const dateObj = new Date(isoDate);
          const year = dateObj.getFullYear();
          const month = String(dateObj.getMonth() + 1).padStart(2, "0");
          const day = String(dateObj.getDate()).padStart(2, "0");
          const formattedDate = `${year}-${month}-${day}`;

          if (!dataMap[formattedDate]) {
            dataMap[formattedDate] = {
              date: formattedDate,
              PushEvent: 0,
              PullRequestEvent: 0,
              IssuesEvent: 0,
              IssueCommentEvent: 0,
              CreateEvent: 0,
              DeleteEvent: 0,
              ForkEvent: 0,
              PullRequestReviewEvent: 0,
              PullRequestReviewCommentEvent: 0,
              CommitCommentEvent: 0,
              ReleaseEvent: 0,
              MemberEvent: 0,
              PublicEvent: 0,
              GollumEvent: 0,
              SponsorshipEvent: 0,
              WatchEvent: 0,
              TeamAddEvent: 0,
              DeploymentEvent: 0,
              DeploymentStatusEvent: 0,
            };
          }

          if (eventTypes.includes(eventType as EventType)) {
            const typedEvent = eventType as EventType;
            dataMap[formattedDate][typedEvent]++;
          }
        }


        // Convert map to array
        const tempdata = Object.values(dataMap);
        setData(tempdata)
        // console.log(data);
      }
    } catch (error) {
      console.log("Axios error:", error);

      let errorMessage = "An error occurred. Please try again.";

      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || errorMessage;
      }

      toast("failure", {
        description: errorMessage,
      });
    } finally {
      setIsSubmiting(false);
    }

    try {
      setIsSubmiting(true)
      const publicRepos = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );

      const l = publicRepos.data.length;
      const repoResponse = publicRepos.data
      const tempdata = []

      for (let i = 0; i < l; i++) {
        const temprepo = repoResponse[i];
        const name = temprepo.name;
        const Language = temprepo.language;
        const Link = temprepo.html_url

        tempdata.push({
          name,
          Language,
          Link
        })
      }

      setTabledata(tempdata)
      // console.log(Tabledata)

    } catch (error) {
      console.log("Axios error:", error);

      let errorMessage = "An error occurred. Please try again.";

      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || errorMessage;
      }

      toast("failure", {
        description: errorMessage,
      });
    } finally {
      setIsSubmiting(false);
    }
  }
  return (
    <>
      <div className="flex w-full items-center  mt-10 justify-center">
        <div className="w-1/3 flex space-x-2">
          <Input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="Username"
            placeholder="Username"
          />
          <Button onClick={handlesubmit} type="button">{isSubmiting ? <Loader2 /> : 'Enter'}</Button>
        </div>
      </div>

      <div className="p-5 h-[90vh]">
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full h-full rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={50}>
            <div className="h-full overflow-auto p-2">
              <Bargraph chartData={data} />
            </div>
          </ResizablePanel>

          <ResizableHandle />

          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical" className="h-full">
              <ResizablePanel defaultSize={25}>
                <div className="h-full overflow-auto p-2">
                  <TableComponent Tabledata={Tabledata} />
                </div>
              </ResizablePanel>

              <ResizableHandle />

              {/* You can add more panels here if needed */}
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

    </>
  );
};  