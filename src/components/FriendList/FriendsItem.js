import css from './FriendList.module.css';
import PropTypes from 'prop-types'; // ES6

export const FriendItem = ({ name, avatar, isOnline }) => {
   return (
      <li className={css.item}>
         <span
            className={
               css.status + ' ' + (isOnline ? css.statusGreen : css.statusRed)
            }
         ></span>
         <img className="avatar" src={avatar} alt="User avatar" width="48" />
         <p className={css.name}>{name}</p>
      </li>
   );
};

FriendItem.propTypes = {
   name: PropTypes.string.isRequired,
   avatar: PropTypes.string.isRequired,
   isOnline: PropTypes.bool.isRequired,
};
