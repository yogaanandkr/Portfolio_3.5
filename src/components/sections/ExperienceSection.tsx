import { useState } from 'react';
import { experiences } from '../../data/portfolio';
import { ExperienceCard } from './ExperienceCard';
import { SectionHeading } from '../ui/SectionHeading';
import { Container } from '../ui/Container';

export function ExperienceSection() {
  const [open, setOpen] = useState<string | null>('02');
  return (
    <Container
      as="section"
      id="experience"
      className="border-t border-line py-[75px] max-[760px]:py-[50px] "
    >
      <SectionHeading className="mb-[35px] reveal" label="01 / EXPERIENCE">
        Where I’ve made an impact.
      </SectionHeading>
      <div className="flex flex-col gap-[18px]">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.number}
            experience={experience}
            expanded={open === experience.number}
            onToggle={() =>
              setOpen((current) => (current === experience.number ? null : experience.number))
            }
          />
        ))}
      </div>
    </Container>
  );
}
