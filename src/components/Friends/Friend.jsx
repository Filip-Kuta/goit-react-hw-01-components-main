import s from './Friends.module.css';
import PropTypes from 'prop-types';

const Friend = ({ isOnline, avatar, name }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;
