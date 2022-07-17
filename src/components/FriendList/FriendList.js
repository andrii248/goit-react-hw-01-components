import PropTypes from 'prop-types'; // ES6
import css from './FriendList.module.css';
import { FriendItem } from './FriendsItem';

export const FriendList = ({ friends }) => {
   return (
      <ul className={css.friendsList}>
         {friends.map(({ id, name, avatar, isOnline }) => (
            <FriendItem
               key={id}
               name={name}
               avatar={avatar}
               isOnline={isOnline}
            />
         ))}
      </ul>
   );
};

FriendList.propTypes = {
   friends: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
      }).isRequired
   ).isRequired,
};
