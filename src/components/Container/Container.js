import s from './Container.module.css';
import PropTypes from 'prop-types';

function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

export default Container;

Container.propTypes = {
  children: PropTypes.array,
};
