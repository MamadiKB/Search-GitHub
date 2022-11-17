import PropTypes from 'prop-types';
import './styles.scss';

function MoreButton({ loadMore }) {
  return (
    <div className="button__wrapper">
      <button className="button" type="button" onClick={loadMore}>Plus de résultats</button>
    </div>
  );
}

export default MoreButton;

MoreButton.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
