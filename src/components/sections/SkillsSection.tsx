import { skillGroups } from '../../data/portfolio';
import { SkillCard } from './SkillCard';
import { SectionHeading } from '../ui/SectionHeading';
import { Container } from '../ui/Container';

export function SkillsSection() {
  return (
    <Container
      as="section"
      id="skills"
      className="border-t border-line py-[75px] max-[760px]:py-[50px] "
    >
      <SectionHeading className="mb-[35px] reveal" label="02 / SKILLS">
        What I work with.
      </SectionHeading>
      <div className="grid grid-cols-3 gap-[18px] max-[760px]:grid-cols-1">
        {Object.entries(skillGroups).map(([category, tools], i) => (
          <SkillCard
            key={category}
            category={category}
            tools={tools}
            icon={['〈〉', '{ }', '⌘'][i]}
          />
        ))}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-10 border-t border-line pt-7 [&_p]:mt-3 [&_p]:text-[16px] [&>div>span:last-child]:text-[14px] [&>div>span:last-child]:text-muted max-[760px]:grid-cols-1 max-[760px]:gap-[25px] reveal">
        <div>
          <span className="font-mono text-[12px] font-medium tracking-[1.5px] text-accent">
            EDUCATION
          </span>
          <p>B.E. in Electronics & Communication</p>
          <span>KLN College of Engineering · 2018–2022</span>
        </div>
        <div>
          <span className="font-mono text-[12px] font-medium tracking-[1.5px] text-accent">
            CERTIFICATIONS
          </span>
          <p>SnowPro Core · Full Stack Python Developer</p>
          <span>React Development · Backend API Development</span>
        </div>
      </div>
    </Container>
  );
}
