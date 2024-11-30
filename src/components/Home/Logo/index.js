import LogoAS from '../../../assets/images/logo-as.png';
import './index.scss';

const Logo = () => {

  return (
    <div className="logo-container">
      <img className="solid-logo animate" src={LogoAS} alt="JavaScript, Developer" />
    </div>
  );
};

export default Logo;
