import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { profile } from '../../data/portfolio';

export function Hero() {
  return (
    <Container
      as="section"
      className="grid grid-cols-[1.55fr_1fr] items-center gap-[60px] py-[95px] max-[1050px]:gap-[35px] max-[760px]:grid-cols-1 max-[760px]:gap-10 max-[760px]:py-[50px] "
      aria-labelledby="hero-heading"
    >
      <div className="min-w-0">
        <p className="font-mono text-[12px] font-medium tracking-[1.5px] text-accent mb-5 animate-[rise_.6s_both] text-[11px]! text-muted max-[760px]:text-[9px]! max-[760px]:tracking-[1px]">
          FRONTEND DEVELOPER · BENGALURU, INDIA
        </p>
        <h1
          className="animate-[rise_.75s_.1s_both] text-[clamp(48px,5.65vw,82px)] font-extrabold leading-[1.08] tracking-[-4px] max-[760px]:text-[clamp(39px,10vw,68px)] max-[760px]:tracking-[-2.6px]"
          id="hero-heading"
        >
          Yoga Anand<span className="text-accent">.</span>
          <span className="mt-[15px] block text-[.57em] font-medium tracking-[-1.8px] text-accent max-[760px]:text-[.59em] max-[760px]:tracking-[-1px]">
            Interfaces with intent.
          </span>
        </h1>
        <p className="mt-[29px] max-w-[620px] animate-[rise_.75s_.2s_both] text-[16px] text-muted max-[760px]:mt-[25px]">
          I specialize in React and TypeScript, with hands-on experience building reusable UI
          components, integrating REST APIs, implementing authentication, and developing real-time
          features. My work includes Flipkart's Seller Dashboard, a full-stack Learning Management
          System, and enterprise automation tools.
        </p>
        <div className="mt-8 flex gap-[14px] animate-[rise_.75s_.3s_both] max-[760px]:[&>.button]:text-[13px]">
          <Button $mobileSize="small" $variant="primary" className="button" href="#experience">
            Explore experience
          </Button>
          <Button
            $mobileSize="small"
            $variant="secondary"
            className="button"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Button>
        </div>
      </div>
      <div
        className="overflow-hidden border-y border-line pb-[30px] pt-[35px] text-accent animate-[rise_1s_.25s_both] [&>span]:block [&>span]:animate-[float_6s_ease-in-out_infinite] [&>span]:text-[clamp(110px,16vw,230px)] [&>span]:font-extrabold [&>span]:leading-none [&>span]:tracking-[-.1em] [&>small]:mt-5 [&>small]:block [&>small]:font-mono [&>small]:text-[9px] [&>small]:tracking-[1px] [&>small]:text-muted max-[1050px]:[&>small]:text-[8px] max-[1050px]:[&>small]:tracking-normal max-[760px]:flex max-[760px]:flex-wrap max-[760px]:items-center max-[760px]:justify-between max-[760px]:gap-[15px] max-[760px]:py-[15px] max-[760px]:[&>span]:w-[40%] max-[760px]:[&>span]:text-[95px] max-[760px]:[&>small]:m-0 max-[760px]:[&>small]:w-full max-[760px]:[&>small]:text-[9px]"
        aria-hidden="true"
      >
        <span>YA</span>
        <div className="mt-5 h-[2px] w-[65%] origin-left animate-[lineGrow_1s_.4s_both] bg-accent max-[760px]:m-0 max-[760px]:w-[45%]" />
        <small>ENGINEERING / INTERFACES / INTEGRATIONS</small>
      </div>
    </Container>
  );
}
