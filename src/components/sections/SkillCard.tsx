import { Card } from '../ui/Card';
interface SkillCardProps {
  category: string;
  tools: readonly string[];
  icon: string;
}
export function SkillCard({ category, tools, icon }: SkillCardProps) {
  return (
    <Card className="p-[25px] max-[1050px]:p-5 max-[760px]:p-6 reveal">
      <span
        className="grid size-[42px] place-items-center rounded-lg bg-soft font-mono text-[20px] text-accent"
        aria-hidden="true"
      >
        {icon}
      </span>
      <h3 className="my-5 text-[21px] font-bold leading-[1.3] tracking-[-.8px]">{category}</h3>
      <div className="flex flex-wrap gap-2 [&>span]:rounded-[5px] [&>span]:border [&>span]:border-line [&>span]:px-[9px] [&>span]:py-[5px] [&>span]:text-[14px] [&>span]:text-muted">
        {tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
    </Card>
  );
}
