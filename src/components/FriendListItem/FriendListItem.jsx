import clsx from 'clsx';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, status }) => {
  return (
    <div className={css.listItem}>
      <img className={css.itemImg} src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={clsx(css.itemText, status ? css.isOnline : css.isOffline)}>
        {status ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FriendListItem;