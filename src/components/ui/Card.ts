import styled from 'styled-components';
export const Card = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.surface};
`;
