import styled from 'styled-components';
const Label = styled.span`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.colors.accent};
`;
const Title = styled.h2<{ $size?: 'default' | 'large' }>`
  margin-top: 15px;
  font-size: ${({ $size }) => ($size === 'large' ? 'clamp(40px, 5vw, 65px)' : 'clamp(30px, 3.4vw, 46px)')};
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: ${({ $size }) => ($size === 'large' ? '-2px' : '-1.7px')};
  @media (max-width: 760px) {
    font-size: ${({ $size }) => ($size === 'large' ? '40px' : '30px')};
    letter-spacing: ${({ $size }) => ($size === 'large' ? '-2px' : '-1px')};
  }
`;
export function SectionHeading({
  label,
  children,
  className,
  size = 'default',
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'large';
}) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <Title $size={size}>{children}</Title>
    </div>
  );
}
