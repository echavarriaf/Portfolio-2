type StatusRowProps = {
  name: string;
  status: string;
  active?: boolean;
  fault?: boolean;
};

export default function StatusRow({
  name,
  status,
  active = false,
  fault = false,
}: StatusRowProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/[0.04] bg-black/20 px-3 py-2">
      <div className="flex items-center gap-2">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            fault ? "bg-red-400" : active ? "bg-emerald-400" : "bg-yellow-400"
          }`}
        />

        <span className="text-[10px] text-zinc-500 sm:text-xs">{name}</span>
      </div>

      <span
        className={`font-mono text-[9px] ${
          fault
            ? "text-red-300"
            : active
              ? "text-emerald-300/70"
              : "text-yellow-200/60"
        }`}
      >
        {status}
      </span>
    </div>
  );
}
