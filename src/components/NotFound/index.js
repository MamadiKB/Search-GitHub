import oupsImg from 'src/assets/images/moon-where-are-you.gif';
import './styles.scss';

function NotFound() {
  return (
    <div className="oups">
      <h1 className="oups__h1">Euuu...</h1>
      <img className="oups__img" src={oupsImg} alt="404" />
      <p className="oups__p">ouch ! no results</p>
    </div>
  );
}

export default NotFound;
