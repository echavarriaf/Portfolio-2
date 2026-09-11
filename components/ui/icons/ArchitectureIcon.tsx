import ApplicationIcon from "./ApplicationIcon";
import ChartIcon from "./ChartIcon";
import CodeIcon from "./CodeIcon";
import SignalIcon from "./SignalIcon";

export default function ArchitectureIcon({ index }: { index: number }) {
  return (
    <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-sky-300 transition-all duration-300 group-hover:border-sky-400/20 group-hover:bg-sky-400/[0.06]">
      {index === 0 && <SignalIcon />}
      {index === 1 && <CodeIcon />}
      {index === 2 && <ApplicationIcon />}
      {index >= 3 && <ChartIcon />}
    </div>
  );
}
