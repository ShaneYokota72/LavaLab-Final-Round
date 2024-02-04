import { FAVORITE_TOOLS_METADATA } from "@/types/favoriteToolsTypes";
import FavoriteTool from "@/components/FavoriteTool";
import Button from "@/components/Button";
import clsx from "clsx";
import Notification from "@/components/Notification";

const FAVORITE_TOOLS:FAVORITE_TOOLS_METADATA[] = [
  {
    name: "Figma",
    description: "Stay up to date with your team's latest designs.",
    imagePath: "/icons/FigmaIcon.png",
  },
  {
    name: "Google Drive",
    description: "Access all of your documents and information.",
    imagePath: "/icons/GoogleDriveIcon.png",
  },
  {
    name: "Slack",
    description: "Communicate seamlessly with your teammates.",
    imagePath: "/icons/SlackIcon.png",
  },
  {
    name: "Notion",
    description: "Sync all of your notes, team docs, and other important information.",
    imagePath: "/icons/NotionIcon.png",
  },
  {
    name: "Miro",
    description: "Unlock the power of collaboration to distill insights from data.",
    imagePath: "/icons/MiroIcon.png",
  },
  {
    name : "Airtable",
    description: "Keep your data organized in a spreadsheet-database format.",
    imagePath: "/icons/AirtableIcon.png",
  },
  {
    name: "Confluence",
    description: "Create content, collaborate on work, and organize and share information",
    imagePath: "/icons/ConfluenceIcon.png",
  },
  {
    name: "Dovetail",
    description: "Organize and tag your research in a collaborative platform.",
    imagePath: "/icons/DovetailIcon.png",
  }
]

export default function Home() {

  return (
    <div className={clsx(
      "relative px-18 pb-19.5 bg-white",// basic styling
      "before:w-7/12 before:h-[500px] before:absolute before:bottom-20 before:left-1/2 before:-translate-x-1/2 before:bg-hivePurpleBackground before:blur-9xl before:content-[''] before:opacity-40",// backgruond blur effect
      )}
    >
      
      <h2 className="font-helvetica text-5xl leading-19 mt-12 md:mt-40 mb-12 z-10">Connect your favorite tools.</h2>

      <div className="max-w-7xl flex flex-wrap gap-10">
        {
          FAVORITE_TOOLS.map((tool, index) => {
            return (
              <FavoriteTool key={index} delay={index*25} name={tool.name} description={tool.description} imagePath={tool.imagePath} />
            )
          })
        }
      </div>

      <div className="mt-28 flex gap-6 relative z-20">
        <Button text="Back" notificationElement={<Notification message="Back Button Clicked ⚠️" status="warning"/>} />
        <Button text="Finish" dark className="w-35" notificationElement={<Notification message="Finish Button Clicked ✅" status="success"/>} />
      </div>
    </div>
  );
}
