import ApplicationIcon from "./ApplicationIcon";
import ChartIcon from "./ChartIcon";
import CodeIcon from "./CodeIcon";
import SignalIcon from "./SignalIcon";

type ArchitectureIconProps = {
  stageLabel: string;
};

export default function ArchitectureIcon({
  stageLabel,
}: ArchitectureIconProps) {
  const icon = getArchitectureIcon(stageLabel);

  return (
    <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-sky-300 transition-all duration-300 group-hover:border-sky-400/20 group-hover:bg-sky-400/[0.06]">
      {icon}
    </div>
  );
}

function getArchitectureIcon(stageLabel: string) {
  switch (stageLabel) {
    case "Signal":
    case "Input":
    case "Data":
      return <SignalIcon />;

    case "Process":
    case "Rules":
    case "Model":
      return <CodeIcon />;

    case "Application":
    case "Interface":
    case "Access":
    case "API":
    case "Client":
      return <ApplicationIcon />;

    case "Output":
    case "Automation":
    case "Workflow":
    case "Follow-up":
      return <ChartIcon />;

    default:
      return <ApplicationIcon />;
  }
}
