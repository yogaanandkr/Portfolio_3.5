import { useState } from 'react';
import { usePortfolioTheme } from '../../theme/PortfolioThemeProvider';
import { navigation, profile } from '../../data/portfolio';
import { Container } from '../ui/Container';

export function Header() {
  const [menu, setMenu] = useState(false);
  const { mode: theme, toggleTheme } = usePortfolioTheme();
  return (
    <Container
      as="header"
      className="flex h-[100px] items-center gap-6 border-b border-line max-[1050px]:gap-[14px] max-[760px]:h-[82px] max-[760px]:gap-[10px] "
    >
      <a
        className="mr-auto flex items-center gap-3 text-[16px] font-extrabold leading-[1.4] max-[760px]:gap-2 max-[760px]:text-[13px]"
        href="#"
        aria-label="Yoga Anand home"
      >
        <span className="grid size-[42px] place-items-center rounded-[10px] bg-action pr-[3px] text-[30px] tracking-[-3px] text-white max-[760px]:size-[34px] max-[760px]:text-[25px]">
          y.
        </span>
        <span>
          Yoga Anand
          <span className="block text-[12px] font-medium text-muted max-[760px]:text-[10px]">
            Frontend engineer
          </span>
        </span>
      </a>
      <nav
        className={`flex gap-[25px] text-[14px] font-semibold [&_a:hover]:text-accent max-[1050px]:gap-[15px] max-[760px]:absolute max-[760px]:inset-x-0 max-[760px]:top-[82px] max-[760px]:z-10 max-[760px]:justify-center max-[760px]:gap-[30px] max-[760px]:border-b max-[760px]:border-line max-[760px]:bg-surface max-[760px]:p-[22px] ${menu ? 'max-[760px]:flex' : 'max-[760px]:hidden'}`}
        id="main-navigation"
        aria-label="Main navigation"
      >
        {navigation.map((label) => (
          <a key={label} href={'#' + label.toLowerCase()} onClick={() => setMenu(false)}>
            {label}
          </a>
        ))}
      </nav>
      <button
        className="flex items-center gap-2 rounded-[7px] border border-line bg-surface px-[14px] py-[9px] text-[13px] font-semibold hover:border-accent [&>span:first-child]:text-[19px] [&>span:first-child]:leading-none max-[760px]:px-[9px] max-[760px]:py-[7px] max-[760px]:[&>span:last-child]:hidden"
        onClick={toggleTheme}
        aria-label={'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'}
      >
        <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
        <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
      </button>
      <a
        className="rounded-[7px] border border-line bg-surface px-[14px] py-[9px] text-[13px] font-semibold hover:border-accent max-[760px]:px-[9px] max-[760px]:py-[7px] max-[760px]:text-[11px]"
        href={profile.resume}
        download
      >
        Download résumé
      </a>
      <button
        className="hidden border-0 bg-transparent max-[760px]:block max-[760px]:p-[6px] max-[760px]:text-[12px]"
        aria-expanded={menu}
        aria-controls="main-navigation"
        aria-label="Toggle navigation"
        onClick={() => setMenu(!menu)}
      >
        {menu ? 'Close' : 'Menu'}
      </button>
    </Container>
  );
}
