import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils';

export const Section = styled.section`
  padding-top: 20px;
`;

export const SectionContainer = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 0 0;
  background-color: ${p => p.theme.colors.white};
  border-radius: 5px;
  overflow: hidden;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 17px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const StatItem = styled.li`
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${getRandomHexColor};
  width: ${({ items }) => `${(100 / 100 / items.length) * 1000}px`};
`;
