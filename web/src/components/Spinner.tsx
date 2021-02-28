import React, { Fragment } from 'react';
import spinner from './spinner.svg';

interface Props {
  width?: string;
}

const Spinner: React.FC<Props> = ({ width }) => (
  <Fragment>
    <img
      src={spinner}
      style={{
        width: width ? width : '64px',
        margin: 'auto',
        display: 'block',
        maxHeight: '100%',
      }}
      alt="Loading..."
    />
  </Fragment>
);

export default Spinner;
