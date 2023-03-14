import PropTypes from 'prop-types';

export default function FrendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className="item" key={id}>
      <span className="status" status={isOnline}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
console.log(Error);
