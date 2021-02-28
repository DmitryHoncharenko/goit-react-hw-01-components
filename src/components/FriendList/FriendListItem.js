import React from 'react';
import PropTypes from 'prop-types';

// import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class="item">
      <span>{isOnline}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    
};


export default FriendListItem;
