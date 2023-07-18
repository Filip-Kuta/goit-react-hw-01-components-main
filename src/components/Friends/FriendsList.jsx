import Friend from './Friend';
import PropTypes from 'prop-types';
function Friends({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
}

Friends.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default Friends;
