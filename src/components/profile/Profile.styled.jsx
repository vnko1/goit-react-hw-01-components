import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
`;

export const Description = styled.div`
  padding: 10px 0;
  background-color: #fff;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const Avatar = styled.img`
  margin: 0 auto 20px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  text-align: center;
  font-size: 19px;
  font-weight: 700;
`;

export const OptText = styled.p`
  margin-bottom: 10px;
  text-align: center;
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const Stat = styled.li`
  padding: 10px 0;
  background-color: whitesmoke;
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.span`
  margin-bottom: 5px;
  color: grey;
`;

export const Quantity = styled.span`
  font-size: 17px;
  font-weight: 700;
`;
