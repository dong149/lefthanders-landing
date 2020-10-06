import React from 'react';
import '../styles/styles.scss';

const Divider = (props) => {
  const { title } = props;
  return <div className="divider">{title}</div>;
};

export default Divider;
