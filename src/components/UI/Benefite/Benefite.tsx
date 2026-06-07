type Props = {
  title: string;
  subtitle?: string;
  icon?: string;
};

export function Benefite({ title, subtitle, icon }: Props) {
  return (
    <div className="flex items-center gap-4 px-3 w-full h-full">
      <div className="bg-(--border) w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0">
        {icon || "1"}
      </div>
      <div className="flex-1 min-w-0 flex items-center justify-between">
        <div className="flex flex-col overflow-hidden">
          <h3 className="text-sm font-semibold leading-tight truncate">{title}</h3>
          {subtitle && <p className="text-xs text-(--text-secondary) truncate">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
