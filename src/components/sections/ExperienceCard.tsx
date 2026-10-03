import type { Experience } from '../../types/portfolio';
import { Card } from '../ui/Card';
interface ExperienceCardProps {
  experience: Experience;
  expanded: boolean;
  onToggle: () => void;
}
export function ExperienceCard({ experience, expanded, onToggle }: ExperienceCardProps) {
  return (
    <Card className="grid grid-cols-[230px_1fr] overflow-hidden max-[1050px]:grid-cols-[190px_1fr] max-[760px]:grid-cols-1 reveal">
      <div className="flex flex-col border-r border-line p-7 max-[1050px]:p-[23px] max-[760px]:flex-row max-[760px]:flex-wrap max-[760px]:items-center max-[760px]:gap-[14px] max-[760px]:border-r-0 max-[760px]:border-b max-[760px]:px-5 max-[760px]:py-[15px]">
        <span className="font-mono text-[25px] text-accent max-[760px]:text-[18px]">
          {experience.number}
        </span>
        <span className="mt-[25px] font-mono text-[11px] text-muted max-[760px]:m-0 max-[760px]:text-[10px]">
          {experience.date}
        </span>
        <span className="mt-2 text-[14px] max-[760px]:m-0 max-[760px]:text-[12px]">
          {experience.role}
        </span>

        <div className="flex flex-wrap gap-2 mt-5">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              hidden={!expanded}
              className="
            inline-flex items-center
            rounded-full
            border border-blue-500/30
            bg-blue-500/10
            px-3 py-1
            text-xs font-medium
            text-blue-500
            transition-colors
            hover:bg-blue-500/20
          "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="p-[30px] max-[760px]:px-5 max-[760px]:py-6">
        <span className="font-mono text-[12px] tracking-[.5px] text-accent max-[760px]:text-[10px]">
          {experience.client}
        </span>
        <h3 className="mt-[11px] text-[27px] font-bold leading-[1.3] tracking-[-.8px] max-[760px]:text-[24px]">
          {experience.title}
        </h3>
        <button
          className="mt-[23px] flex items-center gap-[18px] border-0 bg-transparent p-0 text-[14px] text-accent [&>span]:text-[22px]"
          aria-expanded={expanded}
          aria-controls={'details-' + experience.number}
          onClick={onToggle}
        >
          {expanded ? 'Hide contributions' : 'View contributions'}
          <span aria-hidden="true">{expanded ? '−' : '+'}</span>
        </button>
        <div
          className="mt-[15px] animate-[rise_.3s_both] border-t border-line pt-[10px] [&>ul]:my-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:text-[16px] [&>ul]:text-muted [&_li]:my-[13px] [&_li]:pl-1 [&_li]:marker:text-accent"
          id={'details-' + experience.number}
          hidden={!expanded}
        >
          <ul>
            {experience.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <p className="mt-5 text-[12px] text-muted">
            Internal product · Professional contributions
          </p>
        </div>
      </div>
    </Card>
  );
}
