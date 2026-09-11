type WindowHeaderProps = {
  title: string;
};

export default function WindowHeader({ title }: WindowHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3 sm:px-5">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-red-400/60" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
        <span className="h-2 w-2 rounded-full bg-green-400/60" />
      </div>

      <span className="font-mono text-[10px] text-zinc-700">{title}</span>
    </div>
  );
}
