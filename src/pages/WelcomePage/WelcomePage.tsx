import { Link } from 'react-router-dom';
import { ROUTES } from 'src/routes/routes.const';

import s from './WelcomePage.module.scss';

const WelcomePage = () => {
  return (
    <div className={s.wrapper}>
      <h1>
        <span className={s.welcome}>Welcome to parcels organizer!</span>
        You can{' '}
        <Link className="link" to={ROUTES.REGISTER}>
          Join To Us
        </Link>{' '}
        and your parcels will be saved in your account or you can use{' '}
        <Link className="link" to={ROUTES.REQUESTS}>
          Demo-Version
        </Link>{' '}
        of the application with saving parcels in local storage
      </h1>
    </div>
  );
};

export default WelcomePage;
