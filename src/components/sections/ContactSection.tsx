import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { profile } from '../../data/portfolio';
import { useClipboard } from '../../hooks/useClipboard';
import { SectionHeading } from '../ui/SectionHeading';

export function ContactSection() {
  const { copied, copy } = useClipboard();
  return (
    <Container
      as="section"
      id="contact"
      className="flex items-center justify-between gap-10 border-t border-line py-[70px] [&_h2]:text-[clamp(40px,5vw,65px)] [&_h2]:tracking-[-2px] [&_p]:mt-[23px] [&_p]:text-muted max-[760px]:py-[50px] max-[760px]:[&_h2]:text-[40px]  reveal"
    >
      <div>
        <SectionHeading size="large" label="03 / CONTACT">
          Have a role in mind?
          <br />
          Let’s talk.
        </SectionHeading>
        <p>Available for immediate joining.</p>
        <div className="mt-[25px] flex items-center gap-[22px] max-[760px]:gap-[17px] max-[760px]:[&>.button]:px-[18px] max-[760px]:[&>.button]:py-3">
          <Button
            $mobileSize="compact"
            $variant="primary"
            className="button"
            href={`mailto:${profile.email}`}
          >
            Email me
          </Button>
          <button
            className="border-0 bg-transparent py-2 text-[14px] text-accent underline max-[760px]:text-[12px]"
            onClick={() => copy(profile.email)}
            aria-live="polite"
          >
            {copied ? 'Email copied!' : 'Copy email address'}
          </button>
        </div>
        <a
          className="mt-5 inline-block text-[16px] text-muted max-[760px]:text-[14px]"
          href={`mailto:${profile.email}`}
        >
          {profile.email}
        </a>
      </div>
      <div className="max-[760px]:hidden">
        <span
          className="inline-block animate-[spin_40s_linear_infinite] text-[170px] leading-none text-accent"
          aria-hidden="true"
        >
          ✳
        </span>
      </div>
    </Container>
  );
}
