import PropTypes from 'prop-types';
import s from './Statistic.module.css';

const excludedColors = ["#FFFFFF", "#F0F0F0", "#E0E0E0"]; 

function getRandomHexColor() {
  let color;
  do {
    color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } while (excludedColors.includes(color));
  return color;
}




const Statistic = ({ title, data }) => {
  return (
    <section className={s.statistic}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statlist}>
        {data.map(({ id, label, percentage }) => (
          <li
            key={id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            className={s.item}
          >
            <span className={s.label}>{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistic.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default Statistic;
