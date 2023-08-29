import { Hourglass } from 'react-loader-spinner';

import s from './Spinner.module.scss';

type SpinnerProps = {
  isVisible?: boolean;
};

export const Spinner = ({ isVisible = true }: SpinnerProps) => {
  return (
    isVisible && (
      <div className={s.spinnerWrapper}>
        <Hourglass
          visible={isVisible}
          height="80"
          width="80"
          ariaLabel="loading"
          wrapperClass={s.spinner}
          colors={['#306cce', '#72a1ed']}
        />
      </div>
    )
  );
};
