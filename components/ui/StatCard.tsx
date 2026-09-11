type StatCardProps = {
  value: string;
  label: string;
  className?: string;
  centered?: boolean;
};

export default function StatCard({
  value,
  label,
  className = "",
  centered = false,
}: StatCardProps) {
  return (
    <div
      className={`rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 ${
        centered ? "text-center" : ""
      } ${className}`}
    >
      <p className="font-mono text-xs font-semibold tracking-[-0.02em] text-zinc-200 sm:text-sm">
        {value}
      </p>

      <p className="mt-1 text-[8px] uppercase tracking-[0.14em] text-zinc-700 sm:text-[9px]">
        {label}
      </p>
    </div>
  );
}