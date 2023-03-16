import PropTypes from 'prop-types';

import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  OptText,
  Stats,
  Stat,
  Label,
  Quantity,
} from './Profile.styled';

export default function Profile({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" width="150" />
        <Name>{username}</Name>
        <OptText>@{tag}</OptText>
        <OptText>{location}</OptText>
      </Description>
      <Stats>
        <Stat>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Stat>
        <Stat>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Stat>
        <Stat>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Stat>
      </Stats>
    </ProfileCard>
  );
}
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
