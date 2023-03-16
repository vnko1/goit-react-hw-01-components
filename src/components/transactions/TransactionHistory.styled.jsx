import styled from '@emotion/styled';

export const Table = styled.table`
  width: 600px;
  margin: 0 auto;
  border: 1px solid ${p => p.theme.colors.skyblue};
  background-color: ${p => p.theme.colors.white};
  border-radius: 5px;
  overflow: hidden;
`;

export const TitleText = styled.th`
  padding: 20px 0;
  background-color: ${p => p.theme.colors.teal};
`;

export const MainText = styled.td`
  padding: 10px 0;
  text-align: center;
`;

export const Row = styled.tr`
  &:nth-of-type(odd) {
    background-color: ${p => p.theme.colors.silver};
  }
`;
