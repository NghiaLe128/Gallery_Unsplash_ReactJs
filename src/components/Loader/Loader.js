import React from 'react';
import { Loading } from '../../styles/Loader.styles';

export const Loader = () => {
  return (
    <Loading>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Loading>
  );
};
