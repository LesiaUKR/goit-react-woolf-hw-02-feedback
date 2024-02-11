import styled from 'styled-components';

export const StatisticsList = styled.ul`
  font-weight: 600;
  font-size: 20px;
  margin-left: auto;
`;

export const StatisticsItems = styled.li`
  text-align: center;
  padding: 5px 0px;

  :hover {
    color: darkgreen;
    cursor: pointer;
    text-shadow: lightgreen 1px 0 10px;
  }
`;
