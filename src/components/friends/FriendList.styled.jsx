import styled from '@emotion/styled';

export const Friends = styled.ul`
  width: 300px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    if (status) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;

export const Img = styled.img`
  margin-left: 10px;
  margin-right: 20px;
`;
