import styled from 'styled-components';
export const Container = styled.div`
  width: calc(100% - 100px);
  max-width: 1220px;
  margin-inline: auto;
  @media (max-width: 1050px) {
    width: calc(100% - 60px);
  }
  @media (max-width: 760px) {
    width: calc(100% - 40px);
  }
`;
