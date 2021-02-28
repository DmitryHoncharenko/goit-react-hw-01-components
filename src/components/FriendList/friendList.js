import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(el => {
        const { avatar, name, isOnline } = el;
        return (
          <FriendListItem
            key={el.id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
}

export default FriendList;
