import deadLink from 'src/assets/images/DeadLink.png';
import './styles.scss';

function Error() {
  return (
    <div className="lost">
      <h1 className="lost__h1">404</h1>
      <p className="lost__p">It looks like you found a</p>
      <p className="lost__p">Dead Link</p>
      <img className="lost__img" src={deadLink} alt="404" />
    </div>
  );
}

export default Error;
