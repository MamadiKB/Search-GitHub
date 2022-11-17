import PropTypes from 'prop-types';
import './styles.scss';

function SearchResult({ results }) {
  return (
    <div className="card__wrapper">
      {results.map((item) => (
        <div key={item.id} className="card">
          <div className="card__image">
            <img src={item.owner.avatar_url} alt="depot" />
          </div>
          <div className="card__content">
            <p className="card__content__title">{item.name}</p>
            <p className="card__content__meta">{item.owner.login}</p>
            {item.description !== null
              ? (
                <p className="card__content__description">
                  {item.description.length > 50 ? `${item.description.substring(0, 50)}...` : item.description}
                </p>
              )
              : (
                <p className="card__content__description" />
              )}

          </div>
        </div>
      ))};
    </div>
  );
}

export default SearchResult;

SearchResult.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};
