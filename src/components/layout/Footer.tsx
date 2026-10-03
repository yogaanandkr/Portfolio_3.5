import { profile } from '../../data/portfolio';
import { Container } from '../ui/Container';

export function Footer() {
  return (
    <Container
      as="footer"
      className="flex justify-between gap-5 border-t border-line py-7 text-[13px] text-muted [&>div]:flex [&>div]:gap-[25px] [&_a:hover]:text-accent max-[760px]:flex-col max-[760px]:gap-[15px] max-[760px]:[&>div]:justify-between "
    >
      <span>© {new Date().getFullYear()} Yoga Anand K R</span>
      <div>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="#">Back to top</a>
      </div>
    </Container>
  );
}
