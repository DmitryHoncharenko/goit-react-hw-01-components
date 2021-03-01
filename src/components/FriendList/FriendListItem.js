import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';
// import PropTypes from 'prop-types';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id}>
      <span className={s.status}>{isOnline}</span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  id: undefined,
};

FriendListItem.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
