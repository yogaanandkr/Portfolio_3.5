import styled from 'styled-components';
export const Button = styled.a<{
  $variant?: 'primary' | 'secondary';
  $mobileSize?: 'small' | 'compact';
}>`
  display: inline-block;
  padding: 13px 21px;
  border: 1px solid
    ${({ theme, $variant }) => ($variant === 'primary' ? theme.colors.action : theme.colors.border)};
  border-radius: 7px;
  background: ${({ theme, $variant }) => ($variant === 'primary' ? theme.colors.action : theme.colors.surface)};
  color: ${({ theme, $variant }) => ($variant === 'primary' ? '#fff' : theme.colors.text)};
  font-size: 14px;
  font-weight: 700;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  @media (max-width: 760px) {
    font-size: ${({ $mobileSize }) => ($mobileSize === 'small' ? '13px' : '14px')};
    padding: ${({ $mobileSize }) => ($mobileSize === 'compact' ? '12px 18px' : '13px 21px')};
  }
  &:hover {
    transform: translateY(-3px);
  }
`;
